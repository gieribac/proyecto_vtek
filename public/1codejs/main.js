import {onAuthStateChanged, getAuth} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {page} from "./router.js";
import {auth} from './firebase.js';
import {loguearse}  from "./index.js";
import {index} from "./pages.js";
import{readUser} from "./models/post.js"


window.addEventListener('DOMContentLoaded',(e)=> {
    try {
        if (Boolean(localStorage.getItem('em'))) {
            rini();
        } else {
            window.history.pushState({}, document.title, window.location.pathname); 
            document.getElementById('root').innerHTML = index;
            loguearse();
        }            
    } catch(e){
            console.log(e)
            window.history.pushState({}, document.title, window.location.pathname); 
            document.getElementById('root').innerHTML = index;
            loguearse();
    }
});
 
const rini = () => {
    if (location.hash == ""){
        document.getElementById('root').innerHTML = index;
        loguearse();
    } else {
        page(location.hash);
    }
}

//validar formulario de login
export const validarlogin = (correo, clave) => {
    const valcorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(correo);
    const valclave = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(clave); //digitos, almenos una mayuscula, almenos una minuscula
    return valcorreo && valclave;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        const b2 = localStorage.getItem('b2');
        if (b2 == undefined) {
            window.history.pushState({}, document.title, window.location.pathname); 
                // document.getElementById('root').innerHTML = index;
                loguearse();
        } else {
            localStorage.removeItem('b2');    
        }
    }        
});
