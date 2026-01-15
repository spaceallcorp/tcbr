import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMBs9qU1vDwl4hYYFgd1tJk3rYSZ2qdnE",
    authDomain: "acsa-458213.firebaseapp.com",
    projectId: "acsa-458213",
    storageBucket: "acsa-458213.firebasestorage.app",
    messagingSenderId: "363516187651",
    appId: "1:363516187651:web:a5241923f5ecd265dbaa36"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);