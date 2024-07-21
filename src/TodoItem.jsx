import { useState } from "react"

function TodoItem({ todo, index, deleteTodo, editCurrentTodo }) {
    const [editStarted, setEditStarted] = useState(false)
    const [newText, setNewText] = useState("")

    const handleStartEdit = () => {
        setNewText(todo)
        setEditStarted(true)
    }

    const handleSave = () => {
        if(newText) {
            editCurrentTodo(index, newText)
            setEditStarted(false)
            setNewText("")
        } else {
            setEditStarted(false)
        }
    }

    const handleChangeTodo = (event) => {
        setNewText(event.target.value)
    }

    return (
        <div style={{ display: "flex" }}>
            <div key={index}>{index}: {todo}</div>
            <button onClick={() => deleteTodo(index)}>Löschen</button>
            {editStarted ?
                (
                    <>
                        <input onChange={handleChangeTodo} value={newText} />
                        <button onClick={handleSave}>Speichern</button>
                    </>
                ) :
                (
                    <button onClick={handleStartEdit}>Bearbeiten</button>
                )
            }

        </div>
    )
}

export default TodoItem