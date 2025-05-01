import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Image, Dimensions } from 'react-native'

export const Wallpaper = ({ route }) => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null)
    const { width, height } = Dimensions.get('window');
    const { url } = route.params;

    useEffect(() => {


        setImage(url);

    }, [])


    return (
        <View>
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width, height: '100%', resizeMode: 'contain' }}
                />
            )}
        </View>
    )
}
