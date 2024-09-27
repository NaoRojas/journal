import { login } from './../store/auth/thunks';
import { log } from 'console';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1YAR42WZI5ZB720L7K-LqQfDGAirjOEQ",
  authDomain: "journal-aecf8.firebaseapp.com",
  projectId: "journal-aecf8",
  storageBucket: "journal-aecf8.appspot.com",
  messagingSenderId: "141503121936",
  appId: "1:141503121936:web:ec9c1d9fe178e30a459895"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}