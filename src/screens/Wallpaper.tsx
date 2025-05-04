import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Image, Dimensions, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import { UserContext } from '../context/UserContext';
import Ionicons from '@expo/vector-icons/Ionicons';

import { stylesAppTheme } from '../theme/AppTheme';

export const Wallpaper = ({ route }) => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null)
    const [artist, setArtist] = useState<string | null>(null);
    const { width, height } = Dimensions.get('window');
    const { url, tags, artist_name, id } = route.params;
    const { userData, setUserData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido

    const [isFavorite, setIsFavorite] = useState<boolean>();


    useEffect(() => {
        console.log("URL:", url);
        console.log("Artista recibido:", artist_name);

        setImage(url);
        setArtist(artist_name);

    }, [])

    useFocusEffect(
        useCallback(() => {
            Consultar_Favorito();
        }, [])
    )

    const Consultar_Favorito = async () => {
        try {
            const url = `http://192.168.18.5/nekopaper/api/usuario/consultar_favorito.php?` +
                `id_imagen=${id}` +
                `&id_usuario=${userData?.idUser}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log("Data favorito ->", data);
            if (data.Error) {
                setIsFavorite(false);
            } else
                setIsFavorite(true);


        } catch (e) {
            console.error(`Error al marcar como favorito: ${e}`);
        }
    }



    const Marcar_Favorito = async () => {
        try {
            const url = `http://192.168.18.5/nekopaper/api/usuario/marcar_favorito.php?` +
                `id_imagen=${id}` +
                `&id_usuario=${userData?.idUser}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log("Data favorito ->", data);


        } catch (e) {
            console.error(`Error al marcar como favorito: ${e}`);
        }
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingTop: 40 }}>

            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width, height: height * 0.7, resizeMode: 'contain' }}
                />
            )}
            {artist && (
                <Text >Artista: {artist}</Text>
            )}
            {id && (
                <Text >Id: {id}</Text>
            )}
            <Text >IdUser: {userData?.idUser}</Text>
            {tags && Array.isArray(tags) && (
                <View style={styles.tagContainer}>
                    {tags.map((tag: string, index: number) => (
                        <Text key={index} style={styles.tagText}>#{tag}</Text>
                    ))}
                </View>
            )}

            <TouchableOpacity style={stylesAppTheme.button} onPress={Marcar_Favorito}>
                <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={25} color={"red"} />
                </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'center',
    },
    tagText: {
        margin: 4,
        fontSize: 14,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
});