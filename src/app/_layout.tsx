import { Slot } from "expo-router";
import { View } from "react-native";
import { styles } from "./styles";

export default function Layout() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.baseLayoutHeader} />
            <Slot />
            <View style={styles.baseLayoutFooter} />
        </View>)
}