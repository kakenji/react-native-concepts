import { FlatList } from "react-native";
import ItemContato from "../components/ItemContato";

const CONTATOS = [
    { id: 1, nome: 'Kauã Henrique', cargo: 'Craque da bola', icone: 'smartphone' },
    { id: 2, nome: 'Kayky Kenji', cargo: 'Cortador de frutas pleno', icone: 'server' },
    { id: 3, nome: 'Vitor', cargo: 'Enfermeiro', icone: 'briefcase' },
    { id: 4, nome: 'Luiz Galvani', cargo: 'Gaijin', icone: 'briefcase' },
]

export default function Home2(){
    return(
        <FlatList
            data={CONTATOS}
            keyExtractor={ (item) => item.id }
            renderItem={ ({item}) => <ItemContato contato={item}    />}
        />
    )
}