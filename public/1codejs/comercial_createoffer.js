import { setOferta, queryOferta } from "./models/post";
import {uploadFile, getFileURL} from "./storage.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {  
        const d=document;
        let estado;
        d.getElementById("btnNuevo").addEventListener('click',formNew());
        d.getElementById("btnEdit").addEventListener('click',formEdit());
        
        const formNew = () => {
            estado=true;
            d.getElementById('inputs').innerHTML = `<div class="input-group p-2 ">
                    <div class="inputsdivi " style="width: 200px;" >
                        <input type="text" class="form-control inputsr sombra" style="width: 200px;" placeholder="cliente" aria-label="usuario" id="cliente" ></div>
                    <div class="inputsdivi" style="width: 200px;"> <input type="text" class="form-control inputsr sombra" style="width: 200px;"  placeholder="producto" aria-label="usuario" id="ciudadU"></div>
                </div>
                <div class="input-group p-2  ">
                    <div class="inputsdivi" style="width: 200px;" >
                        <input type="text" class="form-control inputsr sombra" style="width: 200px;"  placeholder="Fábrica" aria-label="usuario" id="fabrica"></div>
                    <div class="inputsdivi" style="width: 200px;">
                        <input type="text" class="form-control inputsr sombra"  style="width: 200px;" placeholder="Vigencia" aria-label="usuario" id="vigencia"></div>
                </div>
                <div class="input-group p-2 ">
                    <div class="inputsdivi" style="width: 200px;" >
                        <input type="text" class="form-control inputsr sombra"  style="width: 200px;" placeholder="Esquema" aria-label="usuario" id="esquema"></div>
                    <div class="inputsdivi" style="width: 200px;">
                        <input type="text" class="form-control inputsr sombra"  style="width: 200px;" placeholder="Vigilancia" aria-label="usuario" id="vs"></div>
                </div>
                <div class="input-group p-2  ">
                    <div class="inputsdivi " style="width: 200px;" >
                        <input type="text " class="form-control inputsr sombra" style="width: 200px;"  id="centrocosto" placeholder="Centro de costos" aria-label="usuario "></div>
                    <div class="inputsdivi " style="width: 200px;" > <input type="text " id="comercial" style="width: 200px;"  class="form-control inputsr sombra " placeholder="Comercial" aria-label="usuario "></div>
                </div>`
        }
        const formEdit = () => {
            estado=false;
        }
        

    }

location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})