import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9b4myToyqZsTZEZFVoky2wTDxoHg4nM8",
  authDomain: "login-authintication.firebaseapp.com",
  projectId: "login-authintication",
  storageBucket: "login-authintication.appspot.com",
  messagingSenderId: "1016586021812",
  appId: "1:1016586021812:web:d844c4b8e1e3b9c40ce0e1"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {auth, provider};
 export default db;