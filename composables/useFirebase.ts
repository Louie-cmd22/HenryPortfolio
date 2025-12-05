// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcbLCKmEnq1OKHo0w-0ZM_UIwMxQ00nVw",
  authDomain: "henryportfolio-77dfc.firebaseapp.com",
  projectId: "henryportfolio-77dfc",
  storageBucket: "henryportfolio-77dfc.firebasestorage.app",
  messagingSenderId: "262283713650",
  appId: "1:262283713650:web:1c5b878d9187cfaf41f6eb",
  measurementId: "G-L91TTE6KMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);