import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Post from './components/Post';
export default function App() {
  const [outputText,setOutputText] = 
  useState('Ovo je pocetni text');
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
     <Post style={styles.post}></Post>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',

  },
  header:{
    zIndex:999,
  },
  post:{
    flex: 2,
    zIndex:0,
  }
});
