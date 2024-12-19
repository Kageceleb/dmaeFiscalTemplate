import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    baseLayoutHeader: {
        width: "100%",
        height: 70,
        backgroundColor: "#C3C3C3"
    },
    baseLayoutFooter: {
        width: "100%",
        height: 50,
        backgroundColor: "#C3C3C3"
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "lightblue",
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10
    },
    menuServiceOrders: {
        width: "100%",
        height: 80,
        backgroundColor: "#FFF"
    }
})