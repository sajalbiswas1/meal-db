// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsdLq1CPD4LN7oEVZlhvc20vfj6J0dU88",
  authDomain: "my-login-signup-project-fed21.firebaseapp.com",
  projectId: "my-login-signup-project-fed21",
  storageBucket: "my-login-signup-project-fed21.appspot.com",
  messagingSenderId: "316797307802",
  appId: "1:316797307802:web:5a7a856f467bd4c8c1c823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);