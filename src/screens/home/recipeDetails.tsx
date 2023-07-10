import { View, Text } from 'react-native';
import { styles } from '../../components/styles';

export default function RecipeDetails(props: any) {
    console.log(" ABAIXO ")
    console.log(props)
    const foodDetailsData = props.route.params;
    console.log(foodDetailsData)
  return (
    <View style={styles.container} >
      <Text> teste mostrando o {foodDetailsData.nome} </Text>
    </View>
  );
}


