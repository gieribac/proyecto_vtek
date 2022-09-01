import {setOffer} from './post.js';

const observerdatos = new MutationObserver(()=>{ 
const charge = () => {
    let cuenta = 0;
    const  generateRandomString = () => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345689 _';
        let result1= Math.random().toString(36).substring(0,5);       

        return result1;
    }
    const repetirSet = (cantidad) => {
        for (let i=0; i < cantidad; i++) {
            setTimeout ((() => {
                let data = generarData();
                setOffer(data);
            })(),
                4000
            )
        }
    }

    const generarData = () => {
            cuenta++;
        const data = { 
            productoOF: "producto "+generateRandomString()+cuenta, 
            esquemaOF: "esquema "+generateRandomString()+cuenta, 
            vigenciaOF: "vigencia "+generateRandomString()+cuenta, 
            homologacionOF: "homologacionISO "+generateRandomString()+cuenta, 
            ensayosOF: "esayosf "+generateRandomString()+cuenta, 
            muestrasOF: "muestras "+generateRandomString()+cuenta, 
            condicionespagoOF: "condicionesPAgo "+generateRandomString()+cuenta, 
            ClienteOF: "cliente "+generateRandomString()+cuenta, 
            fabricaOF: "factory "+generateRandomString()+cuenta, 
            homo_restOF: "no aplica"+generateRandomString()+cuenta
        };
        return data;
    }


    let cantidad = Number(prompt("ingrese cantidad de sets a enviar: "));
    cantidad > 0 && repetirSet(cantidad);
}
location.hash == '#/comercial/createoffer' && charge();
})
const parent = document.getElementById('root');
observerdatos.observe(parent,{childList:true})