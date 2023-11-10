import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC0i2nTkV89scPGz6CcR_bZDz1DdkyKsLo",
    authDomain: "library-app-29685.firebaseapp.com",
    projectId: "library-app-29685",
    storageBucket: "library-app-29685.appspot.com",
    messagingSenderId: "1014001244539",
    appId: "1:1014001244539:web:9c837f9718a433a66e45de",
    measurementId: "G-PQ4HL49PVC"
  };
  const app = initializeApp(firebaseConfig);

  let db = getFirestore(app);

  let auth = getAuth(app)

  export  {db , auth}