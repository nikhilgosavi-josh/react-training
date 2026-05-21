import { Link } from "react-router-dom"
import { todos } from "./constants"

export default function TodoList() {

    return (
        <>{todos.map((todo) =>
            <div key={todo.id}>
                <Link to={`${todo.id}`}>{todo.task}</Link>
            </div>
        )}</>
    )
}