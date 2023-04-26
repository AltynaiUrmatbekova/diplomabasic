// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaBVaSQg-vHIjgRWgHl_kc3gn7gZC3P00",
  authDomain: "sushi-6cf8c.firebaseapp.com",
  projectId: "sushi-6cf8c",
  storageBucket: "sushi-6cf8c.appspot.com",
  messagingSenderId: "722122407051",
  appId: "1:722122407051:web:b2a2e783272cfeaa46288e",
  measurementId: "G-9WGN0HT0WW"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);
const auth = getAuth(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');
export const ordersCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOut = () => signOut();
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
