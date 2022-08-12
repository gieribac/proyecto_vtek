//archivo encargado de ejecutar publicaciones a firestore

import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication
import {collection, addDoc, getDocs, doc, setDoc, getDoc, query, where, orderBy, startAfter, limit} 
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

////<comercial_createcliente>////
export const saveClient = async(datos, Clave)=> {
    try {
        console.log(datos)
        console.log(datos.Email)
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
        
        console.log(`documentsSnapCom: ${documentSnapshots}`)
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
export const setOferta = async(datos)=> {
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
// const uidcom = localStorage.getItem("u");
export const querySnapComOfs = async() => {
    try {
        const first = query(collection(db, "ofertas"), orderBy("Oferta","asc"), limit(3));
        const documentSnapshots = await getDocs(first);
        
        console.log(`documentsSnapCom: ${documentSnapshots}`)
        return documentSnapshots
    
    
        } catch (e){
            throw e.message
    
        }
    }
    
    export const queryNextComOfs= async(lastVisible) => {
    
        const next = query(collection(db, "ofertas"), 
                orderBy("Oferta","asc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }
    
    export const queryNextntComOfs = async(lastVisible) => {
    
        const next = query(collection(db, "ofertas"), 
                orderBy("Oferta","desc"),
                startAfter(lastVisible),
                limit(3));
        const docs_ = await getDocs(next);
        
        return docs_;
                
    }
//</comercial_infooffers>//


////llamadas//
// saveClient();
// queryInc().then((d)=>{console.log(d);
//     console.log(`${d.Representante_Legal}, ${d.Direccion}`)
// });;

// querySnap().then((d)=>{
//     // console.log(d._document.data.value.mapValue.fields.Cargo)
//     // console.log(d.data())
//     }
// )
//  next_() 

// readCli().then((d)=>{console.log(d);
//     console.log(`${d.Representante_Legal}, ${d.Direccion}`)
// });
/////////////////

// const querySnap = async() => {
//     const first = query(collection(db, "clients"), orderBy("cargo"), limit(25));
//     const documentSnapshots = await getDocs(first);
//     documentSnapshots.forEach((d) => {console.log(d)})
//     // Get the last visible document
//     const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
//     console.log("last", lastVisible);

// querySnap().then(()=>{});
// 1. se encesita id automatico o se deja la cedula?
// 2. se va a manejar contador, pero dice que la bd deja crear 1 por segundo. es necesario usar contador distribuido para aplicaciones de mas traficio. que hacer?

// export const savePost = async(post) => {
//     return await addDoc(collection(db, "posts"), post);
// }

// export const loadPosts = async() => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const posts = querySnapshot.docs.map(doc => doc.data().tipo);
//     return posts;
// }
//para crear un usuario

// export const newUser = (correo, clave)=> {
//     createUserWithEmailAndPassword(auth, correo, clave)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             // setDoc(doc(db, "users", user.uid), {                
//             //     Responsable: nombreResposable,
//             //     Email: correo,
//             //     Uuario: nombreUsu,
//             //     numeroTel: numero,
//             //     NoIdentificacion: identificacion,
//             //     TipoIdentificacion: tipoidentififcacion,
//             //     Cargo: cargo
//             // });
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
// }

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