import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/Dashboard';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';

const Stack = createStackNavigator();
export default function App() {
  return (

    <EditProfile>
      
    </EditProfile>
      /* 
    <Profile>

    </Profile>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>*/

  );
}

