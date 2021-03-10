import * as firebase from 'firebase';
import 'firebase/firestore';
import ReactNative from "react-native";

try {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALavpqKg8KBvRWVzqDbY736xJiOiUtWNs",
  authDomain: "degenek-58dd9.firebaseapp.com",
  projectId: "degenek-58dd9",
  storageBucket: "degenek-58dd9.appspot.com",
  messagingSenderId: "348584618121",
  appId: "1:348584618121:web:f7d2f439368684b465fe58",
  measurementId: "G-N3TEQW5ZQR",
  databaseURL:"degenek-58dd9-default-rtdb"
};
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error)
}

export default firebase;