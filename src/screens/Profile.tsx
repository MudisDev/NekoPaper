import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { UserContext } from '../context/UserContext'


export const Profile = () => {
  const { userData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido
  return (
    <View style={stylesAppTheme.container}>
      <Text>Profile Screen Bv</Text>
      <Text></Text>
      <Text>Nombre: {userData?.name}</Text>
      <Text>Username: {userData?.username}</Text>
      <Text>Telefono: { userData?.phoneNumber}</Text>
      <Text>Email: { userData?.email}</Text>
      <Text>Foto Perfil: {userData?.profilePhoto}</Text>
      <Text>Genero: { userData?.gender}</Text>
    </View>
  )
}
