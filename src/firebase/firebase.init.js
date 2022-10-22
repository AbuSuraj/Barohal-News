// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClEpquE7GVaItw8z_Ml_qmqGnU3NsxZEQ",
  authDomain: "barohal-news.firebaseapp.com",
  projectId: "barohal-news",
  storageBucket: "barohal-news.appspot.com",
  messagingSenderId: "384736028781",
  appId: "1:384736028781:web:bc06a24b465d4d09e5f764",
  measurementId: "G-TCEJRC5CQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;