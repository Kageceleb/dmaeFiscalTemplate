import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"

export default function Index() {
    return (
        <View style={styles.container}>
            <TextInput>Nome {"\n"}</TextInput>
            <TextInput>Senha{"\n"}</TextInput>
            <Link href="/main" style={styles.form}>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text>Logar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}
