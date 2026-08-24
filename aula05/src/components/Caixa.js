import { Text } from "react-native"
import { StyleSheet } from "react-native"
import { View } from "react-native"

export default ({texto}) => {
    <View style={estilos.caixa}>
        <Text>{texto}</Text>

    </View>
}

const estilos = StyleSheet.create({
    caixa: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '80%'
    }
})