import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, Button, Card, Divider, VStack } from 'native-base';
import CardRecipe from '../../components/cardRecipe';

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
                borderRadius="full" colorScheme="success"
                onTouchEnd={() => handlePayment()}
            >
                Comprar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EDF0EB',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
