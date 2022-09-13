import {setOffer, setProduct} from './post.js';

const observerdatos = new MutationObserver(()=>{ 
const charge = () => {
    let cuenta = 0;
    const  generateRandomString = () => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345689 _';
        let result1= Math.random().toString(36).substring(0,5);       

        return result1;
    }


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