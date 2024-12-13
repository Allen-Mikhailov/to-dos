import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore  } from "firebase/firestore"; 
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "firebase_api_key",
    authDomain: "stuff-toodo.firebaseapp.com",
    projectId: "stuff-toodo",
    storageBucket: "stuff-toodo.firebasestorage.app",
    messagingSenderId: "90115019405",
    appId: "1:90115019405:web:4177508ef56022d4cd48c4",
    measurementId: "G-3NP6TKMMZ4"
  };

if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
{
    const response = await fetch("/firebase_api_key.txt");
    const text = await response.text();
    firebaseConfig.apiKey = text;
}

const google_auth = new GoogleAuthProvider()

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {app, db, auth, google_auth, signInWithPopup, signOut}