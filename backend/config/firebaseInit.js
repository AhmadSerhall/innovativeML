const initializeFirebase = async () => {
const { initializeApp }=await import ("firebase/app");
const { getAnalytics } =await import ("firebase/analytics");
const { getMessaging } = await import ("firebase/messaging");

//firebase configuration
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
console.log("Firebase initialized");
return  {app,analytics,messaging};
};

module.exports={initializeFirebase}