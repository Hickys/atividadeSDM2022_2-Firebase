// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpXEs3S6IqL4_9L67BGKR5cdV7a4P7g7Y",
  authDomain: "atividade-85053.firebaseapp.com",
  databaseURL: "https://atividade-85053-default-rtdb.firebaseio.com",
  projectId: "atividade-85053",
  storageBucket: "atividade-85053.appspot.com",
  messagingSenderId: "573391673809",
  appId: "1:573391673809:web:7ed560fcadb83dd560e8f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database


