import React, {useState} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.Post}>
      <View style={styles.headerPosta}>
        <Image style={styles.profilna}
         source={require('../assets/prvipost.jpg')}
        ></Image>
        <Text style={styles.text}>Mujo Mujic</Text>
      </View>
     <Image style={styles.slika}
      source={require('../assets/prvipost.jpg')}></Image>
      <View style={styles.headerPosta}>
      <Image style={styles.lajkaj}
         source={require('../assets/heart.png')}
        ></Image>
        <Text style={styles.lajkText}>15</Text>
        <Image style={styles.spasi}
         source={require('../assets/bookmark.png')}
        ></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Post:{
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
    slika: {
   width:310,
   height:310,
   borderRadius:5,
  },
  headerPosta:{
    width:'100%',
    height:50,
    flexDirection:'row',
    marginBottom:20,
    justifyContent:'flex-start',
    alignItems:'center',
    padding:5,
  },
  profilna:{
    width:65,
    height:65,
    borderRadius: 200 / 2,
    borderWidth: 1,
    borderColor: "#90ee90",
  },
  text:{
    fontSize:20,
    marginLeft:15,
  },
  lajkaj:{
    width:30,
    height:30,
  },
  lajkText:{
    fontSize:18,
    marginLeft:15,
    marginTop:-4,
  },
  spasi:{
    width:30,
    height:30,
    marginLeft: 'auto',
    marginRight:5,

  }
});
