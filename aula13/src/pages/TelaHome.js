import { SafeAreaView, StyleSheet, Text, View } from "react-native"

export default function TelaHome({navigation}){
    return(
        <SafeAreaView style={estilos.tela}>
            <Text style={estilos.titulo}>
                Home
            </Text>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {

    },
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})


