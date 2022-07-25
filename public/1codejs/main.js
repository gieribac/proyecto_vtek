import {signInWithEmailAndPassword,onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {readUser} from "./models/post.js";
import {auth} from './firebase.js';
const user_ = auth.currentUser;

// signOut(auth).then(() => {
//     if (user_) {
//         console.log("autenticado");
//         console.log(user_);
//       }else {
//           console.log("no autenticado");
//       }
// }).catch((error) => {
//     console.log(error.messaje);
// });
    

    // if (window.hash===''){
    //     signOut(auth).then(() => {
    //         console.log('desautenticado');
    //     }).catch((error) => {
    //         console.log(error.messaje);
    //     });

    // }

// window.addEventListener('hashchange',()=>{console.log(window.location.hash)})



// window.addEventListener('hashchange',()=>{console.log(window.location.hash)})
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




    //validar formulario de login
export const validarlogin = (correo, clave) => {
    const valcorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(correo);
    const valclave = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(clave); //digitos, almenos una mayuscula, almenos una minuscula
    return valcorreo && valclave;
}
// if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(contrasenaF) &&  contrasenaF===recontrasenaF) {
//     saveF.addEventListener('click', () => {
//         newUser(correoF, contrasenaF, nombreF, usuarioF, numeroF, identificacionF, tipoIDF,  cargocliF, saveF);
//       });
// }

//validar formulario de crear usuario
// export const validarFormCrearUsu = (nombreResp,correo, nombreUsu, numeroContacto, ident, clave,reclave) => {
//     const valcorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(correo);
//     const valreclave = clave === reclave;
//     const valclave = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(clave);//digitos, almenos una mayuscula, almenos una minuscula
//     const valnombreResp = /^[a-zA-ZÀ-ÿ\s]{4,50}$/.test(nombreResp);// Letras y espacios, pueden llevar tildes.
//     const valnombreUsu = /^[a-zA-Z0-9\_\-]{4,16}$/.test(nombreUsu);// Letras, numeros, guion y guion_bajo
//     const valnumeroContacto = /^\d{7,14}$/.test(numeroContacto);// 7 a 14 digitos
//     const valident = /^\d{7,10}$/.test(ident);// 7 a 10 digitos
//     return valcorreo && valclave;
// }

