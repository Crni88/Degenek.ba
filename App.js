import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase'

import Landing from './components/auth/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALavpqKg8KBvRWVzqDbY736xJiOiUtWNs",
  authDomain: "degenek-58dd9.firebaseapp.com",
  projectId: "degenek-58dd9",
  storageBucket: "degenek-58dd9.appspot.com",
  messagingSenderId: "348584618121",
  appId: "1:348584618121:web:f7d2f439368684b465fe58",
  measurementId: "G-N3TEQW5ZQR"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

