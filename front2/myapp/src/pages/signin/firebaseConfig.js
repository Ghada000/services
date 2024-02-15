import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 
import { getFirestore} from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Wj2yTk7JTYyP5dSi21aDvG5brWgxpY4",
  authDomain: "next-prjct.firebaseapp.com",
  projectId: "next-prjct",
  storageBucket: "next-prjct.appspot.com",
  messagingSenderId: "933481090500",
  appId: "1:933481090500:web:08f166866b1e45ff64a891",
  measurementId: "G-H5QG8YPR0Q"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);



const authh = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);

export{firebaseApp,authh,db}
