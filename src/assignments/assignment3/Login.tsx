import { useNavigate } from "react-router-dom"


export default function Login() {
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem("isLoggedIn", 'true')
        navigate('/asgn3/add-todo')
    }
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={login}>Click to login</button>
        </>
    )
}