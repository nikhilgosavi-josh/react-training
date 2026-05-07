import useFetch from "./useFetch";

type Todo = {
    id: number,
    todo: string,
    completed: boolean
}

type TodoResponse = {
    todos: Todo[];
}

const clientAPI = {
    async get(url: string) {
        const config = {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }
        const response = await fetch(url, config)
        if (!response.ok) { throw new Error("Failed to fetch todo") }
        return response.json();
    }
}

const getTodos = async (): Promise<Todo[]> => {
    const data: TodoResponse = await clientAPI.get("https://dummyjson.com/todos")
    return data.todos
}

function Assn2() {

    const { data: todos, isLoading, error } = useFetch<Todo[]>(getTodos)

    if (isLoading) return <>Loading</>
    if (error) return <>Error</>
    return <>
        <section id="center">
            <div className="app">
                <h1>To Do List</h1>
                {todos?.map((todo) =>
                    <li key={todo.id}>
                        <span>{todo.todo}</span>
                        <span >{todo.completed ? "Completed" : "Pending"}</span>
                    </li>
                )}
            </div>
        </section>
    </>
}

export default Assn2;