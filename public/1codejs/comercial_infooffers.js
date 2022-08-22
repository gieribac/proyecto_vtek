import {querySnapComOfs, queryNextComOfs, queryNextntComOfs} from './models/post.js';
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

            const mapOf = ds.data().map(reg => reg.Oferta);
            localStorage.setItem("of",mapOf);

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
                    <h6><b>${d.data().Oferta}</b></h6>
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
            localStorage.setItem("nidsClient",JSON.stringify(list_id));
            localStorage.setItem("nclient", JSON.stringify(listC));
            listeners();
            return {primer,ultimo}
            }
        }
        const listeners = () => {
            const vinculos = document.querySelectorAll('h6 > b');
            vinculos.forEach(element => {
            element.addEventListener('click',()=>{
                localStorage.setItem("clientSelect",element.textContent);
                location.hash='#/comercial/createoffer';
            })
        })
        }        
    }

    location.hash == '#/comercial/infooffers' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})