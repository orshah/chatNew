// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3e8slc_V1NqwOu4bpWWo-1XWBnpgMidk",
  authDomain: "chatzod-dd24d.firebaseapp.com",
  projectId: "chatzod-dd24d",
  storageBucket: "chatzod-dd24d.appspot.com",
  messagingSenderId: "332861040427",
  appId: "1:332861040427:web:1e8a0597e7bc3b911f476e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
