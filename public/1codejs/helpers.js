
export function mas(id) {
    console.log("+")
    var contador = document.getElementById(id).value;
    var int = parseInt(contador, 10);
    console.log(int)
    document.getElementById(id).value = int +1;    
}
    
export function menos(id) {
    var cont = document.getElementById(id).value;
    var counterValue = parseInt(cont,10);
    var NewCont = counterValue > 1 ? counterValue - 1: 1;
    document.getElementById(id).value = NewCont;
}

export const inputAutocompleteCyties = (selectori) => {
    const search = key => {
        const jeison = fetch(`https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json`).then(d => d.json())
        .then(j => {
    
            //destructurar y extraer ciudades
    
            let cyties = j.map(e => {return e.ciudades}).flat().sort();
            
            //Eiminar repetidos
            let arr = cyties.filter((item,index)=>{
                return cyties.indexOf(item) === index;
              })
    
            let c;
            let indiceMax = key.length;
    
            //filtrar coincidencias con key
            arr = arr.filter(e => {return key === e.substr(0, indiceMax)})
    
            build_list(arr);
        })
    }

    const input = document.querySelector(selectori);
    const autocomplete_results = input.nextSibling;
    
    let b1, b2 = false;
    const mouseOut = () => {
        document.querySelectorAll(`${selectori} + ul`).forEach( e => e.style.display = 'none');
    }
    const mouseOver = () => {
        document.querySelectorAll(`${selectori} + ul`).forEach( e => e.style.display = 'block');
    }
    const act = (b1,b2) => b1 || b2 ? mouseOver() : mouseOut();
    input.addEventListener("focus", () => {b1 = true; act(b1,b2)});
    input.addEventListener("blur", () => {b1 = false; act(b1,b2)});
    autocomplete_results.addEventListener("mouseover", () => {b2 = true; act(b1,b2)});
    autocomplete_results.addEventListener("mouseout", () => {b2 = false; act(b1,b2)});

    input.addEventListener('keyup',  (event) =>  {
    
        //garantizar primera letra en mayuscula 
        const capitalCase = str => {
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;
        }
    
        const key = capitalCase(event.target.value);
        
        console.log(key)
        
        if(key.length > 0) {
            search(key);
        }
        else {
            build_list();
        }
    })
    
    const build_list = (items) => {
      
      if(items === undefined) {
        items = [];
      }
      
      autocomplete_results.innerHTML = '';
      
      items.slice(0,10).map(item =>  {
        autocomplete_results.innerHTML += `<li>${item}</li>`;
                          })
    }
    
    autocomplete_results
      .addEventListener("click", e => {
        if (e.target && e.target.nodeName == "LI") {
     
          input.value = e.target.innerHTML;
          build_list()
        }
      });
}

export const inputAutocompleteCountry = (selectori) => {
    const search = key => {
        fetch(`https://restcountries.com/v2/name/${key}`)
        .then(res => res.json())
        .then(data => {
          if(Array.isArray(data)) {
            build_list(data.map(item => {
              return item.name
            }))
          }
        })
      }

    
    const input = document.querySelector(selectori);
    const autocomplete_results = input.nextSibling;
    let b1, b2 = false;
    const mouseOut = () => {
        document.querySelectorAll(`${selectori} + ul`).forEach( e => e.style.display = 'none');
    }
    const mouseOver = () => {
        document.querySelectorAll(`${selectori} + ul`).forEach( e => e.style.display = 'block');
    }
    const act = (b1,b2) => b1 || b2 ? mouseOver() : mouseOut();
    input.addEventListener("focus", () => {b1 = true; act(b1,b2)});
    input.addEventListener("blur", () => {b1 = false; act(b1,b2)});
    autocomplete_results.addEventListener("mouseover", () => {b2 = true; act(b1,b2)});
    autocomplete_results.addEventListener("mouseout", () => {b2 = false; act(b1,b2)});
    
    input.addEventListener('keyup',  (event) =>  {
    
        const key = event.target.value;
        if(key.length > 0) {
            search(key);
        }
        else {
            build_list();
        }
    })
    
    const build_list = (items) => {
      
      if(items === undefined) {
        items = [];
      }
      
      autocomplete_results.innerHTML = '';
      
      items.slice(0,10).map(item =>  {
        autocomplete_results.innerHTML += `<li>${item}</li>`;
                          })
    }
    
    autocomplete_results
      .addEventListener("click", e => {
        if (e.target && e.target.nodeName == "LI") {
     
          input.value = e.target.innerHTML;
          build_list()
        }
      });
}

   
   
   //codigo para invocar ids cuando ha cambiado el dom

        // const observer = new MutationObserver(()=>{
            //codigo aqui
        // })

        // const parent = document.getElementById('root');
        // observer.observe(parent,{childList:true, subtree:true})


    //Dudas:
// 1. no esta clara cual es la pagina default para scliente, experto y dtecnico
// 2. algunas paginas tiene boton guardar a pesar de la indicaciòn "ver" ejem admin_default
// 3. pagina experto_infocliente tiene boton editar, pero no se indica cual es su pagina de edicion de cliente, es la misma que maneja "comercial_editcliente"?

// Carpeta con nombres de los hash: https://drive.google.com/drive/folders/1e5g3utMe6ANpONDFbETXJPwiiEut05a8?usp=sharing

// 4. duda: por que aparece boton guardar si es para solo ver oferta (no se edita): https://drive.google.com/file/d/1VRql0B0BOp97yNIhT1jSc4oKX6dl5-De/view?usp=sharing
//https://drive.google.com/drive/folders/1RyAdslHA_3HYSboxM_RCacao0jeI4d6X (recorrer, hay varios)
//lo mismo aca //https://drive.google.com/drive/folders/1Kiz8V7iZ1jFb2g2bCYPW32AyH_HPb4BO
// https://drive.google.com/drive/folders/1496yc-PCtYvGHULq5PFCrfsvjBqRvbuY


// este carga https://drive.google.com/drive/folders/1496yc-PCtYvGHULq5PFCrfsvjBqRvbuY
// despues de dar click a guardar en este?: https://drive.google.com/drive/folders/1496yc-PCtYvGHULq5PFCrfsvjBqRvbuY


//cuales con las opciones a escoger en tipo de identificacion
//aqui cuantos clientes deben versen en el caso de que sean muchos como se manejaria? https://drive.google.com/drive/folders/1RyAdslHA_3HYSboxM_RCacao0jeI4d6X
//se va a manejar estado activado/desactivado para el voton guardar hasta que el formulario este listo¿
//estas se maquetan? y en que parte irian   
//se supone que en la pagina que esta mostrando deberia cambiar el color del icono y mostrar ese letrerito? o se activaran con hover

//https://drive.google.com/drive/folders/1Kiz8V7iZ1jFb2g2bCYPW32AyH_HPb4BO

// http://127.0.0.1:5500/public/index.html#/admin/createuser
// https://github.com/programadornovato/firebase/commit/000f220fa5d2b43bd78725f9fc5158d7a6ee8b35


// pendiente ajustar la forma de dar error en el login 
// pendiente terminar envio de formulario crear_usuario

// link documentacion
// https://drive.google.com/drive/folders/1hx4A6tOAiegZHyLZVkoqsvSXU4gSq2Sl


