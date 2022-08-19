import { setFabrica } from "./models/post.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {
        
        const formulario = document.getElementById('formcrearFabrica')
        const save = document.getElementById('guardarCF');
        save.disabled = true;
        const entradas = document.querySelectorAll('input');
        console.log(entradas)
        
        const verRequired = () => {
            let list = [];
            entradas.forEach(ev=>{list.push(ev.value.length <= 0)});
            const estadoentradas = list.includes(true);
            save.disabled = estadoentradas;
            !estadoentradas && habilitar();
        }
        
        entradas.forEach(ev=>{
            ev.addEventListener('keyup',verRequired);
        })

        const setDataCF = () => {
            let datosForm = new FormData(formulario);
            let datos = {                    
                nombre_compania: datosForm.get("nombreCompaniaCF"),
                representante_legal: datosForm.get("replegalCF"),
                direccion: datosForm.get("DireccionCF"),
                nombre_responsable: datosForm.get("nombreRespCF"),
                cargo: datosForm.get("cargoCF"),
                contacto: datosForm.get("contactoCF"),
                telefono: datosForm.get("telefonoCF")   
            }
            return datos;
        }
        
        const habilitar = () => {       
            
            save.addEventListener("click", e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                const datos = setDataCF();
                console.log(datos)
                setFabrica(datos).then(() => {
                    console.log('Fábrica creada');
                    formulario.reset(); 
                    // document.querySelector('.avisopSave').textContent = "El formulario anterior fue enviado correctamente"
                    Swal.fire(
                        '¡Muy Bien!',
                        '¡El formulario fue enviado con exito!',
                        'success'
                      )
                }
                ).catch(e=>{
                    // document.querySelector('.avisopSave').textContent = `Error, formulario anterior no enviado; ${errorCode}, ${errorMessage}`
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: errorMessage,
                        
                      })
                
                })
                save.disabled = true;   
            })
        }
    }

location.hash == '#/comercial/createfactorie' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})