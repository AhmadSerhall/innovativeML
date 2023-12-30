// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRDkGwL_EHP9AvnOB-ynBRaNgISvirpRI",
  authDomain: "innovativeml.firebaseapp.com",
  projectId: "innovativeml",
  storageBucket: "innovativeml.appspot.com",
  messagingSenderId: "58934895291",
  appId: "1:58934895291:web:c1cb3195d2e743bc6bff9e",
  measurementId: "G-8R69LWVWDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
export default {app,analytics,messaging};
