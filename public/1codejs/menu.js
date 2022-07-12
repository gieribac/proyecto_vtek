var div_para_menu = document.getElementById('menu')
div_para_menu.innerHTML += ` 

<div id="sidebar-container">
<div class="logov">

</div>
<div class="menu prueba ">
    <a href="#" class="d-block text-light p-3 mr menuopciones ">
        <div class="bola-blanco">
            <div class="check-azul"></div>
        </div>
    </a>
    <a href="clientes.html" class="d-block text-light p-3 menuopciones">
        <div class="bola-blanco">
            <div class="persona-azul"></div>
        </div>
    </a>
    <a href="crear_usuario.html" class="d-block text-light p-3 menuopciones">
        <div class="bola-blanco">
            <div class="mas-azul"></div>
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
    <div class="si_no desaparece" id= "si_no"></div>
  



</div>


</div>

`;
document.set
var on = document.getElementById('on'), 
    cerrar = document.getElementById('si_no'), 
    contador=0;
    

    function aparece(){
        if (contador==0) {
            cerrar.classList.remove('desaparece')
            contador=1;

            
        } else {cerrar.classList.add('desaparece')
        contador=0;
            
        }


    }




    on.addEventListener('click',aparece,true)