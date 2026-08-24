import { StyleSheet } from "react-native";
import { View } from "react-native";
import Caixa from '../components/Caixa'

export default function ScrollList(){
    return(
        <View style={estilo.container}>
            <Caixa />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dadada'
    }
})