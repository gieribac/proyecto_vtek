// import { setOferta, queryOferta } from "./models/post";
import {uploadFile, getFileURL} from "./storage.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {  
        const d=document;
        let estado = true;  
        let b1 = true;
        let campos_label = document.querySelectorAll('label'); 
        const campos = Array.prototype.slice.apply(d.getElementsByClassName('col')); 
        const listcheck = Array.prototype.slice.apply(d.getElementsByClassName('checks'));
        const data = {};

        const formNew = () => {
            estado=true;
            if (b1 == false){
                location.reload();
            } else {
                d.getElementById("guardarO").disabled = false;
                d.getElementById("adjuntar").disabled = false;
                b1 = !b1;    
                campos.forEach ((e,i) => {
                    e.removeChild(campos_label[i])
                })
            }
        }

        const formEdit = () => {
            estado = false;
            if (b1 == false){
                location.reload();
            } else { 
                const mapcheck = listcheck.map(e => e.checked)               
                const continuar = () => {
                    b1 = !b1; 
                    d.getElementById("guardarO").disabled = false;
                    d.getElementById("adjuntar").disabled = false;
                    listcheck.forEach((e, i) => {
                        !e.checked && (() => {
                            while (campos[i].firstChild) {
                                campos[i].removeChild(campos[i].firstChild);
                            }
                        })();              
                    })
                }
                mapcheck.includes(true) ? continuar() : alert("debe editar al menos un campo");                
            }
        } 

        const getData = () => {
            const inputs = d.getElementsByClassName('inputsr');
            Array.prototype.slice.apply(inputs).forEach(e => {
                data[e.id] = e.value;
            })
            console.log(data);          
        }

        d.getElementById("guardarO").disabled = true;
        d.getElementById("adjuntar").disabled = true;
        d.getElementById("btnNuevo").addEventListener('click',formNew);
        d.getElementById("btnEdit").addEventListener('click',formEdit);
        // d.getElementById("guardarO").addEventListener('click',enviar);
        const enviar = d.getElementById("guardarO");
        const inputFile = d.getElementById("adjuntar");
        console.log(inputFile)
        enviar.addEventListener('click', async () => {
            if (inputFile.files[0]){
                const result = await uploadFile(inputFile.files[0]);
                const url = await getFileURL(result.ref);
                console.log(url);
                data.file = url;
            }
            getData();
            console.log(data)
        })
        
        localStorage.getItem('b1') == '1' && (() => {formNew(); localStorage.removeItem('b1')})();
             
    }

location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})
