// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSRIOStVo-K0yrVUuwKXrjsYvRex1RVM4",
  authDomain: "furniroecom.firebaseapp.com",
  projectId: "furniroecom",
  storageBucket: "furniroecom.firebasestorage.app",
  messagingSenderId: "109473512987",
  appId: "1:109473512987:web:cad3ae094aef5d845c82be",
  measurementId: "G-Q3GJZ6XDL3"
};
// 123@ayusHGUpta
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
