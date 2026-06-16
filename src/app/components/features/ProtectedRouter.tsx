import { Navigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}