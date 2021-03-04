import React, {useState} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.header}>
     <Image style={styles.searchIcon}
      source={require('../assets/searcIcon.png')}></Image>
      <Text style={styles.text}>[Top secret name]</Text>
      <Image style={styles.message}
      source={require('../assets/messages.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:'5%',
    width:'120%',
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding:55
  },
  text:{
    fontSize:18,
  },
  
});
