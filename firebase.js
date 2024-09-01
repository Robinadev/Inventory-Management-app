// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByv6xGqhV_q3AIv4n9ga-kQFDfIYBRscs",
  authDomain: "inventory-app-c5fec.firebaseapp.com",
  projectId: "inventory-app-c5fec",
  storageBucket: "inventory-app-c5fec.appspot.com",
  messagingSenderId: "1078292742272",
  appId: "1:1078292742272:web:9aeac8bc71abc30c5f6665",
  measurementId: "G-SEZ0H7QFR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
