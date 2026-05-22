import { useMemo, useState } from "react"
import useCopyToClickboard from "./useCopyToClickboard"
import { initialTodos, TODO_STATUS } from "./constants"
import type { TodoStatus } from "./constants"
import TodoItem from "./TodoItem"

export default function Asgn5() {
    const [search, setSearch] = useState("")
    const [sortDirection, setSortDirection] = useState("asc")
    const [status, setStatus] = useState<TodoStatus>(TODO_STATUS.ALL)

    const filteredTodos = useMemo(() => {
        let filtered = [...initialTodos]

        filtered = filtered.filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()))

        if (status === TODO_STATUS.COMPLETED) {
            filtered = filtered.filter((todo) => todo.completed)
        }

        if (status === TODO_STATUS.PENDING) {
            filtered = filtered.filter((todo) => !todo.completed)
        }

        filtered.sort((a, b) => sortDirection == "asc" ? a.task.localeCompare(b.task) : b.task.localeCompare(a.task))
        return filtered
    }, [search, sortDirection, status])

    return (
        <>
            <div>
                <span><input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} /></span>
                <span>Sort
                    <select value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
                        <option value={"asc"} >Asc</option>
                        <option value={"desc"}>Desc</option>
                    </select>
                </span>
                <span>Status
                    <select value={status} onChange={(e) => setStatus(e.target.value as TodoStatus)}>
                        <option value={TODO_STATUS.ALL}>All</option>
                        <option value={TODO_STATUS.COMPLETED}>Completed</option>
                        <option value={TODO_STATUS.PENDING}>Pending</option>
                    </select>
                </span>
            </div>
            <ul>{filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}</ul>
        </>
    )
}