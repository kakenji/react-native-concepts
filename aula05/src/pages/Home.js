import { View, Text, StyleSheet, Platform } from "react-native"

export default function Home(){
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoPrincipal}>Bem vindos ao sistema!</Text>
            <Text>{Platform.OS}</Text>
            <View style={estilos.caixaComSombra}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    textoPrincipal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#21295c'
    },
    caixaComSombra: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '80%',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0,
                shadowRadius: 4,
            },
            android: {
                elevation: 6
            }
        })
    }
})