import React, { createContext, ReactNode, useState } from "react";

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    saveTodo: (todo: string) => { return },
    deleteTodo: (key: string) => { return }
})

interface TodoContextProps {
    children: ReactNode;
}

export interface Todo {
    key: string;
    text: string;
}

type TodoContextType = {
    todos: Todo[];
    saveTodo: (todo: string) => void;
    deleteTodo: (key: string) => void;
}

function TodoProvider({ children }: TodoContextProps) {
    const [todos, setTodos] = useState<Todo[]>([])

    const genKey = (todos: Todo[]) => (todos.length + 1).toString()

    const saveTodo = (text: string) => {
        const todo: Todo = {
            text: text,
            key: genKey(todos)
        }
        setTodos([todo, ...todos])
    }

    const deleteTodo = (key: string) => {
        const newTodos: Todo[] = todos.filter(todo => todo.key !== key)
        setTodos(newTodos)
    }

    return <TodoContext.Provider value={{ todos, saveTodo, deleteTodo }} children={children} />
}

export default TodoProvider