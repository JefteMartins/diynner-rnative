import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from '../../components/styles';
import Toolbar from '../../components/toolbar';
import ImagesHomeTouchable from '../../components/imagesHomeTouchable';
import React from 'react';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />

      <Toolbar />
      <ImagesHomeTouchable />
    </View>
  );
}



export const listaDeComidas = [
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