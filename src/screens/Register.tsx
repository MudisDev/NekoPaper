import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { register_user } from '../const/UrlConfig'
import { useTheme } from '../hooks/UseTheme'

export const Register = () => {

  const navigation = useNavigation();
  const { themeData, dynamicStyles } = useTheme();



  const Registrar = async () => {
    try {

      const response = await fetch(`${register_user}?
                username=${username}&password=${password}`);
      const data = await response.json();
      // Retorna los datos para ser usados en el componente
      console.log(data);

      const user = data[0];
      console.log(`user -> ${user}`);
      console.log(`userIsArray -> ${Array.isArray(user)}`);

      if (!data.Error) {

        const userDataResponse = {
          username: user.username,
          name: user.nombre,
          phoneNumber: user.telefono,
          email: user.email,
          profilePhoto: user.foto_perfil,
          //registerDate: user.fecha_registro,
          idUser: user.id_usuario,
          gender: user.genero
        }



      }


    } catch (e) {
      console.error(`error: ${e}`);
    }
  }

  return (
    <View style={[{ alignItems: 'center', flex: 1, paddingTop: 40 }, dynamicStyles.dynamicScrollViewStyle]}>

      <Text style={[stylesAppTheme.title, dynamicStyles.dynamicText]}>NekoPaper</Text>

      <TextInput /* value={username ?? ''} onChangeText={setUsername}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Nombre' />
      <Text></Text>
      <TextInput /* value={username ?? ''} onChangeText={setUsername}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Username' />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Password' />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Email' />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Genero' />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Telefono' />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={[stylesAppTheme.textinput, dynamicStyles.dynamicViewContainer, dynamicStyles.dynamicText]} placeholderTextColor={themeData.texto} placeholder='Foto Perfil' />
      <Text></Text>

      {/* <TouchableOpacity style={stylesAppTheme.button} onPress={() => navigation.navigate('BottomTabNavigator')}><Text style={stylesAppTheme.textButton}>Home</Text></TouchableOpacity> */}
      <TouchableOpacity style={[stylesAppTheme.button, dynamicStyles.dynamicViewContainer]} onPress={Registrar} >
        <Text style={[stylesAppTheme.textButton, dynamicStyles.dynamicText]}>registrar</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={[stylesAppTheme.button, dynamicStyles.dynamicViewContainer]} onPress={() => navigation.navigate('LogIn')}>
        <Text style={[stylesAppTheme.textButton, dynamicStyles.dynamicText]}>iniciar sesion</Text>
      </TouchableOpacity>
    </View>
  )
}
