import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Image, Dimensions, StyleSheet, ScrollView, Text } from 'react-native'

export const Wallpaper = ({ route }) => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null)
    const [artist, setArtist] = useState<string | null>(null);
    const { width, height } = Dimensions.get('window');
    const { url, tags, artist_name } = route.params;

    useEffect(() => {
 console.log("URL:", url);
    console.log("Artista recibido:", artist_name); 

        setImage(url);
        setArtist(artist_name);

    }, [])


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
            {tags && Array.isArray(tags) && (
                <View style={styles.tagContainer}>
                    {tags.map((tag: string, index: number) => (
                        <Text key={index} style={styles.tagText}>#{tag}</Text>
                    ))}
                </View>
            )}

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