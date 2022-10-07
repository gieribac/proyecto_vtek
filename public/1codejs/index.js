import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { readUser } from "./models/post.js";
import { auth } from './firebase.js';
import { validarlogin } from './main.js';
import './admin_infoclients.js';
import './comercial_infoclients.js';
import "https://kit.fontawesome.com/5060f102e7.js";
import './comercial_createcliente.js';
import './comercial_editcliente.js';
import './comercial_detallecliente.js';
import '../node_modules/sweetalert2/dist/sweetalert2.js'
import './comercial_createoffer.js';
import './comercial_infooffers.js';
import './comercial_createfactorie.js';
import './tcoordinador_infooffers.js';
import './tcoordinador_createasignacion.js';
import './plantillapdf.js';
import '../../node_modules/flatpickr/dist/flatpickr.js';
import './experto_createoffer.js';
import './experto_createeval.js';

// import './models/pruebacloudfunctions.js';

//documento de resoluciones: ofertas id VvJziqtMHCUHg2k2bnZo. para consultar resolucion hace falta utilizar el producto (cambiando espacios, puntos y "-" por "_")
const setLC = (co, cl, u, rol, n) => {
    localStorage.setItem("em", co);
    localStorage.setItem("k", cl);
    localStorage.setItem("u", u);
    localStorage.setItem("rol", rol);
    localStorage.setItem("noDoc", n);

}

export const loguearse = () => {
    document.getElementById('login').addEventListener('click', () => {
        const correo = document.getElementById('correo').value;
        const clave = document.getElementById('contrasena').value;
        if (validarlogin(correo, clave)) {
            const result = signInWithEmailAndPassword(auth, correo, clave)
                .then((userCredential) => {
                    const user = userCredential.user;
                    readUser().then(data => {
                        const rol = data.Cargo;
                        const n = data.NoIdentificacion;
                        window.location.hash = `/${rol}`;
                        setLC(correo, clave, user.uid, rol, n);
                    })
                })
                .catch((error) => {
                    alert(error.messaje);
                });
        } else {
            alert('correo o clave invalidos')
        }
    })
}   