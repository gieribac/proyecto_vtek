import {newUser} from './models/post.js';


const observer = new MutationObserver(()=>{
if (window.location.hash==='#/admin/createuser'){
    console.log("crear_usuario")
    const d = document; 
    d.getElementById('saveF').disabled = true;
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
        for (let v of info){
            val = val && v.value.length > 0;
        }
        val = val && info[4].value.length < 2 && info[8].value.length < 2; 
        d.getElementById('saveF').disabled = !val;      
    }
    info[0].addEventListener('keyup',fenable);
    info[1].addEventListener('keyup',fenable);
    info[2].addEventListener('keyup',fenable);
    info[3].addEventListener('keyup',fenable);
    info[4].addEventListener('change',fenable);
    info[5].addEventListener('keyup',fenable);
    info[6].addEventListener('keyup',fenable);
    info[7].addEventListener('keyup',fenable);
    info[8].addEventListener('change',fenable);

    window.addEventListener('hashchange',()=>{
        if (window.location.hash==='#/admin/createuser#'){
            location.href='index.html?#/admin/createuser';
            d.getElementById('saveF').addEventListener('click', () => {
                if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(document.getElementById('contrasenaF').value)){
                    if (document.getElementById('contrasenaF').value===document.getElementById('recontrasenaF').value){
                            if (window.location.hash==='#/admin/createuser#'){
                                
                                console.log("se ha llenado todo correctamente");
                                console.log(info[0].value, info[6].value, info[1].value, info[2].value, info[3].value, info[5].value, info[4].value, info[8].value);
                            } else {
                                
                                d.querySelector('.avisopSave').textContent="Error de validación";
                                setTimeout(() => {
                                    d.querySelector('.avisopSave').textContent="";
                                }, 4000);
                                
                            }
                    } else {
                        
                        d.querySelector('.avisopSave').textContent="Error de confirmación de contraseña";
                        setTimeout(() => {
                            d.querySelector('.avisopSave').textContent="";
                        }, 4000);  
                    }
                } else {
                    location.href='index.html?#/admin/createuser'
                    d.querySelector('.avisopSave').textContent="Error de contraseña. Debe tener 6 caracteres, almenos una letra mayúscula, una minúscula y un dígito";
                    setTimeout(() => {
                        d.querySelector('.avisopSave').textContent="";
                    }, 4000);
                }
            }); 
        } else {
            

        }
    })

     
}     
})

const parent = document.getElementById('root');
observer.observe(parent,{childList:true, subtree:true})
//mensaje para usuario al pararse en el campo contraseña: 
//La contraseña debe tener 6 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
// Puede tener otros símbolos.

// si /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(contrasenaF)

// el campo recontraseñaF debe activarse si se cumple la expresion regular

//mensaje para el usuario si aplica: la verificaciòn de contraseña no coincide
//dejar desactivado el voton guardar (ponerlo opaco o de otro color hasta que coi)
//hablar lo de validaciones de los demas campos
//https://www.youtube.com/watch?v=s3pC93LgP18&t=1297s

// newUser('iba@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','comercial'); 
// newUser('luffy@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','scliente');
// newUser('ace@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','cliente');
// newUser('sabo@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','admin');
// newUser('zoro@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','experto');
// newUser('nami@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','dtecnico');
// newUser('sanji@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','tcoordinador');
//setd();
