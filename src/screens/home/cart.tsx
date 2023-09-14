import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, Card, Divider, VStack } from 'native-base';

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
            <Card>
                <VStack space="4" divider={<Divider />}>
                    <Box px="4" pt="4">
                        <Text style={styles.title}>{foodDetailsData.nome}</Text>
                    </Box>
                    <Box px="4">
                        <Text style={styles.ingredients}>ingredientes</Text>
                        <Text style={styles.ingredients}>
                            {
                                foodIngredientsData.map(
                                    (foodIngredientsData: any, index: any) => {
                                        return (
                                            foodIngredientsData.item + " "
                                        )
                                    }
                                )
                            }
                        </Text>
                    </Box>
                    <Box px="4" pb="4">
                    <Text style={styles.price}>Valor: R$ {valor}</Text>
                    </Box>
                </VStack>
            </Card>
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
        backgroundColor: '#EDF0EB',
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
