import * as React from "react"
import { cn } from "../../lib/utils"

export function RoleSelector({ value, onChange }) {
    return (
        <div className="flex w-full rounded-md bg-muted p-1">
            <button
                type="button"
                onClick={() => onChange("USER")}
                className={cn(
                    "flex-1 rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
                    value === "USER"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/50"
                )}
            >
                USER
            </button>
            <button
                type="button"
                onClick={() => onChange("ADMIN")}
                className={cn(
                    "flex-1 rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
                    value === "ADMIN"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/50"
                )}
            >
                ADMIN
            </button>
        </div>
    )
}
