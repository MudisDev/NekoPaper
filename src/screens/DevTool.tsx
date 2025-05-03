import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { NekoImageData } from './Home'

export const DevTool = () => {


    const [dataArray, setDataArray] = useState<NekoImageData[] | null>(null);

    const ConsumirApi = () => {
        fetch("https://api.nekosapi.com/v4/images?limit=10")
            .then((res) => res.json())
            .then((data) => {
                const items = data?.items;

                if (Array.isArray(items) && items.length > 0) {
                    /* const firstImage = items[0]?.url;
                    if (firstImage) {
                        setImageUrl(firstImage);
                    } */

                    // Guarda todo el array correctamente
                    setDataArray(items);
                    //console.log("Datos recibidos:", JSON.stringify(items, null));

                } else {
                    console.warn("No se encontraron imágenes en la respuesta.");
                }

                const etiquetas = [];

                items.forEach(element => {
                    console.log(element.id);
                    console.log(element.url);
                    console.log(element.rating);
                    console.log(element.artist_name);
                    console.log(element.tags);
                    console.log(element.source_url);

                    element.tags.forEach(tag => {
                        etiquetas.push(tag);
                    })
                });

                console.log("etiquetas -> ", etiquetas);
                const etiquetasUnicas = Array.from(new Set(etiquetas));
                console.log("Etiquetas sin duplicados -> ", etiquetasUnicas);


            })
            .catch((err) => console.error("Error al traer imagen:", err));
    }


    return (




        <View style={stylesAppTheme.container}>
            <Text>DevTool Screen Bv</Text>
            <Text></Text>
            <TextInput style={stylesAppTheme.textinput} placeholder='tags'></TextInput>
            <TextInput style={stylesAppTheme.textinput} placeholder='offset'></TextInput>
            <TextInput style={stylesAppTheme.textinput} placeholder='count'></TextInput>
            <Text></Text>
            <TouchableOpacity style={stylesAppTheme.button} onPress={ConsumirApi}><Text>Consumir API</Text></TouchableOpacity>

        </View>
    )
}
