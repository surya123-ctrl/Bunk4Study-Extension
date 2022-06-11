import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhsMraBccBTeBN_o17ln7Ej8IXxzfmKOI",
  authDomain: "login-auth-80945.firebaseapp.com",
  projectId: "login-auth-80945",
  storageBucket: "login-auth-80945.appspot.com",
  messagingSenderId: "3247956398",
  appId: "1:3247956398:web:813341844cd37d55e8a83f",
  measurementId: "G-PW2C5FVP1V"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const auth = firebase.auth();

 export {auth};
 export default db;