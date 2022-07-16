import {newUser} from './models/post.js';

// const correoF = document.getElementById('correoF').value;
// const nombreF = document.getElementById('nombreF').value;
// const usuarioF = document.getElementById('usuarioF'.value);
// const numeroF = document.getElementById('numeroF').value;
// const tipoIDF = document.getElementById('tipoIDF').value;
// const identificacionF = document.getElementById('identificacionF').value;
// const contrasenaF = document.getElementById('contrasenaF').value;
// const recontrasenaF = document.getElementById('recontrasenaF').value;
// const cargocliF = document.getElementById('cargocliF').value;
// const saveF = document.getElementById('saveF');

//mensaje para usuario al pararse en el campo contraseña: 
//La contraseña debe tener 6 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
// Puede tener otros símbolos.

// si /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(contrasenaF)

// el campo recontraseñaF debe activarse si se cumple la expresion regular

if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(contrasenaF) &&  contrasenaF===recontrasenaF) {
    saveF.addEventListener('click', () => {
        newUser(correoF, contrasenaF, nombreF, usuarioF, numeroF, identificacionF, tipoIDF,  cargocliF, saveF);
      });
}

//mensaje para el usuario si aplica: la verificaciòn de contraseña no coincide
//dejar desactivado el voton guardar (ponerlo opaco o de otro color hasta que coi)
//hablar lo de validaciones de los demas campos
//https://www.youtube.com/watch?v=s3pC93LgP18&t=1297s

newUser('iba@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','comercial'); 
newUser('luffy@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','scliente');
newUser('ace@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','cliente');
newUser('sabo@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','admin');
newUser('zoro@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','experto');
newUser('nami@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','dtecnico');
newUser('sanji@gmail.com','1234aA','Jose Celestino Mutis','gieribac','3203334970','1045789007','CC','tcoordinador');
//setDocument();
