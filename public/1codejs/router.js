import {signOut, getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"
import {readUser} from "./models/post.js";
import {auth} from './firebase.js';
import {loguearse} from './index.js';
import {index,
    admin_default, admin_infooffer, admin_infooffers, admin_infoclients, admin_createuser,  
    cliente_default, cliente_offer, 
    comercial_default, comercial_infoclientes, comercial_infocerts, comercial_infooffers, comercial_editcliente, 
    comercial_createcliente, comercial_createfactorie, comercial_createoffer, 
    dtecnico_default, dtecnico_planeval, dtecnico_infoclient, dtecnico_infoprocesos,
    experto_default, experto_createoffer, experto_createeval, experto_paleval, experto_infocliente,
    scliente_default, scliente_infooffers, scliente_infooffer, scliente_certcliente, scliente_usuariocliente, scliente_infoclientes,
    tcoordinador_default, tcoordinador_createasignacion, tcoordinador_asignacion
} from "./pages.js";
const cerrarSession = () => {
           
    signOut(auth).then(() => {
        localStorage.removeItem("em");
        localStorage.removeItem("k");
        localStorage.removeItem("u"); 
        localStorage.removeItem("rol");  
        window.location="";  
        
    }).catch((error) => {
        console.log(error.messaje);
    });
}
// cerrarSession();
window.addEventListener('hashchange',()=>{ //se escucha que el hash ha cambiado
// onAuthStateChanged(auth, (user) => {
//     console.log(`user uid ${user.uid}`)
//   if (user.uid==localStorage.getItem("u")) {
//       console.log("autenticado")
//       console.log(window.location.hash)
//        page(window.location.hash)

//   } else {
//       console.log('no logueado ._.')
//   } 
console.log("el hash cambia")
page(window.location.hash)
})
// });
export const page = (h) => {

    const inner = (hashp,chtml) => {//se serciora que cada rol este accediendo a sus paginas correspondientes solamente
        // try {localStorare.getItem("em");}
        // readUser().then(data => {   
            if (hashp==localStorage.getItem("rol")){
                document.getElementById('root').innerHTML = chtml;
            } else {
                document.getElementById('root').textContent = 'no tiene permiso para su rol';
            }
        // })
    }

    if (h=='#/admin'){inner('admin',admin_default)}
    else if (h=='#/admin/createuser'){inner('admin',admin_createuser)}
    else if (h=='#/admin/infooffer'){inner('admin',admin_infooffer)}
    else if (h=='#/admin/infooffers'){inner('admin',admin_infooffers)}
    else if (h=='#/admin/infoclients'){inner('admin',admin_infoclients)}
    else if (h=='#/cliente'){inner('cliente',cliente_default)}
    else if (h=='#/cliente/offer'){inner('cliente',cliente_offer)}
    else if (h=='#/comercial'){inner('comercial',comercial_default)}
    else if (h=='#/comercial/infoclientes'){inner('comercial',comercial_infoclientes)}
    else if (h=='#/comercial/inforcerts'){inner('comercial',comercial_infocerts)}
    else if (h=='#/comercial/infooffers'){inner('comercial',comercial_infooffers)}
    else if (h=='#/comercial/editcliente'){inner('comercial',comercial_editcliente)}
    else if (h=='#/comercial/createcliente'){inner('comercial',comercial_createcliente)}
    else if (h=='#/comercial/createfactorie'){inner('comercial',comercial_createfactorie)}
    else if (h=='#/comercial/createoffer'){inner('comercial',comercial_createoffer)}
    else if (h=='#/dtecnico'){inner('dtecnico',dtecnico_default)}
    else if (h=='#/dtecnico/planeval'){inner('dtecnico',dtecnico_planeval)}
    else if (h=='#/dtecnico/infoclient'){inner('dtecnico',dtecnico_infoclient)}
    else if (h=='#/dtecnico/infoprocesos'){inner('dtecnico',dtecnico_infoprocesos)}
    else if (h=='#/experto'){inner('experto',experto_default)}
    else if (h=='#/experto/createoffer'){inner('experto',experto_createoffer)}
    else if (h=='#/experto/createeval'){inner('experto',experto_createeval)}
    else if (h=='#/experto/paleval'){inner('experto',experto_paleval)}
    else if (h=='#/experto/infocliente'){inner('experto',experto_infocliente)}
    else if (h=='#/scliente'){inner('scliente',scliente_default)}
    else if (h=='#/scliente/infooffers'){inner('scliente',scliente_infooffers)}
    else if (h=='#/scliente/infooffer'){inner('scliente',scliente_infooffer)}
    else if (h=='#/scliente/certcliente'){inner('scliente',scliente_certcliente)}
    else if (h=='#/scliente/usuariocliente'){inner('scliente',scliente_usuariocliente)}
    else if (h=='#/scliente/infoclientes'){inner('scliente',scliente_infoclientes)}
    else if (h=='#/tcoordinador'){inner('tcoordinador',tcoordinador_default)}
    else if (h=='#/tcoordinador/createasignacion'){inner('tcoordinador',tcoordinador_createasignacion)}
    else if (h=='#/tcoordinador/asignacion'){inner('tcoordinador',tcoordinador_asignacion)}
    else if (h==''){() => window.location = ''}
    else if (h=='#cs'){cerrarSession()}
    else { document.getElementById('root').textContent = 'notFound'}
}











  






