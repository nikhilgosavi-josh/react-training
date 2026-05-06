import { Routes, Route } from "react-router-dom";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<h2>Assignments Home</h2>} />
        </Routes>
    );
}

export default AppRoutes;