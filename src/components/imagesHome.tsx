import { Text, View, Image, ImageBackground } from 'react-native';
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { Gupter_400Regular, Gupter_500Medium } from '@expo-google-fonts/gupter';
//json com as comidas
import { listaDeComidas } from '../screens/home';


export default function ImagesHome() {
  return (<View style={styles.homeGrid}>
    {listaDeComidas.map((comida, index) => {
      return (
        <View key={index}>
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
        </View>
      )
    })}
  </View>
  );
};

