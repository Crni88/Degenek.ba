import React from 'react'
import {View, Button,Text,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ScreenContainer } from 'react-native-screens';

import Header from './Header'
import Post from './Post'
import { ScrollView } from 'react-native-gesture-handler';

export default function Dashboard() {
    return (
        <ScrollView>
            <Header>

            </Header>
            <Post>

            </Post>
            <Post>

            </Post>
        </ScrollView>
    )
}
