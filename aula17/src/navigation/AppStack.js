import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListaTarefasScreen from "../screens/ListaTarefasScreen"
import NovaTarefaScreen from "../screens/NovaTarefaScreen"

const Stack = createNativeStackNavigator();

export default function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen component={ListaTarefasScreen} name="Tarefas" options={{title: "Minhas Tarefas"}}/>
            <Stack.Screen component={NovaTarefaScreen} name="Nova Tarefa" options={{title: "Nova Tarefa"}}/>
        </Stack.Navigator>
    )
}