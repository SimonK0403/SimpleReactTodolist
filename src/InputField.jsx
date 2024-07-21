import { useState } from "react"

function InputField({ addTodo }) {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = (todo) => {
        if(todo) {
            addTodo(todo)
            setNewTodo("")
        }
    }

    return (
        <>
            <input type="text" onChange={handleChange} value={newTodo} />
            <button onClick={() => handleAddTodo(newTodo)}>Hinzufügen</button>
        </>
    )
}

export default InputField