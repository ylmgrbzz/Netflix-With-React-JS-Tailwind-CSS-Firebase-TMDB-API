// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKCXfZCR-yBiCd2LRVCbIS6B1N-pdCaT4",
    authDomain: "netflix-f707d.firebaseapp.com",
    projectId: "netflix-f707d",
    storageBucket: "netflix-f707d.appspot.com",
    messagingSenderId: "445146859357",
    appId: "445146859357:web:2658321abada752483cab4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// REACT_APP_FIREBASE_API_KEY=AIzaSyDKCXfZCR-yBiCd2LRVCbIS6B1N-pdCaT4
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-f707d.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-f707d
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-f707d.appspot.com
// REACT_APP_MESSAGING_SENDER=445146859357
// REACT_APP_APP_ID=1:445146859357:web:2658321abada752483cab4
