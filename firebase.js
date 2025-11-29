// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "import.meta.env.vite_firebase_aoi_key",
  authDomain: "beautytime-9c25c.firebaseapp.com",
  databaseURL: "https://beautytime-9c25c-default-rtdb.firebaseio.com",
  projectId: "beautytime-9c25c",
  storageBucket: "beautytime-9c25c.firebasestorage.app",
  messagingSenderId: "544745201727",
  appId: "1:544745201727:web:5a6870c8fbafd88b9bd88a",
  measurementId: "G-K36QY48FF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { db };