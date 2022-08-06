import {querySnapComOfs, queryNextComOfs, queryNextntComOfs} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {
        const oferta = document.getElementById('oferta');
        const cliente = document.getElementById('cliente');
        const producto = document.getElementById('producto');
        const estado = document.getElementById('estado');
        const formalizar = document.getElementById('formalizar');

        const btnSiguiente = document.getElementById('botonSiguiente');
        const btnAnterior = document.getElementById('botonAnterior');

        let ultimoDoc = null;
        let primerDoc = null;

        querySnapComOfs().then((d) => {

            let registers = cargarDocs(d.docs);
            ultimoDoc = registers.ultimo;
            primerDoc = registers.primer;

            btnSiguiente.addEventListener('click',() => {
                try { 
                    queryNextComOfs(ultimoDoc).then((d) => {

                        registers = cargarDocs(d.docs); 
                        ultimoDoc = registers.ultimo;
                        primerDoc = registers.primer;   
                    }) 
                } catch {
                    
                    let registers = cargarmsje();
                    ultimoDoc = d.docs[d.docs.length-1];
                    primerDoc = d.docs[0];
                }   
            })

            btnAnterior.addEventListener('click',() => {
                
                    queryNextntComOfs(primerDoc).then((d) => {
                
                    registers = cargarDocs(d.docs.reverse());
                    ultimoDoc = registers.ultimo;
                    primerDoc = registers.primer; 
                
                })
                
            })
        }).then ((e) => console.log(e))

        const cargarmsje = () => {
            oferta.innerHTML = `No hay más registros disponibles`;
            cliente.innerHTML = ``;
            producto.innerHTML = ``;
            estado.innerHTML = ``; 
            formalizar.innerHTML = ``; 
        }
        const cargarDocs = (ds) => {
            
            if(ds.length > 0){

            const ultimo = ds[ds.length-1];
            const primer = ds[0];
            clienteA.innerHTML = ``;
            legalA.innerHTML = ``;
            nitA.innerHTML = ``;
            ncontactoA.innerHTML = ``; 
                ds.forEach(d => {
                    oferta.innerHTML += `

                    <h6 >${d.data().Oferta}</h6>
                    `;
                    cliente.innerHTML += `

                    <h6 >${d.data().Cliente}</h6>
                    `;
                    producto.innerHTML += `

                    <h6 >${d.data().Producto}</h6>
                    `;
                    estado.innerHTML += `

                    <h6 >${d.data().Estado}</h6>
                    `;

                    if (d.data().Formalizar = "Formalizado" ) {
                        formalizar.innerHTML += `
                        <div class="listo_formalizar"> </div><h6  class="formarlizar_letraL">${d.data().Formalizar}</h6></div>                      
                        `;

                        
                    } else {
                        formalizar.innerHTML += `

                        <div class="pendiente_formalizar"> </div><h6 class="formarlizar_letra" >${d.data().Formalizar}</h6> </div>
                        `;

                    }
                   
                    
                });
            
            return {primer,ultimo}
            }
        }
    }

    location.hash == '#/comercial/infooffers' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})

