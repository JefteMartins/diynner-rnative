import { View, Text, Image } from 'react-native';
import { styles } from '../../components/styles';
import React from 'react';

export default function RecipeDetails(props: any) {
  const foodDetailsData = props.route.params;
  const recipe = foodDetailsData.recipe;
  const preparation = foodDetailsData.preparation;
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
        <View
          style={styles.horizontalRule}
        />
        <h3> Modo de preparo: </h3>
        {preparation.map((item: any, index: any) => {
          return (
            <Text key={index}> {"Passo " + item.step + ": " + item.description}  </Text>
          )
        })
        }
      </View>
    </View>
  );
}


