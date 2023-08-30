import { View, Text, Image } from 'react-native';
import { styles } from '../../components/styles';
import React from 'react';
import { Button, Divider, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function RecipeDetails(props: any) {
  const foodDetailsData = props.route.params;
  console.log(foodDetailsData)
  const recipe = foodDetailsData.recipe;
  const preparation = foodDetailsData.preparation;
  const navigation = useNavigation();
  const handlePress = (foodData: Object) => {
    console.log("chegou aqui com o ", foodData)
    navigation.navigate('Cart', foodData);
  };
  return (
    <View style={styles.container} >
      <Image source={{ uri: foodDetailsData.image }} style={styles.imageDetailStyle} />
      <View style={styles.textContainer}>
        <h3> Ingredientes: {foodDetailsData.nome} </h3>
        {recipe.map((item: any, index: any) => {
          return (
            <Text key={index}> {"• " + item.item + ": " + item.value + " " + item.measure}  </Text>
          )
        })}
        <Divider my="2" />
        <h3> Modo de preparo: </h3>
        {preparation.map((item: any, index: number) => {
          console.log(typeof (item), " lala ", typeof (index))
          return (
            <Text key={index}> {"Passo " + item.step + ": " + item.description}  </Text>
          )
        })
        }
        <Button
        borderRadius="full" colorScheme="success"
        onTouchEnd={() => handlePress(foodDetailsData)}
        >
          Comprar
        </Button>
      </View>
    </View>
  );
}


