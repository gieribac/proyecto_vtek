import {setOffer, updateOffer, querySnapOffClients, querySnapOffFabricas } from "./models/post.js";
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
        selectCliente = d.getElementById('ClienteOF'),
        selectFabrica = d.getElementById('fabricaOF'),
        selectHtestReport = d.getElementById('homo_restOF').firstElementChild,
        selectProducto = d.getElementById('productoOF').firstElementChild,
        enviar = d.getElementById("guardarO"),
        inputFile = d.getElementById("adjuntar"),
        data = {};
        console.log(inputs)

        const recargar = () => {
            d.getElementById("root").innerHTML = comercial_createoffer;
        }

        const traerClientesFabricas = async() => {

            await querySnapOffClients().then(d =>{
                const docs = d.docs;
                if (docs.length > 0) {
                    docs.forEach (d => {
                        selectCliente.innerHTML += `<option value="${d.data().Nombre_Compania}">${d.data().Nombre_Compania}</option>`
                    })
                }
            }).then (e => console.log(e));

            await querySnapOffFabricas().then(d =>{
                const docs = d.docs;
                if (docs.length > 0) {
                    docs.forEach (d => {
                        selectFabrica.innerHTML += `<option value="${d.data().nombre_compania}">${d.data().nombre_compania}</option>`

                    })
                }
            }).then (e => console.log(e));

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
                
                selectCliente.innerHTML = `<option selected="" value="0">Cliente: ${cA.ClienteOF}</option>`;
                selectFabrica.innerHTML = `<option selected="" value="0">Fabrica: ${cA.fabricaOF}</option>`;
                selectHtestReport.textContent = `Homologación test report: ${cA.homo_restOF}`;
                selectProducto.textContent = `Producto: ${cA.productoOF}`;
                
                traerClientesFabricas();
                
                inputs[0].placeholder = `Esquema: ${cA.esquemaOF}`;
                inputs[1].placeholder = `Vigencia: ${cA.vigenciaOF}`;
                inputs[2].placeholder = `Homologación ISO9001: ${cA.homologacionOF}`;
                inputs[3].placeholder = `Ensayos: ${cA.ensayosOF}`;
                inputs[4].placeholder = `Muestras: ${cA.muestrasOF}`;
                inputs[5].placeholder = `Condiciones pago: ${cA.condicionespagoOF}`;         
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
            if (b1 == false){
                recargar();
            } else { 
                selectCliente.innerHTML = `<option selected="" value="0">Cliente</option>`;
                selectFabrica.innerHTML = `<option selected="" value="0">Auditoria en Fábrica</option>`;
                selectHtestReport.textContent = `Homologación test report`;
                selectProducto.textContent = `Producto a certificar`;
                traerClientesFabricas();
                
                inputs[0].placeholder = `Esquema de certificación`;
                inputs[1].placeholder = `Vigencia`;
                inputs[2].placeholder = `Homologación ISO 9001`;
                inputs[3].placeholder = `Ensayos`;
                inputs[4].placeholder = `Muestras`;
                inputs[5].placeholder = `Condiciones de pago`;  

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
            selectCliente.value != "0" && (() => data.ClienteOF = selectCliente.value)();
            selectFabrica.value != "0" && (() => data.fabricaOF = selectFabrica.value)();
            selectHtestReport.value != "0" && (() => data.homo_restOF = selectHtestReport.value)();
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
                    console.log(data)
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
                (lenghtData < 10) ? (() => {
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