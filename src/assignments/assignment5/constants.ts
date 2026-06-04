import type { Todo } from "./types";

export const initialTodos: Todo[] = [
  { id: 1, task: "Task 1", completed: false },
  { id: 2, task: "Task 2", completed: true },
  { id: 3, task: "Task 3", completed: false },
  { id: 4, task: "Task 4", completed: false }
]

export const API_URL = "https://jsonplaceholder.typicode.com";