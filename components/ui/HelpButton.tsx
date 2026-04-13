"use client";

import { useState } from "react";

export default function HelpButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            {hovered && (
                <div className="bg-navy text-white text-[12px] font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    Besoin d'aide ?
                </div>
            )}
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="w-14 h-14 rounded-full bg-gold hover:bg-gold-hover transition-colors flex items-center justify-center shadow-lg cursor-pointer"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            </button>
        </div>
    );
}