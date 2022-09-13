import {setOffer, setProduct} from './post.js';

const observerdatos = new MutationObserver(()=>{ 
const charge = () => {
    let cuenta = 0;
    const  generateRandomString = () => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345689 _';
        let result1= Math.random().toString(36).substring(0,5);       

        return result1;
    }

const data =  {Juguetes:'Resolución 0686 de 2018 Por la cual se expide el reglamento técnico que deben cumplir los juguetes y sus accesorios, que se fabriquen, importen y comercialicen en el territorio nacional',
Baterias_Alcalinas:'Resolución 0721 de 2018 por la cual se expide el Reglamento Técnico para Pilas Zinc-Carbón y Alcalinas que se importen o fabrique  nacionalmente para su comercialización en Colombia y Resolución No. 2271 de 2019 Por la cual se modifica parcialmente la Resolución No. 0721 de 2018',
Baterias_Zinc_Carbon:'Resolución 0721 de 2018 por la cual se expide el Reglamento Técnico para Pilas Zinc-Carbón y Alcalinas que se importen o fabriquen nacionalmente para su comercialización en Colombia y Resolución No. 2271 de 2019 Por la cual se modifica parcialmente la Resolución No. 0721 de 2018',
Cintas_Aislante_Electricas:'Numerales 20 y 20.9.1 de  la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Clavijas:'Numerales 20 y 20.10.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Adaptador_3_A_2:'Numerales 20 y 20.10.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Tomacorrientes:'Numerales 20 y 20.10.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Interruptor_Automatico_De_Baja_Tension:'Numerales 20 y 20.16.2.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Rele_Termico:'Numerales 20 y 20.16.2.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Interruptor_Manual:'Numerales 20 y 20.16.3.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Multitoma:'Numerales 20 y 20.18.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Motores_Electricos:'Numerales 20 y 20.21.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Generadores_Electricos__Plantas_Electricas__Grupos_Electrogenos:'Numerales 20 y 20.21.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Electrobomba:'Numerales 20 y 20.21.1 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Paneles_Solares_Fotovoltaicos:'Numerales 20 y 20.22 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Fuentes_Led:'Numerales 300 y 310.9 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2016',
Tubos_Led:'Numerales 300 y 310.9 de lla Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2016',
Luminarias_De_Uso_Exterior:'Numerales 300, 320 y 321 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2017',
Luminarias_De_Uso_Interior:'Numerales 300 y 320 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2018',
Luminarias_Decorativas:'Numerales 300 y 322 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2019',
Proyectores:'Numerales 300, 320 y 321 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Portalamparas:'Numerales 20 y 20.29 de la Resolución 90708 de agosto 30 de 2013 con sus ajustes',
Fotocontroles:'Numerales 300 y 370 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Lamparas_Fluorescentes_Compactas_Con_Balasto_Incorporado:'Numerales 300 y 310.5 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Utensilios_De_Vidrio_En_Contacto_Con_Alimentos:'Resolución n° 1440 del 20 de septiembre del 2021 del Ministerio de salud y protección social',
Utensilios_De_Ceramica_En_Contacto_Con_Alimentos:'Resolución n° 1440 del 20 de septiembre del 2021 del Ministerio de salud y protección social',
Utensilios_De_Ceramica_Utilizados_En_Coccion_De_Alimentos:'Resolución n° 1440 del 20 de septiembre del 2021 del Ministerio de salud y protección social',
Sensores_Infrarojos:'Resolución n° 1440 del 20 de septiembre del 2021 del Ministerio de salud y protección social',
Panel_Led:'Numerales 300 y 395 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Proyector_Led:'Numerales 300 y 320 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Exteriores_Y_Alumbrado_Publico:'Numerales 300 y 320 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Lineal_Led:'Numerales 300 y 320 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024',
Lineal_Hermetica_Led:'Numerales 300 y 320 de la Resolución 180540 de 2010, marzo 30 de 2010. ANEXO GENERAL REGLAMENTO TÉCNICO DE ILUMINACIÓN Y ALUMBRADO PÚBLICO (RETILAP) y sus modificaciones con la Resolución 181568 del 1 de septiembre de 2010, Resolución 182544 del 29 de diciembre de 2010, Resolución 180173 del 14 de febrero de 2011, Resolución 91872 del 28 de diciembre de 2012, Resolución 90980 del 15 de noviembre de 2013. Resolución 40122 del 8 de febrero de 2024'}

    // const repetirSet = (cantidad) => {
        
    //     for (let i=0; i < cantidad; i++) {
    //         setTimeout ((() => {
    //             let data = generarData();
    //             let prod = (prompt("ingrese prod: "));
    //     let resp = (prompt("ingrese res: "));
    //     const data = {producto: prod, resolucion: resp}
    //             setProduct(data);
    //         })(),
    //             2000
    //         )
    //     }
    // }

    setProduct(data);

    // const generarData = () => {
    //         cuenta++;
    //     const data = { 
    //         productoOF: "producto", 
    //         esquemaOF: "esquema "+generateRandomString()+cuenta, 
    //         vigenciaOF: "vigencia "+generateRandomString()+cuenta, 
    //         homologacionOF: "homologacionISO "+generateRandomString()+cuenta, 
    //         ensayosOF: "esayosf "+generateRandomString()+cuenta, 
    //         muestrasOF: "muestras "+generateRandomString()+cuenta, 
    //         condicionespagoOF: "condicionesPAgo "+generateRandomString()+cuenta, 
    //         ClienteOF: "cliente "+generateRandomString()+cuenta, 
    //         fabricaOF: "factory "+generateRandomString()+cuenta, 
    //         homo_restOF: "no aplica",
    //         No_oferta: "No_"+generateRandomString()+cuenta
    //     };
    //     return data;
    // }

//     const generarData = () => {
//         cuenta++;
//     const data = { 
//         productoOF: "producto", 
//         esquemaOF: "esquema "+generateRandomString()+cuenta, 
//         vigenciaOF: "vigencia "+generateRandomString()+cuenta, 
//         homologacionOF: "homologacionISO "+generateRandomString()+cuenta, 
//         ensayosOF: "esayosf "+generateRandomString()+cuenta, 
//         muestrasOF: "muestras "+generateRandomString()+cuenta, 
//         condicionespagoOF: "condicionesPAgo "+generateRandomString()+cuenta, 
//         ClienteOF: "cliente "+generateRandomString()+cuenta, 
//         fabricaOF: "factory "+generateRandomString()+cuenta, 
//         homo_restOF: "no aplica",
//         No_oferta: "No_"+generateRandomString()+cuenta
//     };
//     return data;
// }

    

    // repetirSet(71);
}
location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})