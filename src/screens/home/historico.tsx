import React from 'react';
import { Text, View, Image, Button, HStack, Heading, Spinner, VStack, AspectRatio, Center, ScrollView } from 'native-base';
import { styles } from '../stylesScreen';
import { listaDeComidasFull } from '../../assets/listaDeComidasFull';


const Historico = (props: any) => {

    const historico = props.route.params;

    return (
        <ScrollView>
            <View>
                <VStack space={2} h={'100%'}>
                    {historico.map((item: any, index: number) => {
                        let comidaAtualInfo = listaDeComidasFull.filter((comida) => comida.nome === item.nome);
                        return (
                            <View key={index}
                                shadow={1}
                                h={20}
                                >
                                <HStack space="4" alignItems="center">
                                    <Image
                                        marginTop={3}
                                        borderRadius="sm" size="sm"
                                        alt='Imagem de comida'
                                        source={{
                                            uri: `${comidaAtualInfo[0].image}`
                                        }} />
                                    <VStack justifyContent="flex-end" alignContent="center">
                                        <Text>
                                            {item.nome}
                                        </Text>
                                        <Text>
                                            Data: {item.horaDaCompra}
                                        </Text>
                                    </VStack>
                                </HStack>
                            </View>
                        );
                    })
                    }
                </VStack>
            </View>
        </ScrollView>
    );
};

export default Historico;
