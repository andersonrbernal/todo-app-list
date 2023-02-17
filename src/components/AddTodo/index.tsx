import { useContext, useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";
import { TodoContext } from "../../context/todoContext";

const AddTodo = () => {
    const { saveTodo } = useContext(TodoContext)
    const [text, setText] = useState('')

    const pressHandler = () => {
        if (text.length > 3) saveTodo(text)
        else Alert.alert(
            'Ooops',
            'That message is too short.',
            [{ text: 'Understood' }]
        )
        setText('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                placeholder='New Todo'
                onChangeText={value => setText(value)}
            />
            <Button
                title="Add Todo"
                color='coral'
                onPress={pressHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        display: "flex",
    },
    input: {
        width: '100%',
        height: 30,
        marginVertical: 10,
        borderBottomWidth: 0.5,
    }
})

export default AddTodo;