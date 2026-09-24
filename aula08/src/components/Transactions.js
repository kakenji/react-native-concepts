import { View, Text, StyleSheet } from "react-native"

export default function Transactions({transaction}){
    return(
        <View style={styles.container}>
                <Text style={styles.date}>{transaction.date}</Text>
            <View style={styles.row}>
                <Text><strong>{transaction.title}</strong></Text>
                <Text>{transaction.amount}</Text>
            </View>
        <hr></hr>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        // borderWidth: 2,
        // borderColor: '#111'
    },

    date: {
        color: '#706c6c',
        fontSize: '.8rem',
    },

    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 2,           
        // borderColor: '#dd1b1b',
    }
})