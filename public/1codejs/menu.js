const observermenu = new MutationObserver(()=>{ 
    if (Boolean(document.getElementById('menu')) && document.getElementById('menu').childElementCount < 1){
        const menus = {
            admin:  `<div id="sidebar-container">
                <div class="logov">
        
                </div>
                <div class="menu">
                <a href="#/admin/infooffer" class="d-block text-light p-2 mr menuopciones menu_hover1 ">
                <div class="bola-blanco img_dominante1">
                    <div class="check-azul"></div>
                </div>
                    <p class = " letra_menu img_recesivo1"  >
                    Ofertas
                </p>
                <div class="bola-azul img_recesivo1">
                <div class="check-blanco"></div>
                </div>
                </a>
                <a href="#/admin/infoclients" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="persona-azul"></div>
                    </div>
                        <p class = "letra_menu2 letra_menu img_recesivo1"  >
                        Cliente
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="persona-blanco"></div>
                    </div>
                </a>
                    <a href="#/admin/createuser" class="d-block text-light p-2 menuopciones menu_hover1">

                    <div class="bola-blanco img_dominante1">
                        <div class="mas-azul"></div>
                    </div>
                    <p class = "letra_menu3 letra_menu img_recesivo1"  >
                        Crear cliente
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="mas-blanco"></div>
                    </div>
                </a>
                    <a href="#/admin" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="casa-azul"></div>
                    </div>
                        <p class = "letra_menu4 letra_menu img_recesivo1"  >
                        Inicio
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="casa-blanco"></div>
                    </div>
                </a> 
                <a href="#" id="on" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="on-azul"></div>
                    </div>
                    <div class="bola-azul img_recesivo1">
                        <div class="on-blanco"></div>
                    </div>
                </a>
                <div class="si_no_comercial desaparece" id= "si_no">
                
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                    </div>
                </div>
            </div>`,
            cliente: `<div id="sidebar-container">
            <div class="logov"></div>
            <div class="menu">
            <a href="#/cliente/offer" class="d-block text-light p-2 mr menuopciones menu_hover1 ">
            <div class="bola-blanco img_dominante1">
                <div class="check-azul"></div>
            </div>
                <p class = " letra_menu img_recesivo1"  >
                Ofertas
            </p>
            <div class="bola-azul img_recesivo1">
            <div class="check-blanco"></div>
            </div>
            </a>
                    <a href="#/cliente" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="casa-azul"></div>
                    </div>
                        <p class = "letra_menu2 letra_menu img_recesivo1"  >
                        Inicio
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="casa-blanco"></div>
                    </div>
                </a> 
                <a href="#" id="on" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="on-azul"></div>
                    </div>
                    <div class="bola-azul img_recesivo1">
                        <div class="on-blanco"></div>
                    </div>
                </a>
                <div class="si_no_comercial desaparece" id= "si_no">
                
                <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
            </div> 
            </div>`,
            comercial:`<div id="sidebar-container">
            <div class="logov">            
            </div>
            <div class="menu">
                <a href="#/comercial/createcliente" class="d-block text-light p-2 menuopciones menu_hover1">

                    <div class="bola-blanco img_dominante1">
                        <div class="mas-azul"></div>
                    </div>
                    <p class = "letra_menu letra_menu img_recesivo1"  >
                        Crear cliente
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="mas-blanco"></div>
                    </div>
                </a>
            
                    <a href="#/comercial/createfactorie" style ="width: 65px !important; " class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="estrella-azul"></div>
                    </div>
                    <p class = "letra_menu2 letra_menu img_recesivo1"  >
                        Crear fabrica
                    </p>
                    <div class="bola-azul img_recesivo1">
                    <div class="estrella-blanco"></div>
                    </div>
                </a>          
                <a href="#/comercial/infooffers" class="d-block text-light p-2 mr menuopciones menu_hover1 ">
                    <div class="bola-blanco img_dominante1">
                        <div class="check-azul"></div>
                    </div>
                        <p class = "letra_menu3 letra_menu img_recesivo1"  >
                        Ofertas
                    </p>
                    <div class="bola-azul img_recesivo1">
                    <div class="check-blanco"></div>
                </div>
                </a>
                <a href="#/comercial/infoclientes" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="persona-azul"></div>
                    </div>
                        <p class = "letra_menu4 letra_menu img_recesivo1"  >
                        Cliente
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="persona-blanco"></div>
                    </div>
                </a>
                    <a href="#/comercial" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="casa-azul"></div>
                    </div>
                        <p class = "letra_menu5 letra_menu img_recesivo1"  >
                        Inicio
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="casa-blanco"></div>
                    </div>
                </a>           
                <a href="#" id="on" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="on-azul"></div>
                    </div>
                    <div class="bola-azul img_recesivo1">
                        <div class="on-blanco"></div>
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
            <a href="#/experto/createeval" class="d-block text-light p-2 menuopciones menu_hover1">

            <div class="bola-blanco img_dominante1">
                <div class="mas-azul"></div>
            </div>
            <p class = "letra_menu letra_menu img_recesivo1" style="left: 16px !important;" >
                crear evaluacion
            </p>
            <div class="bola-azul img_recesivo1">
                <div class="mas-blanco"></div>
            </div>
        </a>
        <a href="#/experto/infocliente" class="d-block text-light p-2 menuopciones menu_hover1">
        <div class="bola-blanco img_dominante1">
            <div class="persona-azul"></div>
        </div>
            <p class = "letra_menu2 letra_menu img_recesivo1"  >
            Cliente
        </p>
        <div class="bola-azul img_recesivo1">
            <div class="persona-blanco"></div>
        </div>
    </a>
    <a href="#/experto" class="d-block text-light p-2 menuopciones menu_hover1">
    <div class="bola-blanco img_dominante1">
        <div class="casa-azul"></div>
    </div>
        <p class = "letra_menu3 letra_menu img_recesivo1"  >
        Inicio
    </p>
    <div class="bola-azul img_recesivo1">
        <div class="casa-blanco"></div>
    </div>
</a>           
<a href="#" id="on" class="d-block text-light p-2 menuopciones menu_hover1">
    <div class="bola-blanco img_dominante1">
        <div class="on-azul"></div>
    </div>
    <div class="bola-azul img_recesivo1">
        <div class="on-blanco"></div>
    </div>
</a>
<div class="si_no_comercial desaparece" id= "si_no">

<a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                </div>
                </div>`,
            scliente: `<div id="sidebar-container">
            <div class="logov">
            </div>
            <div class="menu">
                <a href="#/scliente/infooffers" class="d-block text-light p-2 mr menuopciones menu_hover1 ">
                    <div class="bola-blanco img_dominante1">
                        <div class="check-azul"></div>
                    </div>
                        <p class = " letra_menu img_recesivo1"  >
                        Ofertas
                    </p>
                    <div class="bola-azul img_recesivo1">
                    <div class="check-blanco"></div>
                </div>
                </a>
                <a href="#/scliente/infoclientes" class="d-block text-light p-2 menuopciones menu_hover1">
                    <div class="bola-blanco img_dominante1">
                        <div class="persona-azul"></div>
                    </div>
                        <p class = "letra_menu_sc1 letra_menu img_recesivo1"  >
                        Cliente
                    </p>
                    <div class="bola-azul img_recesivo1">
                        <div class="persona-blanco"></div>
                    </div>
                </a>
                <a href="#/scliente" class="d-block text-light p-2 menuopciones menu_hover1">
                <div class="bola-blanco img_dominante1">
                    <div class="casa-azul"></div>
                </div>
                    <p class = "letra_menu_sc2 letra_menu img_recesivo1"  >
                    Inicio
                </p>
                <div class="bola-azul img_recesivo1">
                    <div class="casa-blanco"></div>
                </div>
            </a> 
            <a href="#" id="on" class="d-block text-light p-2 menuopciones menu_hover1">
            <div class="bola-blanco img_dominante1">
                <div class="on-azul"></div>
            </div>
            <div class="bola-azul img_recesivo1">
                <div class="on-blanco"></div>
            </div>
        </a>
        <div class="si_no_comercial desaparece" id= "si_no">
        
        <a href="#cs" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                </div>
                </div>`,
            tcoordinador:`<div id="sidebar-container">
            <div class="logov">
            </div>
            <div class="menu">
            <a href="#/tcoordinador/infooffers" class="d-block text-light p-2 mr menuopciones menu_hover1 ">
            <div class="bola-blanco img_dominante1">
                <div class="check-azul"></div>
            </div>
                <p class = " letra_menu img_recesivo1"  >
                Ofertas
            </p>
            <div class="bola-azul img_recesivo1">
            <div class="check-blanco"></div>
        </div>
        </a>
            
        </a>
        <a href="#/tcoordinador" class="d-block text-light p-2 menuopciones menu_hover1">
        <div class="bola-blanco img_dominante1">
            <div class="casa-azul"></div>
        </div>
            <p class = "letra_menu2 letra_menu img_recesivo1"  >
            Inicio
        </p>
        <div class="bola-azul img_recesivo1">
            <div class="casa-blanco"></div>
        </div>
    </a>           
    <a href="#" id="on" class="d-block text-light p-2 menuopciones menu_hover1">
        <div class="bola-blanco img_dominante1">
            <div class="on-azul"></div>
        </div>
        <div class="bola-azul img_recesivo1">
            <div class="on-blanco"></div>
        </div>
    </a>
    <div class="si_no_comercial desaparece" id= "si_no">
    
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
