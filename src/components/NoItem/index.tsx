import { StyleSheet, Text, View } from "react-native";

const NoItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>No Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        textTransform: 'uppercase'
    }
})

export default NoItem;