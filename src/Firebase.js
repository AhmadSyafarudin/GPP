// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCvEAfEA-E6jO-FIulCa5MH_D3OlKgE6-M",
  authDomain: "pwl-kost.firebaseapp.com",
  projectId: "pwl-kost",
  storageBucket: "pwl-kost.appspot.com",
  messagingSenderId: "713353253752",
  appId: "1:713353253752:web:654d51ac96b4a2923aee8d",
  measurementId: "G-36WWJW1Z3N"
});

export const auth = app.auth();
export default app;
