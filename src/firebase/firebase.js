import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAFX9Gydx2AqNMMtAYgA29O3RaeU9lt3D8",
  authDomain: "insta-f173c.firebaseapp.com",
  projectId: "insta-f173c",
  storageBucket: "insta-f173c.appspot.com",
  messagingSenderId: "924806025855",
  appId: "1:924806025855:web:381dab776e7e14adae254a",
  measurementId: "G-231PB7TZSC",
});
const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseConfig);
export { db, auth,storage };
