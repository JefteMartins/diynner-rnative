import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { listaDeComidas } from '../screens/home';
import { listaDeComidasFull } from '../assets/listaDeComidasFull';

export default function ImagesTouchableHome() {

  const navigation = useNavigation();

  const handlePress = (foodData: Object) => {
    navigation.navigate('ImagesHome', foodData);
  };

  return (
    <View style={styles.homeGrid}>
      {listaDeComidasFull.map((comida, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => handlePress(comida)} >
            <ImageBackground
              source={{ uri: comida.image }}
              style={styles.imageStyle}
              imageStyle={styles.imageBorderRadius}
            >
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}
                style={styles.linearGradient}
              >
                <Text style={styles.textStyle}>{comida.nome}</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
      
    </View>
  );
}
