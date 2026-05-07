import { Link } from "react-router-dom"

export default function TodoList() {
    const todos = [
        { id: 1, task: 'Task 1' },
        { id: 2, task: 'Task 2' }
    ]

    return (
        <>{todos.map((todo) =>
            <div key={todo.id}>
                <Link to={`${todo.id}`}>{todo.task}</Link>
            </div>
        )}</>
    )
}