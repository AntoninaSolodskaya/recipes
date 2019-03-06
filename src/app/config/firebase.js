import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDW-SG_D-lRD70ngAgpzZflLxdSjr0F5Pc",
  authDomain: "recipes-3a33c.firebaseapp.com",
  databaseURL: "https://recipes-3a33c.firebaseio.com",
  projectId: "recipes-3a33c",
  storageBucket: "recipes-3a33c.appspot.com",
  messagingSenderId: "1034215991491"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
