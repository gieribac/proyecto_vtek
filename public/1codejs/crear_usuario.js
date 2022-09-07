import { newUser } from './models/post.js';

const observer = new MutationObserver(() => {

    const charge = () => {
        const d = document;
        const myNodeList = d.querySelectorAll('.margenusu p');
        for (let v of myNodeList) {
            v.classList.remove('formulario__input-error')
        }
        
        d.getElementById('saveF').disabled = true
        var info = [];
        info.push(d.getElementById('correoF'));
        info.push(d.getElementById('nombreF'));
        info.push(d.getElementById('usuarioF'));
        info.push(d.getElementById('numeroF'));
        info.push(d.getElementById('tipoIDF'));
        info.push(d.getElementById('identificacionF'));
        info.push(d.getElementById('contrasenaF'));
        info.push(d.getElementById('recontrasenaF'));
        info.push(d.getElementById('cargocliF'));

        const fenable = () => {
            const d = document;
            let val = true;
            for (let v of info) {
                val = val && v.value.length > 0;
            }
            val = val && info[4].value.length < 3 && info[8].value.length < 13;
            d.getElementById('saveF').disabled = !val;
            console.log('fenable')
        }
        const validator0 = () => {
            fenable();
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(info[0].value)) {
                d.querySelector('.correoFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.correoFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator1 = () => {
            fenable();
            if (/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(info[1].value)) {
                d.querySelector('.nombreFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.nombreFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator2 = () => {
            fenable();
            if (/^[a-zA-Z0-9\_\-]{4,16}$/.test(info[2].value)) {
                d.querySelector('.usuarioFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.usuarioFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator3 = () => {
            fenable();
            if (/^[\(\)\+\s\d]{7,14}/.test(info[3].value)) {
                d.querySelector('.numeroFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.numeroFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator4 = () => {
            fenable();
            if (info[4].value.length < 3) {
                d.querySelector('.tipoIDFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.tipoIDFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator5 = () => {
            fenable();
            if (/^\d{6,11}$/.test(info[5].value)) {
                d.querySelector('.identificacionFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.identificacionFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator6 = () => {
            fenable();
            if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(info[6].value)) {
                d.querySelector('.contrasenaFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.contrasenaFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator7 = () => {
            fenable();
            if (info[6].value === info[7].value) {
                d.querySelector('.recontrasenaFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.recontrasenaFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }
        }
        const validator8 = () => {
            fenable();
            if (info[8].value.length < 13) {
                d.querySelector('.cargocliFme').classList.add('formulario__input-error');
            } else {
                d.querySelector('.cargocliFme').classList.remove('formulario__input-error');
                d.getElementById('saveF').disabled = true;
            }

        }
        info[0].addEventListener('keyup', validator0);
        info[1].addEventListener('keyup', validator1);
        info[2].addEventListener('keyup', validator2);
        info[3].addEventListener('keyup', validator3);
        info[4].addEventListener('change', validator4);
        info[5].addEventListener('keyup', validator5);
        info[6].addEventListener('keyup', validator6);
        info[7].addEventListener('keyup', validator7);
        info[8].addEventListener('change', validator8);

        d.getElementById('saveF').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('b2','1');
            console.log(info[0].value, info[6].value, info[1].value, info[2].value, info[3].value, info[5].value, info[4].value, info[8].value)
            newUser(info[0].value, info[6].value, info[1].value, info[2].value, info[3].value, info[5].value, info[4].value, info[8].value)
                .then(() => {
                    console.log("then newUser  ")
                    d.getElementById('formcreateuser').reset();
                    d.getElementById('saveF').disabled = true;
                   
                    Swal.fire(
                        '¡Muy Bien!',
                        '¡Usuario creado con exito!',
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

    location.hash == '#/admin/createuser' && charge();
})

const parent = document.getElementById('root');
observer.observe(parent, { childList: true })