import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc4LSb58t1PpCjVDLRnyWMwRi4-tZ0tgU",
  authDomain: "projeto-arandu-teste.firebaseapp.com",
  projectId: "projeto-arandu-teste",
  storageBucket: "projeto-arandu-teste.firebasestorage.app",
  messagingSenderId: "369952857730",
  appId: "1:369952857730:web:73c4fb1bbc9b362ecade9b",
  measurementId: "G-4S1H042818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
