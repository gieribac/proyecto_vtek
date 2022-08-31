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
            let list_id = [];

                ds.forEach(d => {
                    
                    list_id.push(d.id);
                    listC.push(d.data());  
                    
                    oferta.innerHTML += `
                    <h6 class = "letra_recuadro_info2">${d.id}</h6>
                    `;
                    cliente.innerHTML += `
                    <h6 >${d.data().ClienteOF}</h6>
                    `;
                    producto.innerHTML += `
                    <h6 >${d.data().productoOF}</h6>
                    `;
                    estado.innerHTML += `
                    <h6 >${d.data().Estado}</h6>
                    `;

                    if (d.data().Formalizar) {
                        // formalizar.innerHTML += `
                        // <div class="listo_formalizar"> </div><h6  class="formarlizar_letraL">Formalizado</h6></div>                      
                        // `;
                        formalizar.innerHTML += `<label class="cliente_active " style="position:relative;"><input class="checkb" type="checkbox" id="${d.id}"checked>Formalizado</label>`;
                    } else {
                        // formalizar.innerHTML += `
                        // <div class="pendiente_formalizar"> </div><h6 class="formarlizar_letra" >No formalizado</h6>  </div>
                        // `;
                        formalizar.innerHTML += `<label class="cliente_active " style="position:relative;"><input class="checkb" type="checkbox" id="${d.id}">Pendiente</label>
                        `;

                    }

                });
            localStorage.setItem("nidsClient",JSON.stringify(list_id));
            localStorage.setItem("nclient", JSON.stringify(listC));
            listeners();
            return {primer,ultimo}
            }
        }
        const listeners = () => {
            const vinculos = document.querySelectorAll('.letra_recuadro_info2');
            const checks = document.querySelectorAll('.checkb');
            vinculos.forEach(element => {
            element.addEventListener('click',()=>{
                localStorage.setItem("clientSelect",element.textContent);
                location.hash='#/comercial/createoffer';
            })
            checks.forEach(check => {
                check.addEventListener('click', async ()=>{
                    const formalizado = check.checked;
                    const idoferta = check.id;
                    const subject = 'VTEK Oferta Formalizada';
                    const body = `Oferta con id = ${check.id}, pendiente por asignar`;
                    await updateFormalizarOF(idoferta,formalizado);  
                    getTecnicoCoordinadorEmail().then(el => {
                        const docs = el.docs;                    
                        // console.log(docs);
                        if (docs.length > 0) {
                            docs.forEach( async e => {
                                const email = e.data().Email;
                                console.log(email)
                                if (formalizado){await sendNotificateEmail(email, subject, body)};
                            })
                        }
                    }).catch(e => {
                        console.log(e);
                    })
                    
                })
                    
            })
        })
        }        
    }

    location.hash == '#/comercial/infooffers' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})