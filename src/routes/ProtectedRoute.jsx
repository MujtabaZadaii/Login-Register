import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../features/auth/store";

export default function ProtectedRoute({ allowedRoles }) {
    const { isAuthenticated, user, hydrate } = useAuthStore();
    const location = useLocation();

    // Ensure state is hydrated (mostly for initial load if persisted)
    // In a real app we might show a loader while checking auth status
    // For now, zustand persist handles sync hydration usually

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
}
