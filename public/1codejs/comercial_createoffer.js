import {setOffer, updateOffer} from "./models/post.js";
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
                d.getElementById("guardarO").removeAttribute('style','display:none');
                d.getElementById("estilo_adjuntar").removeAttribute('style','display:none');
                b1 = !b1;    
                campos.forEach ((e,i) => {
                    e.removeChild(campos_label[i]);
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
                    d.getElementById("guardarO").removeAttribute('style','display:none');
                    d.getElementById("estilo_adjuntar").removeAttribute('style','display:none');
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
                e.value.length > 0 && (() => data[e.id] = e.value)();
            })
            console.log(data);          
        }

        d.getElementById("guardarO").disabled = true;
        d.getElementById("adjuntar").disabled = true;
        d.getElementById("guardarO").setAttribute('style','display:none');
        d.getElementById("estilo_adjuntar").setAttribute('style','display:none');
        d.getElementById("adjuntar").disabled = true;
        d.getElementById("btnNuevo").addEventListener('click',formNew);
        d.getElementById("btnEdit").addEventListener('click',formEdit);
        // d.getElementById("guardarO").addEventListener('click',enviar);
        const enviar = d.getElementById("guardarO");
        const inputFile = d.getElementById("adjuntar");

        enviar.addEventListener('click', async () => {
            getData();
            const lenghtData = Object.keys(data).length;
            console.log(lenghtData)
            const sigue = () => {
                if (inputFile.files[0]){ async () => { 
                    const result = await uploadFile(inputFile.files[0]);
                    const url = await getFileURL(result.ref);
                    console.log(url);
                    data.file = url;
                }}
                 
                estado ? setOffer(data): updateOffer(idOF, data);
            }
            if (estado){
                (lenghtData < 8) ? (() => {
                    alert('Debe llenar todos los acampos');                            
                })() : sigue();
            } else {
                (lenghtData < 2) ? (() => {
                    alert('Debe editar al menos un campo');                            
                })() : sigue();                
            }
        })
        
        localStorage.getItem('b1') == '1' && (() => {formNew(); localStorage.removeItem('b1')})();             
    }

location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})
