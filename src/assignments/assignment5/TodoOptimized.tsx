import { useMemo, useState } from "react"
import useCopyToClickboard from "./useCopyToClickboard"
import { initialTodos } from "./constants"

export default function Asgn5() {
    const [search, setSearch] = useState("")
    const [sortDir, setSortDir] = useState("asc")
    const [status, setStatus] = useState("all")

    const filteredTodos = useMemo(() => {
        let filtered = [...initialTodos]

        filtered = filtered.filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()))

        if (status === "completed") {
            filtered = filtered.filter((todo) => todo.completed)
        }

        if (status === "pending") {
            filtered = filtered.filter((todo) => !todo.completed)
        }

        filtered.sort((a, b) => sortDir == "asc" ? a.task.localeCompare(b.task) : b.task.localeCompare(a.task))
        return filtered
    }, [search, sortDir, status])

    return (
        <>
            <div>
                <span><input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} /></span>
                <span>Sort
                    <select value={sortDir} onChange={(e) => setSortDir(e.target.value)}>
                        <option value={"asc"} >Asc</option>
                        <option value={"desc"}>Desc</option>
                    </select>
                </span>
                <span>Status
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value={"all"}>All</option>
                        <option value={"completed"}>Completed</option>
                        <option value={"pending"}>Pending</option>
                    </select>
                </span>
            </div>
            <ul>{filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}</ul>
        </>
    )
}

function TodoItem({ todo }: any) {

    const {
        isCopied,
        copyToClipboard,
    } = useCopyToClickboard(todo.task);

    return (
        <li key={todo.id}>
            <span>{todo.task}</span>
            <span>{todo.completed ? "Done" : "Pending"}</span>
            <span><button onClick={copyToClipboard}>{isCopied ? 'Copied' : "Copy"}</button></span>
        </li>
    )
}