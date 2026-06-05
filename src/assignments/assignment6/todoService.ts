import { API_URL } from "../assignment5/constants";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

export interface FetchTodosResponse {
    todos: Todo[];
    total: number;
}

export const todoService = {
    async fetchTodos(page: number, search: string, sort: string): Promise<FetchTodosResponse> {
        const limit = 10;
        const response = await fetch(`${API_URL}/todos?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error("Failed to fetch todos");
        }
        let todos: Todo[] = await response.json();

        if (search) {
            todos = todos.filter((todo) =>
                todo.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        todos.sort((a, b) =>
            sort === 'desc' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
        );

        return { todos, total: todos.length };
    }
};
