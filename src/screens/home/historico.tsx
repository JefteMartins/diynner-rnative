import React from 'react';
import { View } from 'react-native';
import { Text, Image, Button, HStack, Heading, Spinner, VStack, AspectRatio, Center } from 'native-base';
import { styles } from '../stylesScreen';
import { listaDeComidasFull } from '../../assets/listaDeComidasFull';


const Historico = (props: any) => {
    console.log('props', props)
    const historico = props.route.params;
    console.log('historico', historico)

    return (
        <VStack space={2} justifyContent="center" >
            {historico.map((item: any, index: number) => {
                let comidaAtualInfo = listaDeComidasFull.filter((comida) => comida.nome === item.nome);
                return (
                    <Center key={index} style={styles.container}  rounded="md" shadow={3} >
                        <HStack space="4" justifyContent="space-between" alignItems="center">
                            <Image
                                borderRadius="sm" size="sm"
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
                    </Center>
                );
            })
            }
        </VStack>
    );
};

export default Historico;
