import { FlatList, Text } from "react-native";
import OsItem from "../osItems/osItem";
import { Key } from "react";

export default function OsMenu(){
    return (<FlatList data={
        [
            {
                "id": "123456-24-87",
                "endereço": "AV JUCA BATISTA",
                "numero": 3363,
                "bairro": "ABERTA DOS MORROS",
                "serviço": "Repavi-interno-dmae-do",
                "descrição": "repavimentação na rua 1 x 1 de asfalto"
            },
            {
                "id": "234567-24-98",
                "endereço": "AV IPIRANGA",
                "numero": 8000,
                "bairro": "PARTENON",
                "serviço": "Repavi-interno-dmae-do",
                "descrição": "repavimentação na calçada 1 x 1 de basalto"
            },
            {
                "id": "345678-24-01",
                "endereço": "AV MANOEL ELIAS",
                "numero": 2800,
                "bairro": "SARANDI",
                "serviço": "Repavi-interno-dmae-do",
                "descrição": "repavimentação na calçada 1 x 1 de PAVS"
            }
        ]} renderItem={(os)=> <OsItem OS={os} />}}>
        
        </FlatList>)
}