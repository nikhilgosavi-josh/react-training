export type TodoItem = {
  id: number;
  task: string;
  completed: boolean;
}

export type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

export type TodoResponse = {
  todos: Todo[];
}
