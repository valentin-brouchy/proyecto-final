// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA9-COG1XWj6yBq_Qqgp11VAhwH2LCdUw",
  authDomain: "sneaker-62bc2.firebaseapp.com",
  projectId: "sneaker-62bc2",
  storageBucket: "sneaker-62bc2.appspot.com",
  messagingSenderId: "988966652580",
  appId: "1:988966652580:web:03cf317e46bace842df431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);