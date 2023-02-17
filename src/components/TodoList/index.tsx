import { useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { TodoContext } from "../../context/todoContext";
import TodoItem from "../TodoItem";

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <FlatList
            style={styles.list}
            data={todos}
            renderItem={({ item }) => <TodoItem todo={item} key={item.key} />}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        alignContent: "center"
    }
})

export default TodoList;