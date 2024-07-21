import { useState } from "react"

function TodoItem({ todo, index, deleteTodo, editCurrentTodo, changeOrder }) {
    const [editStarted, setEditStarted] = useState(false)
    const [newText, setNewText] = useState("")

    const handleStartEdit = () => {
        setNewText(todo)
        setEditStarted(true)
    }

    const handleSave = () => {
        if (newText) {
            editCurrentTodo(index, newText)
            setNewText("")
        }
        setEditStarted(false)
    }

    const handleChangeTodo = (event) => {
        setNewText(event.target.value)
    }

    const handleDelete = () => {
        deleteTodo(index)
        setEditStarted(false)
    }

    const handleUp = () => {
        changeOrder(index, "up")
    }

    const handleDown = () => {
        changeOrder(index, "down")
    }

    return (
        <tr key={index}>
            <td>
                <button onClick={handleUp} style={{marginRight: "1px"}}>↑</button>
                <button onClick={handleDown}>↓</button>
            </td>
            <td>{index+1}</td>
            <td>{todo}</td>
            <td>
                <button onClick={handleDelete}>Löschen</button>
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