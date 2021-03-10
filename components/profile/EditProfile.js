import React from 'react'
import {useState} from "react";
import {View, Button, SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { Input } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import{
    Avatar,Title,Caption,Text,TouchableRipple,
} from 'react-native-paper'

import {addUserData} from '../auth/loginController'


export default function Profile(props,adresa) {
    //Use states
    const [imePrezime,setImePrezime] = useState("")
    const [korisnickoIme,setKorisnickoIme] = useState("")
    const [prekrsaj,setPrekrsaji] = useState("")
    const [telefon,setTelefon] = useState("")
    const [email,setEmail] = useState("")

    console.log(props);
   //const [value, onChangeText] = React.useState('Useless Placeholder');

   const spasiIzmjene = () =>{
    /*console.log("Ime i prezime korisnika je",imePrezime);
    console.log("Korisnicko ime korisnika je",korisnickoIme);
    console.log("Korisnicko ime korisnika je",prekrsaj);
    console.log("Korisnicko ime korisnika je",telefon);
    console.log("Korisnicko ime korisnika je",email);*/
    const korisnikoviPodaci ={
        _imePrezime : imePrezime,
        _korisnickoIme:korisnickoIme,
        _brojPrekrsaja:prekrsaj,
        _telefon:telefon,
        _email:email
      }
      console.log(korisnikoviPodaci);
      addUserData("kahric.tarik@gmail.com","123456",korisnikoviPodaci,editComplete);
   }
   const editComplete = ()=>{
       console.log("Uspjesno ste editovali korisnika");
  }
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity>
          
            <Avatar.Image 
              source={require('../../assets/zijad-turkovic.jpg')}
              size={80}
              />
            </TouchableOpacity>
            <View style={{marginLeft: 50}}>
            <TextInput
                  style={{ height: 40, fontSize:18}}
                  value={imePrezime}
                  onChangeText={(text) => setImePrezime(text)}
                  placeholder="Unesite ime i prezime"
            />
            <TextInput
                  style={{ height: 40,fontSize:18}}
                  value={korisnickoIme}
                  onChangeText={(text) => setKorisnickoIme(text)}
                  placeholder="Korisnicko ime"
    />
            </View>
          </View>
        </View>
  
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
          <SimpleLineIcons name="user-unfollow" size={24} color="black" />
          <Input
            style={{marginTop:15,alignItems:'center'}}
            onChangeText={text => onChangeText(text)}
            placeholder="Koliko prekrsaja imate?"
            keyboardType={"numeric"} 
            value={prekrsaj}
            onChangeText={(text) => setPrekrsaji(text)}
    />
          </View>
          <View style={styles.row}>
          <Ionicons name="phone-portrait-outline" size={24} color="black" />
          <Input
          style={{marginTop:15,alignItems:'center'}}
          onChangeText={text => onChangeText(text)}
          placeholder="Vas broj telefona."
          keyboardType={"phone-pad"} 
          value={telefon}
          onChangeText={(text) => setTelefon(text)}
          />
          </View>
          <View style={styles.row}>
          <MaterialCommunityIcons name="email-open-multiple-outline" size={24} color="black" />
          <Input
          style={{marginTop:15,alignItems:'center'}}
          onChangeText={text => onChangeText(text)}
          placeholder="Vasa e-mail adresa. "
          keyboardType={"email-address"} 
          //value={}
          onChangeText={(text) => setEmail(text)}
        />
        </View>
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox]}>
            <AntDesign name="profile" size={24} color="black" />
              <Title>Pregled skillova</Title>
            </View>
            {/*
            <View style={styles.infoBox}>
              <Button
              title="Uredi profil"
              ></Button>
            </View>
            */}
        </View>
        {/*<View style={styles.menuWrapper}>
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
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
            <AntDesign name="solution1" size={24} color="black" />
              <Text style={styles.menuItemText}>Tr</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
            <AntDesign name="solution1" size={24} color="black" />
              <Text style={styles.menuItemText}>Krađa</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            
          </TouchableRipple>
          </View>*/}
          <View style={styles.btn}>
              <Button 
              title="Spasi izmjene"
              onPress={spasiIzmjene}
              ></Button>
            </View>
      </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:35,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    textinput:{
        borderLeftWidth: 4,
        height: 30,
        padding:15,
        marginBottom:25,
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
      paddingRight:10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
      justifyContent: 'center',

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
