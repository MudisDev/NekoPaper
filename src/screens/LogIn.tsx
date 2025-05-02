import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export const LogIn = () => {

    const navigation = useNavigation();


    return (
        <View style={{ alignItems: 'center', flex: 1, marginTop: 90 }}>

            <Text style={style.title}>NekoPaper</Text>

            <TextInput style={style.textinput} placeholder='Username' placeholderTextColor={"black"} />
            <Text></Text>
            <TextInput style={style.textinput} placeholder='Password' placeholderTextColor={"black"} />

            <Text></Text>


            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('BottomTabNavigator')}><Text style={style.textButton}>Home</Text></TouchableOpacity>
            <Text></Text>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Register')}><Text style={style.textButton}>Registro</Text></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    textinput: {
        backgroundColor: "white",
        width: "80%",
        height: 40,
        borderRadius: 5,
    },
    button: {
        width: "50%",
        height: 30,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textButton: {
        color: "black",
        fontSize: 15,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        textDecorationStyle: 'solid',
    }
})
