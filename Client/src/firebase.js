// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-25d8f.firebaseapp.com",
  projectId: "mern-auth-25d8f",
  storageBucket: "mern-auth-25d8f.firebasestorage.app",
  messagingSenderId: "517333642877",
  appId: "1:517333642877:web:0e4ab1f2a192140f500b14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);