import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {page} from "./router.js";
import {auth} from './firebase.js';
import {loguearse}  from "./index.js";
import {index} from "./pages.js";
import{readUser} from "./models/post.js"

window.addEventListener('DOMContentLoaded',(e)=> {
    
    // onAuthStateChanged(auth, (user) => {
    //     console.log(user    )
        // Boolean(user) ? console.log(`usuario: ${user.data()}`) : {};
        // readUser().then(data => {
        //     const rol = data.Cargo;
        //     console.log(`${rol}`)
        // })
        // if (user) {
        //     page(location.hash);
        // } else { 
            window.history.pushState({}, document.title, window.location.pathname);
            document.getElementById('root').innerHTML = index; 
            loguearse();

            
            // try {

            //     Boolean(localStorage.getItem('em')) ? page(location.hash) : ()=>{
            //         window.history.pushState({}, document.title, window.location.pathname);
            //         document.getElementById('root').innerHTML = index; 
            //         loguearse();
            //     };
                      
            // }
            // catch(e){
            //     console.log(e)
            //     window.history.pushState({}, document.title, window.location.pathname);
            //     document.getElementById('root').innerHTML = index; 
            //     loguearse();

            // }
        // } 
            
    //   });
});
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

