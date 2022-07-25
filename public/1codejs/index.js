import {signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {readUser} from "./models/post.js";
import {auth} from './firebase.js';
import {validarlogin} from './main.js';
// import "./menu.js";


// var hash_ = null;
//     window.onload = () => {
//         window.location.hash = '/';
//     }
// window.addEventListener('hashchange',()=>{
//     console.log(window.location.hash);
//     if (window.location.hash=='#/'){
//         console.log("aqui")
        document.getElementById('login').addEventListener('click', () => {
            const correo = document.getElementById('correo').value;
            const clave = document.getElementById('contrasena').value;
            if (validarlogin(correo, clave) ) {            
                const result = signInWithEmailAndPassword(auth,correo,clave)
                .then((userCredential) => {
                    const user = userCredential.user;
                    readUser().then(data => {
                        const rol = data.Cargo;
                        //document.getElementById("container").innerHTML = eval(rol).home;
                        window.location.hash = `/${rol}`;
                    })
                })
                .catch((error) => {
                    alert(error.messaje);
                });
            }else {
                alert ('correo o clave invalidos')
            }
                
        })
        
            
//     }

// })


// class role {
//     constructor (homerol){
//         this.homerol = homerol;
//     }
// }
// const tcoordinador = new role (`<div>Técnico Coordinador</div>`);
// const dtecnico = new role (`<div>Director Técnico</div>`);
// const experto = new role (`<div>Experto</div>`);
// const admin = new role (`<div>Nombre del administrador</div>`);
// const cliente = new role (`<div>Cliente</div>`);
// const scliente = new role (`<div>Servicio al cliente</div>`);
// const comercial = new role (`<div>Comercial</div>`);

//si el usuario activo intenta entrar a un ash diferente a su rol o al index, cerrar sesion


// if (auth.currentUser) {
//     console.log("autenticado");
//     readUser();
// }else {
//     console.log("no autenticado");
//     document.getElementById("container").innerHTML = index_
// }

// class role {
//     constructor (home){
//         this.home = home;
//     }
// }
// const tcoordinador = new role (`<div>Técnico Coordinador</div>
// <h1>Convertidor de URLs</h1>
//     <button id="f1"> De barra inversa a barra </button>
//     <button id="f2"> De barra a barra inversa </button>
//     <script src="tcoordinador_home.js"></script>
// `);
// const dtecnico = new role (`<div>Director Técnico</div>`);
// const experto = new role (`<div>Experto</div>`);
// const admin = new role (`<div>Nombre del administrador</div>`);
// const cliente = new role (`<div>Cliente</div>`);
// const scliente = new role (`<div>Servicio al cliente</div>`);
// const comercial = new role (`<div>Comercial</div>`);

// const index_=`<div class="fondo1"></div>
// <div class="fondo2"></div>
// <div class="logo"> </div>
// <div id="formulario">
//     <div>
//         <h5 class="letrab">inicio de sesión</h5>
//     </div>
//     <div class="input-group mb-3">
//         <input type="text" id="correo" class="form-control inputsr" placeholder="usuario" aria-label="usuario" aria-describedby="basic-addon1" style="
//         margin-bottom: 7px; margin-top: 7px;">
//     </div>
//     <input type="text" id="contrasena" class="form-control inputsr" placeholder="contraseñas" aria-label="contraseña" aria-describedby="basic-addon1" style="margin-bottom: 7px">
//     <div class="botones">
//         <div>
//             <button id="login" type="button" class="btn btningresar1"> <h6 class="letrabtn">ingresar</h6></button>
//         </div>
//     </div>
// </div>
// </div>
// </div>
// `