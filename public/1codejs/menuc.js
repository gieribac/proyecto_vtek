
    while (!!document.getElementById('menu')){
        setTimeout(()=>{
            document.getElementById('menu').innerHTML += ` 
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
                            <div  href="#/admin/infoclients" class="bola-blanco">
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
                        
                        <a href="" ><h6 class="saliendo">Si</h6> </a>  <a id="off"><h6 class="nosalir">no</h6> </a></div>
                    </div>
                </div>`;
            }, 1);
   
    var contador=false;
    const d = document;
    const cerrar = d.getElementById('si_no'),
    on = d.getElementById('on'),
    off = d.getElementById('off')
    function aparece(){
        contador ? cerrar.classList.remove('desaparece') : cerrar.classList.add('desaparece');
        contador = !contador;
    }
    off.addEventListener('click',aparece,true)
    on.addEventListener('click',aparece,true)
}





