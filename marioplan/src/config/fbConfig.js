import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDV7IvuS42xX-hwUF1ah2L5a2fkvTr7LAY",
  authDomain: "react-redux-firebase-87b85.firebaseapp.com",
  projectId: "react-redux-firebase-87b85",
  storageBucket: "react-redux-firebase-87b85.appspot.com",
  messagingSenderId: "683090652594",
  appId: "1:683090652594:web:e5c24e6da631c2ed8f48ab",
  measurementId: "G-HET6CRLS3T"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 