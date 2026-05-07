import { Routes, Route, Navigate } from "react-router-dom";
import Todo from "./assignments/assignment1/todo";
import Assn2 from "./assignments/assignment2/todoApi"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/todo" />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo1" element={<Assn2 />} />
        </Routes>
    );
}

export default AppRoutes;