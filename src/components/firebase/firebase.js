import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "filmyverse-b6dd8.firebaseapp.com",
  projectId: "filmyverse-b6dd8",
  storageBucket: "filmyverse-b6dd8.appspot.com",
  messagingSenderId: "117688592523",
  appId: "1:117688592523:web:ad20f8a8cce719d8880c8e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
