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
            <InputField addTodo={addTodo} />
            <table>
                <thead>
                    <tr>
                        <th>Reihenfolge</th>
                        <th>Aufgabe</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <TodoItem todo={todo} index={index} deleteTodo={deleteTodo} editCurrentTodo={editCurrentTodo} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App