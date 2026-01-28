import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { useAuthStore } from "./features/auth/store";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import AdminPage from "./pages/AdminPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ProtectedRoute from "./routes/ProtectedRoute";

const queryClient = new QueryClient();

function RedirectHandler() {
    const { isAuthenticated, user } = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (user?.role === "ADMIN") {
        return <Navigate to="/admin" replace />;
    }

    return <Navigate to="/app" replace />;
}

export default function App() {
    // Optional: Listen to storage events to sync across tabs, 
    // but Zustand persist usually handles initialization.

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/unauthorized" element={<UnauthorizedPage />} />

                    {/* Root Redirect */}
                    <Route path="/" element={<RedirectHandler />} />

                    {/* Protected Routes: USER */}
                    <Route element={<ProtectedRoute allowedRoles={["USER", "ADMIN"]} />}>
                        {/* Note: Admin can usually access App too, but per requirement "USER -> /app" */}
                        <Route path="/app" element={<DashboardPage />} />
                    </Route>

                    {/* Protected Routes: ADMIN */}
                    <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>

                    {/* Catch all */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Toaster position="top-right" theme="dark" richColors />
            </BrowserRouter>
        </QueryClientProvider>
    );
}
