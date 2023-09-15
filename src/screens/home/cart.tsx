import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import CardRecipe from '../../components/cardRecipe';
import { styles } from '../stylesScreen';

const PaymentScreen = (props: any) => {
    const navigation = useNavigation();
    const foodDetailsData = props.route.params;
    const foodIngredientsData = foodDetailsData.recipe;
    let valor = 0;
    foodIngredientsData.forEach((element: { value: any; }) => {
        valor += element.value;
    });
    const handlePayment = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <CardRecipe data={props} />
            <Button
                style={{ justifyContent: 'center', alignItems: 'center' }}
                borderRadius="full"
                onTouchEnd={() => handlePayment()}
            >
                Comprar
            </Button>
        </View>
    );
};

export default PaymentScreen;
