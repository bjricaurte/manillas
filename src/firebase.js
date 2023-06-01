// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUyQfFS3x8wC1jfjAidAyxdPoJEclHwQE",
  authDomain: "manillas-ff2bd.firebaseapp.com",
  projectId: "manillas-ff2bd",
  storageBucket: "manillas-ff2bd.appspot.com",
  messagingSenderId: "679800190817",
  appId: "1:679800190817:web:eac16ba96a0e615cd7f720",
  measurementId: "G-1XP8D03LNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};