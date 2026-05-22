import { useState } from "react";
import apiFetch from "./apiClient";
import { ADD_TODO_API_URL } from "./constants";

export default function AddTodoForm() {
    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async () => {
        try {
            await apiFetch(ADD_TODO_API_URL,
                {
                    method: "POST", body: JSON.stringify({ title, dueDate })
                })
            setMessage("Todo Created")
            setTitle("")
            setDueDate("")
        } catch (error) {
            setMessage("Failed to create todo")
        }
    }

    return (
        <div className="container">
            <h1>Todo Form</h1>
            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />

            <input
                type="date"
                value={dueDate}
                onChange={(e) => { setDueDate(e.target.value) }}
            />

            <button onClick={handleSubmit}>Add Todo</button>
            {message && <p>{message}</p>}
        </div>
    )
}