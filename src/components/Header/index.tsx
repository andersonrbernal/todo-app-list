import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        paddingHorizontal: 10,
        paddingTop: 30,
        paddingBottom: 10
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})

export default Header;