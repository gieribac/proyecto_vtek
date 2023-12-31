const observermenu = new MutationObserver(()=>{ 
    if (Boolean(document.getElementById('menu')) && document.getElementById('menu').childElementCount < 1){
        setTimeout(()=>{
            document.getElementById('menu').innerHTML = ` 
            <div id="sidebar-container">
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
            </div>`;                
        
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



// const vinculosM = {
//     vinculo1: document.querySelectorAll('.menu > a')[0],
//     vinculo2: document.querySelectorAll('.menu > a')[1],
//     vinculo3: document.querySelectorAll('.menu > a')[2],
//     vinculo4: document.querySelectorAll('.menu > a')[3]
// }

// const vinculosMenu = () => {
//     const rol = localStorage.getItem("rol");
//     if (rol=='admin'){
//         vinculosM.vinculo1.href = "#/admin/infooffer";
//         vinculosM.vinculo2.href = "#/admin/infoclients";
//         vinculosM.vinculo3.href = "#/admin/createuser";
//         vinculosM.vinculo2.href = "#/admin";
//     } else if (rol=='cliente'){
//         vinculosM.vinculo1.href = "#/cliente/offer";
//         vinculosM.vinculo2.href = "#/cliente";
//     } . . .
// }



//     var div_para_menu = document.getElementById('menucliente')
// div_para_menu.innerHTML += ` 

// <div id="sidebar-container">
// <div class="logov">

// </div>
// <div class="menu">
//     <a href="#" class="d-block text-light p-3 mr menuopciones ">
//         <div class="bola-blanco">
//             <div class="check-azul"></div>
//         </div>
//     </a>

//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="casa-azul"></div>
//         </div>
//     </a>
//     <a href="#" id="on" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="on-azul"></div>
//         </div>
//     </a>
//     <div class="si_no desaparece" id= "si_no">
    
//     <a href="index.html" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
  



// </div>


// </div>

// `;
// document.set

// var div_para_menu = document.getElementById('menudirector')
// div_para_menu.innerHTML += ` 

// <div id="sidebar-container">
// <div class="logov">

// </div>
// <div class="menu">

//     <a href="#" class="d-block text-light p-3 mr menuopciones ">
//         <div class="bola-blanco">
//             <div class="campana-azul"></div>
//         </div>
//     </a>
//     <a href="#" class="d-block text-light p-3 mr menuopciones ">
//         <div class="bola-blanco">
//             <div class="check-azul"></div>
//         </div>
//     </a>

//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="casa-azul"></div>
//         </div>
//     </a>
//     <a href="#" id="on" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="on-azul"></div>
//         </div>
//     </a>
//     <div class="si_no desaparece" id= "si_no">
    
//     <a href="index.html" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
  



// </div>


// </div>

// `;
// document.set

// var div_para_menu = document.getElementById('menuexperto')
// div_para_menu.innerHTML += ` 

// <div id="sidebar-container">
// <div class="logov">

// </div>
// <div class="menu">

//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="mas-azul"></div>
//         </div>
//     </a>

//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="persona-azul"></div>
//         </div>
//     </a>
//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="casa-azul"></div>
//         </div>
//     </a>
//     <a href="#" id="on" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="on-azul"></div>
//         </div>
//     </a>
//     <div class="si_no desaparece" id= "si_no">
    
//     <a href="index.html" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
  



// </div>


// </div>

// `;
// document.set

// var div_para_menu = document.getElementById('menuservicio')
// div_para_menu.innerHTML += ` 

// <div id="sidebar-container">
// <div class="logov">

// </div>
// <div class="menu">
//     <a href="#" class="d-block text-light p-3 mr menuopciones ">
//         <div class="bola-blanco">
//             <div class="check-azul"></div>
//         </div>
//     </a>
//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="persona-azul"></div>
//         </div>
//     </a>
//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="casa-azul"></div>
//         </div>
//     </a>
//     <a href="#" id="on" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="on-azul"></div>
//         </div>
//     </a>
//     <div class="si_no desaparece" id= "si_no">
    
//     <a href="index.html" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
  



// </div>


// </div>

// `;
// document.set

// var div_para_menu_tecnico = document.getElementById('menutecnico');
// div_para_menu_tecnico.innerHTML += ` 

// <div id="sidebar-container">
// <div class="logov">

// </div>
// <div class="menu">
//     <a href="crear_usuario.html" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="mas-azul"></div>
//         </div>
//     </a>
//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="audifonos-azul"></div>
//         </div>
//     </a>
//     <a href="#" id="on" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="on-azul"></div>
//         </div>
//     </a>
//     <div class="si_no desaparece" id= "si_no">
    
//     <a href="index.html" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
  



// </div>


// </div>

// `;document.set

// var div_para_menu = document.getElementById('menucomercial')
// div_para_menu.innerHTML += ` 

// <div id="sidebar-container">
// <div class="logov">

// </div>
// <div class="menu">
//     <a href="crear_usuario.html" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="mas-azul"></div>
//         </div>
//     </a>

//         <a href="crear_usuario.html" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="estrella-azul"></div>
//         </div>
//     </a>


//     <a href="#" class="d-block text-light p-3 mr menuopciones ">
//         <div class="bola-blanco">
//             <div class="check-azul"></div>
//         </div>
//     </a>
//     <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="persona-azul"></div>
//         </div>
//     </a>



//         <a href="#" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="audifonos-azul"></div>
//         </div>
//     </a>


//     <a href="#" id="on" class="d-block text-light p-3 menuopciones">
//         <div class="bola-blanco">
//             <div class="on-azul"></div>
//         </div>
//     </a>
//     <div class="si_no desaparece" id= "si_no">
    
//     <a href="index.html" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
  



// </div>


// </div>

// `;document.set





