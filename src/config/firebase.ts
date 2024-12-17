import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoQ8T53A6tW1SYq1Qc0QTYMsKuMITY09U",
  authDomain: "oncogpt-lmz.firebaseapp.com",
  projectId: "oncogpt-lmz",
  storageBucket: "oncogpt-lmz.firebasestorage.app",
  messagingSenderId: "1040605656409",
  appId: "1:1040605656409:web:8d904d2dafa0b4ff0c0848"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
