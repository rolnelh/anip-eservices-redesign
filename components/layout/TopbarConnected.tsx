"use client";

import { useState } from "react";
import Link from "next/link";
import NotificationBell from "@/components/ui/NotificationBell";


const user = {
    nom: "HOUNDAGNON",
    prenoms: "Dieudonné Mahugnon",
    npi: "7036105351",
};

export default function TopbarConnected() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="bg-navy flex items-center justify-between px-4 md:px-7 h-[60px] border-b-2 border-gold relative">

            <div>
                <p className="text-white font-playfair text-[16px] md:text-[18px] font-semibold leading-tight tracking-wide">
                    ANIP
                </p>
                <p className="text-slate-400 text-[8px] md:text-[9px] uppercase tracking-[0.15em] leading-tight">
                    République du Bénin
                </p>
            </div>
            <div className="hidden lg:flex items-center gap-6">
                <button className="text-slate-400 text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Centre de vote
                </button>
                <button className="text-slate-400 text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Retrouver mon NPI
                </button>
                <button className="text-slate-400 text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Vérifier un document
                </button>
                <button className="text-slate-400 text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Services et coûts
                </button>
            </div>

            <NotificationBell />


            <div className="relative">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 md:gap-3"
                >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-50 border-[3px] border-white shadow-md overflow-hidden ring-2 ring-gold/20 flex-shrink-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="hidden md:block text-left">
                        <p className="text-white text-[12px] font-semibold leading-tight">{user.prenoms}</p>
                        <p className="text-slate-400 text-[11px] leading-tight">{user.nom}</p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8fa0b8" strokeWidth="2"
                        className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>


                {dropdownOpen && (
                    <div className="absolute right-0 top-[calc(100%+12px)] w-52 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden z-50">
                        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                            <p className="text-[11px] font-semibold text-navy">{user.prenoms} {user.nom}</p>
                            <div className="flex items-center gap-1 mt-[2px]">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8a99b5" strokeWidth="1.8">
                                    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                                    <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                                    <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                                    <path d="M2 12a10 10 0 0 1 18-6" />
                                    <path d="M2 17c1 0 1.5-.5 1.5-1.5S2 14 2 13a10 10 0 0 1 .43-3" />
                                    <path d="M20 12c0 2-.28 4-.8 5.46" />
                                    <path d="M7 13.6A10 10 0 0 1 7.5 8" />
                                    <path d="M9.5 8a4 4 0 0 1 7 2.6" />
                                </svg>
                                <p className="text-[10px] text-slate-400">NPI · {user.npi}</p>
                            </div>
                        </div>

                        <div className="lg:hidden border-b border-slate-100">
                            {["Centre de vote", "Retrouver mon NPI", "Vérifier un document", "Services et coûts"].map((label) => (
                                <button
                                    key={label}
                                    className="w-full text-left px-4 py-2.5 text-[12px] text-slate-600 hover:bg-slate-50 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        <Link
                            href="/dashboard/profil"
                            className="flex items-center gap-3 px-4 py-3 text-[13px] text-navy hover:bg-slate-50 transition-colors border-b border-slate-100"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Mes données
                        </Link>

                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-red-500 hover:bg-red-50 transition-colors"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            Se déconnecter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}