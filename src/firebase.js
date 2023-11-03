// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvFm4UB13ol6hzHsrOEpjMoxF_D-zxgxQ",
  authDomain: "verde-login-980a8.firebaseapp.com",
  projectId: "verde-login-980a8",
  storageBucket: "verde-login-980a8.appspot.com",
  messagingSenderId: "820372792902",
  appId: "1:820372792902:web:5a7d49998510109f4acc47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
