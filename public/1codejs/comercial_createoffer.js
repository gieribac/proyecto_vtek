// import { setOferta, queryOferta } from "./models/post";
// import {uploadFile, getFileURL} from "./storage.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {  
        const d=document;
        let estado;
        d.getElementById("btnNuevo").addEventListener('click',formNew());
        d.getElementById("btnEdit").addEventListener('click',formEdit());
        const campos = Array.prototype.slice.apply(d.getElementsByClassName('col'));
        
        const inputs = [
            `<input required="" type="text" class="form-control inputsr sombra imputs_tamano" id="ClienteOF" placeholder="Cliente">
            <p class="ncC formulario__input-error letra_formulario" >
                Letras, tildes y espacios                
            </p>`,

            `<input required=""  type="text" class="form-control inputsr sombra imputs_tamano" id="usuarioOF" placeholder="Usuario">
            <p class="rlC formulario__input-error letra_formulario" >
                Letras, tildes y espacios
            </p>`,

            `<input required="" type="text" class="form-control inputsr sombra imputs_tamano" id="nombreCompaniaC" placeholder="fabrica">
            <p class="ncC formulario__input-error letra_formulario" >
                Letras, tildes y espacios      
            </p>`,

            `<input required=""  type="text" class="form-control inputsr sombra imputs_tamano" id="repLegalC" placeholder="Vigencia">
            <p class="rlC formulario__input-error letra_formulario" >
                Letras, tildes y espacios
            </p>`,

            `<input required="" type="text" class="form-control inputsr sombra imputs_tamano" id="nombreCompaniaC" placeholder="esquema">
            <p class="ncC formulario__input-error letra_formulario" >
                Letras, tildes y espacios          
            </p>`,

            `<input required=""  type="text" class="form-control inputsr sombra imputs_tamano" id="repLegalC" placeholder="vigilancia">
            <p class="rlC formulario__input-error letra_formulario" >
                Letras, tildes y espacios
            </p>`,
            
            `<input required="" type="text" class="form-control inputsr sombra imputs_tamano" id="nombreCompaniaC" placeholder="centro de costos">
            <p class="ncC formulario__input-error letra_formulario" >
                Letras, tildes y espacios      
            </p>`,

            `<input required=""  type="text" class="form-control inputsr sombra imputs_tamano" id="repLegalC" placeholder="comercial">
            <p class="rlC formulario__input-error letra_formulario" >
                Letras, tildes y espacios
            </p>`
        ]
        
        const formNew = () => {
            estado=true;

            campos.forEach((e, i) => {
                campos[i].innerHTML = inputs[i];
            })
        }
        const formEdit = () => {
            estado=false;          
            let listcheck = d.getElementsByClassName('checks');
   
            listcheck.forEach((e, i) => {
                campos[i].innerHTML = e.cheked ?  inputs[i] : '';
            })
        }       
    }

location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})