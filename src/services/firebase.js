import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt3SzSeJ76rbSyT68H7L3JbIq-QlDueZw",
  authDomain: "biz-manager-e447b.firebaseapp.com",
  projectId: "biz-manager-e447b",
  storageBucket: "biz-manager-e447b.firebasestorage.app",
  messagingSenderId: "119430158234",
  appId: "1:119430158234:web:0500dc40a583bc0a5dcc23"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar
export const db = getFirestore(app);
export const auth = getAuth(app);