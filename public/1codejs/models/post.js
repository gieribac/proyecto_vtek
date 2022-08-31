//archivo encargado de ejecutar publicaciones a firestore

import {createUserWithEmailAndPassword, signOut, updateEmail, signInWithEmailAndPassword} 
from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication
import {collection, addDoc, getDocs, doc, setDoc, getDoc, query, where, orderBy, startAfter, limit, updateDoc} 
from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"; //Firestore Database
import {auth, db} from '../firebase.js';

////<admin_createuser>////
export const newUser = async(correo, clave, nombreResposable, nombreUsu, numero, identificacion, tipoidentififcacion, cargo)=> {
try {
    await createUserWithEmailAndPassword(auth, correo, clave)
        .then(async(userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {                
                Responsable: nombreResposable,
                Email: correo,
                Usuario: nombreUsu,
                numeroTel: numero,
                NoIdentificacion: identificacion,
                TipoIdentificacion: tipoidentififcacion,
                Cargo: cargo
            });
            signOut(auth).then(() => {
                const correo = localStorage.getItem("em");
                const clave = localStorage.getItem("k");                
                signInWithEmailAndPassword(auth,correo,clave)
                .then((userCredential) => {                        
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    throw error;
                })
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    throw error;
                })
        }).catch ((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            throw error;
        })
} catch (e){
    throw e;
}
}
////</admin_createuser>////

// export const newClient = async() => {
//     await setDoc(doc(db, "clients", '1000000'), datos);
// }



////<comercial_createfactorie>////
export const setFabrica = async(datos) => {
    try{
        await addDoc(collection(db, "fabricas"), datos).then().catch(e=>{throw e});
        return 'enviado'
    } catch (e){
        throw e;
    }
} 
////</comercial_createfactorie>////
////<comercial_createoffer>////
export const setOffer = async(datos) => {
    try{
        datos.Formalizar = false;
        await addDoc(collection(db, "ofertas"), datos).then().catch(e=>{throw e});
        return 'oferta enviada correctamente'
    } catch (e){
        throw e;
    }
} 

export const updateOffer = async (idOf, datos) => {
    try {
        await updateDoc(doc(db, "ofertas", idOf), datos);
        return "oferta actualizada correctamente";
    } catch (e){
        throw e;
    }
}


export const querySnapOffClients = async() => {
    try {
        const first = query(collection(db, "clients"), where("estado", "==", true), orderBy("Nit","asc")/*, limit(3)*/);
        const documentSnapshots = await getDocs(first);
        
        return documentSnapshots    
    
        } catch (e){
            throw e.message
    
        }
    }

    export const querySnapOffFabricas = async() => {
        try {
            const first = query(collection(db, "fabricas"), orderBy("nombre_compania","asc")/*, limit(3)*/);
            const documentSnapshots = await getDocs(first);

            return documentSnapshots        
        
            } catch (e){
                throw e.message
        
            }
        }


////</comercial_createoffer>////
////<comercial_createcliente>////
export const saveClient = async(datos, Clave)=> {
    try {
        await createUserWithEmailAndPassword(auth, datos.Email, Clave)
            .then(async(userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "clients", user.uid), datos);
                signOut(auth).then(() => {
                    const correo = localStorage.getItem("em");
                    const clave = localStorage.getItem("k");                
                    signInWithEmailAndPassword(auth,correo,clave)
                    .then((userCredential) => {                      
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode)
                        console.log(errorMessage)
                        throw error;
                    })
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode)
                        console.log(errorMessage)
                        throw error;
                    })
            }).catch ((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                throw error;
            })
    } catch (e){
        throw e;    
    }
    }
////</comercial_createcliente>////

// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
//   console.log("Document written with ID: ", docRef.id);

export const queryInc = async() => {
    const clientRef = collection(db, "clients");
    const q = query(clientRef, where('inc', '==', true));
    const querySnapshot = await getDocs(q);
    console.log("aaa")
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    
    return doc.data()});
}

// export const paginacion = () => {
// db.collection('users').onSnapshot((s)=>{console.log(s)});}


//<admin_infoclients>//

// Query the first page of docs

export const querySnap = async() => {
try {
    const first = query(collection(db, "clients"), orderBy("No_Identificacion","asc"), limit(3));
    const documentSnapshots = await getDocs(first);
    
    
    return documentSnapshots


    } catch (e){
        return{error:e.message} 

    }
}

export const queryNext = async(lastVisible) => {

    const next = query(collection(db, "clients"),
            orderBy("No_Identificacion","asc"),
            startAfter(lastVisible),
            limit(3));
    const docs_ = await getDocs(next);
    
    return docs_;
            
}

export const queryNextnt = async(lastVisible) => {

    const next = query(collection(db, "clients"),
            orderBy("No_Identificacion","desc"),
            startAfter(lastVisible),
            limit(3));
    const docs_ = await getDocs(next);
    
    return docs_;
            
}

//</admin_infoclients>//

