// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import getAuth and GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv094hKVgQiHt7w4mgLtX_vDxevIazzA0",
  authDomain: "thriftnu-59202.firebaseapp.com",
  projectId: "thriftnu-59202",
  storageBucket: "thriftnu-59202.appspot.com",
  messagingSenderId: "874429241561",
  appId: "1:874429241561:web:19c225e2f0e6931ac746c8",
  databaseURL: "https://thriftnu-59202-default-rtdb.firebaseio.com/",
  storageBucket: "thriftnu-59202.appspot.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app); // Initialize 'auth' using getAuth
const googleAuthProvider = new GoogleAuthProvider(); // Initialize Google Auth provider

export { database, auth, googleAuthProvider }; // Export 'database', 'auth', and 'googleAuthProvider'
