//archivo encargado de ejecutar publicaciones a firestore
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase.js';

export const savePost = async (post) => {
    return await addDoc(collection(db, "posts"), post);
}

export const loadPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map(doc => doc.data());
    return posts;
}
