import { API_URL } from "../assignment5/constants";

export async function fetchTodos(page: number, search: string, sort: string) {
    let limit = 10
    const response = await fetch(`${API_URL}/todos?_limit=${limit}&_page=${page}`);
    let todos = await response.json();

    if (search) {
        todos = todos.filter((todo: any) =>
            todo.title.toLowerCase().includes(search.toLowerCase()))
    }

    todos = todos.sort((a: any, b: any) =>
        sort === 'desc' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title))

    return { todos, total: todos.length }
}