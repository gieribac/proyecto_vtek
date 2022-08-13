import {querySnapComOfs, queryNextComOfs, queryNextntComOfs} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 

    const charge = () => {

        console.log("comercial_detallecliente.js")
        const d = document;
        const left = d.getElementById('cliente');
        const cliente = JSON.parse(localStorage.getItem("nclient"));
        
        cliente.forEach(d => {     
            console.log(d.Nombre_Compania);   

            left.innerHTML += `
            <h6 class="left" >${d.Nombre_Compania}</h6>`
        })

        const mostrarCliente = (clienteActual) => {

            const mcElements = d.querySelectorAll('.i_c');

            mcElements[0].textContent = clienteActual.Nombre_Compania;
            mcElements[1].textContent = clienteActual.Representante_Legal;
            mcElements[2].textContent = clienteActual.Direccion;
            mcElements[3].textContent = clienteActual.Cuidad;
            mcElements[4].textContent = clienteActual.Nombre_Responsable;
            mcElements[5].textContent = clienteActual.Cargo;
            mcElements[6].textContent = clienteActual.Tipo_Identificacion;
            mcElements[7].textContent = clienteActual.No_Identificacion;
            mcElements[8].textContent = clienteActual.Numero_Contacto;
            mcElements[9].textContent = clienteActual.Calificacion;
            mcElements[10].textContent = clienteActual.Email;
            mcElements[11].textContent = clienteActual.Nit;
            mcElements[12].textContent = clienteActual.Web;
            mcElements[13].textContent = clienteActual.estado;

        }
        
        const listeners = () => {
            const vinculos = document.querySelectorAll('.left');
            vinculos.forEach(element => {
                element.addEventListener('click',()=>{
                    vinculos.forEach(s => s.removeAttribute('style','font-weight: bold'));  
                    element.setAttribute('style','font-weight: bold');       
                    const clienteActual= cliente.find(e => e.Nombre_Compania==element.textContent);
                    mostrarCliente(clienteActual);                            
                })
            })
        }

        listeners();

    }

    location.hash == '#/comercial/detallecliente' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})
