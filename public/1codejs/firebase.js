
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {getStorage} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js"; //storage
import {getAuth} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"; //Authentication
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"; //Firestore Database

const firebaseConfig = {
  apiKey: "adsdasdasdasdasdsa_fsdfdsafdssqwqwweeqqq",
  authDomain: "qweqweqweccaopopupdfykufe",
  databaseURL: "https://rwrwejkdfñji3tcr3jvtg348.com",
  projectId: "wreewrwe",
  storageBucket: "sdderccccccccccccc.com",
  messagingSenderId: "1111111111114981787",
  appId: "7:2342342342342343243:wib:a1ggdfgdfgdftru54654brt554gg54540"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
