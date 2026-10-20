import { Text, View } from "react-native";
import { API_URL } from "../config/api";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";

export default function ListaTarefas(){
    const [tasks, setTasks] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    
    async function getTasks(){
        try {
            setErro(null);
            setCarregando(true);

            const resposta = await fetch(`${API_URL}/tarefas`)
            if(!resposta.ok) {
                throw new Error(`O servidor respondeu com erro ${resposta.status}`)
            }   

            const dados = resposta.json()

            setTasks(dados)
        } catch(err){
            setErro(`Erro no getTasks: ${err.message}`)
            console.error(`Erro no getTasks: ${err.message}`)
        } finally{
            setCarregando(false)
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    if(carregando) {
        return(
            <View>
                <ActivityIndicator size="large" />
                <Text>Carregando as tarefas...</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>
                Lista de Tarefas
            </Text>
            <FlatList 
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<Text>{item.titulo}</Text>)}
            />
        </View>
    )
}