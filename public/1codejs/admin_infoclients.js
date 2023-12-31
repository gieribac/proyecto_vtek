import {querySnap, queryNext,queryNextnt} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {
        const clienteA = document.getElementById('clienteA');
        const legalA = document.getElementById('legalA');
        const nitA = document.getElementById('nitA');
        const ncontactoA = document.getElementById('ncontactoA');

        const btnSiguiente = document.getElementById('botonSiguiente');
        const btnAnterior = document.getElementById('botonAnterior');

        let ultimoDoc = null;
        let primerDoc = null;

        querySnap().then((d) => {

            let registers = cargarDocs(d.docs);
            ultimoDoc = registers.ultimo;
            primerDoc = registers.primer;

            btnSiguiente.addEventListener('click',() => {
                try { 
                    queryNext(ultimoDoc).then((d) => {

                        registers = cargarDocs(d.docs); 
                        ultimoDoc = registers.ultimo;
                        primerDoc = registers.primer;   
                    }) 
                } catch {
                    console.log("catch")
                    let registers = cargarmsje();
                    ultimoDoc = d.docs[d.docs.length-1];
                    primerDoc = d.docs[0];
                }   
            })

            btnAnterior.addEventListener('click',() => {
                
                    queryNextnt(primerDoc).then((d) => {
                
                    registers = cargarDocs(d.docs.reverse());
                    ultimoDoc = registers.ultimo;
                    primerDoc = registers.primer; 
                
                })
                
            })
        })

        const cargarmsje = () => {
            clienteA.innerHTML = `No hay más registros disponibles`;
            legalA.innerHTML = ``;
            nitA.innerHTML = ``;
            ncontactoA.innerHTML = ``; 
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
                    clienteA.innerHTML += `

                    <h6 >${d.data().Nombre_Compania}</h6>
                    `;
                    legalA.innerHTML += `

                    <h6 >${d.data().Representante_Legal}</h6>
                    `;
                    nitA.innerHTML += `

                    <h6 >${d.data().Nit}</h6>
                    `;
                    ncontactoA.innerHTML += `

                    <h6 >${d.data().Numero_Contacto}</h6>
                    `;
                    
                });
            
            return {primer,ultimo}
            }
        }
    }

    location.hash == '#/admin/infoclients' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})

