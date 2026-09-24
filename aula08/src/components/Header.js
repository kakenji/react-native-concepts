import { View, Text, StyleSheet } from "react-native";

export default function Header({user}){
    return (
        <View>
            <Text>{user.name}</Text>
            <Text>icon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        borderWidth: 2,
        borderColor: '#111'
    },
})