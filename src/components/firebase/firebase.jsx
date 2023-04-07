
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDnDfKPGQwdMEj9jah-Z3PoEreE5LPJULc",
  authDomain: "movieproject-34e49.firebaseapp.com",
  projectId: "movieproject-34e49",
  storageBucket: "movieproject-34e49.appspot.com",
  messagingSenderId: "40890734120",
  appId: "1:40890734120:web:e078070fdf9c9d2af6c71d"
};


const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);
 export const moviesRef= collection(db,"movies");
 export const reviewRef= collection(db,"reviwes");
export default app;