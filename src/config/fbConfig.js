import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5lLdGyRjPW1xRFNtYvco7CJcypxkbTcU",
  authDomain: "somosdanza-93866.firebaseapp.com",
  databaseURL: "https://somosdanza-93866.firebaseio.com",
  projectId: "somosdanza-93866",
  storageBucket: "somosdanza-93866.appspot.com",
  messagingSenderId: "921502333812",
  appId: "1:921502333812:web:75e8858d7751bb1e"
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
