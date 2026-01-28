import { useAuthStore } from "../features/auth/store";
import { Button } from "../components/ui/button";
import { authApi } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await authApi.logout();
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-red-400">Admin Portal</h1>
                        <p className="text-muted-foreground">System Administration & Overview</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">Logged in as {user?.name}</span>
                        <Button onClick={handleLogout} variant="destructive">
                            Logout
                        </Button>
                    </div>
                </header>

                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Admin Stats */}
                    <div className="col-span-1 rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="font-semibold text-lg">Total Users</h3>
                        <p className="text-3xl font-bold mt-2">1,234</p>
                    </div>
                    <div className="col-span-1 rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="font-semibold text-lg">Active Sessions</h3>
                        <p className="text-3xl font-bold mt-2">42</p>
                    </div>
                    <div className="col-span-1 rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="font-semibold text-lg">System Health</h3>
                        <p className="text-3xl font-bold mt-2 text-green-400">98%</p>
                    </div>
                    <div className="col-span-1 rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="font-semibold text-lg">Pending Requests</h3>
                        <p className="text-3xl font-bold mt-2 text-yellow-500">5</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
