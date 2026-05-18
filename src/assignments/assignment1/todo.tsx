import { useState } from 'react'
import './todo.css'
import type { TodoItem } from './types'
import { INITIAL_TODOS } from './constants'

function Todo() {

  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS)

  const changeStatus = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <section id="center">
      <div className="app">
        <h1>To Do List</h1>
        {todos.map((todo) =>
          <li key={todo.id}>
            <span>{todo.task}</span>
            <span onClick={() => changeStatus(todo.id)}>{todo.completed ? "done" : "pending"}</span>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        )}
      </div>
    </section>
  )
}

export default Todo
