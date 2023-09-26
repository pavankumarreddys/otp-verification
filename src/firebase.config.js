import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGMQckyir8Fj2JFA-57wgoHNVNLBBm-Iw",
    authDomain: "fir-otp-62d8c.firebaseapp.com",
    projectId: "fir-otp-62d8c",
    storageBucket: "fir-otp-62d8c.appspot.com",
    messagingSenderId: "875101434405",
    appId: "1:875101434405:web:bf71ead1fef386959ec5cc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);