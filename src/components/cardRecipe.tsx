import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const CardRecipe = (props: any) => {
    console.log('>>', props.data.route.params);
    const currentPageData = props.data.route.params;
    let valor = 0;
    currentPageData.recipe.forEach((element: { value: any; }) => {
        valor += element.value;
    });
    return <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: `${currentPageData.image}`
                    }} alt="image" />
                </AspectRatio>
                <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    PHOTOS
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {currentPageData.nome}
                    </Heading>
                    <Text fontSize="xs" _light={{
                        color: "violet.500"
                    }} _dark={{
                        color: "violet.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        Ingredientes
                    </Text>
                </Stack>
                <Text fontWeight="400">
                    {
                        currentPageData.recipe.map(
                            (foodIngredientsData: any, index: any) => {
                                return (
                                    foodIngredientsData.item + " "
                                )
                            }
                        )
                    }
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            Total: R$ {valor}
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    </Box>;
};

export default (props: any) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <CardRecipe data={props.data} />
            </Center>
        </NativeBaseProvider>
    );
};
