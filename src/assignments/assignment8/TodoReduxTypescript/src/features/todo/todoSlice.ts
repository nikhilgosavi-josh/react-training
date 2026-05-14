import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    todo: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [
        { id: "1", todo: "Task 1", completed: false },
        { id: "2", todo: "Task 2", completed: false },
        { id: "3", todo: "Task 3", completed: false },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo: Todo = {
                id: nanoid(),
                todo: action.payload,
                completed: false,
            };

            state.todos.push(todo);
        },

        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        updateTodo: (
            state,
            action: PayloadAction<{ id: string; todo: string }>
        ) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, todo: action.payload.todo }
                    : todo
            );
        },
    },
});

export const { addTodo, removeTodo, updateTodo } =
    todoSlice.actions;

export default todoSlice.reducer;