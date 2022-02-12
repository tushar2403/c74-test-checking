import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBA9PKYK4pRBJQZg3CwMI1A0W3z4NdwFow",
  authDomain: "e-library-e87e1.firebaseapp.com",
  projectId: "e-library-e87e1",
  storageBucket: "e-library-e87e1.appspot.com",
  messagingSenderId: "908350402521",
  appId: "1:908350402521:web:d185569319256e1ab7f3c8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
