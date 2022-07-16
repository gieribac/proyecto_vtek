import {auth} from './firebase.js';

document.getElementById('signOut').addEventListener('click', () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    console.log(error.messaje);
    })
})