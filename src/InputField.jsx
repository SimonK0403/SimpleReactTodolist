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
        <div>
            <input type="text" onChange={handleChange} value={newTodo} style={{marginRight: "5px"}} />
            <button onClick={() => handleAddTodo(newTodo)}>Hinzufügen</button>
        </div>
    )
}

export default InputField