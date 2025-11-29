// Importa o Firebase direto da CDN oficial
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ⚙️ Configuração do seu projeto (essa parte vem do painel do Firebase)
const firebaseConfig = {
  apiKey: import.meta.env.vite_firebase_aoi_key
  authDomain: "beautytime-9c25c.firebaseapp.com",
  databaseURL: "https://beautytime-9c25c-default-rtdb.firebaseio.com",
  projectId: "beautytime-9c25c",
  storageBucket: "beautytime-9c25c.firebasestorage.app",
  messagingSenderId: "544745201727",
  appId: "1:544745201727:web:5a6870c8fbafd88b9bd88a",
  measurementId: "G-K36QY48FF2"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exporta o banco Firestore
export const db = getFirestore(app);