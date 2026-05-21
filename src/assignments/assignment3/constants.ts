import type { Todo } from "./types";

export const todos: Todo[] = [
  { id: 1, task: 'Task 1' },
  { id: 2, task: 'Task 2' }
]

export const ROUTES = {
  LOGIN: "/login",
  AddTodo: "/asgn3/add-todo"
} as const;