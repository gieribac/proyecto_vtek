const validarlogin = (correo, clave) => {
    const valcorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(correo);
    const valclave = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test(clave);
    return valcorreo && valclave;
}
// console.log(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test('gio@gmail.com'));
// console.log(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/.test('123456'));
// console.log(validarlogin('gio@gmail.com','1234aA'));




function cambiarNombre(nombre){
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]S{5}+$/g;
   return regex.test(nombre);
   
   }
   console.log(cambiarNombre("Giovanni Ibáñez"));
