import React from 'react'
import { View,Text,StyleSheet, SafeAreaView,TextInput,Button } from 'react-native'

export default function Login(props) {
    return (
        <View style={styles.login}>
            <SafeAreaView>

            <Text
            style={styles.naslov}
            >
               Degenek.ba
            </Text>
            <Text style={styles.text}>Unesite email</Text>

            <TextInput 
                    placeHolder={'Email'}
                    style={styles.textInput}
                    > </TextInput>
                                <Text style={styles.text}>Unesite password</Text>
 
                <TextInput 
                secureTextEntry={true}
                style={styles.textInput}
                > </TextInput>
            <Button
            onPress={() => {this.onSignUp()}}
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
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    naslov:{
        textAlign: 'center', // <-- the magic
        fontSize:30,
        marginVertical:25,
    },
    textInput: {
        borderWidth: 2,  // size/width of the border
        borderColor: 'lightgrey',  // color of the border
        borderColor:'#ccc',
        paddingLeft: 10,
        height: 40,
        marginBottom:15,
        width:300,
    },
});