//<comercial_infoclients>//
const uidcom = localStorage.getItem("u");
export const querySnapComCli = async() => {
    try {
        const first = query(collection(db, "clients"), where("ComercialID", "==", uidcom), orderBy("No_Identificacion","asc"), limit(3));
        const documentSnapshots = await getDocs(first);
        
        // console.log(`documentsSnapCom: ${documentSnapshots}`)
        // console.dir(documentSnapshots);
        // console.info(documentSnapshots);
        return documentSnapshots
    
    
        } catch (e){
            throw e.message
    
        }
    }
    
    export const queryNextComCli = async(lastVisible) => {
    
        const next = query(collection(db, "clients"), where("ComercialID", "==", uidcom),
                orderBy("No_Identificacion","asc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }
    
    export const queryNextntComCli = async(lastVisible) => {
    
        const next = query(collection(db, "clients"), where("ComercialID", "==", uidcom),
                orderBy("No_Identificacion","desc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }

////</comercial_infoclients>////

////<comercial_createoffer>////
export const getOfertas = async(datos)=> {
    try {
        const docRef = doc(db, "ofertas","Oferta");
        const ds = await getDoc(docRef)
        ds.length > 0 ? datos.Oferta = parseInt(ds[ds.length-1])+1 : datos.Oferta = 0;
        datos.Formalizar="Pendiente";
        await setDoc(doc(db, "ofertas"), datos).then(a => {return true}).catch (e => {throw e});
        

    } catch (e){
        throw e;    
    }
    }

export const queryOferta = async(ref) => {
    try {
        const q = query(collection(db, "ofertas"), where("Oferta", "==", ref));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    } catch (e){
        throw e.message
    }
}
////</comercial_createoffer////

////<comercial_infooffers>////
export const querySnapComOfs = async() => {
    try {
        const first = query(collection(db, "ofertas"), orderBy("ClienteOF","asc"), limit(3));
        const documentSnapshots = await getDocs(first);
        
        console.log(`documentsSnapCom: ${documentSnapshots}`)
        return documentSnapshots
    
    
        } catch (e){
            throw e.message
    
        }
    }
    
    export const queryNextComOfs= async(lastVisible) => {
    
        const next = query(collection(db, "ofertas"), 
                orderBy("ClienteOF","asc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }
    
    export const queryNextntComOfs = async(lastVisible) => {
    
        const next = query(collection(db, "ofertas"), 
                orderBy("ClienteOF","desc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }

    export const updateFormalizarOF = async (idOf, check) => {
        try {
            await updateDoc(doc(db, "ofertas", idOf), {Formalizar: check});
            return "oferta actualizada formalizada correctamente";
        } catch (e){
            throw e;
        }
    }

//</comercial_infooffers>//

////<comercial_editcliente>////
export const updateUserClient = async (bcorreo, bclave, Clave = null, Email = null) => {
    /*iniciar sesion como cliente*/
    console.log(`bcorreo: ${bcorreo}; bClave ${bclave}`)
    signInWithEmailAndPassword(auth,bcorreo,bclave)
    .then(() => {
        /*update email si aplica*/
      
        Email && (async() => {
            await updateEmail(auth.currentUser, Email).then(() => {
                return "Email updated!";
            }).catch((error) => {
                throw error.message;
            });
        })();    
        /*update clave si aplica*/      
    
       
    }).then (()=>{
        Clave && (async() => {
            const user = auth.currentUser;
            await updatePassword(user, Clave).then(() => {
                return "Email updated!";
            }).catch((error) => {
                throw error.message;
            });
        })();
         /*cerrar sesion del cliente y volver a cargar sesion del comercial*/

             
    }).then (()=>{
        signOut(auth).then(() => {
            const correo = localStorage.getItem("em");
            const clave = localStorage.getItem("k");                
            signInWithEmailAndPassword(auth,correo,clave)
            .then(() => {                        
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                throw error;
            })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                throw error;
            })
    })
    .catch((error) => {console.log(error.code);
        console.log(error.message);
        throw error.messaje;
    })
}



export const updateDataClient = (idClient, datos) => {
    try {
        updateDoc(doc(db, "clients", idClient), datos);
        return "doc updated";
    } catch (e){
        throw e.message;
    }
}

////</tcoordinador_createasignacion>////

    export const querySnapTcAsignExpert = async() => {
        try {
            const first = query(collection(db, "users"), where("Cargo", "==", "experto"), orderBy("NoIdentificacion","asc")/*, limit(3)*/);
            const documentSnapshots = await getDocs(first);
            
            // console.log(`documentsSnapCom: ${documentSnapshots}`)
            // console.dir(documentSnapshots);
            // console.info(documentSnapshots);
            return documentSnapshots
        
        
            } catch (e){
                throw e.message
        
            }
        }

    
    export const queryNextTcAsignExpert= async(lastVisible) => {
    
        const next = query(collection(db, "ofertas"), 
                orderBy("ClienteOF","asc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }
    
    export const queryNextntTcAsignExpert = async(lastVisible) => {
    
        const next = query(collection(db, "ofertas"), 
                orderBy("ClienteOF","desc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }
//</tcoorditcoordinador_createasignacion>//


export const readUser = async () => {
    const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
    let rol;
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());    
    rol  = docSnap.data();
    return rol;
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}
export const readCli = async () => {
    const docSnap = await getDoc(doc(db, "clients", '0'));
    let rol;
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());    
    rol  = docSnap.data();
    return rol;
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}