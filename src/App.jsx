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

    const changeOrder = (index, direction) => {
        if((direction == "up" && index>0) || (direction == "down" && index<todos.length-1)) {
            let currentTodo = todos[index]
            let newTodos = [...todos]
            let todos2 = []
            newTodos.splice(index, 1) //remove todo
            if(direction == "up" && (index>0)){
                todos2 = newTodos.splice(index-1)
            } else if(direction == "down") {
                todos2 = newTodos.splice(index+1)
            }
            newTodos.push(currentTodo)
            newTodos = newTodos.concat(todos2)
            setTodos(newTodos)
        }
    }

    return (
        <>
            <InputField addTodo={addTodo} />
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Reihenfolge</th>
                        <th>Aufgabe</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <TodoItem todo={todo} index={index} deleteTodo={deleteTodo} editCurrentTodo={editCurrentTodo} changeOrder={changeOrder} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App