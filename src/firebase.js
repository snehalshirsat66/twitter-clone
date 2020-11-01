import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADtJdTe7fuINM3iJrnWHmORRJ401EMYnM",
  authDomain: "twitte-clone-2bdbd.firebaseapp.com",
  databaseURL: "https://twitte-clone-2bdbd.firebaseio.com",
  projectId: "twitte-clone-2bdbd",
  storageBucket: "twitte-clone-2bdbd.appspot.com",
  messagingSenderId: "303737691995",
  appId: "1:303737691995:web:f209553af263705554c47e",
  measurementId: "G-ZRHTXM4NK6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
