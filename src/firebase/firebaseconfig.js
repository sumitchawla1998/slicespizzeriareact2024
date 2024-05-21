
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkXwNCOHsvWypkGNEuU6Mjn87orogzO0k",
  authDomain: "slicespizzeria-bebf2.firebaseapp.com",
  projectId: "slicespizzeria-bebf2",
  storageBucket: "slicespizzeria-bebf2.appspot.com",
  messagingSenderId: "325501063706",
  appId: "1:325501063706:web:92dd7dbd1e88083fec37a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let db = getFirestore()
export let auth = getAuth()