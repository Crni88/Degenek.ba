import React from 'react'
import {useState} from "react";

import {View, Button, SafeAreaView,StyleSheet,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import{
    Avatar,Title,Caption,Text,TouchableRipple,
} from 'react-native-paper'

export default function Profile(profilKorisnika) {
  //KAKO ONDA OVDJE ISPISE CITAV JEBENI OBJEKAT :)) 
  console.log("Profil korisnika",profilKorisnika);
    return ( 
        <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={require('../../assets/zijad-turkovic.jpg')}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}>Zijad Turkovic</Title>
              <Caption style={styles.caption}>@zika</Caption>
            </View>
          </View>
        </View>
  
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
          <SimpleLineIcons name="user-unfollow" size={24} color="black" />
            <Text style={{color:"#777777", marginLeft: 20}}>40 Počinjenih krivičnih dijela</Text>
          </View>
          <View style={styles.row}>
          <Ionicons name="phone-portrait-outline" size={24} color="black" />
            <Text style={{color:"#777777", marginLeft: 20}}>+387 225 883</Text>
          </View>
          <View style={styles.row}>
          <MaterialCommunityIcons name="email-open-multiple-outline" size={24} color="black" />
            <Text style={{color:"#777777", marginLeft: 20}}>{}</Text>
          </View>
        </View>
  
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
                <AntDesign name="smileo" size={24} color="black" />
              <Title>25 dojmova</Title>
            </View>
            <View style={styles.infoBox}>
              <Button
              title="Uredi profil"
              ></Button>
            </View>
        </View>
  
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
            <AntDesign name="solution1" size={24} color="black" />
              <Text style={styles.menuItemText}>Krijumčarenje droge</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
            <AntDesign name="solution1" size={24} color="black" />
              <Text style={styles.menuItemText}>Pranje novca</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
            <AntDesign name="solution1" size={24} color="black" />
              <Text style={styles.menuItemText}>Ubistva</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
            <AntDesign name="solution1" size={24} color="black" />
              <Text style={styles.menuItemText}>Krađa</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.btn}>
              <Button 
              title="Pošalji poruku"
              ></Button>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:25,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 15,
      lineHeight: 15,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems:'center',
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    btn:{
      paddingHorizontal: 30,
      marginTop:25,

    }
  });
