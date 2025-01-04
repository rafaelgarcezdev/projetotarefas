import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKyaAS_sI1VW-dTOlRzLrZ5i6ERXoBiWs",
  authDomain: "cursoreact-39909.firebaseapp.com",
  projectId: "cursoreact-39909",
  storageBucket: "cursoreact-39909.firebasestorage.app",
  messagingSenderId: "911411442769",
  appId: "1:911411442769:web:a3c8a6beca3c303eb7f470",
  measurementId: "G-P3GMD0FPC6",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
