import { Text, TouchableOpacity, View } from "react-native";

type OS{
    id:string
    endereço:string,
    numero:number
    bairro:string
    serviço:string
    descrição:string
}
export default function OsItem(OS:OS[]) {
    <TouchableOpacity>
        <View>
            <Text>{OS[0].id}</Text>
            <Text>{OS[0].endereço}</Text>
            <Text>{OS[0].numero}</Text>
            <Text>{OS[0].bairro}</Text>
        </View>
    </TouchableOpacity>
}