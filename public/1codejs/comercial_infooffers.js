import {querySnapComOfs, queryNextComOfs, queryNextntComOfs, updateFormalizarOF, getTecnicoCoordinadorEmail, sendNotificateEmail} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
   
    
    const charge = () => {
        console.log('infoofers');
        const oferta = document.getElementById('oferta');
        const cliente = document.getElementById('cliente');
        const producto = document.getElementById('producto');
        const estado = document.getElementById('estado');
        const formalizar = document.getElementById('formalizar');

        const btnSiguiente = document.getElementById('botonSiguiente');
        const btnAnterior = document.getElementById('botonAnterior');

        document.getElementById('btnNuevo').addEventListener('click',()=>{      
            localStorage.setItem('b1','1');      
            location.hash='#/comercial/createoffer';;
        });


        let ultimoDoc = null;
        let primerDoc = null;

        querySnapComOfs().then( d => {

            let registers = cargarDocs(d.docs);
            ultimoDoc = registers.ultimo;
            primerDoc = registers.primer;

            btnSiguiente.addEventListener('click',() => {
                
                    queryNextComOfs(ultimoDoc).then( d => {

                        registers = cargarDocs(d.docs); 
                        ultimoDoc = registers.ultimo;
                        primerDoc = registers.primer;   
                    }) 

            })

            btnAnterior.addEventListener('click',() => {
                
                    queryNextntComOfs(primerDoc).then((d) => {
                
                    registers = cargarDocs(d.docs.reverse());
                    ultimoDoc = registers.ultimo;
                    primerDoc = registers.primer; 
                
                })
                
            })
        }).then ((e) => console.log(e))
        
        const cargarDocs = ds => {
            
            if(ds.length > 0){

            const ultimo = ds[ds.length-1];
            const primer = ds[0];

            oferta.innerHTML = ``;
            cliente.innerHTML = ``;
            producto.innerHTML = ``;
            estado.innerHTML = ``;
            formalizar.innerHTML = ``;

            let listC = [];
            let list_noOf = [];
            let listIds = [];

                ds.forEach(d => {
                    
                    list_noOf.push(d.data().No_oferta);
                    listC.push(d.data());
                    const id = d.id; 
                    console.log(id) ;
                    listIds.push(id);
                    const n_oferta = d.data().No_oferta;
                    const st = d.data().Estado === undefined ? " - " : d.data().Estado;
                    
                    oferta.innerHTML += `
                    <h6 id="${id}" class = "letra_recuadro_info2">${n_oferta}</h6>
                    `;
                    cliente.innerHTML += `
                    <h6 >${d.data().ClienteOF}</h6>
                    `;
                    producto.innerHTML += `
                    <h6 >${d.data().productoOF}</h6>
                    `;
                    estado.innerHTML += `
                    <h6 >${st}</h6>
                    `;
                    if (d.data().Formalizar) {
                        // formalizar.innerHTML += `
                        // <div class="listo_formalizar"> </div><h6  class="formarlizar_letraL">Formalizado</h6></div>                      
                        // `;
                        formalizar.innerHTML += `<label class="cliente_active " style="position:relative;"><input class="checkb" type="checkbox" name="${n_oferta}" id="${id}"checked>Formalizado</label>`;
                    } else {
                        // formalizar.innerHTML += `
                        // <div class="pendiente_formalizar"> </div><h6 class="formarlizar_letra" >No formalizado</h6>  </div>
                        // `;
                        formalizar.innerHTML += `<label class="cliente_active " style="position:relative;"><input class="checkb" type="checkbox" name="${n_oferta}" id="${id}">Pendiente</label>
                        `;

                    }

                });
            localStorage.setItem("list_noOf",JSON.stringify(list_noOf));
            localStorage.setItem("nclient", JSON.stringify(listC));
            localStorage.setItem("nidsClient", JSON.stringify(listIds));

            listeners();
            return {primer,ultimo}
            }
        }
        const listeners = async () => {
            const vinculos = document.querySelectorAll('.letra_recuadro_info2');
            const checks = document.querySelectorAll('.checkb');
            vinculos.forEach(element => {
                element.addEventListener('click',()=>{
                    localStorage.setItem("clientSelect",element.textContent);
                    localStorage.setItem("clientSelectID",element.id);
                    location.hash='#/comercial/createoffer';
                })            
            })
            checks.forEach(check => {
                check.addEventListener('click', async ()=>{
                    const formalizado = check.checked;
                    const idoferta = check.id;
                    const name = check.name;
                    try {
                        await updateFormalizarOF(idoferta,formalizado); 
                    } catch (e){console.log(e)} ;
                    
                    if (formalizado){
                        const subject = 'VTEK Oferta Formalizada';
                        const body = `Oferta con Esquema = "${name}", formalizada y pendiente por asignar`;     
                        getTecnicoCoordinadorEmail().then( el => {
                            const docs = el.docs;
                            if (docs.length > 0) {
                                docs.forEach( async e => {
                                    const email = e.data().Email;
                                    console.log(email)
                                    await sendNotificateEmail(email, subject, body);
                                })
                            }
                        }).catch(e => console.log(e));                               
                    }
                })   
            })
        }        
    }

    location.hash == '#/comercial/infooffers' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})