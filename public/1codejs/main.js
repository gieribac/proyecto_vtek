import {signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {readUser} from "./models/post.js";
import {auth} from './firebase.js';
// para logueo




window.addEventListener('hashchange',()=>{console.log(window.location.hash)})

    document.getElementById('login').addEventListener('click', () => {
        const result = signInWithEmailAndPassword(auth, document.getElementById('correo').value, document.getElementById('contrasena').value)
            .then((userCredential) => {
                const user = userCredential.user;
                readUser();
                //devolver rol;
            })
            .catch((error) => {
                console.log(error.messaje);
            });
    })


    //si rol == comercial hacer innerhtml correspondiente
    
// const user_ = auth.currentUser;
// if (user_) {
//     console.log("autenticado");
//     readUser();
// }else {
//     console.log("no autenticado");
// }

  // para deslogueo
//   signOut(auth).then(() => {
  
//   }).catch((error) => {
//       console.log(error.messaje);
//   })

// document.getElementById('SignOff').addEventListener('click', () => {
// signOut(auth).then(() => {
// }).catch((error) => {
// console.log(error.messaje);
// })
// })
// const user_ = auth.currentUser;

//     if (user_) {
//       console.log("autenticado");
//       console.log(user_);
//     }else {
//         console.log("no autenticado");
//     }

