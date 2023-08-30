import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = (props: any) => {
    const navigation = useNavigation();
    const foodDetailsData = props.route.params;
    const foodIngredientsData = foodDetailsData.recipe;
    let valor = 0;
    foodIngredientsData.forEach((element: { value: any; }) => {
        valor += element.value;
    });
    const handlePayment = () => {
        // Lógica de processamento de pagamento
        navigation.navigate('Confirmation'); // Substitua 'Confirmation' pelo nome da tela de confirmação
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{foodDetailsData.nome}</Text>
            <Text style={styles.ingredients}>ingredientes</Text>
            <Text style={styles.price}>Valor: R$ {valor}</Text>
            <Button title="Confirmar Compra" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    ingredients: {
        marginBottom: 20,
        textAlign: 'center',
    },
    price: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default PaymentScreen;
