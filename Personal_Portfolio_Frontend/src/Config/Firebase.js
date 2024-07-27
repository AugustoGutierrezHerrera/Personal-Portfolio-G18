// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7t-YQ03Fa6SqX8HClYTCMIYpmDhfXhqc",
  authDomain: "personal-portfolio-a3895.firebaseapp.com",
  projectId: "personal-portfolio-a3895",
  storageBucket: "personal-portfolio-a3895.appspot.com",
  messagingSenderId: "834054290980",
  appId: "1:834054290980:web:3acd954fbcf1e41b2022b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    db
}