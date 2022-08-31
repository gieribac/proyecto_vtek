import {setOffer, updateOffer} from "./models/post.js";
import {uploadFile, getFileURL} from "./storage.js";
import {comercial_createoffer} from "./pages.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {  
        const d=document;
        let clienteActual,
        estado = true,  
        b1 = true,
        campos_label = d.querySelectorAll('label'); 
        const campos = Array.prototype.slice.apply(d.getElementsByClassName('col')),
        listcheck = Array.prototype.slice.apply(d.getElementsByClassName('checks')),
        inputs = d.getElementsByClassName('inputsr'),
        enviar = d.getElementById("guardarO"),
        inputFile = d.getElementById("adjuntar"),
        data = {};

        const recargar = () => {
            d.getElementById("root").innerHTML = comercial_createoffer;
        }

        (() => {
            const left = d.getElementById('cliente'),
            cliente = JSON.parse(localStorage.getItem("nclient")), 
            idcliente = JSON.parse(localStorage.getItem("nidsClient"));      
            cliente.forEach((d,i)=> {  
                left.innerHTML += `
                <h6 class = "p-2 left margen-cliente_com letra_recuadro_info" >${idcliente[i]}</h6>`
            })

            const mostrarCliente = (clienteActual) => {              
                const cA = cliente[idcliente.indexOf(clienteActual)];

                inputs[0].placeholder = `Cliente: ${cA.ClienteOF}`;
                inputs[1].placeholder = `Usuario: ${cA.usuarioOF}`;
                inputs[2].placeholder = `Fabrica: ${cA.fabricaOF}`;
                inputs[3].placeholder = `Vigencia: ${cA.vigenciaOF}`;
                inputs[4].placeholder = `Esquema: ${cA.esquemaOF}`;
                inputs[5].placeholder = `Vigilancia: ${cA.vigilanciaOF}`;
                inputs[6].placeholder = `C. de Costos: ${cA.centrocostosOF}`;
                inputs[7].placeholder = `Comercial: ${cA.comercialOF}`;         
            }
        
            const vinculos = Array.prototype.slice.apply(d.querySelectorAll('.left'));
            
            vinculos.forEach(element => {
                element.addEventListener('click',()=>{
                    vinculos.forEach(s => s.removeAttribute('style','font-weight: bold'));  
                    element.setAttribute('style','font-weight: bold');  
                    clienteActual= idcliente.find(e => e==element.textContent);
                    mostrarCliente(clienteActual);                             
                })
            })
            
            clienteActual = localStorage.getItem("clientSelect");
            mostrarCliente(clienteActual);     
            const selected = vinculos.find(e => e.textContent == clienteActual)
            selected.setAttribute('style','font-weight: bold'); 
        })();

        const formNew = () => {
            estado=true;
            inputs[0].placeholder = `Cliente`;
            inputs[1].placeholder = `Usuario`;
            inputs[2].placeholder = `Fabrica`;
            inputs[3].placeholder = `Vigencia`;
            inputs[4].placeholder = `Esquema`;
            inputs[5].placeholder = `Vigilancia`;
            inputs[6].placeholder = `C. de Costos`;
            inputs[7].placeholder = `Comercial`;  

            d.getElementById("guardarO").disabled = false;
            d.getElementById("adjuntar").disabled = false;
            d.getElementById("guardarO").removeAttribute('style','display:none');
            d.getElementById("estilo_adjuntar").removeAttribute('style','display:none');
            b1 = false;
            try {   
                campos.forEach ((e,i) => {
                    e.removeChild(campos_label[i]);
                })
            } catch (e) {                    
            }
        }

        const formEdit = () => {
            estado = false;
            if (b1 == false){
                recargar();
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
            Array.prototype.slice.apply(inputs).forEach(e => {
                e.value.length > 0 && (() => data[e.id] = e.value)();
            })          
        }

        d.getElementById("adjuntar").disabled = true;
        d.getElementById("estilo_adjuntar").setAttribute('style','display:none');
        d.getElementById("adjuntar").disabled = true;
        d.getElementById("btnNuevo").addEventListener('click',formNew);
        d.getElementById("btnEdit").addEventListener('click',formEdit);
        
        enviar.disabled = true;
        enviar.setAttribute('style','display:none');        

        enviar.addEventListener('click', async () => {
            getData();
            const lenghtData = Object.keys(data).length;
            if (inputFile.files[0]){
                console.log("inputfile")
                    const result = await uploadFile(inputFile.files[0]);
                    const url = await getFileURL(result.ref);
                    data.file = url;
                }
            
            const sigue = async () => {
                
                const idclientSelect = localStorage.getItem("clientSelect");
                
                Array.prototype.slice.apply(d.getElementsByClassName('inputsr')).forEach (e => {
                    e.value=""
                })
                if (estado){
                    setOffer(data).then(m => 
                        alert(m)
                    ).catch(e => 
                        alert(`Error: ${e.message}`)
                    );
                } else {
                    updateOffer(clienteActual, data).then(
                        recargar()                        
                    ).then(m => 
                        alert(m)
                    ).catch(
                        recargar()                        
                    ).catch(e => 
                        alert(`Error: ${e.message}`)
                    );
                }
            }
            if (estado){
                (lenghtData < 8) ? (() => {
                    alert('Debe llenar todos los acampos');                            
                })() : sigue();
            } else {
                (lenghtData < 1) ? (() => {
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