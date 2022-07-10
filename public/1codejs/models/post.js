//archivo encargado de ejecutar publicaciones a firestore

import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication
import {collection, addDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"; //Firestore Database
import { db } from '../firebase.js';

export const savePost = async(post) => {
    return await addDoc(collection(db, "posts"), post);
}

export const loadPosts = async() => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const posts = querySnapshot.docs.map(doc => doc.data().tipo);
    return posts;
}
//para crear un usuario
export const newUser = async(correo, clave, nombreResposable, nombreUsu, numero, identificacion, tipoidentififcacion, cargo)=> {
    createUserWithEmailAndPassword(auth, correo, clave)
        .then((userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {                
                nombreResposable,
                correo,
                nombreUsu,
                numero,
                identificacion,
                tipoidentififcacion,
                cargo
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}