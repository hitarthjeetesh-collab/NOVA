// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBVme_1xO4Z-TF49nG7o_2tnq0it33ZcHw",
  authDomain: "aevra-b1b94.firebaseapp.com",
  projectId: "aevra-b1b94",
  storageBucket: "aevra-b1b94.firebasestorage.app",
  messagingSenderId: "108362901956",
  appId: "1:108362901956:web:c43ff63a8b6198687e1c91",
  measurementId: "G-ES46D799BM",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);