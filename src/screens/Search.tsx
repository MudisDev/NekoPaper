import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import { stylesAppTheme } from '../theme/AppTheme'
import { ScrollView } from 'react-native-gesture-handler';

interface TagsData {
  id_tag: number;
  name_tag: string;
}

export const Search = () => {

  const [dataArray, setDataArray] = useState<TagsData[] | null>(null);

  useEffect(() => {
    fetch("http://192.168.18.5/nekopaper/api/lista/mostrar_etiquetas.php")
      .then((res) => res.json())
      .then((data) => {
        //const items = data?.items;
        //const items = data[0];

        //setDataArray(data);

        console.log("TRAYENDO RESULTADOS DE BD Bv");
        console.log("Data Search -> ", data);
        if (Array.isArray(data) && data.length > 0) {
          const mappedData: TagsData[] = data.map((item: any) => ({
            id_tag: parseInt(item.id_etiqueta),
            name_tag: item.nombre
            /* url: item.url,
            rating: item.clasificacion,
            artist_name: item.artista === "null" ? null : item.artista,
            source_url: item.url_fuente === "null" ? null : item.url_fuente,
            api_source: item.api_origen,
            api_id: item.id_imagen_api,
            insertion_date: item.fecha_insercion,
            update_date: item.fecha_actualizacion, */
          }));
          console.log("mapeados - > ", mappedData);
          setDataArray(mappedData);

          console.log("ARRAY - > ", dataArray?.[0].id_tag);
        } else {
          console.warn("No se encontraron imágenes en la respuesta.");
        }



      })
      .catch((err) => console.error("Error al traer imagen:", err));
  }, []);


  return (
    <ScrollView>
      <View style={[stylesAppTheme.container]}>
        <View style={{ padding: 10 }}>
          <Text style={stylesAppTheme.title}>Etiquetas:</Text>
          <View style={styles.tagContainer}>
            {dataArray?.map((tag) => (
              <Text key={tag.id_tag} style={styles.tagText}>{tag.name_tag}</Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

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