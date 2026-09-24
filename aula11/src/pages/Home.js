import { Button, StyleSheet, Text, View } from "react-native"

const USUARIO_LOGADO = {
    id: 1,
    nome: "Kayky Kenji",
    login: "kkenji",
    dataCadastro: "01/01/2026",
}

export default function Home({ navigation }){
    return( 
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Bem vindo à tela principal!</Text>
            <Text style={estilo.texto}>Essa é a primeira tela do app</Text>

            <Button 
                title="Ir para sobre"    
                color="#118ab2"
                onPress={() => navigation.navigate('Sobre', USUARIO_LOGADO)}
            />

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