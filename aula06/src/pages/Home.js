import { FlatList, View, Text, StyleSheet } from "react-native"

const FRUTAS = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga', 'Abacaxi', 'Ameixa', 'Kiwi', 'Morango', 'Tomate']

export default function Home(){
    return(
        <View style={estilos.container}>
            <Text>Página Home</Text>
            <FlatList
                data={FRUTAS}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                <View style={estilos.linha}>
                    <Text style={estilos.texto}>{item}</Text>
                </View>
            )}
            contentContainerStyle={estilos.conteudo} 
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        alignItems: 'center',
    },
    linha: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    texto: {
        fontSize: 16
    },
    conteudo: {
        paddingTop: 60,

    }
})