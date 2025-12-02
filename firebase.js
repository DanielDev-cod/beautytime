// firebase.js (VITE)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "beautytime-9c25c.firebaseapp.com",
  databaseURL: "https://beautytime-9c25c-default-rtdb.firebaseio.com",
  projectId: "beautytime-9c25c",
  storageBucket: "beautytime-9c25c.firebasestorage.app",
  messagingSenderId: "544745201727",
  appId: "1:544745201727:web:5a6870c8fbafd88b9bd88a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };