import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext, use } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { UserContext } from '../context/UserContext'
import { login_path } from '../const/UrlConfig'
import { useTheme } from '../hooks/UseTheme'

export const LogIn = () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();

    const { userData, setUserData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido

    const { themeData, dynamicStyles } = useTheme();


    const IniciarSesion = async () => {
        try {
            console.log("Path login -> ", login_path)
            //const response = await fetch(`http://localhost/nekopaper/api/usuario/iniciar_sesion.php?username=${username}&password=${password}`);
            //const response = await fetch(`http://192.168.18.5/nekopaper/api/usuario/iniciar_sesion.php?username=${username}&password=${password}`);
            const response = await fetch(`${login_path}?username=${username}&password=${password}`);
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

                /* console.log(`userdata -> ${userDataResponse}`);
                const array = JSON.stringify(userDataResponse);
                console.log(Array.isArray(array)); */

                setUserData(userDataResponse);

                console.log(userData?.email);



                navigation.navigate("BottomTabNavigator");
            }


        } catch (e) {
            console.error(`error: ${e}`);
        }
    }


    return (
        <View style={[{ alignItems: 'center', flex: 1, paddingTop: 90 }, dynamicStyles.dynamicScrollViewStyle]}>

            <Text style={[stylesAppTheme.title, dynamicStyles.dynamicText]}>NekoPaper</Text>

            <TextInput value={username ?? ''} onChangeText={setUsername} style={[stylesAppTheme.textinput, dynamicStyles.dynamicText, dynamicStyles.dynamicViewContainer]} placeholder='Username' placeholderTextColor={themeData.texto} />
            <Text></Text>
            <TextInput value={password ?? ''} onChangeText={setPassword} style={[stylesAppTheme.textinput, dynamicStyles.dynamicText, dynamicStyles.dynamicViewContainer]} placeholder='Password' placeholderTextColor={themeData.texto} />

            <Text></Text>


            {/* <TouchableOpacity style={stylesAppTheme.button} onPress={() => navigation.navigate('BottomTabNavigator')}><Text style={stylesAppTheme.textButton}>Home</Text></TouchableOpacity> */}
            <TouchableOpacity style={[stylesAppTheme.button, dynamicStyles.dynamicViewContainer]} onPress={IniciarSesion}>
                <Text style={[stylesAppTheme.textButton, dynamicStyles.dynamicText]}>Home</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity style={[stylesAppTheme.button, dynamicStyles.dynamicViewContainer]} onPress={() => navigation.navigate('Register')}>
                <Text style={[stylesAppTheme.textButton, dynamicStyles.dynamicText]}>Registro</Text>
            </TouchableOpacity>
        </View>
    )
}
