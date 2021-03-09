import React from 'react'
import {useState} from "react";

import {View, Button, SafeAreaView,StyleSheet,Text,TextInput} from 'react-native'
import { Input } from 'react-native-elements';

import {registerControler} from './loginController'


export default function Register(props) {
      const [email,setemail] = useState("")
      const [password,setpassword] = useState("")

      const registrirajUsera = () => {
       console.log("Registrujem Usera");
        registerControler(email,password,registerComplete)
      }
      const registerComplete = ()=>{
        props.navigation.navigate('Profile');
      }
    return (
        <View style={styles.register}>
            <SafeAreaView>
                    <Text style={styles.naslov}>Registriraj se na Degenek.ba</Text>
                <Input 
                keyboardType={"email-address"} 
                style={styles.input}
                placeholder={'Email adresa'} 
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

