import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCypeCcDrJnqyj88TlDIbzcnRnXss0I6WY",
  authDomain: "clone-ea518.firebaseapp.com",
  projectId: "clone-ea518",
  storageBucket: "clone-ea518.appspot.com",
  messagingSenderId: "1066816275226",
  appId: "1:1066816275226:web:41a44ec8fe1b9c150b22a3",
  measurementId: "G-K134TRZ3GQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider } ;
