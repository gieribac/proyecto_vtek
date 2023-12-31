import {updateUserClient} from './models/post.js';
import {updateDataClient} from './models/post.js';
import { inputAutocompleteCyties } from './helpers.js';

const observer = new MutationObserver(() => {

    const charge = () => {
        const d = document;
        inputAutocompleteCyties('#ciudadC');
        const check = d.getElementsByClassName('cliente_active');
        for (let v of check) {
            v.classList.remove('editar_cliente_comercial');
        }

        d.getElementById('crear_cliente_activo').classList.add('editar_cliente_comercial');
        d.getElementById('Editar_cliente_activo_letra').classList.remove('editar_cliente_comercial');

        const pError = d.querySelectorAll('.margenusu p')
        for (let v of pError) {
            v.classList.remove('formulario__input-error');
        }

        const inputscheked = Array.prototype.slice.apply(d.getElementsByClassName('icheked'));

        const checks = d.getElementsByClassName('checkb');
        d.getElementById('getBeforeEmail').setAttribute('style', 'display:none');
        d.getElementById('getBeforeClave').setAttribute('style', 'display:none');

        checks.forEach((c, i) => {
            c.addEventListener('click', () => {
                inputscheked[i].classList.add(`campo${i}`);
                const child = Array.prototype.slice.apply(d.querySelectorAll(`.campo${i} > input`)); //inputs
                const fies = Array.prototype.slice.apply(d.querySelectorAll(`.campo${i} > p`)); //mensajes
                if (c.checked) {
                    child[0].removeAttribute('required', '');
                    child[0].disabled = true;
                    fies[0].classList.add('formulario__input-error');
                    (i == 11) && (() => {
                        getCredencialesnt();
                        d.getElementById('rclaveC').removeAttribute('required', '');
                        d.getElementById('rclaveC').disabled = true;
                        d.getElementsByClassName('rclavecli')[0].classList.add('formulario__input-error');
                    })();
                } else {
                    child[0].setAttribute('required', '');
                    child[0].disabled = false;
                    inputscheked[i].classList.remove('habilitar_campo');
                    fies[0].classList.remove('formulario__input-error');
                    (i == 11) && (() => {
                        getCredenciales();
                        d.getElementById('rclaveC').setAttribute('required', '');
                        d.getElementById('rclaveC').disabled = false;
                        d.getElementsByClassName('rclavecli')[0].classList.remove('formulario__input-error');
                    })();
                }
                (!d.getElementById("checkEmail").checked || !d.getElementById("checkRclave").checked) ? getCredenciales(): getCredencialesnt();
                fenable();

            })
        })

        

        const getCredenciales = () => {
            d.getElementById('getBeforeEmail').removeAttribute('style', 'display:none');
            d.getElementById('getBeforeClave').removeAttribute('style', 'display:none');
            d.getElementById('bclaveC').setAttribute('required', '');
            d.getElementById('bemailC').setAttribute('required', '');
            d.getElementById('getBeforeEmail_p').classList.remove('formulario__input-error');
            d.getElementById('getBeforeClave_p').classList.remove('formulario__input-error');
        }
        const getCredencialesnt = () => {
            d.getElementById('getBeforeEmail').setAttribute('style', 'display:none');
            d.getElementById('getBeforeClave').setAttribute('style', 'display:none');
            d.getElementById('bclaveC').removeAttribute('required', '');
            d.getElementById('bemailC').removeAttribute('required', '');
            d.getElementById('getBeforeEmail_p').classList.add('formulario__input-error');
            d.getElementById('getBeforeClave_p').classList.add('formulario__input-error');
        }
        getCredencialesnt();

        checks.forEach((c, i) => {
            inputscheked[i].classList.add(`campo${i}`);
            const child = Array.prototype.slice.apply(d.querySelectorAll(`.campo${i} > input`)); //inputs
            const fies = Array.prototype.slice.apply(d.querySelectorAll(`.campo${i} > p`)); //mensajes
            child[0].removeAttribute('required', '');
            child[0].disabled = true;
            fies[0].classList.add('formulario__input-error');
        })
        d.getElementById('rclaveC').removeAttribute('required', '');
        d.getElementById('rclaveC').disabled = true;
        d.getElementsByClassName('rclavecli')[0].classList.add('formulario__input-error');

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
            info.push(d.getElementById('bemailC'));//16
            info.push(d.getElementById('bclaveC'));//17
        let infov = [...info];
            infov.shift();            

        const fenable = () => {
            const d = document;            
            let val = true,
            vali;
            for (let v of infov){
                vali = !v.hasAttribute('required') ? true : v.value.length > 0 ;
                val = val && vali;
                val = val && d.getElementById('tipoIDC').value.length > 0;
            }
            d.getElementById('guardarC').disabled = !val;
        }

        const validator1 = () => {

            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(info[1].value)) { //nombre compania: letras, tildes y espacios, 30 caracteres
                d.querySelector('.ncC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.ncC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }

        }

        const validator2 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(info[2].value)) { //representante legal: letras, tildes y espacios, 50 caracteres
                d.querySelector('.rlC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.rlC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator3 = () => {
            fenable();
            if (/[a-zA-Z0-9-\s\#]{1,30}$/.test(info[3].value)) { //direcciòn: letras numeros, #, guion, 30 caracteres
                d.querySelector('.dC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.dC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator4 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(info[4].value)) { //ciudad: letras, tildes y espacios, 20 caracteres
                d.querySelector('.ciudadC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.ciudadC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator5 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(info[5].value)) { //nombre responsable, letras, tildes y espacios, 50 caracteres
                d.querySelector('.nrC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.nrC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator6 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,25}$/.test(info[6].value)) { //cargo, letras, tildes y espacios, 25 caracteres
                d.querySelector('.cargoC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.cargoC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator7 = () => {
            fenable();
            if (info[7].value.length < 3 ) { //tipo id selector
                d.querySelector('.tidC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.tidC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator8 = () => { //identificación: de 6 a 10 digitos
            fenable();
            if (/^\d{6,10}$/.test(info[8].value)) {
                d.querySelector('.idC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.idC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator9 = () => { //nit
            fenable();
            if (/^\d{7,12}(-)/.test(info[9].value)) {
                d.querySelector('.nC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.nC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator10 = () => { //no. contacto
            fenable();
            if (/^[\(\)\+\s\d]{7,14}/.test(info[10].value)) {
                d.querySelector('.numcC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.numcC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator11 = () => {
            fenable();
            if (/[a-zA-Z0-9-\s\#\_\:\/\\\.\@]{1,30}$/.test(info[11].value)) { //sitio web
                d.querySelector('.wC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.wC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator12 = () => { //correo
            fenable();
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(info[12].value)) {
                d.querySelector('.emailC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.emailC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator13 = () => { //calificaciòn
            fenable();
            if (/[\d]{1,10}/.test(info[13].value)) {
                d.querySelector('.calC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.calC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        const validator14 = () => { //contraseña
            fenable();
            if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(info[14].value)) {
                d.querySelector('.clavecli').classList.add('formulario__input-error');
            } else {
                d.querySelector('.clavecli').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }
        const validator15 = () => { //confurmacion de contraseña
            fenable();
            if (info[14].value === info[15].value) {
                d.querySelector('.rclavecli').classList.add('formulario__input-error');
            } else {
                d.querySelector('.rclavecli').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }
        const validator16 = () => { //bcorreo
            fenable();
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(info[16].value)) {
                d.querySelector('.emailC').classList.add('formulario__input-error');
            } else {
                d.querySelector('.emailC').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }
        const validator17 = () => { //bcontraseña
            fenable();
            if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(info[17].value)) {
                d.querySelector('.clavecli').classList.add('formulario__input-error');
            } else {
                d.querySelector('.clavecli').classList.remove('formulario__input-error');
                d.getElementById('guardarC').disabled = true;
            }
        }

        info[1].addEventListener('keyup', validator1);
        info[2].addEventListener('keyup', validator2);
        info[3].addEventListener('keyup', validator3);
        info[4].addEventListener('keyup', validator4);
        info[5].addEventListener('keyup', validator5);
        info[6].addEventListener('keyup', validator6);
        info[7].addEventListener('change', validator7);
        info[8].addEventListener('keyup', validator8);
        info[9].addEventListener('keyup', validator9);
        info[10].addEventListener('keyup', validator10);
        info[11].addEventListener('keyup', validator11);
        info[12].addEventListener('keyup', validator12);
        info[13].addEventListener('keyup', validator13);
        info[14].addEventListener('keyup', validator14);
        info[15].addEventListener('keyup', validator15);
        info[16].addEventListener('keyup', validator16);
        info[17].addEventListener('keyup', validator17);

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
        info[13].placeholder = `${info[13].placeholder}: ${cActual.Calificacion}`;
        // info[14].placeholder = 
        // info[15].placeholder =         

        const getData_ = () => {
            let datos = {
                Estado: d.getElementById("checkCA").checked
            }
            let Clave, Email, bClave, bEmail;
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
            info[12].hasAttribute("required") && (() => Email = info[12].value)();
            info[14].hasAttribute("required") && (Clave = info[14].value);
            (info[7].value.length > 0) && (() => datos.Tipo_Identificacion = info[7].value)();
            (info[13].hasAttribute("required")) && (() => datos.Calificacion = info[13].value)();
            info.push(d.getElementById('bemailC')); 
            info.push(d.getElementById('bclaveC')); 
            info[17].hasAttribute("required") && (() => bClave = info[17].value)();
            info[16].hasAttribute("required") && (() => bEmail = info[16].value)();
            datos.Email = Email;

            const getCredentials = (info[14].value.length > 0 || info[11].value.length > 0);

            return { datos, Email, Clave, bClave, bEmail }
        }

        const get_idc = () => {
            const idsc = JSON.parse(localStorage.getItem("nidsClient"));
            const idact = localStorage.getItem("iselected");
            const idc = idsc[idact];
            return idc;
        }

        d.getElementById('guardarC').addEventListener('click', e => {
            let checksTrue = [];
            checks.forEach(c => {
                if (c.checked){checksTrue.push(1)} 
                Swal.fire(
                    'muy bien!',
                    'cliente actualizado satisfactoriamente',
                    'success'
                  )
            })
            if (checksTrue.length > 12){
                Swal.fire(
                    'Alerta!',
                    'Debe editar al menos un campo',
                    'error'
                  )
            } else {
                e.preventDefault();
                const { datos, Email, Clave, bClave, bEmail } = getData_();
                const idClient = get_idc();
                
                if (Clave || Email){localStorage.setItem('b2','1');}
                if (datos && (Clave || Email)) {
                    console.log('updateUserClient then updateDataClient');
                        updateUserClient(bEmail, bClave, Clave, Email).then( 
                            updateDataClient(idClient, datos).then(
                                Swal.fire(
                                    '¡Buen trabajo!',
                                    'Se han actualizado los datos',
                                    'success'
                                )
                            ).catch(

                                Swal.fire(
                                    '¡Error!!',
                                    `¡No se han actualizado los datos, error`,
                                    'error'
                                )
                            )    
                        
                        ).catch(
                            Swal.fire(
                                'error',
                                `No se han actualizado los datos`,
                                'error'
                            
                            )
                        );
                } else if (datos && !(Clave || Email)) {

                    updateDataClient(idClient, datos).then(
                        Swal.fire(
                            '¡Buen trabajo!',
                            'Se han actualizado los datos',
                            'success'
                        )
                    ).catch(
                        Swal.fire(
                            '¡Error!',
                            `No se han actualizado los datos!`,
                            'error'
                        )
                    )
                    

                } else if (!datos && (Clave || Email)) {
                    console.log('updateUserClient')
                    updateUserClient(bEmail, bClave, Clave, Email).then(
                        Swal.fire(
                            '¡Buen trabajo!',
                            'Se han actualizado los datos!',
                            'success'
                        )
                        
                    ).catch(
                        Swal.fire(
                            '¡¡Error!',
                            `No se han actualizado los datos!`,
                            'error'
                        )
                        
                    );
                } else {

                }
            }
        });
    }

    location.hash == '#/comercial/editcliente' && charge();
})

const parent = document.getElementById('root');
observer.observe(parent, { childList: true })