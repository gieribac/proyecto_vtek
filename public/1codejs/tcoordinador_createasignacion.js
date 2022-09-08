import {querySnapTcAsignExpert, setAsingExpert} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
   
    
    const charge = () => {
        console.log('tcoordinador_createasignacion');
        const d = document;
        const despliequeOfertas= d.getElementById('oferta_'),
        cliente = JSON.parse(localStorage.getItem("offersID")),
        clientSelect = localStorage.getItem("clientSelect"),
        clientSelectid = localStorage.getItem("clientSelectid"),
        clientID = JSON.parse(localStorage.getItem("offersID")),
        expertoAsignado = d.getElementById('experto_asignado_'),
        preevaluadorAsignado = d.getElementById('preevaluador_');
        d.getElementById('asignar').addEventListener('click',()=>{
            const experto = expertoAsignado.value;
            if (experto.length > 0){    
                const data = {}, 
                id = despliequeOfertas.value;
                preevaluadorAsignado.value.length > 0 && (() => {data.preevaluador = preevaluadorAsignado.value})();          
                data.experto = experto;
                console.log(id);
                console.log(data);
                setAsingExpert(id, data);
            } else {
                alert("Debe seleccionar Experto")
            }
        })
        
        despliequeOfertas.innerHTML = `<option value="${clientSelectid}">${clientSelect}</option>`
        cliente.forEach((d,i)=> {      

            despliequeOfertas.innerHTML += `
            <option value="${clientID[i]}">${cliente[i]}</option>`
        })

        querySnapTcAsignExpert().then(d => {
            cargarDocs(d.docs);
        }).then ((e) => console.log(e))

        const cargarDocs = ds => {
            
            if(ds.length > 0){
                expertoAsignado.innerHTML = `<option value="" selected>Experto</option>`;
                preevaluadorAsignado.innerHTML = `<option value="">Preevaluador</option>`;

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