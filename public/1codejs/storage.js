import {storage} from './firebase.js';
import {uploadBytes,getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js"
export const uploadFile = async (file) => {
    const storageRef = ref(storage, file.name);
    return await uploadBytes(storageRef, file);
}

export const getFileURL = async (fileRef) => {
    return await getDownloadURL(fileRef);
}

