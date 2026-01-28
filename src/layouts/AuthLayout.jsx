import { motion } from "framer-motion";
import ThreeBackground from "../components/3d/ThreeBackground";
import { Toaster } from "sonner";
import { useLocation } from "react-router-dom";

export default function AuthLayout({ children }) {
    const location = useLocation();
    const isRegister = location.pathname === "/register";

    return (
        <div className="flex min-h-screen w-full overflow-hidden bg-background font-sans text-foreground">
            {/* Left / 3D Side */}
            <div className="relative hidden w-1/2 lg:block">
                <ThreeBackground />

            </div>

            {/* Right / Form Side */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-900/50">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0" />

                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full max-w-md"
                >
                    {children}
                </motion.div>
            </div>

            <Toaster position="top-right" theme="dark" />
        </div>
    );
}
