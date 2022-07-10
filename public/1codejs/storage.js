import {storage} from './firebase.js';
import {uploadBytes,getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js"
export const uploadImage = async (file) => {
    const storageRef = ref(storage, file.name);
    return await uploadBytes(storageRef, file);
}

export const getImageURL = async (fileRef) => {
    return await getDownloadURL(fileRef);
}