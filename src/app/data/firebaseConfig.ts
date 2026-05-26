import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWE48ZRwxGbHhjHiy2-LtuTw1FTrKcshY",
  authDomain: "arandu-a28b2.firebaseapp.com",
  projectId: "arandu-a28b2",
  storageBucket: "arandu-a28b2.firebasestorage.app",
  messagingSenderId: "467052137270",
  appId: "1:467052137270:web:0991862e83d7612a3ac197",
  measurementId: "G-XVPVR4VMZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
