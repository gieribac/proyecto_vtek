import {uploadFile, getFileURL} from "./storage.js";
const observerdatos = new MutationObserver(() => {

    const charge = () => {
        console.log('experto_creteeval');
        const d = document,
            inputsText = d.querySelectorAll('textarea'),
            adjuntadores = d.querySelectorAll('.adjuntando2'),
            btnEnviar = d.getElementById('login'),
            camposT = ["solicitud","oferta_comercial","fichas_tecnicas","fotos","iso_9001","resultados_ensayos","etiquetado","carta_trazabilidad","actividades_complementarias","acta_muestreo","resultado_evaluacion","borrador_certificado"],
            camposF = ["solicitudF","oferta_comercialF","fichas_tecnicasF","fotosF","iso_9001F","resultados_ensayosF","etiquetadoF","carta_trazabilidadF","actividades_complementariasF","acta_muestreoF","resultado_evaluacionF","borrador_certificadoF"];
        let files;

        const getData = () => {
            let dataT = {};
            inputsText.forEach((e,i)=> {
                dataT[camposT[i]] = e.value;
            })
            return dataT;
        }

        btnEnviar.addEventListener('click', e => {
            const dataT = getData();
            console.log(dataT);
        })

        const setFile = async (inputFile) => {
            if (inputFile.files[0]){
                const result = await uploadFile(inputFile.files[0]);
                const url = await getFileURL(result.ref);
                return url;
            }  
        }
        const getFiles = () => {
            let dataF = {};
            adjuntadores.forEach((e,i)=> {
                const url = setFile(e);
                dataF[camposF[i]] = url;
            })
            return dataF;
        }       

    }
    location.hash == '#/experto/createeval' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent, { childList: true })