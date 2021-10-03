import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm_Bs4te4XTKOVOPab1RPR4Hos5ybN7Bg",
  authDomain: "blood-donation-e489d.firebaseapp.com",
  projectId: "blood-donation-e489d",
  storageBucket: "blood-donation-e489d.appspot.com",
  messagingSenderId: "343927637592",
  appId: "1:343927637592:web:da42d557e7d80d52232c2d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
