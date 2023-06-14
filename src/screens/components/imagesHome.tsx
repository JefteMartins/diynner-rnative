import { Text, View, Image } from 'react-native';
import { styles } from '../home/styles'

export default function ImagesHome() {
   return ( <View style={styles.homeGrid}>
        {listaDeComidas.map((comida, index) => {
         return (
            <Image key={index} source={{uri: comida.image}} style={styles.imageStyle}/>
          )
        })}
      </View>
   );
};

const listaDeComidas = [
    {
      nome: "Strogonoff de Frango",
      image:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
      nome: "Strogonoff de Frango",
      image:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
      nome: "Strogonoff de Frango",
      image:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
      nome: "Strogonoff de Frango",
      image:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
      nome: "Strogonoff de Frango",
      image:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
      nome: "Macarrão",
      image:"https://fotografiamais.com.br/wp-content/uploads/2018/08/fotos-de-comida-inspiracao-como-tirar.jpg"
    },
  ]