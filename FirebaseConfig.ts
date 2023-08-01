import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import .env
import{API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from "@env"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg51_uTr8qbmJkYzu164fUIwN17XVtXXw",
  authDomain: "diynner.firebaseapp.com",
  projectId: "diynner",
  storageBucket: "diynner.appspot.com",
  messagingSenderId: "737789249166",
  appId: "1:737789249166:web:cbdea813dd11f18fee2bdf"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);