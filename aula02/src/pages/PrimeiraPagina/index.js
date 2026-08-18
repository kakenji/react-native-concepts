import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function PrimeiraPagina(){
    const lidarComClique = () => {
        alert('Botão clicado!');
    }

    return(
        <>
            <View style={estilo.container}>
                <Text style={estilo.textoPrincipal}>Página #01</Text>
                <Button
                    title="Botão #01"
                    color="#841584"
                    onPress={lidarComClique}
                ></Button>
                <TouchableOpacity
                    onPress={lidarComClique}
                >
                    <View style={estilo.botao}>
                        <Text style={estilo.textoBotao}>Botão #02</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPrincipal:{
        fontSize: 26,
        color: 'rgb(255, 0, 0)',
        fontWeight: '500'
    },
    textoBotao:{
        fontSize: 16,
        fontWeight: '400'
    }, 
    botao:{
        marginTop:12,
        width: 120,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8eddff',
        borderRadius: 26
    }
})