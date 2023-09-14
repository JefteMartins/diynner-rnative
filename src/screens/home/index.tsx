import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from '../../components/styles';
import Toolbar from '../../components/toolbar';
import ImagesHomeTouchable from '../../components/imagesHomeTouchable';
import React from 'react';
import { Fab, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; 
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Toolbar />
      <ImagesHomeTouchable />
      <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={
          <Icon color="white"
          as={Ionicons} name="exit-outline"
          size="4"
          onTouchEnd={() => FIREBASE_AUTH.signOut()}
          />
          } />
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