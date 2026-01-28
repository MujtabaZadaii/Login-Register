import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function UnauthorizedPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-4xl font-bold text-destructive mb-2">403</h1>
            <h2 className="text-2xl font-semibold mb-4">Unauthorized Access</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
                You do not have permission to view this page. Please contact your administrator if you believe this is an error.
            </p>
            <div className="flex gap-4">
                <Button asChild variant="outline">
                    <Link to="/login">Go to Login</Link>
                </Button>
            </div>
        </div>
    );
}
