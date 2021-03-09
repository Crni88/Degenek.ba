import React from 'react'
import {useState} from "react";

import { View,Text,StyleSheet, SafeAreaView,Button } from 'react-native'
import { Input } from 'react-native-elements';


import {loginController} from './loginController'

export default function Login(props) {
    const [email,setemail] = useState("")
    const [name,setname] = useState("")
    const [password,setpassword] = useState("")

    const ulogujUsera = () => {
        //console.log("Email ",email," Password ", password);
        loginController(email,password,loginComplete);
    }
    
    const loginComplete = (user)=>{
        //Ovdje ispisem taj user ID
        console.log("User:" ,user);
        const id = user;
        props.navigation.navigate('Profile',id);
    }

    return (
        <View style={styles.login}>
            <SafeAreaView>
            <Text
            style={styles.naslov}
            >
               Degenek.ba
            </Text>
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
            onPress={ulogujUsera}
            title="Log in"
            >
            </Button>
                </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    login:{
        flex:1,
    padding:20,   
     justifyContent:'center'
    },
    naslov:{
        textAlign: 'center', // <-- the magic
        fontSize:30,
        marginVertical:25,
    },
});