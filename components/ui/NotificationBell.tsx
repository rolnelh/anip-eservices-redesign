"use client";

import { useState, useEffect } from "react";

export default function NotificationBell() {
    const [permission, setPermission] = useState<NotificationPermission>("default");
    const [hasNew, setHasNew] = useState(false);

    useEffect(() => {
        if ("Notification" in window) {
            setPermission(Notification.permission);
        }
    }, []);

    async function requestPermission() {
        if (!("Notification" in window)) return;
        const result = await Notification.requestPermission();
        setPermission(result);
        if (result === "granted") {
            // Notification de bienvenue
            new Notification("ANIP E-Services", {
                body: "Vous recevrez une notification dès que votre document sera prêt.",
                icon: "/icons/icon-192.png",
            });
        }
    }

    function simulateNotification() {
        if (permission === "granted") {
            new Notification("Document prêt ✓", {
                body: "Votre Acte de naissance est disponible au téléchargement.",
                icon: "/icons/icon-192.png",
            });
            setHasNew(false);
        }
    }

    return (
        <button
            onClick={permission === "granted" ? simulateNotification : requestPermission}
            className="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            title={permission === "granted" ? "Notifications activées" : "Activer les notifications"}
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke={permission === "granted" ? "#c9993a" : "#8fa0b8"} strokeWidth="1.8">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {hasNew && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
            )}
        </button>
    );
}