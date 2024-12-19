import { View, Text } from "react-native"
import { styles } from "./styles"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.menuServiceOrders}><Text> menu das OS</Text></View>
            <Text style={styles.title}>Logar</Text>
        </View>
    )
}
