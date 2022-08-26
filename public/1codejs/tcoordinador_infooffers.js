import {querySnapComOfs, queryNextComOfs, queryNextntComOfs} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
   
    
    const charge = () => {
        console.log('tcoordinador_infoofers');
        const d = document;
        d.getElementById('btnNuevo').remove();
        const oferta = d.getElementById('oferta'),
        cliente = d.getElementById('cliente'),
        producto = d.getElementById('producto'),
        estado = d.getElementById('estado'),
        formalizar = d.getElementById('formalizar'),
        btnSiguiente = d.getElementById('botonSiguiente'),
        btnAnterior = d.getElementById('botonAnterior');

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

            let list_id = [];

                ds.forEach(d => {
                    
                    list_id.push(d.id);
                    
                    oferta.innerHTML += `
                    <h6 class = "letra_recuadro_info2">${d.id}</h6>
                    `;
                    cliente.innerHTML += `
                    <h6 >${d.data().ClienteOF}</h6>
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
            localStorage.setItem("nidsClient",JSON.stringify(list_id));
            listeners();
            return {primer,ultimo}
            }
        }
        const listeners = () => {
            const vinculos = d.querySelectorAll('.letra_recuadro_info2');
            vinculos.forEach(element => {
            element.addEventListener('click',()=>{
                localStorage.setItem("clientSelect",element.textContent);
                location.hash='#/tcoordinador/createasignacion';
            })
        })
        }        
    }

    location.hash == '#/tcoordinador/infooffers' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})