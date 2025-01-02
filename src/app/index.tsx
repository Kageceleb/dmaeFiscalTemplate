import { View, Text, TouchableOpacity, TextInput, Button } from "react-native"
import { styles } from "./styles"
import { router } from "expo-router"

export default function Index() {
    return (
        <View style={styles.container}>
            <TextInput>Nome {"\n"}</TextInput>
            <TextInput>Senha{"\n"}</TextInput>
            <Button onPress={() => router.navigate('/main')} title="Logar">
                
            </Button>
        </View>
    )
}
