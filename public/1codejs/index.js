import {signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {readUser} from "./models/post.js";
import {auth} from './firebase.js';
import {validarlogin} from './main.js';
import './admin_infoclients.js'
import './comercial_infoclients.js'
import "https://kit.fontawesome.com/5060f102e7.js";
import './comercial_createcliente.js'
import './comercial_createfactorie'
import './comercial_createoffer'
import './comercial_infoclients'
import './comercial_infooffers'
import './'

const setLC = (co,cl,u,rol) => {
    localStorage.setItem("em",co);
    localStorage.setItem("k",cl);
    localStorage.setItem("u",u);
    localStorage.setItem("rol",rol);
}

export const loguearse = () => {        
        document.getElementById('login').addEventListener('click', () => {            
            const correo = document.getElementById('correo').value;
            const clave = document.getElementById('contrasena').value;
            if (validarlogin(correo, clave) ) {            
                const result = signInWithEmailAndPassword(auth,correo,clave)
                .then((userCredential) => {
                    const user = userCredential.user;
                    readUser().then(data => {
                        const rol = data.Cargo;
                        window.location.hash = `/${rol}`;
                        setLC(correo, clave, user.uid,rol);
                    })
                })
                .catch((error) => {
                    alert(error.messaje);
                });
            }else {
                alert ('correo o clave invalidos')
            }                
        })        
}   

