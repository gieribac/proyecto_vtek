import { setFabrica } from "./models/post";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {
        const formulario = document.getElementById('formcrearFabrica');
        const save = document.getElementById('guardarCF');
        save.disabled = true;
        const entradas = document.querySelectorAll('input');
        
        
        entradas.forEach(ev=>{  
            let estadoentradas = true;
                
            ev.addEventListener('keyup',()=>{
                entradas.forEach(e=>{  
                    estadoentradas = estadoentradas && e.value.length > 0;
                    console.log(`len= ${e.value.length}`)
        
                })
                save.disabled = !estadoentradas;
                estadoentradas && habilitar();
            });
            
        });
        
        const habilitar = () => {
            
            formulario.addEventListener("submit",(e)=>{
                e.preventDefault();
                let datosForm = new FormData(formulario);
                let datos = {
                    direccion: datosForm.get("direccionCF"),
                    nombre_compania: datosForm.get("nombreCompaniaCF"),
                    pais: datosForm.get("paisCF"),
                    correo: datosForm.get("correoCF"),
                    ciudad: datosForm.get("ciudadCF"),
                    contacto: datosForm.get("contactoCF"),
                    telefono: datosForm.get("telefonoCF")   
                }
                console.log(datos)
                // setFabrica(datos).then(console.log('Fábrica creada')).catch(e=>{console.log(`Fabrica no creada. Error: ${e}`)})
        
                // setTimeout(()=>{    
                // },3000)
                // formulario.reset(); 
                save.disabled = true;   
            })
        }
    }

location.hash == '#/comercial/createfactorie' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})