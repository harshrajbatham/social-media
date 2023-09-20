import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Zg-ndtk9hFCoiV5XawyxXR7DzEXstSk",
  authDomain: "thelifebyharsh.firebaseapp.com",
  projectId: "thelifebyharsh",
  storageBucket: "thelifebyharsh.appspot.com",
  messagingSenderId: "462902980580",
  appId: "1:462902980580:web:07a8b8447d04d0b49861f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };