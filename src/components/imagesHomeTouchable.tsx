import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { listaDeComidasFull } from '../assets/listaDeComidasFull';
import { ScrollView } from 'native-base';

export default function ImagesTouchableHome() {

  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const handlePress = (foodData: Object) => {
    navigation.navigate('Detalhes da compra', foodData);
  };

  return (
    <ScrollView>
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
                  alt='Imagem de comida'
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
    </ScrollView>
  );
}
