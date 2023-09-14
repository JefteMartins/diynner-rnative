import { Box, Center, Checkbox, HStack, Heading, Icon, IconButton, Input, VStack, useToast, Text } from "native-base";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";

export default function PassoAPasso(props: any) {
    let instState = [{
        title: "Abrir sua caixa Diynner",
        isCompleted: false
    }];
    instState.push(...props.test)
    console.log('props=>', props)
    console.log('instState=>', instState)
    const [list, setList] = React.useState(instState);


    const handleStatusChange = (index: any) => {
        setList(prevList => {
            const newList = [...prevList];
            newList[index].isCompleted = !newList[index].isCompleted;
            return newList;
        });
    };

    return <Center w="100%">
        <Box maxW="300" w="100%">
            <Heading mb="2" size="md">
                Modo de preparo
            </Heading>
            <VStack space={4}>
                <VStack space={2}>
                    {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                        <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
                        <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                            color: item.isCompleted ? "gray.400" : "coolGray.800"
                        }} _dark={{
                            color: item.isCompleted ? "gray.400" : "coolGray.50"
                        }} onPress={() => handleStatusChange(itemI)}>
                            {item.title}
                        </Text>
                    </HStack>)}
                </VStack>
            </VStack>
        </Box>
    </Center>;
};