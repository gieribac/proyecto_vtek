import {setOffer, updateOffer, querySnapOffClients, querySnapOffFabricas } from "./models/post.js";
import {uploadFile, getFileURL} from "./storage.js";
import {comercial_createoffer} from "./pages.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {  
        const d=document;
        let clienteActual,
        clienteActualID,
        estado = true,  
        b1 = true,
        campos_label = d.querySelectorAll('label'); 
        const campos = Array.prototype.slice.apply(d.getElementsByClassName('col')),
        listcheck = Array.prototype.slice.apply(d.getElementsByClassName('checks')),
        inputs = d.getElementsByClassName('inputsr'),
        selectCliente = d.getElementById('ClienteOF'),
        selectClienteSol = d.getElementById('ClienteOFs'),
        selectFabrica = d.getElementById('fabricaOF'),
        selectCP = d.getElementById('condicionespagoOF').firstElementChild,
        selectHtestReport = d.getElementById('homo_testReportOF').firstElementChild,
        selectProducto = d.getElementById('productoOF').firstElementChild,
        enviar = d.getElementById("guardarO"),
        inputFile = d.getElementById("adjuntar"),
        btnGenPDF= d.getElementById("btngenPDF"),
        data = {};

        const recargar = () => {
            d.getElementById("root").innerHTML = comercial_createoffer;
        }

        const traerClientesFabricas = async() => {

            await querySnapOffClients().then(d =>{
                const docs = d.docs;
                if (docs.length > 0) {
                    docs.forEach (d => {
                        selectCliente.innerHTML += `<option value="${d.data().Nombre_Compania}">${d.data().Nombre_Compania}</option>`;
                        selectClienteSol.innerHTML += `<option value="${d.data().Nombre_Compania}">${d.data().Nombre_Compania}</option>`;
                    })
                }
            }).catch(e => console.log(e));

            await querySnapOffFabricas().then(d =>{
                const docs = d.docs;
                if (docs.length > 0) {
                    docs.forEach (d => {
                        selectFabrica.innerHTML += `<option value="${d.data().nombre_compania}">${d.data().nombre_compania}</option>`;
                    })
                }
            }).catch (e => console.log(e));

        }

        const cargaDetalleCliente = () => {
            btnGenPDF.removeAttribute('style','display:none');
            const left = d.getElementById('cliente'),
            cliente = JSON.parse(localStorage.getItem("nclient")), 
            list_noOf = JSON.parse(localStorage.getItem("list_noOf")),  
            nidsClient = JSON.parse(localStorage.getItem("nidsClient"));      
            cliente.forEach((d,i)=> {  
                left.innerHTML += `
                <h6 id="${nidsClient[i]}" class = "p-2 left margen-cliente_com letra_recuadro_info" >${list_noOf[i]}</h6>`
            })

            const mostrarCliente = (clienteActual) => {              
                const cA = cliente[list_noOf.indexOf(clienteActual)];
                
                selectCliente.innerHTML = `<option selected="" value="">C. Titular: ${cA.ClienteOF}</option>`;
                selectClienteSol.innerHTML = `<option selected="" value="">C. Solicitante: ${cA.ClienteOF}</option>`;
                selectFabrica.innerHTML = `<option selected="" value="">Fabrica: ${cA.fabricaOF}</option>`;
                selectHtestReport.textContent = `Homologación test report: ${cA.homo_restOF}`;
                selectProducto.textContent = `Producto: ${cA.productoOF}`;
                selectCP.textContent = `C. Pago: ${cA.condicionespagoOF}`;
                
                traerClientesFabricas();
                
                inputs[0].placeholder = `Esquema: ${cA.esquemaOF}`;
                inputs[1].placeholder = `Vigencia (años): ${cA.vigenciaOF}`;
                inputs[2].placeholder = `Homologación ISO9001: ${cA.homologacionOF}`;
                inputs[3].placeholder = `Ensayos: ${cA.ensayosOF}`;
                inputs[4].placeholder = `Muestras: ${cA.muestrasOF}`; 
                inputs[5].placeholder = `No. de oferta: ${cA.No_oferta}`;     
            }
        
            const vinculos = Array.prototype.slice.apply(d.querySelectorAll('.left'));
            
            vinculos.forEach(element => {
                element.addEventListener('click',()=>{
                    vinculos.forEach(s => s.removeAttribute('style','font-weight: bold'));  
                    element.setAttribute('style','font-weight: bold');  
                    clienteActual = list_noOf.find(e => e==element.textContent);
                    clienteActualID = nidsClient.find(e => e==element.id);
                    localStorage.setItem("clientSelectID", clienteActualID);
                    localStorage.setItem("clientSelect",element.textContent);
                    mostrarCliente(clienteActual);                             
                })
                
            })
            
            clienteActual = localStorage.getItem("clientSelect");
            mostrarCliente(clienteActual);     
            const selected = vinculos.find(e => e.textContent == clienteActual)
            selected.setAttribute('style','font-weight: bold'); 
            btnGenPDF.addEventListener('click',() => location.hash = "#/comercial/createpdf1");
           
        };

        const formNew = () => {
            try{
                if (nidsClient){btnGenPDF.setAttribute('style','display:none')};
            } catch (e){
                if (e.name === 'ReferenceError' ) {btnGenPDF.setAttribute('style','display:none')}
            }
            if (localStorage.getItem('b1')){localStorage.removeItem('b1')};
            estado=true;
            if (b1 == false){
                recargar();
            } else { 
                selectCliente.innerHTML = `<option selected="" value="">Cliente Titular</option>`;
                selectClienteSol.innerHTML = `<option selected="" value="">Cliente Solicitante</option>`;
                selectFabrica.innerHTML = `<option selected="" value="">Auditoria en Fábrica</option>`;
                selectHtestReport.textContent = `Homologación test report`;
                selectProducto.textContent = `Producto a certificar`;
                selectCP.textContent = `Condiciones de Pago`;
                traerClientesFabricas();                
                inputs[0].placeholder = `Esquema de certificación`;
                inputs[1].placeholder = `Vigencia (años)`;
                inputs[2].placeholder = `Homologación ISO 9001`;
                inputs[3].placeholder = `Ensayos`;
                inputs[4].placeholder = `Muestras`;
                inputs[5].placeholder = `No. de oferta`;

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
                mapcheck.includes(true) ? continuar() : Swal.fire(
                    'Error!',
                    `¡Debe editar al menos un campo!`,
                    'error'
                );                
            }
        } 

        const getData = () => {             
            Array.prototype.slice.apply(inputs).forEach(e => {
                e.value.length > 0 && (() => data[e.id] = e.value)();
            })  
            selectCliente.value.length > 0 && (() => data.ClienteOF = selectCliente.value)();
            selectClienteSol.value.length > 0 && (() => data.ClienteOFSol = selectClienteSol.value)();
            selectFabrica.value.length > 0 && (() => data.fabricaOF = selectFabrica.value)();
            selectHtestReport.parentNode.value.length > 0 && (() => data.homo_restOF = selectHtestReport.parentNode.value)();
            selectProducto.parentNode.value.length > 0 && (() => data.productoOF = selectProducto.parentNode.value)();
            selectCP.parentNode.value.length > 0 && (() => data.condicionespagoOF = selectCP.parentNode.value)();

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
            console.log(data);
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
                console.log(`estado_ ${estado}`)
                if (estado){
                    console.log(data)
                    setOffer(data).then(m => 
                        { location.hash = '#/comercial/infooffers'}                          
                    ).then( m => 
                        Swal.fire(
                            '¡Bien!',
                            'Oferta creada satisfactoriamente',
                            'success'
                        )
                    ).catch(
                        recargar()                        
                    ).catch(e => 
                        Swal.fire(
                            'Error!',
                            `Error al crear la oferta: ${e.message}`,
                            'error'
                        )
                    );
                } else {
                    clienteActualID = localStorage.getItem("clientSelectID");
                    updateOffer(clienteActualID, data).then( m => 
                        {location.hash = '#/comercial/infooffers'}                                                
                    ).then(m => 
                        Swal.fire(
                            '¡Bien!',
                            'Oferta actualizada satisfactoriamente',
                            'success'
                          )
                    ).catch(
                        recargar()                        
                    ).catch(e =>                     
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'no se pudo actualizar la oferta'                            
                        })
                    );
                }
            }
            if (estado){
                (lenghtData < 10) ? (() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Debe llenar todos los acampos',
                        
                      })
                                               
                })() : sigue();
            } else {
                (lenghtData < 1) ? (() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Debe editar al menos un campo',
                        
                      })
                    alert('Debe editar al menos un campo');                            
                })() : sigue();                
            }
        })
         
        localStorage.getItem('b1') == '1' ? formNew() : cargaDetalleCliente();

    }

location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})