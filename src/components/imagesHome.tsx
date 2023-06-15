import { Text, View, Image, ImageBackground } from 'react-native';
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { Gupter_400Regular, Gupter_500Medium } from '@expo-google-fonts/gupter';

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

const listaDeComidas = [
  {
    nome: "Strogonoff de Frango",
    image: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
  },
  {
    nome: "Strogonoff de Frango",
    image: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
  },
  {
    nome: "Strogonoff de Frango",
    image: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
  },
  {
    nome: "Strogonoff de Frango",
    image: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
  },
  {
    nome: "Strogonoff de Frango",
    image: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
  },
  {
    nome: "Macarrão",
    image: "https://fotografiamais.com.br/wp-content/uploads/2018/08/fotos-de-comida-inspiracao-como-tirar.jpg"
  },
]