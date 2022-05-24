// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database


