"use client"

import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
    {
        label: "Dashboard",
        path: "/app/dashboard"
    },
    {
        label: "Account",
        path: "/app/account",
    }
];

export default function AppHeader() {
    const activePathname = usePathname();
    
    return (
        <header className="flex justify-between items-center border-b border-white/10 py-2">
            <Logo />
            <nav>
                <ul className="flex gap-x-5 text-xs">
                    {
                        routes.map((route, idx) => (
                            <li key={idx}>
                                <Link
                                    href={route.path}
                                    className={cn("text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition", {
                                        'bg-black/10 text-white' : route.path === activePathname
                                    })}
                                >
                                    {route.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}