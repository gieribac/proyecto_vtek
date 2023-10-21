import { querySnapExpertOfsForm } from './models/post.js';
const observerdatos = new MutationObserver(() => {

    const charge = () => {
        console.log('experto_creteofers');
        let ultimoDoc = null;
        let primerDoc = null;
        const ndoc = localStorage.getItem("noDoc");
        
        const d=document,
            oferta = d.getElementById('oferta'),
            fecha = d.getElementById('FechaEX'),
            hora = d.getElementById('HoraEX'),
            actividad = d.getElementById('ActividadEX'),
            formalizar = d.getElementById('formalizar'),
            btnSiguiente = d.getElementById('botonSiguiente'),
            btnAnterior = d.getElementById('botonAnterior');

        querySnapExpertOfsForm().then(d_ => {
            const docs = d_.docs;
            const limite = 10;
    
            const docsExperto = docs.filter(e => {
                const arr = [e.data().experto0, e.data().experto1, e.data().experto2, e.data().experto3, e.data().experto4];
                const bool = arr.includes(ndoc);
                return bool;
            });
            
            const docsPage1 = docsExperto.slice(0, limite);
            let registers = chargeDocs(docsPage1);
            ultimoDoc = registers.ultimo;
            primerDoc = registers.primer;
            btnSiguiente.addEventListener('click', () => {
                const indiceU = docsExperto.indexOf(ultimoDoc) + 1;
                const docs = docsExperto.slice(indiceU, indiceU + limite);
                let registers = chargeDocs(docs);
                ultimoDoc = registers.ultimo;
                primerDoc = registers.primer;
            })
            btnAnterior.addEventListener('click', () => {
                const indiceP = docsExperto.indexOf(primerDoc);
                const docs = docsExperto.slice(indiceP - limite, indiceP);
                let registers = chargeDocs(docs);
                ultimoDoc = registers.ultimo;
                primerDoc = registers.primer;
            })
        }).catch(e => console.log(e))

        const chargeDocs = (ds) => {

            if (ds.length > 0) {

                const ultimo = ds[ds.length - 1];
                const primer = ds[0];

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
                    const arrExp = [d.data().experto0, d.data().experto1, d.data().experto2, d.data().experto3, d.data().experto4],
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
                        formalizar.innerHTML += `<span><button type="button" class="btn btnazul" style="margin-bottom: 9px; margin-top: 5px; margin-right: 10px;"  disabled></button>evaluado</span>`;
                    } else {
                        formalizar.innerHTML += `<span><button id="${d.id}" name="${d.data().No_oferta}" type="button" class="btn btn_degrade btnEval" style="margin-bottom: 9px; margin-top: 5px; margin-right: 10px;"></button>evaluar</span>`;
                    }

                });

                listeners();
                return {primer, ultimo}
            }
        }

        const listeners = () => {
            const vinculos = d.querySelectorAll('.btnEval');
            vinculos.forEach(element => {
                element.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("clientSelect", element.name);
                    localStorage.setItem("clientSelectid", element.id);
                    location.hash = '#/experto/createeval';
                })

            })
        }

    }
    location.hash == '#/experto/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent, { childList: true })