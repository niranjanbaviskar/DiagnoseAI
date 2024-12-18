// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAiFy2koiHs0kqRxjWSvnE7I-MM3dtB77o",
    authDomain: "medicalassistant-e3e17.firebaseapp.com",
    projectId: "medicalassistant-e3e17",
    storageBucket: "medicalassistant-e3e17.firebasestorage.app",
    messagingSenderId: "808840045016",
    appId: "1:808840045016:web:ddb5eb396dd6b5452d52ad",
    measurementId: "G-ZFXDE6JBZ9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { auth, db };
