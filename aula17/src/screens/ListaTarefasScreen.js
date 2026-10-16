import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { API_URL } from "../config/api"
import { FlatList } from "react-native"
import { ActivityIndicator } from "react-native"
import { Button } from "react-native"

export default function ListaTarefasScreen(){
    const [filmes, setFilmes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    async function getData(){
        try{
            setErro(null);
            setCarregando(true)
            const response = await fetch(`${API_URL}/movies.json`)
            if(!response.ok) {
                throw new Error('O servidor respondeu com erro: ' + response.status)
            }

            const data = await response.json()
            setFilmes(data.movies)
            console.log(`Dados vindo da api ${JSON.stringify(data.movies)}`)
        } catch(error){
            setErro(error.message)
        } finally{
            setCarregando(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if(carregando) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff"}}>
                <ActivityIndicator size="large"/>
                <Text>Carregando...</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>Lista de tarefas</Text>
            <FlatList 
                data={filmes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<Text>{item.title} | {item.releaseYear}</Text>)}
            />

            <Button
                title="Atualizar"
                onPress={() => getData()}
            />
        </View>
    )
}