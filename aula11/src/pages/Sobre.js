import { Button, StyleSheet, Text, View } from "react-native"

export default function Sobre({ navigation, route }){
    const { nome, dataCadastro } = route.params
    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Tela sobre</Text>
            <Text style={estilo.texto}>Essa tela foi em empilhada sobre a Home</Text>
            <Button 
                title="Voltar"
                color="#5b5b5b"
                // onPress={() => navigation.goBack()}
                onPress={() => navigation.goBack()}
            />
            <Text style={estilo.texto}>Usuario logado: {nome} | Cadastrado em: {dataCadastro}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    texto: {
        fontSize: 14,
        color: '#5b5b5b',
        textAlign: 'center',
        marginBottom: 24
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#21295c',
        marginBottom: 12
    },
})