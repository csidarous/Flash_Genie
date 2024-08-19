// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqezGfxBdJPghEPU10GDjj79i48g5Phwg",
  authDomain: "ai-flashcards-e68d9.firebaseapp.com",
  projectId: "ai-flashcards-e68d9",
  storageBucket: "ai-flashcards-e68d9.appspot.com",
  messagingSenderId: "454413252429",
  appId: "1:454413252429:web:f134266e6e8193146da904",
  measurementId: "G-7HQMRFWEEK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const analytics = getAnalytics(app);