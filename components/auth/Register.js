import React from 'react'
import {useState} from "react";

import {View, Button, SafeAreaView,StyleSheet,Text,TextInput} from 'react-native'
import { Input } from 'react-native-elements';

import firebase from 'firebase'

export default function Register(props) {
      const [email,setemail] = useState("")
      const [name,setname] = useState("")
      const [password,setpassword] = useState("")

      const registrirajUsera = () => {
        console.log("Registriram usera");
      }
    return (
        <View style={styles.register}>
            <SafeAreaView>
                    <Text style={styles.naslov}>Registriraj se na Degenek.ba</Text>
                    
                <Input 
                placeholder={'Ime i prezime'} 
                keyboardType={"default"} 
                style={styles.input}
                value={name}
                onChangeText={(text) => setname(text)}
                >
                </Input>
                <Input 
                placeholder={'Email adresa'} 
                keyboardType={"email-address"} 
                style={styles.input}
                value={email}
                onChangeText={(text) => setemail(text)}
                >
                </Input>
                <Input 
                placeholder={'Password'} 
                style={styles.input}
                value={password}
                onChangeText={(text) => setpassword(text)}
                secureTextEntry={true}
                >
                </Input>
            <Button
            onPress={registrirajUsera}
            title="Registriraj se"
            >
            </Button>
            <View style={styles.plant}>

            <Text style={styles.text}>Imate racun? </Text> 
            <Text onPress={()=> props.navigation.navigate('Login')}
            style={styles.prijava}
            >Prijavite se </Text>
            </View>
            </SafeAreaView>
    </View>

    )
}
const styles = StyleSheet.create({
    register:{
        flex:1,
    padding:20,   
     justifyContent:'center'
    },
    input:{
    },
    naslov:{
        textAlign: 'center', // <-- the magic
        fontSize:24,
        marginVertical:28,
    },
    plant:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:20,
    },
    text:{
        fontSize:20,

    },
    prijava:{
        fontSize:20,
        color: 'red'

    },
  });

