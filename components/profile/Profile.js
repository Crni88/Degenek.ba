import React from 'react'
import {useState} from "react";

import {View, Button, SafeAreaView,StyleSheet,Text,TextInput,Image} from 'react-native'
import { Input } from 'react-native-elements';

export default function Profile(props) {
    return (
        <View style={styles.profile}>
        <SafeAreaView>
        <View style={styles.pocetniInfo}>
        {/*<Image 
        style={styles.profilna}
        source={require('../../assets/prvipost.jpg')}
        ></Image>*/}
        <Text>Korisnikovo ime</Text>
        </View>
        <View style={styles.skills}>
        <Text>Korisnokovi skillovi</Text>
        </View>
        <Button
        title="Posalji poruku"
        >
        </Button>
            </SafeAreaView>
    </View>
        )
}
const styles = StyleSheet.create({
    profile:{
        flex:1,
    }
  });

