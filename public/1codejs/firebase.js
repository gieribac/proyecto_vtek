
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcRK2u7M_KhqbOTNRmEJ86o6k6jfFwlrQ",
  authDomain: "vtek-4acd8.firebaseapp.com",
  databaseURL: "https://vtek-4acd8-default-rtdb.firebaseio.com",
  projectId: "vtek-4acd8",
  storageBucket: "vtek-4acd8.appspot.com",
  messagingSenderId: "479841844049",
  appId: "1:479841844049:web:e0bebca54add45565d3170"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);