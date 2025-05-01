import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const LogIn = () => {

    const navigation = useNavigation();


return (
    <View style={{ alignItems: 'center', flex: 1 }}>


        <Text style={{ justifyContent: 'center' }}>LogIn Screen</Text>
        <Text style={{ justifyContent: 'center' }}>LogIn Screen</Text>


        <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator') }><Text>Home</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register') }><Text>Registro</Text></TouchableOpacity>
    </View>
)
}
