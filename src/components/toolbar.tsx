import { TextInput, View } from "react-native";
import { styles } from "./styles";
import SvgComponent from "./SvgComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import TextInputExample from "./textInput";

export default function Toolbar() {
    return (
        <>
        <View style={styles.toolbar}>
            <View style={styles.svgCss}>
                <SvgComponent />
            </View>
            <View style={styles.svgCss}>
                <Ionicons name="md-reader-outline" size={24} color="black" />
                <Ionicons name="md-person-outline" size={24} color="black" />
            </View>
        </View>
        <TextInputExample />
        </>
    );
}