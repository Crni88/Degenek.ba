import React from 'react'
import firebase from '../../firebase/firebase'

export function loginController(email,password,loginComplete) {
    //const user ={'email':email,'password':password}
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=> loginComplete())
    .catch((error)=>console.log('Error',error));
}

export function registerControler(email,password,loginComplete) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>loginController(email,password,loginComplete))
    .catch((error)=>console.log("Error -> " ,error));
}