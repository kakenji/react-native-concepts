import { View, FlatList } from "react-native"
import Transactions from "../components/Transactions"
import Header from "../components/Header"

const transactions = [
    { id: 1, title: 'Salário', date: '01/08/2026', amount: "R$1.000,00" },
    { id: 2, title: 'Investimento', date: '02/08/2026', amount: "R$1.500,00" }
]

const user = {
    name: 'Kayky'
}

export default function Home(){
    return (
        <View>
            <Header user={user} />
            <FlatList
                data={transactions}
                keyExtractor={ (item) => item.id}
                renderItem={ ({item}) => <Transactions transaction={item} />}
            />
        </View>
    )
}