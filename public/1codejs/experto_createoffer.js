import {querySnapExpertOfsForm} from './models/post.js';
const observerdatos = new MutationObserver(()=>{ 
   
    
    const charge = () => {
        console.log('experto_creteofers');
        let ultimoDoc = null;
        let primerDoc = null;
        const oferta = document.getElementById('oferta'),
        fecha = document.getElementById('FechaEX'),
        hora = document.getElementById('HoraEX'),
        actividad = document.getElementById('ActividadEX'),
        formalizar = document.getElementById('formalizar'),
        btnSiguiente = document.getElementById('botonSiguiente'),
        btnAnterior = document.getElementById('botonAnterior');


        querySnapExpertOfsForm().then( d => {
            const docs = d.docs;
            // docs.forEach(d => {
            //     console.log(d.data());
            // })
            const ndoc = "1045789007";
            const docsExperto = docs.filter(e => {
                const arr = [e.data().experto0,e.data().experto1,e.data().experto2,e.data().experto3,e.data().experto4];
                const bool = arr.includes(ndoc);
                return bool;
                }
            );
            // docsExperto.forEach(d => {
            //     console.log(d.data());
            // })
            const arreglo = ["oferta0","oferta1","oferta2","oferta3","oferta4","oferta5","oferta6","oferta7","oferta8"];
            const limite = 3;

            const docsPage1 = docsExperto.slice(0,limite);



            const chargeDocs = (ds) => {
                if(ds.length > 0){

                    const ultimo = ds[ds.length-1];
                    const primer = ds[0];

                    console.log(ds);

                    oferta.innerHTML = ``;
                    fecha.innerHTML = ``;
                    hora.innerHTML = ``;
                    actividad.innerHTML = ``;
                    formalizar.innerHTML = ``;

                    let list_id = [],
                    l_id = [];

                        ds.forEach(d => {
                            
                            list_id.push(d.data().No_oferta);
                            l_id.push(d.id);
                            const arrExp = [d.data().experto0,d.data().experto1,d.data().experto2,d.data().experto3,d.data().experto4],
                            fecha_ = [d.data().fecha0, d.data().fecha1, d.data().fecha2, d.data().fecha3, d.data().fecha4],
                            hora_ = [d.data().hora0, d.data().hora1, d.data().hora2, d.data().hora3, d.data().hora4],
                            actividad_ = [d.data().actividad0, d.data().actividad1, d.data().actividad2, d.data().actividad3, d.data().actividad4],
                            ind = arrExp.indexOf(ndoc);
                            oferta.innerHTML += `
                            <h6 class = "letra_recuadro_info2">${d.data().No_oferta}</h6>
                            `;
                            fecha.innerHTML += `
                            <h6 >${fecha_[ind]}</h6>
                            `;
                            hora.innerHTML += `
                            <h6 class="letra_recuadro_info3" >${hora_[ind]}</h6>
                            `;
                            actividad.innerHTML += `
                            <h6 >${actividad_[ind]}</h6>
                            `;

                            if (d.data().evaluado) {
                                formalizar.innerHTML += `<span><button type="button" class="btn btnazul" style="margin-bottom: 9px; margin-top: 5px;"  disabled></button>‎ ‎ ‎ ‎evaluado</span>`;
                            } else {
                                formalizar.innerHTML += `<span><button id="${d.id}" name="${d.data().No_oferta}" type="button" class="btn btn_degrade" style="margin-bottom: 9px; margin-top: 5px;"></button>‎ ‎ ‎ ‎evaluar‎</span>`;
                            }
                            

                        });
                        


                    

                    return {primer,ultimo}
                } 
            }

            let registers = chargeDocs(docsPage1);
            ultimoDoc = registers.ultimo;
            primerDoc = registers.primer;

            btnSiguiente.addEventListener('click',()=>{

                const indiceU = docsExperto.indexOf(ultimoDoc)+1;
                const docs = docsExperto.slice(indiceU,indiceU+limite);
                let registers = chargeDocs(docs);
                ultimoDoc = registers.ultimo;
                primerDoc = registers.primer;





            })

            btnAnterior.addEventListener('click',()=>{

                const indiceP = docsExperto.indexOf(primerDoc);
                const docs = docsExperto.slice(indiceP-limite,indiceP);
                let registers = chargeDocs(docs);
                ultimoDoc = registers.ultimo;
                primerDoc = registers.primer;

            })

            
            





        }).catch(e => console.log(e))
       

        // querySnapComOfsForm().then( d => {

        //     let registers = cargarDocs(d.docs);
        //     ultimoDoc = registers.ultimo;
        //     primerDoc = registers.primer;

        //     btnSiguiente.addEventListener('click',() => {
                
        //             queryNextComOfsForm(ultimoDoc).then( d => {

        //                 registers = cargarDocs(d.docs); 
        //                 ultimoDoc = registers.ultimo;
        //                 primerDoc = registers.primer;   
        //             }) 

        //     })

        //     btnAnterior.addEventListener('click',() => {
                
        //             queryNextntComOfsForm(primerDoc).then((d) => {
                
        //             registers = cargarDocs(d.docs.reverse());
        //             ultimoDoc = registers.ultimo;
        //             primerDoc = registers.primer; 
                
        //         })
                
        //     })
        // }).then ((e) => console.log(e))
        
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
            let l_id = [];
            let esquemas = [];

                ds.forEach(d => {
                    
                    list_id.push(d.data().No_oferta);
                    const esquema = d.data().esquemaOF;
                    const st = d.data().Estado === undefined ? " - " : d.data().Estado;
                    esquemas.push(esquema);
                    l_id.push(d.id);
                    oferta.innerHTML += `
                    <h6 class = "letra_recuadro_info2">${d.data().No_oferta}</h6>
                    `;
                    cliente.innerHTML += `
                    <h6 >${d.data().ClienteOF}</h6>
                    `;
                    producto.innerHTML += `
                    <h6 class="letra_recuadro_info3" >${d.data().productoOF}</h6>
                    `;
                    estado.innerHTML += `
                    <h6 >${st}</h6>
                    `;

                    if (d.data().experto0) {
                        formalizar.innerHTML += `<span><button type="button" class="btn btnazul" style="margin-bottom: 9px; margin-top: 5px;" disabled></button>‎ ‎ ‎ ‎ asignado </span>`;
                    } else {
                        formalizar.innerHTML += `<span><button id="${d.id}" name="${d.data().No_oferta}" type="button" class="btn btn_degrade" style="margin-bottom: 9px; margin-top: 5px;"></button>‎ ‎ ‎ ‎ asignar‎ </span>`;
                    }
                    

                });
            // localStorage.setItem("nidsClient",JSON.stringify(esquemas));
            // localStorage.setItem("offersNo",JSON.stringify(list_id));
            // localStorage.setItem("offersID",JSON.stringify(l_id));
            listeners();
            return {primer,ultimo}
            }
        }
        // const listeners = () => {
        //     const vinculos = d.querySelectorAll('.btn_degrade');
        //     vinculos.forEach(element => {
        //     element.addEventListener('click',()=>{
        //         console.log(element)
        //         localStorage.setItem("clientSelect",element.name);
        //         localStorage.setItem("clientSelectid",element.id);
        //         location.hash='#/tcoordinador/createasignacion';
        //     })
        // })
        // }        
    }

    location.hash == '#/experto/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})