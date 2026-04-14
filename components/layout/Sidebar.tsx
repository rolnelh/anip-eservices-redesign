"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        section: "Navigation",
        items: [
            { label: "Tableau de bord", href: "/dashboard", badge: null },
            { label: "Mes Documents", href: "/dashboard/mes-documents", badge: "3" },
            { label: "Mon Profil", href: "/dashboard/mon-profil", badge: null },
        ],
    },
    {
        section: "Services",
        items: [
            { label: "Nos Services", href: "/dashboard/services", badge: null },
            { label: "Mes Demandes", href: "/dashboard/mes-demandes", badge: null },
            { label: "Suivi de demandes", href: "/dashboard/suivi", badge: null },
        ],
    },
    {
        section: "Je veux modifier",
        items: [
            { label: "Modifications", href: "/dashboard/modifications", badge: null },
        ],
    },
    {
        section: "Autres",
        items: [
            { label: "Aide & support", href: "/dashboard/support", badge: null },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-full bg-navy-light flex flex-col py-8 h-full overflow-y-auto">

            {navItems.map((group) => (
                <div key={group.section}>
                    {/* <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-700 px-[22px] pt-4 pb-2">
                        {group.section}
                    </p> */}
                    {group.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 px-[22px] py-[9px] border-l-[3px] transition-all
                  ${isActive
                                        ? "border-gold bg-gold/10"
                                        : "border-transparent hover:bg-white/5 hover:border-gold/20"
                                    }`}
                            >
                                <span className={`text-[13px] ${isActive ? "text-gold font-medium" : "text-white"}`}>
                                    {item.label}
                                </span>
                                {item.badge && (
                                    <span className="ml-auto bg-gold text-white text-[10px] font-semibold px-2 py-[2px] rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                    <div className="h-px bg-navy-muted mx-[22px] my-2" />
                </div>
            ))}

            <div className="mt-auto px-[22px] pt-4 border-t border-navy-muted">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white text-[12px] font-semibold flex-shrink-0">
                        D
                    </div>
                    <div>
                        <p className="text-[12px] font-medium text-slate-200">Dieudonne Mahugnon</p>
                        <p className="text-[10px] text-slate-700 mt-[1px]">NPI · 7036105351</p>
                    </div>
                </div>
            </div>

        </div>
    );
}