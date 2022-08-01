//archivo encargado de ejecutar publicaciones a firestore

import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication
import {collection, addDoc, getDocs, increment, doc, setDoc, getDoc, query, where, orderBy, startAfter, limit} 
from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"; //Firestore Database
import {auth, db} from '../firebase.js';

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
// export const newClient = async() => {
//     await setDoc(doc(db, "clients", '1000000'), datos);
// }



// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
//   console.log("Document written with ID: ", docRef.id);

// export const newClient = async() => {
//     await setDoc(doc(db, "clients", '1000000'), datos);
// }

export const saveClient = async() => {
    await addDoc(collection(db, "clients"), datos);
}

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

export const paginacion = () => {
db.collection('users').onSnapshot((s)=>{console.log(s)});}



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
