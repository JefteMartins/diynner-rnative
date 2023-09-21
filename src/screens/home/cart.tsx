import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import CardRecipe from '../../components/cardRecipe';
import { styles } from '../stylesScreen';
import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import moment from 'moment';

const PaymentScreen = (props: any) => {
    moment.locale('pt-br');
    const horaDaCompra = moment().format('LLL');
    const navigation = useNavigation();
    const foodDetailsData = props.route.params;
    const foodIngredientsData = foodDetailsData.recipe;
    const userEmail = FIREBASE_AUTH.currentUser?.email;
    let valor = 0;
    foodIngredientsData.forEach((element: { value: any; }) => {
        valor += element.value;
    });

    const handlePayment = async () => {
        try {
            const docRef = addDoc(collection(FIREBASE_DB, `${userEmail}`), {
                nome: foodDetailsData.nome,
                horaDaCompra: horaDaCompra,
                valor: valor
            });
            console.log('compra cadastrada', docRef)
            navigation.navigate('Home');
        } catch (error) {
            console.log('erro ao cadastrar compra', error)
        }
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
