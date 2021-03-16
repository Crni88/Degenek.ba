import React from 'react'
import firebase from '../../firebase/firebase'

export function loginController(email,password,loginComplete) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=> firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        //Ovdje dobijem user ID
          console.log('User email: ', user.uid);
          loginComplete(user.uid);
        }
      }))
    .catch((error)=>console.log('Error',error));
}

export function registerControler(email,password,loginComplete) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>loginController(email,password,loginComplete))
    .catch((error)=>console.log("Error -> " ,error));
}

export function addUserData(userData,editComplete){
    const user = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+user).set({
        ImePrezime:userData._imePrezime,
        KorisnickoIme:userData._korisnickoIme,
        brojPrekrsaja:userData._brojPrekrsaja,
        telefon:userData._telefon,
        email:userData._email,
    });
}

export async function getUser(recivedUserData){
    const user = firebase.auth().currentUser.uid;
    const userDocument = firestore()
    .collection('Users')
    .doc('user');
}