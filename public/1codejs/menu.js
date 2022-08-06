const observermenu = new MutationObserver(()=>{ 
    if (Boolean(document.getElementById('menu')) && document.getElementById('menu').childElementCount < 1){
        const menus = {
            admin:  `<div id="sidebar-container">
                <div class="logov">
        
                </div>
                <div class="menu">
                    <a href="#/admin/infooffer" class="d-block text-light p-3 mr menuopciones  ">
                        <div class="bola-blanco">
                            <div class="check-azul"></div>
                        </div>
                    </a>
                    <a href="#/admin/infoclients" class="d-block text-light p-3 menuopciones ">
                        <div class="bola-blanco">
                            <div class="persona-azul"></div>
                        </div>
                    </a>
                    <a href="#/admin/createuser" class="d-block text-light p-3 menuopciones ">
                        <div class="bola-blanco">
                            <div class="mas-azul"></div>
                        </div>
                    </a>
                    <a href="#/admin" class="d-block text-light p-3 menuopciones ">
                        <div class="bola-blanco">
                            <div class="casa-azul"></div>
                        </div>
                    </a>
                    <a id="on" class="d-block text-light p-3 menuopciones">
                        <div class="bola-blanco puntero">
                            <div class="on-azul"></div>
                        </div>
                    </a>
                    <div class="si_no desaparece" id= "si_no">
                    
                    <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">No</h6> </a></div>
                    </div>
                </div>
            </div>`,
            cliente: `<div id="sidebar-container">
            <div class="logov"></div>
            <div class="menu">
                <a href="#/cliente/offer" class="d-block text-light p-3 mr menuopciones ">
                    <div class="bola-blanco">
                        <div class="check-azul"></div>
                    </div>
                </a>
                <a href="#/cliente" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="casa-azul"></div>
                    </div>
                </a>
                <a href="#" id="on" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="on-azul"></div>
                    </div>
                </a>
                <div class="si_no desaparece" id= "si_no">
                
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
            </div> 
            </div>`,
            comercial: `<div id="sidebar-container">
            <div class="logov">            
            </div>
            <div class="menu">
                <a href="#/comercial/createcliente" class="d-block text-light p-2 menuopciones">
                    <div class="bola-blanco">
                        <div class="mas-azul"></div>
                    </div>
                </a>
            
                    <a href="#/comercial/createfactorie" class="d-block text-light p-2 menuopciones">
                    <div class="bola-blanco">
                        <div class="estrella-azul"></div>
                    </div>
                </a>          
                <a href="#/comercial/infooffers" class="d-block text-light p-2 mr menuopciones ">
                    <div class="bola-blanco">
                        <div class="check-azul"></div>
                    </div>
                </a>
                <a href="#/comercial/infoclientes" class="d-block text-light p-2 menuopciones">
                    <div class="bola-blanco">
                        <div class="persona-azul"></div>
                    </div>
                </a>
                    <a href="#/comercial" class="d-block text-light p-2 menuopciones">
                    <div class="bola-blanco">
                        <div class="audifonos-azul"></div>
                    </div>
                </a>           
                <a href="#" id="on" class="d-block text-light p-2 menuopciones">
                    <div class="bola-blanco">
                        <div class="on-azul"></div>
                    </div>
                </a>
                <div class="si_no_comercial desaparece" id= "si_no">
                
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                </div>
                </div>`,
            dtecnico: `<div id="sidebar-container">
            <div class="logov">
            </div>
            <div class="menu">            
                <a href="#" class="d-block text-light p-3 mr menuopciones ">
                    <div class="bola-blanco">
                        <div class="campana-azul"></div>
                    </div>
                </a>
                <a href="#" class="d-block text-light p-3 mr menuopciones ">
                    <div class="bola-blanco">
                        <div class="check-azul"></div>
                    </div>
                </a>
            
                <a href="#" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="casa-azul"></div>
                    </div>
                </a>
                <a href="#" id="on" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="on-azul"></div>
                    </div>
                </a>
                <div class="si_no desaparece" id= "si_no">                
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                </div>
                </div>`,
            experto: `<div id="sidebar-container">
            <div class="logov">
            </div>
            <div class="menu">
            <a href="#" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="mas-azul"></div>
                    </div>
                </a>
                <a href="#/experto/infocliente" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="persona-azul"></div>
                    </div>
                </a>
                <a href="#/experto" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="casa-azul"></div>
                    </div>
                </a>
                <a href="#" id="on" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="on-azul"></div>
                    </div>
                </a>
                <div class="si_no desaparece" id= "si_no">
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                </div>
                </div>`,
            scliente: `<div id="sidebar-container">
            <div class="logov">
            </div>
            <div class="menu">
                 <a href="#/scliente/infooffers" class="d-block text-light p-3 mr menuopciones ">
                <div class="bola-blanco">
                <div class="check-azul"></div>
                </div>
                </a>
                <a href="#/scliente/infoclientes" class="d-block text-light p-3 menuopciones">
                <div class="bola-blanco">
                    <div class="persona-azul"></div>
                </div>
                </a>
                <a href="#/scliente" class="d-block text-light p-3 menuopciones">
                <div class="bola-blanco">
                    <div class="casa-azul"></div>
                </div>
                </a>
                <a href="#" id="on" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="on-azul"></div>
                    </div>
                </a>
                <div class="si_no desaparece" id= "si_no">
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                </div>
                </div>`,
            tcoordinador:`<div id="sidebar-container">
            <div class="logov">
            </div>
            <div class="menu">
                <a href="#" class="d-block text-light p-3 mr menuopciones ">
                    <div class="bola-blanco">
                        <div class="check-azul"></div>
                    </div>
                </a>
            
                <a href="#/tcoordinador" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="audifonos-azul"></div>
                    </div>
                </a>
                <a href="#" id="on" class="d-block text-light p-3 menuopciones">
                    <div class="bola-blanco">
                        <div class="on-azul"></div>
                    </div>
                </a>
                <div class="si_no desaparece" id= "si_no">
                
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>     
            </div>
            </div>`
        }
        
        setTimeout(()=>{
            ( () => {
                const rol = localStorage.getItem("rol");
                const d = document.getElementById('menu');
                if (rol=='admin'){
                    d.innerHTML = menus.admin;
                } else if (rol=='cliente'){
                    d.innerHTML = menus.cliente;
                }  else if (rol=='comercial'){
                    d.innerHTML = menus.comercial;
                }  else if (rol=='dtecnico'){
                    d.innerHTML = menus.dtecnico;
                }  else if (rol=='experto'){
                    d.innerHTML = menus.experto;
                }  else if (rol=='scliente'){
                    d.innerHTML = menus.scliente;
                }  else if (rol=='tcoordinador'){
                    d.innerHTML = menus.tcoordinador;
                }  
            } ) ();


            var contador = true;
            const d = document;
            const cerrar = d.getElementById('si_no'),
            on = d.getElementById('on'),
            off = d.getElementById('off');
            function aparece(){
                contador ? cerrar.classList.remove('desaparece') : cerrar.classList.add('desaparece');
                contador = !contador;
            }
            off.addEventListener('click',aparece,true);
            on.addEventListener('click',aparece,true);
   
        }, 1);
    }
    
})
const parent = document.getElementById('root');
observermenu.observe(parent,{childList:true})
