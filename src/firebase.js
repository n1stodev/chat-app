import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyASRfeKlYfg1cTCvT4-AszryILZGawqTx0",
  authDomain: "chat-app-6d6b8.firebaseapp.com",
  projectId: 'chat-app-6d6b8',
  storageBucket: "chat-app-6d6b8.appspot.com",
  messagingSenderId: "843837798766",
  appId: "1:843837798766:web:925a17b9f50d7bb4fe697f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)