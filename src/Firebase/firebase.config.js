import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  //   apiKey: "AIzaSyDjolLOVQ_OV4W3DIUVKyN3SkK4nWZrlRY",
  //   authDomain: "movie-master-pro-49200.firebaseapp.com",
  //   projectId: "movie-master-pro-49200",
  //   storageBucket: "movie-master-pro-49200.firebasestorage.app",
  //   messagingSenderId: "251992688457",
  //   appId: "1:251992688457:web:1c462fcd52692a061c7c98"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);