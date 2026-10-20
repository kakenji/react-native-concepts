import { ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function NovaTarefa({navigation}){
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    return(
        <ScrollView>
            <Text>
                Nova Tarefa
            </Text>

            <View>
                <Text>Título da tarefa</Text>
                <TextInput 
                    placeholder="Ex: Enviar e-mail para o cliente"
                    value={titulo}
                    onChangeText={setTitulo}
                />
            </View>
            <View>
                <Text>Descrição</Text>
                <TextInput 
                    placeholder="Detalhes de tarefa XPTO..."
                    value={descricao}
                    onChange={setDescricao}
                />
            </View>
            <TouchableOpacity>
                <Text>Salvar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}