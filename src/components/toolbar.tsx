import { View, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
export default function Toolbar() {
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
                <Ionicons name="md-reader-outline" size={24} color="black" />
                <Ionicons name="md-person-outline" size={24} color="black" />
            </View>
        </View>
        </>
    );
}