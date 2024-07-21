import { useState } from "react"
import InputField from "./InputField"
import TodoItem from "./TodoItem"

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (index) => {
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const editCurrentTodo = (index, newText) => {
        let newTodos = [...todos]
        newTodos[index] = newText
        setTodos(newTodos)
    }

    return (
        <>
            <InputField addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} index={index} deleteTodo={deleteTodo} editCurrentTodo={editCurrentTodo}/>
            ))}
        </>
    )
}

export default App