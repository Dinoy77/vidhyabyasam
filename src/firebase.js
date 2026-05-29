import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEu3RYjyNTlFLx2k1M6gIUO9wXAALxbFg",
  authDomain: "vidhyabyasam.firebaseapp.com",
  projectId: "vidhyabyasam",
  storageBucket: "vidhyabyasam.firebasestorage.app",
  messagingSenderId: "790254609103",
  appId: "1:790254609103:web:ebf20fd3fb8158e6cecdba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;