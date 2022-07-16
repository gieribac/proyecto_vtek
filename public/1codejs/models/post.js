//archivo encargado de ejecutar publicaciones a firestore

import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication
import {collection, addDoc, getDocs, doc,setDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"; //Firestore Database
import {auth, db} from '../firebase.js';


// export const savePost = async(post) => {
//     return await addDoc(collection(db, "posts"), post);
// }

// export const loadPosts = async() => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const posts = querySnapshot.docs.map(doc => doc.data().tipo);
//     return posts;
// }
//para crear un usuario
export const newUser = async(correo, clave, nombreResposable, nombreUsu, numero, identificacion, tipoidentififcacion, cargo)=> {
    await createUserWithEmailAndPassword(auth, correo, clave)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "users", user.uid), {                
                Responsable: nombreResposable,
                Email: correo,
                Uuario: nombreUsu,
                numeroTel: numero,
                NoIdentificacion: identificacion,
                TipoIdentificacion: tipoidentififcacion,
                Cargo: cargo
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

// export const setDocument = () => {
//     setDoc(doc(db, "users", 'dQy5S12Va6Rz8k5dCBs4'), {                
//         Responsable: 'Elton John',
//         Email: 'correo@hotmail.com',
//         Uuario: 'elpajarito',
//         numeroTel: '1098765201',
//         NoIdentificacion: '1098765201',
//         TipoIdentificacion: 'TI',
//         Cargo: 'abogado'
//     });
// }


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
    //console.log("Document data:", docSnap.data());    
    rol  = docSnap.data();
    return rol;
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}