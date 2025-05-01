import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Home } from './Home'

export const LogIn = () => {

    const navigation = useNavigation();


return (
    <View style={{ alignItems: 'center', flex: 1 }}>


        <Text style={{ justifyContent: 'center' }}>LogIn Screen</Text>
        <Text style={{ justifyContent: 'center' }}>LogIn Screen</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Home') }><Text>Este es un link Bv</Text></TouchableOpacity>
    </View>
)
}
