import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXtn_ghPBqWt53F1OT9ETWs7xapuWa8LE",
    authDomain: "online-pastry-shop.firebaseapp.com",
    databaseURL: "https://online-pastry-shop-default-rtdb.firebaseio.com",
    projectId: "online-pastry-shop",
    storageBucket: "online-pastry-shop.appspot.com",
    messagingSenderId: "144120848876",
    appId: "1:144120848876:web:69fcb576e09cb53c6c60c9",
    measurementId: "G-Y0RRGTHLKE"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };