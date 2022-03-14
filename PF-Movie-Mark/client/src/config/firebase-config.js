import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCn7xDjOyJI0ZFBtvRs2xESe4g2OOlwq7w",
    authDomain: "moviemark-3e862.firebaseapp.com",
    projectId: "moviemark-3e862",
    storageBucket: "moviemark-3e862.appspot.com",
    messagingSenderId: "325495932308",
    appId: "1:325495932308:web:ac57089123e3c50196bb81",
    measurementId: "G-M9HQYFY78M"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
