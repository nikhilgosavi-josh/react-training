import { useState } from 'react'
import './todo.css'

function Todo() {

  const [todos, setTodos] = useState([
    { id: 1, task: 'Set Up', completed: false },
    { id: 2, task: 'Implementation', completed: false },
    { id: 3, task: 'Assignment', completed: false }
  ])

  const changeStatus = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
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
    </>
  )
}

export default Todo
