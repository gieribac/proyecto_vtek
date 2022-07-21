import {readUser} from "./models/post.js";
import {auth} from './firebase.js';
import {index,
    admin_default, admin_infooffer, admin_infooffers, admin_infoclients, admin_createuser, logout, 
    cliente_default, cliente_offer, 
    comercial_default, comercial_infoclientes, comercial_infocerts, comercial_infooffers, comercial_editcliente, 
    comercial_createcliente, comercial_createfactorie, comercial_infoofer,
    dtecnico_default, dtecnico_planeval, dtecnico_infoclient, dtecnico_infoprocesos,
    experto_default, experto_createoffer, experto_createeval, experto_paleval, experto_infocliente,
    scliente_default, scliente_infooffers, scliente_infooffer, scliente_certcliente, scliente_usuariocliente, scliente_infoclientes,
    tcoordinador_default, tcoordinador_createasignacion, tcoordinador_asignacion
} from "./pages.js";

window.addEventListener('hashchange',()=>{ //se escucha que el hash ha cambiado

    if (auth.currentUser) { //se serciora que el usuario este autenticado
        const inner = (hashp,chtml) => {//se serciora que cada rol este accediendo a sus paginas correspondientes solamente
            readUser().then(data => {   
                if (hashp===data.Cargo){
                    document.getElementById('root').innerHTML = chtml;
                } else {
                    document.getElementById('root').textContent = 'no tiene permiso para su rol';
                }
            })
        }
  
        const page = (h) => {
            if (h==''){() => document.getElementById('root').innerHTML = index;}
            else if (h=='#/admin'){inner('admin',admin_default);}
            else if (h=='#/admin/createuser'){inner('admin',admin_createuser);}
            else if (h=='#/admin/infooffer'){inner('admin',admin_infooffer)}
            else if (h=='#/admin/infooffer'){inner('admin',admin_infooffers);}
            else if (h=='#/admin/infooffers'){inner('admin',admin_infooffers);}
            else if (h=='#/admin/infoclients'){inner('admin',admin_infoclients);}
            else if (h=='#/admin/logout'){inner('admin',logout);}
            else if (h=='#/cliente'){inner('cliente',cliente_default);}
            else if (h=='#/cliente/offer'){inner('cliente',cliente_offer);}
            else if (h=='#/cliente/logout'){inner('cliente',logout);}
            else if (h=='#/comercial'){inner('comercial',comercial_default);}
            else if (h=='#/comercial/infoclientes'){inner('comercial',comercial_infoclientes);}
            else if (h=='#/comercial/inforcerts'){inner('comercial',comercial_infocerts);}
            else if (h=='#/comercial/infooffers'){inner('comercial',comercial_infooffers);}
            else if (h=='#/comercial/editcliente'){inner('comercial',comercial_editcliente);}
            else if (h=='#/comercial/createcliente'){inner('comercial',comercial_createcliente);}
            else if (h=='#/comercial/createfactorie'){inner('comercial',comercial_createfactorie);}
            else if (h=='#/comercial/infoofer'){inner('comercial',comercial_infoofer);}
            else if (h=='#/comercial/logout'){inner('comercial',logout);}
            else if (h=='#/dtecnico'){inner('dtecnico',dtecnico_default);}
            else if (h=='#/dtecnico/planeval'){inner('dtecnico',dtecnico_planeval);}
            else if (h=='#/dtecnico/infoclient'){inner('dtecnico',dtecnico_infoclient);}
            else if (h=='#/dtecnico/infoprocesos'){inner('dtecnico',dtecnico_infoprocesos);}
            else if (h=='#/dtecnico/logout'){inner('dtecnico',logout);}
            else if (h=='#/experto'){inner('experto',experto_default);}
            else if (h=='#/experto/createoffer'){inner('experto',experto_createoffer);}
            else if (h=='#/experto/createeval'){inner('experto',experto_createeval);}
            else if (h=='#/experto/paleval'){inner('experto',experto_paleval);}
            else if (h=='#/experto/infocliente'){inner('experto',experto_infocliente);}
            else if (h=='#/experto/logout'){inner('experto',logout);}
            else if (h=='#/scliente'){inner('scliente',scliente_default);}
            else if (h=='#/scliente/infooffers'){inner('scliente',scliente_infooffers);}
            else if (h=='#/scliente/infooffer'){inner('scliente',scliente_infooffer);}
            else if (h=='#/scliente/certcliente'){inner('scliente',scliente_certcliente);}
            else if (h=='#/scliente/usuariocliente'){inner('scliente',scliente_usuariocliente);}
            else if (h=='#/scliente/infoclientes'){inner('scliente',scliente_infoclientes);}
            else if (h=='#/scliente/logout'){inner('scliente',logout);}
            else if (h=='#/tcoordinador'){inner('tcoordinador',tcoordinador_default);}
            else if (h=='#/tcoordinador/createasignacion'){inner('tcoordinador',tcoordinador_createasignacion);}
            else if (h=='#/tcoordinador/asignacion'){inner('tcoordinador',tcoordinador_asignacion);}
            else if (h=='#/tcoordinador/logout'){inner('tcoordinador',logout);}
            else { () => document.getElementById('root').textContent = 'notFound';}
        }
        page(window.location.hash);    
    } else {
        console.log("no autenticado");
    }
    
})













  






