import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFhz2Mm_eHSNeOxbZcJHnqgIZnXxqZbI",
  authDomain: "library-app-61a6e.firebaseapp.com",
  projectId: "library-app-61a6e",
  storageBucket: "library-app-61a6e.appspot.com",
  messagingSenderId: "422138297846",
  appId: "1:422138297846:web:8fb743033dcb858c5a5bd7",
  measurementId: "G-61LR1RQWBJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db }