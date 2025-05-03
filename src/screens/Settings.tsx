import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'

export const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={stylesAppTheme.container}>
      <Text>Settings Screen Bv</Text>
      <TouchableOpacity style={stylesAppTheme.button} onPress={() => navigation.navigate('LogIn')}><Text style={stylesAppTheme.textButton}>Cerrar Sesion</Text></TouchableOpacity>

    </View>
  )
}
