import { createBrowserRouter } from "react-router-dom";
import Todo from "./assignments/assignment1/todo";
import Asgn2 from "./assignments/assignment2/todoApi"
import TodoList from "./assignments/assignment3/TodoList";
import TodoDetails from "./assignments/assignment3/TodoDetails";
import AddTodo from "./assignments/assignment3/AddTodo";
import Login from "./assignments/assignment3/Login";
import ProtectedRoute from "./assignments/assignment3/ProtectedRoute";
import AddTodoForm from "./assignments/assignment4/AddTodoForm";
import Asgn5 from "./assignments/assignment5/TodoOptimized";
import Asgn6 from "./assignments/assignment6/TodoQuery";
import Asgn7 from "./assignments/assignment7/TodoQuery";

// function AppRoutes() {

const router = createBrowserRouter([
    { path: '/asgn1', element: <Todo /> },
    { path: '/asgn2', element: <Asgn2 /> },
    { path: '/asgn3', element: <TodoList /> },
    { path: '/asgn3/add-todo', element: (<ProtectedRoute><AddTodo /></ProtectedRoute>) },
    { path: 'asgn3/:id', element: <TodoDetails /> },
    { path: 'login', element: (<Login />) },
    { path: '/asgn4', element: <AddTodoForm /> },
    { path: '/asgn5', element: <Asgn5 /> },
    { path: '/asgn6', element: <Asgn6 /> },
    { path: '/asgn7', element: <Asgn7 /> }
])

// return (
//     <Routes>
//         <Route path="/" element={<Navigate to="/asgn1" />} />
//         <Route path="/asgn1" element={<Todo />} />
//         <Route path="/asgn2" element={<Asgn2 />} />
//     </Routes>
// );
// }

export default router;