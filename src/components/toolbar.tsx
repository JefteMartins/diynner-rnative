import { View, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { onSnapshot, collection } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";
import { AntDesign } from '@expo/vector-icons';
export default function Toolbar() {
    const navigation = useNavigation();

    const userEmail = FIREBASE_AUTH.currentUser?.email;
    let compras: object[] = [];
    const [carregaHistorico, setCarregaHistorico] = React.useState(false);
    const subscriber = onSnapshot(collection(FIREBASE_DB, `${userEmail}`), (querySnapshot) => {
        compras = [];
        console.log("entrou no sub")
        querySnapshot.forEach((documentSnapshot) => {
            compras.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            });
        });
        setCarregaHistorico(true);
    });

    const goToHistorico = () => {
        console.log('historico')
        navigation.navigate('Histórico de compras', compras)
    }

    return (
        <>
            <View style={styles.toolbar}>
                <View style={styles.svgCss}>
                    {/* <SvgComponent /> */}
                    <Text style={styles.diynnerTitle}>
                        Diynner
                    </Text>
                </View>
                <View style={styles.svgCss}>
                    {carregaHistorico ? <Ionicons name="md-reader-outline" size={24} color="black" onPress={goToHistorico} />
                     : <AntDesign name="loading1" size={24} color="black" /> }
                </View>
            </View>
        </>
    );
}