import { setOferta, queryOferta } from "./models/post";
import {uploadFile, getFileURL} from "./storage.js";

const observerdatos = new MutationObserver(()=>{ 
    
    const charge = () => {     
        
        
        ///escoger oferta///
        const ds = localStorage.getItem("of",mapOf)
        ds.forEach(d => {  
            viewO.innerHTML = `
            <h6 >${d.data().Oferta}</h6>`
        })
        //ver "navegacion por tabs" https://youtu.be/jOj6Ouvlq6o?list=PLIe7HjzbbZwOLhbL08lqTI-sdcVKuwga4
        const viewO = document.getElementById('viewo');//contenedor de lista de ofertas
        let ofertas = Array.prototype.slice.apply(document.querySelectorAll("#viewo > h6"));
        viewO.addEventListener('click', e => {
            if (e.target.classList.contains("h6")){
                let i = ofertas.indexOf(e.target);
                ofertas.map( t => t.classList.remove("active_o"));
                ofertas[i].classList.add("active_o");


            }
        })
        let ofertaactiva = document.getElementsByClassName("active_o");
        queryOferta(ofertaactiva.value).then( ds => {
            const cliente = document.getElementsByName("cliente");
            const producto = document.getElementsByName("producto");
            const fabrica = document.getElementsByName("fabrica");
            const vigencia = document.getElementsByName("vigencia");
            const esquema = document.getElementsByName("esquema");
            const vs = document.getElementsByName("vs");
            const centrocosto = document.getElementsByName("centrocosto");
            const comercial = document.getElementsByName("comercial");

            ds.forEach(d => {
                cliente.placeholder = d.data().Cliente;
                producto.placeholder = d.data().Producto;
                fabrica.placeholder = d.data().Fabrica;
                vigencia.placeholder = d.data().Vigencia;
                esquema.placeholder = d.data().Esquema;
                vs.placeholder = d.data().Vigilancia_Seguimiento;
                centrocosto.placeholder = d.data().Centro_Costo;
                comercial.placeholder = d.data().Comercial;
             })  


        })
        //escuchar evento click de boton "nuevo, entonces:
        //ejecutar ofertas.map( t => t.classList.remove("active_o"))
        //formulario.reset()

        //boton de adjuntar//
        postForm.addEventListener('submit', async e => {
            e.preventDefault();
          
            const inputFile = document.getElementById('adjuntar');
          
            let post = {
              content: postForm['content'].value
            }
          
            if (inputFile.files[0]){
              const result = await uploadImage(inputFile.files[0]);
              const url = await getImageURL(result.ref);
              console.log(url);
              post.image = url;
            }
          
            savePost(post);
          })


        //validacion de formulario//
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

                const inputFile = document.getElementById('adjuntar');
            
                if (inputFile.files[0]){
                const result = await uploadFile(inputFile.files[0]);
                const url = await getFileURL(result.ref);
                datos.file = url;
                }

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