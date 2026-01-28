import { cn } from "../../lib/utils";

export function PasswordStrengthMeter({ password }) {
    const getStrength = (pass) => {
        let score = 0;
        if (!pass) return 0;
        if (pass.length > 5) score += 1;
        if (pass.length > 7) score += 1;
        if (/[A-Z]/.test(pass)) score += 1;
        if (/[0-9]/.test(pass)) score += 1;
        if (/[^A-Za-z0-9]/.test(pass)) score += 1;
        return score;
    };

    const strength = getStrength(password);

    return (
        <div className="flex gap-1 h-1.5 mt-2 overflow-hidden rounded-full bg-slate-800/50">
            <div className={cn("h-full w-1/5 transition-all duration-300", strength > 0 ? "bg-red-500" : "bg-transparent")} />
            <div className={cn("h-full w-1/5 transition-all duration-300", strength > 1 ? "bg-orange-500" : "bg-transparent")} />
            <div className={cn("h-full w-1/5 transition-all duration-300", strength > 2 ? "bg-yellow-500" : "bg-transparent")} />
            <div className={cn("h-full w-1/5 transition-all duration-300", strength > 3 ? "bg-blue-500" : "bg-transparent")} />
            <div className={cn("h-full w-1/5 transition-all duration-300", strength > 4 ? "bg-green-500" : "bg-transparent")} />
        </div>
    );
}
