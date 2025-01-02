import { View, Text } from "react-native"
import { styles } from "./styles"
import OsMenu from "./components/osMenu"
import { useEffect } from "react"

export default function Index() {
    // const [osData, setOsData] = useEffect(){}
    return (
        <View style={styles.container}>
            <OsMenu />
        </View>
    )
}