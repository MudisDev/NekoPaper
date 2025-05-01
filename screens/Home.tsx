import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native'

import { NekosAPI } from 'nekosapi';

interface NekoImageData {
    id: number;
    url: string;
    rating: string;
    color_dominant: number[];
    color_palette: number[][];
    artist_name: string | null;
    tags: string[];
    source_url: string | null;
}

export const Home = () => {

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const [dataArray, setDataArray] = useState<NekoImageData[] | null>(null);

    useEffect(() => {
        //fetch("https://nekos.best/api/v2/neko")
        fetch("https://api.nekosapi.com/v4/images/random")
            .then((res) => res.json())
            .then((data) => {
                //const url = data.results?.[0]?.url;
                //const url = data.results?.[0]?.url;
                const url = data?.[0]?.url;
                //const url = data.results?.url;
                if (url) {
                    setImageUrl(url);
                    //console.log(`url -> ${url}`);

                }
                // Guarda todos los datos recibidos en el estado
                setDataArray(data);


                console.log(JSON.stringify(data));
            })
            .catch((err) => console.error("Error al traer imagen:", err));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Home kakaka</Text>
            {imageUrl && (
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
            )}
            {dataArray?.map(item => (
                /* <Text>{item?.url}</Text> */
                <Image source={{uri: item?.url}} style={{width: 200, height: 200}}/>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
