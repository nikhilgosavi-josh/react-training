import { Navigate } from "react-router-dom";
import { ROUTES } from "./constants";

type Props = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) { return <Navigate to={ROUTES.LOGIN} replace /> }
    return children;
}