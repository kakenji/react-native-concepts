import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function TelaContador(){
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("Chamado o useEffect")
        setContador(1)
    }, [])

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>{contador}</Text>
        </View>
    )
}