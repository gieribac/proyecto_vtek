// import {updateUserClient} from './models/post.js';

const observer = new MutationObserver(()=>{
    
    const charge = () => {
        const d = document;

        const check = d.getElementsByClassName('cliente_active');
        for (let v of check){
            v.classList.remove('editar_cliente_comercial');
        }

        d.getElementById('crear_cliente_activo').classList.add('editar_cliente_comercial');
        d.getElementById('Editar_cliente_activo_letra').classList.remove('editar_cliente_comercial');
        
        const pError = d.querySelectorAll('.margenusu p')
        for (let v of pError){
            v.classList.remove('formulario__input-error');
        }
        const inputscheked0 = d.getElementsByClassName('inputsdivi');
        const inputscheked = Array.prototype.slice.apply(inputscheked0);

        const checks = d.querySelectorAll('p + label > input');

        checks.forEach((c,i) => {
            c.addEventListener('click',() => {
                inputscheked[i].classList.add(`campo${i}`);
                const child = Array.prototype.slice.apply(d.querySelectorAll(`.campo${i} > input`));
                const fies = Array.prototype.slice.apply(d.querySelectorAll(`.campo${i} + p`));
                console.log(inputscheked[i])
                if (c.checked) {
                    inputscheked[i].classList.add('habilitar_campo');
                    child[0].removeAttribute('required','');
                    fies[0].classList.add('formulario__input-error');
                    console.log(d.getElementById('getBeforeEmail'));
                    (i == 10 ) && (() => d.getElementById('getBeforeEmail').classList.add('habilitar_campo'))();
                    if (i == 11){
                        inputscheked[12].classList.add('habilitar_campo');
                        d.getElementById('rclaveC').removeAttribute('required','');
                        d.getElementsByClassName('rclavecli')[0].classList.add('formulario__input-error');
                        d.getElementById('getBeforeClave').classList.add('habilitar_campo') ;
                    }
                } else {
                    child[0].setAttribute('required','');
                    inputscheked[i].classList.remove('habilitar_campo');
                    fies[0].classList.remove('formulario__input-error');
                    (i == 10 ) && (() => d.getElementById('getBeforeEmail').classList.remove('habilitar_campo'))();
                    if (i == 11){
                        inputscheked[12].classList.remove('habilitar_campo');
                        d.getElementById('rclaveC').setAttribute('required','');
                        d.getElementsByClassName('rclavecli')[0].classList.remove('formulario__input-error');
                        d.getElementById('getBeforeClave').classList.remove('habilitar_campo');
                    }
                    

                }
            })  
        })

        // checkRclave i = 11
        // checkEmail i=10

        d.getElementById('guardarC').disabled = true;
        let info = [];
            info.push(d.getElementById('guardarC'));//boton de guardar 0
        let nombreCompaniaC = d.getElementById('nombreCompaniaC');
            info.push(d.getElementById('nombreCompaniaC'));//1
            info.push(d.getElementById('repLegalC'));//2
            info.push(d.getElementById('direccionC'));//3
            info.push(d.getElementById('ciudadC'));//4
            info.push(d.getElementById('nombreRespC'));//5
            info.push(d.getElementById('cargoC'));//6
            info.push(d.getElementById('tipoIDC'));//selector 7
            info.push(d.getElementById('identificacionC'));//8
            info.push(d.getElementById('nitC'));// 9
            info.push(d.getElementById('ncontactoC')); //10
            info.push(d.getElementById('webC'));//11
            info.push(d.getElementById('emailC'));//12
            info.push(d.getElementById('calificacionC'));//selector 13
            info.push(d.getElementById('claveC'));//14
            info.push(d.getElementById('rclaveC'));//15
        
        let infov = [...info];
            infov.shift();            

        const fenable = () => {
            const d = document;            
            let val = true;
            for (let v of infov){
                v.hasAttribute('required') && (val = val && v.value.length > 0);
            }
            // val = val && info[7].value.length < 3 && info[13].value.length < 2;
            d.getElementById('guardarC').disabled = !val;  
        }
        
        const validator1 = () => {

                fenable();
                if (/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(info[1].value)){ //nombre compania: letras, tildes y espacios, 30 caracteres
                    d.querySelector('.ncC').classList.add('formulario__input-error');
                } else {
                    d.querySelector('.ncC').classList.remove('formulario__input-error');
                    d.getElementById('guardarC').disabled = true;
                }

        }

        const validator2 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(info[2].value)){ //representante legal: letras, tildes y espacios, 50 caracteres
                d.querySelector('.rlC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.rlC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator3 = () => {
            fenable();
            if ( /[a-zA-Z0-9-\s\#]{1,30}$/.test(info[3].value)){ //direcciòn: letras numeros, #, guion, 30 caracteres
                d.querySelector('.dC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.dC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }  
        }

        const validator4 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(info[4].value)){ //ciudad: letras, tildes y espacios, 20 caracteres
                d.querySelector('.ciudadC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.ciudadC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator5 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(info[5].value)){ //nombre responsable, letras, tildes y espacios, 50 caracteres
                d.querySelector('.nrC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.nrC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator6 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,25}$/.test(info[6].value)){ //cargo, letras, tildes y espacios, 25 caracteres
                d.querySelector('.cargoC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.cargoC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator7 = () => {
            fenable();
            if (info[7].value.length < 3){ //tipo id selector
                d.querySelector('.tidC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.tidC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            } 
        }

        const validator8 = () => { //identificación: de 6 a 10 digitos
            fenable();  
            if (/^\d{6,10}$/.test(info[8].value)){
                d.querySelector('.idC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.idC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator9 = () => { //nit
            fenable();  
            if (/^\d{7,12}(-)/.test(info[9].value)){
                d.querySelector('.nC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.nC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator10 = () => { //no. contacto
            fenable();
            if (/^[\(\)\+\s\d]{7,14}/.test(info[10].value)){
                d.querySelector('.numcC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.numcC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }  
        }

        const validator11 = () => {
            fenable();
            if (/[a-zA-Z0-9-\s\#\_\:\/\\\.\@]{1,30}$/.test(info[11].value)){ //sitio web
                d.querySelector('.wC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.wC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator12 = () => {//correo
            fenable(); 
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(info[12].value)){
                d.querySelector('.emailC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.emailC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }
        
        const validator13 = () => { //calificaciòn: selector
            fenable();
            if (info[13].value.length < 2){
                d.querySelector('.calC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.calC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            } 
        }

        const validator14 = () => {//contraseña
            fenable();
            if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(info[14].value)){
                d.querySelector('.clavecli').classList.add('formulario__input-error');
            } else {
                d.querySelector('.clavecli').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }
        const validator15 = () => {//confurmacion de contraseña
            fenable();
            if (info[14].value===info[15].value){
                d.querySelector('.rclavecli').classList.add('formulario__input-error');
            } else {
                d.querySelector('.rclavecli').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        
        info[1].addEventListener('keyup',validator1);
        info[2].addEventListener('keyup',validator2);
        info[3].addEventListener('keyup',validator3);
        info[4].addEventListener('keyup',validator4);
        info[5].addEventListener('keyup',validator5);
        info[6].addEventListener('keyup',validator6);
        info[7].addEventListener('change',validator7);
        info[8].addEventListener('keyup',validator8);
        info[9].addEventListener('keyup',validator9);
        info[10].addEventListener('keyup',validator10);
        info[11].addEventListener('keyup',validator11);
        info[12].addEventListener('keyup',validator12);
        info[13].addEventListener('change',validator13);
        info[14].addEventListener('keyup',validator14);
        info[15].addEventListener('keyup',validator15);

        const cActual = JSON.parse(localStorage.getItem("actualc"));

        info[1].placeholder = `${info[1].placeholder}: ${cActual.Nombre_Compania}`;
        info[2].placeholder = `${info[2].placeholder}: ${cActual.Representante_Legal}`;
        info[3].placeholder = `${info[3].placeholder}: ${cActual.Direccion}`;
        info[4].placeholder = `${info[4].placeholder}: ${cActual.Ciudad}`;
        info[5].placeholder = `${info[5].placeholder}: ${cActual.Nombre_Responsable}`;
        info[6].placeholder = `${info[6].placeholder}: ${cActual.Cargo}`;
        // info[7].addEventListener('change',validator7);
        info[8].placeholder = `${info[8].placeholder}: ${cActual.No_Identificacion}`;
        info[9].placeholder = `${info[9].placeholder}: ${cActual.Nit}`;
        info[10].placeholder = `${info[10].placeholder}: ${cActual.Numero_Contacto}`;
        info[11].placeholder = `${info[11].placeholder}: ${cActual.Web}`;
        info[12].placeholder = `${info[12].placeholder}: ${cActual.Email}`;
        // info[13].addEventListener('change',validator13); 
        // info[14].placeholder = 
        // info[15].placeholder = 


        

        const getData_ = () => {
            let datos = {
                Estado: d.getElementById("checkb").checked
            }
            let Clave;
            info[1].hasAttribute("required") && (() => datos.Nombre_Compania = info[1].value)();
            info[2].hasAttribute("required") && (() => datos.Representante_Legal = info[2].value)();
            info[3].hasAttribute("required") && (() => datos.Direccion = info[3].value)();
            info[4].hasAttribute("required") && (() => datos.Ciudad = info[4].value)();
            info[5].hasAttribute("required") && (() => datos.Nombre_Responsable = info[5].value)();
            info[6].hasAttribute("required") && (() => datos.Cargo = info[6].value)();
            info[8].hasAttribute("required") && (() => datos.No_Identificacion = info[8].value)();
            info[9].hasAttribute("required") && (() => datos.Nit = info[9].value)();
            info[10].hasAttribute("required") && (() => datos.Numero_Contacto = info[10].value)();
            info[11].hasAttribute("required") && (() => datos.Web = info[11].value)();
            info[12].hasAttribute("required") && (() => datos.Email = info[11].value)();
            info[14].hasAttribute("required") && (Clave = info[14].value);
            (info[7].value.length < 3) && (() => datos.Tipo_Identificacion = info[7].value)();
            (info[13].value.length < 3) && (() => datos.Tipo_Identificacion = info[13].value)();

            const getCredentials = (info[14].value.length > 0 || info[11].value.length > 0 );

            return {datos, Clave, getCredentials}
        }

        const get_idc = () => {
            const idsc = JSON.parse(localStorage.getItem("nidsClient"));
            const idact = localStorage.getItem("iselected");
            const idc = idsc[idact];
            console.log(idc);
            return idc;
        }

        const getCredentials_ = () => {
            const bEmail = prompt ('Suministre el correo electronico de la cuenta de usuario: ');
            const bClave = promot ('Suministre la clave de la cuenta de usuario: ');

            return {bEmail, bClave}

        }
       
        d.getElementById('guardarC').addEventListener('click', e => {
            e.preventDefault();
            const {datos, Clave, getCredentials} = getData_();
            const idClient = get_idc(); 
            let c;
            // getCredentials && (() => { c = getCredentials_ ()})();     
            // getCredentials && updateUserClient(datos.Email, Clave, c.bClave, c.bEmail).then(()=>{
            //         d.getElementById('formcreateC').reset();
            //         d.getElementById('guardarC').disabled = true;
            //         d.querySelector('.avisopSave').textContent = "El formulario anterior fue enviado correctamente"
            //     }).catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         console.log(errorMessage);
            //         d.querySelector('.avisopSave').textContent = `no enviado; ${errorCode}, ${errorMessage}`
            //     });
            
            
            // updateDataClient(datos, Clave, idClient).then(()=>{
            //     d.getElementById('formcreateC').reset();
            //     d.getElementById('guardarC').disabled = true;
            //     d.querySelector('.avisopSave').textContent = "El formulario anterior fue enviado correctamente"
            // }).catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorMessage);
            //     d.querySelector('.avisopSave').textContent = `no enviado; ${errorCode}, ${errorMessage}`
            // });
        }); 
    }

    location.hash == '#/comercial/editcliente' && charge();
})

const parent = document.getElementById('root');
observer.observe(parent,{childList:true})