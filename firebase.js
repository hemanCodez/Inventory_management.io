// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_hdGaU5T5zb7hKYOSMzui8FSP8sG3Jjc",
  authDomain: "inventory-management-71d89.firebaseapp.com",
  projectId: "inventory-management-71d89",
  storageBucket: "inventory-management-71d89.appspot.com",
  messagingSenderId: "149095773605",
  appId: "1:149095773605:web:18e05c7a7647651f4be44c",
  measurementId: "G-GH1EWJ7KKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}