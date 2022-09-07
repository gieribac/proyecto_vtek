import {querySnapComOfs, queryNextComOfs, queryNextntComOfs} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
   
    
    const charge = () => {
        console.log('tcoordinador_infoofers');
        const d = document;
        d.getElementById('titlecol5').textContent = "Asignación"
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
            let esquemas = [];

                ds.forEach(d => {
                    
                    list_id.push(d.data().No_oferta);
                    const esquema = d.data().esquemaOF;
                    const st = d.data().Estado === undefined ? " - " : d.data().Estado;
                    esquemas.push(esquema);
                    console.log(d.id);
                    oferta.innerHTML += `
                    <h6 class = "letra_recuadro_info2">${d.data().No_oferta}</h6>
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

                   
                    formalizar.innerHTML += `
                            <button id="${d.id}" name="${d.data().No_oferta}">Asignar</button>`;

                    

                });
            localStorage.setItem("nidsClient",JSON.stringify(esquemas));
            localStorage.setItem("offersID",JSON.stringify(list_id));
            listeners();
            return {primer,ultimo}
            }
        }
        const listeners = () => {
            const vinculos = d.querySelectorAll('button');
            vinculos.forEach(element => {
            element.addEventListener('click',()=>{
                localStorage.setItem("clientSelect",element.name);
                localStorage.setItem("clientSelectid",element.id);
                location.hash='#/tcoordinador/createasignacion';
            })
        })
        }        
    }

    location.hash == '#/tcoordinador/infooffers' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})