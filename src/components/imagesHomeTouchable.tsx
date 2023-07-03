import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { listaDeComidas } from '../screens/home';

export default function ImagesTouchableHome() {

  const navigation = useNavigation();

  const handlePress = (nome: Object) => {
    navigation.navigate('ImagesHome');
    console.log(nome);
  };

  return (
    <View style={styles.homeGrid}>
      {listaDeComidas.map((comida, index) => {
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
