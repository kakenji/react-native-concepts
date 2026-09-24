import { Button } from "react-native";
import { Text, View, StyleSheet, TextInput } from "react-native"
import { useState } from "react"

const dadosForm = {
    nome: '',
    idade: '',
    senha: '',
    maisInfos: '',
}

export default function Home(){
    [nomeestado, setNomeestado] = useState('');
    function aoDigitar(textoDigitado){
        console.log(`Texto digitado: ${textoDigitado}`);
    }

    function aoEnviar(){
        const { nome, idade, senha, maisInfos } = dadosForm
        console.log('Formulário enviado!: ', { nome, idade, senha: '*'.repeat(senha.length), maisInfos })
    }

    return(
        <View style={estilo.container}>
            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Nome</Text>
                <TextInput
                    style={estilo.input }
                    placeholder="Digite aqui o seu texto"
                    onChangeText={(texto) => (dadosForm.nome = texto)}
                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Idade</Text>
                <TextInput
                    style={estilo.input}
                    placeholder="Digite a idade"
                    onChangeText={(texto) => (dadosForm.idade = texto)}
                    keyboardType="numeric"
                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Senha</Text>
                <TextInput
                    style={estilo.input}
                    placeholder="Senha"
                    onChangeText={(texto) => (dadosForm.senha) = texto }
                    secureTextEntry
                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Fale mais sobre você</Text>
                <TextInput
                    style={estilo.input}
                    placeholder="Conte mais sobre você"
                    onChangeText={(texto) => (dadosForm.maisInfos) = texto}
                    multiline
                />
            </View>
            <Button
                title="Enviar"
                color="#118AB2"
                onpress={aoEnviar}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: '1',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#dadada',
        flexDirection: 'column',
        marginStart: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff'
    }, 
    label: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    containerInput: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 10
    }
})