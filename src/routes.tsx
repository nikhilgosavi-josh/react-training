import { Routes, Route, Navigate } from "react-router-dom";
import Todo from "./assignments/assignment1/todo";
import Asgn2 from "./assignments/assignment2/todoApi"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/todo" />} />
            <Route path="/asgn1" element={<Todo />} />
            <Route path="/asgn2" element={<Asgn2 />} />
        </Routes>
    );
}

export default AppRoutes;