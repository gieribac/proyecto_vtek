import './style.css';
import {savePost, loadPosts} from './models/post.js';
import {uploadImage,getImageURL } from './storage.js';
import {GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication

import {auth} from './firebase.js';


const postForm = document.getElementById('postForm');
window.addEventListener('DOMContentLoaded', async()=> {
  const posts = await loadPosts();
  const postsList = document.getElementById('posts');

  posts.forEach(post => {
    postsList.innerHTML += `
    
    <li>
    ${post.content}
    <img src="${post.image ? post.image : ''}" alt =""/>
    </li>
    `;
  });
});


postForm.addEventListener('submit', async e => {
  e.preventDefault();

  const inputFile = document.getElementById('image');

  let post = {
    content: postForm['content'].value
  }

  if (inputFile.files[0]){
    const result = await uploadImage(inputFile.files[0]);
    const url = await getImageURL(result.ref);
    console.log(url);
    post.image = url;
  }

  savePost(post);
})

const googleLogin = document.getElementById('googleLogin')

googleLogin.addEventListener('click', async ()=>{
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth,provider);
  console.log(result);
})
