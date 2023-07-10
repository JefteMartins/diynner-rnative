import { View, Text, Image } from 'react-native';
import { styles } from '../../components/styles';

export default function RecipeDetails(props: any) {
  const foodDetailsData = props.route.params;
  const recipe = foodDetailsData.recipe;
  const preparation = foodDetailsData.preparation;
  return (
    <View style={styles.container} >
      <Image source={{ uri: foodDetailsData.image }} style={styles.imageDetailStyle} />
      <Text> Ingredientes: {foodDetailsData.nome} </Text>
      {recipe.map((item: any, index: any) => {
        return (
          <Text key={index}> {"• " + item.item+ ": " +item.value + " " + item.measure}  </Text>
        )
      })}
      {preparation.map((item: any, index: any) => {
        return (
          <Text key={index}> {"Passo "+ item.step + ": "+ item.description}  </Text>
        )
      })
      }
    </View>
  );
}


