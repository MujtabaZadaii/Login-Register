import { useAuthStore } from "../features/auth/store";
import { Button } from "../components/ui/button";
import { authApi } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await authApi.logout();
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, {user?.name}</p>
                    </div>
                    <Button onClick={handleLogout} variant="destructive">
                        Logout
                    </Button>
                </header>

                <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="font-semibold mb-2">User Profile</h3>
                        <p className="text-sm text-muted-foreground">Email: {user?.email}</p>
                        <p className="text-sm text-muted-foreground">Role: <span className="text-indigo-400">{user?.role}</span></p>
                    </div>
                    {/* Add more dashboard widgets here */}
                </section>
            </div>
        </div>
    );
}
