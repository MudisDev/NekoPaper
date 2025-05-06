import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { UserContext } from '../context/UserContext'
import { useTheme } from '../hooks/UseTheme'

export const Profile = () => {

  const { themeData, dynamicStyles } = useTheme();

  const { userData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido
  return (
    <View style={[stylesAppTheme.container, dynamicStyles.dynamicScrollViewStyle]}>
      <View style={[dynamicStyles.dynamicViewContainer]}>
        <Text style={[dynamicStyles.dynamicText]}>Profile Screen Bv</Text>
        <Text style={[dynamicStyles.dynamicText]}></Text>
        <Text style={[dynamicStyles.dynamicText]}>Nombre: {userData?.name}</Text>
        <Text style={[dynamicStyles.dynamicText]}>Username: {userData?.username}</Text>
        <Text style={[dynamicStyles.dynamicText]}>Telefono: {userData?.phoneNumber}</Text>
        <Text style={[dynamicStyles.dynamicText]}>Email: {userData?.email}</Text>
        <Text style={[dynamicStyles.dynamicText]}>Foto Perfil: {userData?.profilePhoto}</Text>
        <Text style={[dynamicStyles.dynamicText]}>Genero: {userData?.gender}</Text>
      </View>
    </View>
  )
}
