import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { UserContext } from '../context/UserContext'


export const Profile = () => {
  const { userData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido
  return (
    <View style={stylesAppTheme.container}>
      <Text>Profile Screen Bv</Text>
      <Text>{userData?.name || "nombre"}</Text>
      <Text>Profile Screen Bv</Text>
    </View>
  )
}
