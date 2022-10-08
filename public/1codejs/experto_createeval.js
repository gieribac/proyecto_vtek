import {uploadFile, getFileURL} from "./storage.js";
import {setOfEvalExpert, updateEval1OF} from "./models/post.js"
const observerdatos = new MutationObserver(() => {

    const charge = () => {
        console.log('experto_creteeval');
        const d = document,
            inputsText = d.querySelectorAll('textarea'),
            adjuntadores = d.querySelectorAll('.adjuntando2'),
            btnEnviar = d.getElementById('login'),
            camposT = ["solicitud","oferta_comercial","fichas_tecnicas","fotos","iso_9001","resultados_ensayos","etiquetado","carta_trazabilidad","actividades_complementarias","acta_muestreo","resultado_evaluacion","borrador_certificado"];

        const getData = () => {
            let dataT = {};
            const BreakError = {};
            try {
                inputsText.forEach((e,i)=> {
                    if (!Boolean(e.value)) {throw BreakError};
                    dataT[camposT[i]] = e.value;
                })
                return dataT;
            } catch (er){
                if (er == BreakError) {
                    Swal.fire(
                        'Error!',
                        `Debe llenar todos los campos`,
                        'error'
                    )
                } else throw er;
            }
        }

        const setFile = async (inputFile) => {
            if (inputFile.files[0]){
                const result = await uploadFile(inputFile.files[0]);
                const url = await getFileURL(result.ref);
                return url;
            }  
        }
        const getFiles = (dataF) => {
            adjuntadores.forEach(async (e,i)=> {
                const url = await setFile(e);
                Boolean(url) && (() => dataF[camposT[i]+'F'] = url)();                
            })
            return dataF;
        }  
        
        btnEnviar.addEventListener('click', async e => {
            let dataT = getData();
            if (Boolean(dataT)){               
                let dataF = getFiles(dataT);
                dataF.no_oferta = localStorage.getItem("clientSelect");
                dataF.expert_doc = localStorage.getItem("noDoc");
                const id = localStorage.getItem("clientSelectid");
                setOfEvalExpert(id,dataF).then(
                    await updateEval1OF(id)
                ).then(
                    Swal.fire(
                        '¡Buen trabajo!',
                        'Se ha enviado la Evaluación',
                        'success'
                    )
                ).then(
                    location.hash = '#/experto/createoffer'
                ).catch( e => {
                    console.log(e);
               
                    Swal.fire(
                        '¡Error!!',
                        `¡No se enviado, ha ocurrido un error`,
                        'error'
                    )
                }
                )                   
            }            
        })
    }
    location.hash == '#/experto/createeval' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent, { childList: true })