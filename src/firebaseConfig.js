
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDO5zN0Fo_mzBw5hRQaXda4Ijer_3h_rA0",
  authDomain: "reaccgm.firebaseapp.com",
  projectId: "reaccgm",
  storageBucket: "reaccgm.appspot.com",
  messagingSenderId: "4171911510",
  appId: "1:4171911510:web:8f067d10fa47e8411106f7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)