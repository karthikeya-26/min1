// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiIt3VaM8Uh9KYYCwPkQJA-czKAFcXnH4",
  authDomain: "co-ride-ddbc0.firebaseapp.com",
  projectId: "co-ride-ddbc0",
  storageBucket: "co-ride-ddbc0.appspot.com",
  messagingSenderId: "949621006503",
  appId: "1:949621006503:web:9037ace4aed3bbb02b3b82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
