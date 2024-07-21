import { useState } from "react"

function TodoItem({ todo, index, deleteTodo, editCurrentTodo }) {
    const [editStarted, setEditStarted] = useState(false)
    const [newText, setNewText] = useState("")

    const handleStartEdit = () => {
        setNewText(todo)
        setEditStarted(true)
    }

    const handleSave = () => {
        if (newText) {
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

    const handleDelete = (todoIndex) => {
        deleteTodo(todoIndex)
        setEditStarted(false)
    }

    return (
        <tr key={index}>
            <td>{index}</td>
            <td>{todo}</td>
            <td>
                <button onClick={() => handleDelete(index)}>Löschen</button>
            </td>
            <td>
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
            </td>
        </tr>
    )
}

export default TodoItem