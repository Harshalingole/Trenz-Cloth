// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";
import { async } from "@firebase/util";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41aizd1NiswG8rB8Lfq1_YbTkgfLycK8",
  authDomain: "trenz-cloth-db.firebaseapp.com",
  projectId: "trenz-cloth-db",
  storageBucket: "trenz-cloth-db.appspot.com",
  messagingSenderId: "974362284740",
  appId: "1:974362284740:web:7bc29b56697f3a4c4caf91",
  measurementId: "G-02XQGPYN33",
};

// Initialize Firebase
const firebasApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebasApp);

// you can have multiple provider such as fb,github,and other
const gogoleProvider = new GoogleAuthProvider();

gogoleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, gogoleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, gogoleProvider);

export const db = getFirestore();

export const createUserDoucumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error crating the user", error.message);
    }
  }
  return userDocRef;
};
