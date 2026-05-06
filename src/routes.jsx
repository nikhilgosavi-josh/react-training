import { Routes, Route, Navigate } from "react-router-dom";
import Todo from "./assignments/assignment1/todo.jsx";
// import Assignment2 from "./assignments/assignment2/Assignment2";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/todo" />} />
            <Route path="/todo" element={<Todo />} />
            {/* Add more assignments here */}
        </Routes>
    );
}

export default AppRoutes;