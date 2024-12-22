import { View, Text } from "react-native"
import { styles } from "./styles"
import OsMenu from "./components/osMenu/osMenu"
import { useState } from "react"

export default function Index() {
    const [oss,setOss]=useState(()=>{},[])
    return (
        <View style={styles.container}>
            
            <OsMenu style={styles.menuServiceOrders} />
            <Text style={styles.title}>Logar</Text>
        </View>
    )
}
