// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq2NwWt6n3TK3cswrxAeKgyFYqyQt-HR0",
  authDomain: "dragon-news-aead9.firebaseapp.com",
  projectId: "dragon-news-aead9",
  storageBucket: "dragon-news-aead9.appspot.com",
  messagingSenderId: "1052801361432",
  appId: "1:1052801361432:web:d5e3335f67eb210fd8456d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;