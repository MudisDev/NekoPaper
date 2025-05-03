import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../context/UserContext'

export const Settings = () => {
  const navigation = useNavigation();
  const { setUserData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido
  return (
    <View style={stylesAppTheme.container}>
      <Text>Settings Screen Bv</Text>
      <TouchableOpacity style={stylesAppTheme.button} onPress={() => { setUserData(null); navigation.navigate('LogIn'); }}><Text style={stylesAppTheme.textButton}>Cerrar Sesion</Text></TouchableOpacity>

    </View>
  )
}
