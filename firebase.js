// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
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

// Export the initialized Firestore instance
export { firestore };

// Test function to verify Firestore connection
async function testFirestore() {
  try {
    const testCollection = collection(firestore, 'testCollection');
    const snapshot = await getDocs(testCollection);
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
  }
}

testFirestore();
