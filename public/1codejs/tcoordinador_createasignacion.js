import {querySnapTcAsignExpert} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
   
    
    const charge = () => {
        console.log('tcoordinador_createasignacion');
        const d = document;
        const despliequeOfertas= d.getElementById('oferta_'),
        cliente = JSON.parse(localStorage.getItem("nidsClient")),
        clientSelect = localStorage.getItem("clientSelect"),
        expertoAsignado = d.getElementById('experto_asignado_'),
        preevaluadorAsignado = d.getElementById('preevaluador_');
        
        despliequeOfertas.innerHTML = `<option selected>${clientSelect}</option>`
        cliente.forEach((d,i)=> {      

            despliequeOfertas.innerHTML += `
            <option value="${cliente[i]}">${cliente[i]}</option>`
        })

        querySnapTcAsignExpert().then(d => {
            console.log(d.docs)
            cargarDocs(d.docs);

            

        }).then ((e) => console.log(e))

        const cargarDocs = ds => {
            
            if(ds.length > 0){
                expertoAsignado.innerHTML = `<option selected>Experto</option>`;
                preevaluadorAsignado.innerHTML = `<option selected>Preevaluador</option>`;

                    ds.forEach(d => {
                        expertoAsignado.innerHTML += `<option value="${d.data().NoIdentificacion}">${d.data().NoIdentificacion}</option>`;
                        preevaluadorAsignado.innerHTML += `<option value="${d.data().NoIdentificacion}">${d.data().NoIdentificacion}</option>`;
                    });

            }
        }


    }

    location.hash == '#/tcoordinador/createasignacion' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})