import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { NekoImageData } from './Home'

export const DevTool = () => {

    /*     interface TagInterface {
            name_tag
        } */

    const [dataArray, setDataArray] = useState<NekoImageData[] | null>(null);
    //const [dataArray, setDataArray] = useState<NekoImageData[] | null>(null);

    const ConsumirApi = () => {
        fetch("https://api.nekosapi.com/v4/images?limit=100")
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
                const imagenes = [];

                items.forEach(element => {
                    console.log(element.id);
                    console.log(element.url);
                    console.log(element.rating);
                    console.log(element.artist_name);
                    console.log(element.tags);
                    console.log(element.source_url);

                    imagenes.push({
                        id: element.id,
                        url: element.url,
                        rating: element.rating,
                        artist_name: element.artist_name,
                        source_url: element.source_url
                      });


                    element.tags.forEach(tag => {
                        etiquetas.push(tag);
                    })
                });

                console.log("etiquetas -> ", etiquetas);
                const etiquetasUnicas = Array.from(new Set(etiquetas));
                console.log("Etiquetas sin duplicados -> ", etiquetasUnicas);

                console.log(imagenes);
                Registrar_Etiquetas(etiquetasUnicas);
                Registrar_Imagenes(imagenes);


            })
            .catch((err) => console.error("Error al traer imagen:", err));
    }

    const Registrar_Etiquetas = async (etiquetas: string[]) => {
        const api_origen = "NekosApi";

        for (const tag of etiquetas) {
            try {
                //const response = await fetch(`http://192.168.18.5/nekopaper/api/etiqueta/registrar_etiqueta.php?name_tag=${encodeURIComponent(tag)}&api_origen=${api_origen}`);
                const response = await fetch(`http://192.168.18.5/nekopaper/api/etiqueta/registrar_etiqueta.php?nombre=${tag}&api_origen=${api_origen}`);
                const data = await response.json();
                console.log("Data - >", data);

                if (data.Error || data.Warning) {
                    console.log(`Error al insertar la etiqueta "${tag}"`);
                } else {
                    console.log(`Etiqueta "${tag}" insertada correctamente`);
                }

            } catch (e) {
                console.error(`Error con la etiqueta "${tag}": ${e}`);
            }
        }
    }

    const Registrar_Imagenes = async (imagenes: {
        id: string,
        url: string,
        rating: string,
        artist_name: string,
        source_url: string
      }[]) => {
        const api_origen = "NekosApi";
      
        for (const img of imagenes) {
          try {
            const url = `http://192.168.18.5/nekopaper/api/imagen/registrar_imagen.php?` +
              `id_imagen_api=${encodeURIComponent(img.id)}` +
              `&url=${encodeURIComponent(img.url)}` +
              `&clasificacion=${encodeURIComponent(img.rating)}` +
              `&artista=${encodeURIComponent(img.artist_name)}` +
              `&url_fuente=${encodeURIComponent(img.source_url)}` +
              `&api_origen=${api_origen}`;
      
            const response = await fetch(url);
            const data = await response.json();
            console.log("Data ->", data);
      
            if (data.Error || data.Warning) {
              console.log(`Error al insertar la imagen "${img.id}"`);
            } else {
              console.log(`Imagen "${img.id}" insertada correctamente`);
            }
      
          } catch (e) {
            console.error(`Error con la imagen "${img.id}": ${e}`);
          }
        }
      };


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
