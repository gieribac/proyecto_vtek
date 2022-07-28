import {querySnap, queryNext,queryNextnt} from './models/post.js';

const tabla = document.getElementById('tabla');
const btnSiguiente = document.getElementById('botonSiguiente');
const btnAnterior = document.getElementById('botonAnterior');

let ultimoDoc = null;
let primerDoc = null;

querySnap().then((d) => {

    let registers = cargarDocs(d.docs);
    ultimoDoc = registers.ultimo;
    primerDoc = registers.primer;
    btnSiguiente.addEventListener('click',() => {

        queryNext(ultimoDoc).then((d) => {

            registers = cargarDocs(d.docs); 
            ultimoDoc = registers.ultimo;
            primerDoc = registers.primer;   
        })  
    })

    btnAnterior.addEventListener('click',() => {

        queryNextnt(primerDoc).then((d) => {
            
           registers = cargarDocs(d.docs.reverse());
           ultimoDoc = registers.ultimo;
           primerDoc = registers.primer; 
        })  
    })
})

const cargarDocs = (ds) => {
    
    if(ds.length > 0){

    const ultimo = ds[ds.length-1];
    const primer = ds[0]; 
    tabla.innerHTML = `<tr>
        <th>Nombre Compañia</th>
        <th>Representante Legal</th>
        <th>NIT</th>
        <th>Número de Contacto</th>
        </tr>`;
        ds.forEach(d => {
            tabla.innerHTML += `
                <tr>
                <td>${d.data().Nombre_Compania}</td>
                <td>${d.data().Representante_Legal}</td>
                <td>${d.data().Nit}</td>
                <td>${d.data().Numero_Contacto}</td>
                </tr> 
            `;
        });
    
    return {primer,ultimo}
    }
}


