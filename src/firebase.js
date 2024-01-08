// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
