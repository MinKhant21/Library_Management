import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAemGpMy5U7b8DOWHO9qrzAPsZea1Jw1-U",
  authDomain: "libraryapp-34d1b.firebaseapp.com",
  projectId: "libraryapp-34d1b",
  storageBucket: "libraryapp-34d1b.appspot.com",
  messagingSenderId: "627581379462",
  appId: "1:627581379462:web:bfe9a9e5bd473c7160c207"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db


