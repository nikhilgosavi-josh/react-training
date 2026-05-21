import { useNavigate } from "react-router-dom"
import { ROUTES } from "./constants";


export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", 'true')
        navigate(ROUTES.AddTodo)
    }
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Click to login</button>
        </>
    )
}