// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDr-xmzBg6F2_WE9Gc0qrD3IEW03JGHkk",
  authDomain: "figur-app.firebaseapp.com",
  projectId: "figur-app",
  storageBucket: "figur-app.firebasestorage.app",
  messagingSenderId: "1048545733253",
  appId: "1:1048545733253:web:349a4feabbe0f0ef7697ec",
  measurementId: "G-Z3YWE5GM4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);