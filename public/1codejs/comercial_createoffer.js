import { setOferta } from "./models/post";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {
        const formulario = document.getElementById('formCO');
        const save = document.getElementById('guardarO');
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
            
            formulario.addEventListener("submit", e => {
                e.preventDefault();
                let datosForm = new FormData(formulario);
                let datos = {
                    Cliente: datosForm.get("cliente"),
                    Producto: datosForm.get("producto"),
                    Fabrica: datosForm.get("fabrica"),
                    Vigencia: datosForm.get("vigencia"),
                    Esquema: datosForm.get("esquema"),
                    Vigilancia_Seguimiento: datosForm.get("vs"),
                    Centro_Costo: datosForm.get("centrocosto"),
                    Comercial: datosForm.get("comercial")
                }
                console.log(datos)
                // setOferta(datos).then(console.log('Fábrica creada')).catch(e=>{console.log(`Fabrica no creada. Error: ${e}`)})
        
                // setTimeout(()=>{    
                // },3000)
                // formulario.reset(); 
                save.disabled = true;   
            })
        }
    }

location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})