import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo, TodoContext } from "../../context/todoContext";
import { MaterialIcons } from '@expo/vector-icons'

interface TodoItemProps {
    todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { deleteTodo } = useContext(TodoContext);

    return (
        <TouchableOpacity onPress={() => deleteTodo(todo.key)}>
            <View style={styles.todoItem}>
                <MaterialIcons name="delete" size={18} color='#333' />
                <Text style={styles.text}>{todo.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 16,
        marginHorizontal: 10,
        marginVertical: 12
    },
    text: {
        marginLeft: 10
    }
})

export default TodoItem;