import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7t-YQ03Fa6SqX8HClYTCMIYpmDhfXhqc",
  authDomain: "personal-portfolio-a3895.firebaseapp.com",
  projectId: "personal-portfolio-a3895",
  storageBucket: "personal-portfolio-a3895.appspot.com",
  messagingSenderId: "834054290980",
  appId: "1:834054290980:web:3acd954fbcf1e41b2022b1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)

