import React from 'react'
import {View, Button,Text,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ScreenContainer } from 'react-native-screens';



export default function Landing(props) {
    console.log(props)
    return (
        <View style={styles.landingContainer}>
            <Text
            style={styles.btnLanding}
            
            >Dobro došli u Degenek.ba</Text>
            <Text
            onPress={()=> props.navigation.navigate('Login')}
            style={styles.btnLanding}
            >
                Prijavite se! 
            </Text>
            <Text
            onPress={()=>props.navigation.navigate('Register')}
            style={styles.btnLanding}
            >
                Nemate racun? 
            </Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    landingContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    btnLanding:{
        marginBottom:15,
        fontSize:23,
    },
    
   
  });