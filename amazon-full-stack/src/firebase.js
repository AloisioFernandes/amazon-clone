import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwHYFFX08B_sc3VbITmXi3i0OeO8YEzaw",
  authDomain: "clone-c74b2.firebaseapp.com",
  projectId: "clone-c74b2",
  storageBucket: "clone-c74b2.appspot.com",
  messagingSenderId: "41600339693",
  appId: "1:41600339693:web:20377c929990b625c7c6e4",
  measurementId: "G-VLWT2PTTWZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }