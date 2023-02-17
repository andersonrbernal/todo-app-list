import { StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import TodoProvider from './src/context/todoContext';
import { Header, AddTodo, TodoList } from './src/components'

export default function App() {
  return (
    <TodoProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo />
            <View style={styles.list}>
              <TodoList />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
    flex: 1
  },
  list: {
    backgroundColor: 'white',
    flex: 1
  },
});
