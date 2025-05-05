import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { register_user } from '../const/UrlConfig'


export const Register = () => {

  const navigation = useNavigation();



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
    <View style={{ alignItems: 'center', flex: 1, marginTop: 40 }}>

      <Text style={stylesAppTheme.title}>NekoPaper</Text>

      <TextInput /* value={username ?? ''} onChangeText={setUsername}  */ style={stylesAppTheme.textinput} placeholder='Nombre' placeholderTextColor={"black"} />
      <Text></Text>
      <TextInput /* value={username ?? ''} onChangeText={setUsername}  */ style={stylesAppTheme.textinput} placeholder='Username' placeholderTextColor={"black"} />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={stylesAppTheme.textinput} placeholder='Password' placeholderTextColor={"black"} />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={stylesAppTheme.textinput} placeholder='Email' placeholderTextColor={"black"} />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={stylesAppTheme.textinput} placeholder='Genero' placeholderTextColor={"black"} />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={stylesAppTheme.textinput} placeholder='Telefono' placeholderTextColor={"black"} />
      <Text></Text>
      <TextInput /* value={password ?? ''} onChangeText={setPassword}  */ style={stylesAppTheme.textinput} placeholder='Foto Perfil' placeholderTextColor={"black"} />
      <Text></Text>

      {/* <TouchableOpacity style={stylesAppTheme.button} onPress={() => navigation.navigate('BottomTabNavigator')}><Text style={stylesAppTheme.textButton}>Home</Text></TouchableOpacity> */}
      <TouchableOpacity style={stylesAppTheme.button} onPress={Registrar} ><Text style={stylesAppTheme.textButton}>registrar</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={stylesAppTheme.button} onPress={() => navigation.navigate('LogIn')}><Text style={stylesAppTheme.textButton}>iniciar sesion</Text></TouchableOpacity>
    </View>
  )
}
