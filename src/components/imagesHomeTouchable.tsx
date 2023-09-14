import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { listaDeComidasFull } from '../assets/listaDeComidasFull';

export default function ImagesTouchableHome() {

  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const handlePress = (foodData: Object) => {
    navigation.navigate('RecipeDetails', foodData);
  };

  return (
    <View >
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Pesquisa por uma receita aí...'
          value={text}
        />
      </SafeAreaView>
      <View style={styles.homeGrid}>
        {listaDeComidasFull.filter(
          x => x.nome.toLowerCase().includes(text.toLowerCase())
        ).map((comida, index) => {
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
    </View>
  );
}
