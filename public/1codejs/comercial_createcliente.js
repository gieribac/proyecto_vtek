import {saveClient} from './models/post.js';

const observer = new MutationObserver(()=>{
    
    const charge = () => {
        const d = document;
        const myNodeList = d.querySelectorAll('.margenusu p')
        for (let v of myNodeList){
            v.classList.remove('formulario__input-error')
        }

        const check = d.getElementsByClassName('cliente_active');
        for (let v of check){
            v.classList.add('editar_cliente_comercial');
        }
        
        d.getElementById('getBeforeEmail').setAttribute('style','display:none'); //para que desaparesca en esta ejecucion
        d.getElementById('getBeforeClave').setAttribute('style','display:none'); //para que desaparesca en esta ejecucion

        d.getElementById('guardarC').disabled = true;
        let info = [];
            info.push(d.getElementById('guardarC'));//boton de guardar 0
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
                val = val && v.value.length > 0;
            }
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
            if (/[\d]{1,10}/.test(info[13].value)){
                d.querySelector('.calC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.calC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            } 
        }

        const validator14 = () => {//contraseña
            fenable();
            console.log(d.querySelector('.clavecli'));
            if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(info[14].value)){
                d.querySelector('.clavecli').classList.add('formulario__input-error');
                console.log("INGRESO CONTRASEÑÁ");
                console.log(d.querySelector('.clavecli'));
                
            } else {
                d.querySelector('.clavecli').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
                console.log("NO");
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
        info[13].addEventListener('keyup',validator13);
        info[14].addEventListener('keyup',validator14);
        info[15].addEventListener('keyup',validator15);

        const getData_ = () => {
            let datos = {
                Nombre_Compania: info[1].value,            
                Representante_Legal: info[2].value,
                Direccion: info[3].value,
                Ciudad: info[4].value,
                Nombre_Responsable: info[5].value,
                Cargo: info[6].value,
                Tipo_Identificacion: info[7].value,
                No_Identificacion: info[8].value,
                Nit: info[9].value,
                Numero_Contacto: info[10].value,
                Web: info[11].value,
                Email: info[12].value,
                Calificacion: info[13].value,
                ComercialID: localStorage.getItem("u"),
                Estado: true
            }
            let Clave = info[14].value;
            return {datos, Clave}
        }
        d.getElementById('guardarC').addEventListener('click', (e) => {
            e.preventDefault();
            const {datos, Clave} = getData_();
            localStorage.setItem('b2','1');      
            saveClient(datos, Clave).then(()=>{
                d.getElementById('formcreateC').reset();
                d.getElementById('guardarC').disabled = true;
                
                Swal.fire(
                    '¡Muy Bién!',
                    '¡Perfil cliente creado con éxito!',
                    'success'
                  )

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorMessage,
                    
                  })
            });
        }); 
    }

    location.hash == '#/comercial/createcliente' && charge();
})

const parent = document.getElementById('root');
observer.observe(parent,{childList:true})