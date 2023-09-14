import { View, Text, Image } from 'react-native';
import { styles } from '../../components/styles';
import React from 'react';
import { Divider, Fab, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import PassoAPasso from '../../components/todoList';
import { AntDesign } from "@expo/vector-icons";

export default function RecipeDetails(props: any) {
  const foodDetailsData = props.route.params;
  const recipe = foodDetailsData.recipe;
  const preparation = foodDetailsData.preparation;
  const navigation = useNavigation();
  const handlePress = (foodData: Object) => {
    navigation.navigate('Pagamento', foodData);
  };
  let listaDePassos: any[] = [];
  return (
    <View style={styles.container} >
      <Image source={{ uri: foodDetailsData.image }} style={styles.imageDetailStyle} />
      <View style={styles.textContainer}>
        <h3> Ingredientes: {foodDetailsData.nome} </h3>
        {recipe.map((item: any, index: any) => {
          return (
            <Text key={index}> {item.item + ": " + item.value + " " + item.measure}  </Text>
          )
        })}
        <Divider my="2" />
        {preparation.map((item: any, index: number) => {
          listaDePassos.push({
            title: "Passo " + item.step + ": " + item.description,
            comlpeted: false
          })
        })
        }
        <PassoAPasso test={listaDePassos} ></PassoAPasso>
        <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={
          <Icon color="white"
          as={AntDesign} name="shoppingcart"
          size="4"
          onTouchEnd={() => handlePress(foodDetailsData)}
          />
          } />
      </View>
    </View>
  );
}


