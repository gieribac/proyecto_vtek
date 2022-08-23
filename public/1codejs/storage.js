import {storage} from './firebase.js';
import {uploadBytes,getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js"
export const uploadFile = async (file) => {
    try{
        const storageRef = ref(storage, file.name);
        return await uploadBytes(storageRef, file);
    // }catch (e){console.log(e.code)

    }
}

export const getFileURL = async (fileRef) => {
    return await getDownloadURL(fileRef);
}

