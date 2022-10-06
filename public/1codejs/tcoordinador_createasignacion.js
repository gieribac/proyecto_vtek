import {querySnapTcAsignExpert, setAsingExpert} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
    
   
    
    const charge = () => {
        console.log('tcoordinador_createasignacion');
        const d = document;
        const despliegueOfertas= d.getElementById('oferta_'),
        filas = d.getElementsByClassName('rowTemp'),
        cliente = JSON.parse(localStorage.getItem("offersNo")),//no_ofertas
        clientSelect = localStorage.getItem("clientSelect"),
        clientSelectid = localStorage.getItem("clientSelectid"),
        clientID = JSON.parse(localStorage.getItem("offersID")),//id_ofertas
        expertoAsignado = d.getElementsByClassName('experto_asignado_'),
        btnQuitarFile = d.getElementById('quitar'),
        btnAddFile = d.getElementById('anadir');

        const getData = () => {
            const nameCampos = [['fecha0','hora0','actividad0','experto0'],['fecha1','hora1','actividad1','experto1'],['fecha2','hora2','actividad2','experto2'],['fecha3','hora3','actividad3','experto3'],['fecha4','hora4','actividad4','experto4']];
            let allRows = Array.prototype.slice.apply(d.querySelectorAll('#container_rows .row')).slice(0,1);
            let allRowsT = Array.prototype.slice.apply(d.querySelectorAll('#container_rows .row')).filter(c => !c.hasAttribute('style','display:none'));
            allRows = allRows.concat(allRowsT);
            const data = {};            
            allRows.forEach((e0,m) => {
                e0.children.forEach((e1,n) => {
                    let valor;
                    if (e1.children[0].nodeName == "DIV"){
                        valor = e1.children[0].children[0];
                    } else {
                        valor = e1.children[0];
                    }
                    let key = nameCampos[m][n];
                    data[key] = valor.value;
                })
            })
            return data;
        };


        d.getElementById('asignar').addEventListener('click',()=>{
            
            const data = getData();
            console.log(data)
            const dataValuesNull = Object.values(data).filter(v => v.length < 1);
            if (dataValuesNull.length > 0) {
                Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: '¡Diligencie todos los campos!',
                          })
            } else {
                try {
                    const id = despliegueOfertas.value;
                    setAsingExpert(id,data);
                    console.log(id)
                    console.log(data)
                    Swal.fire('Bien',
                            'Asignación guardada',
                            'success')
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡Error creando asignación!',
                      })
                }
            }



            // if (experto.length > 0){    
            //     const data = {}, 
            //     id = despliequeOfertas.value;
            //     // localStorage.setItem("offersID",JSON.stringify(list_id));
            //     // preevaluadorAsignado.value.length > 0 && (() => {data.preevaluador = preevaluadorAsignado.value})();          
            //     data.experto = experto;
            //     console.log(id);
            //     console.log(data);
            //     setAsingExpert(id, data);
            //     Swal.fire(
            //         'Bien',
            //         'Evaluador asignado',
            //         'success'
            //       )
            // } else {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Oops...',
            //         text: 'Debe seleccionar Experto',
            //       })
            // }
        })
        
        despliegueOfertas.innerHTML = `<option value="${clientSelectid}">${clientSelect}</option>`
        cliente.forEach((d,i)=> {      

            despliegueOfertas.innerHTML += `
            <option value="${clientID[i]}">${cliente[i]}</option>`
        })

        querySnapTcAsignExpert().then(d => {
            cargarDocs(d.docs);
        }).catch((e) => console.log(e))

        const cargarDocs = ds => {
            
            if(ds.length > 0){
                expertoAsignado.forEach(e=> {
                    e.innerHTML = `<option value="" selected>Experto</option>`;
                    ds.forEach(d => {
                        e.innerHTML += `<option value="${d.data().NoIdentificacion}">${d.data().NoIdentificacion}</option>`;
                    });

                })                   

            }
        }

        btnAddFile.addEventListener('click',()=>{
            const BreakError = {};
            try {
            filas.forEach(e => {
                const hasAtrSDN = e.hasAttribute("style","display:none");
                console.log(e)
                if (hasAtrSDN){
                    e.removeAttribute("style","display:none")
                    throw BreakError;
                };
            });
            } catch (er){
                if (er !== BreakError) throw er;
            }
        })

        btnQuitarFile.addEventListener('click',()=>{
            const BreakError = {};
            try {
            filas.forEach((e,i) => {
                const hasAtrSDN = e.hasAttribute("style","display:none");
                if (!hasAtrSDN){

                    
                    filas[i].setAttribute("style","display:none");
                    throw BreakError;
                };
            });
            } catch (er){
                if (er !== BreakError) throw er;
            }
        })
        

        flatpickr("input[Type=datetime-local1]",{

            minDate: "today",


        });
        flatpickr("input[Type=datetime-local2]",{
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",


        });


    }

    location.hash == '#/tcoordinador/createasignacion' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})