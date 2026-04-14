import HeroBanner from "@/components/dashboard/HeroBanner";
import StatsRow from "@/components/dashboard/StatsRow";
import Link from "next/link";
import { documents } from "@/lib/data/documents";

const lastRequest = {
    name: "Carte d'identité biométrique",
    date: "07 avr. 2026",
    status: "processing" as const,
};

const statusConfig = {
    done: { badge: "bg-status-success-bg text-status-success", label: "Livré", dot: "bg-status-success" },
    processing: { badge: "bg-status-info-bg text-status-info", label: "En traitement", dot: "bg-status-info" },
    pending: { badge: "bg-gold-light text-gold", label: "En attente", dot: "bg-gold" },
};

const quickAccess = [
    { label: "Nos services", sub: "Demander un document", href: "/dashboard/services", color: "bg-gold-light" },
    { label: "Mon profil", sub: "Mes données personnelles", href: "/dashboard/profil", color: "bg-status-info-bg" },
    { label: "Modifications", sub: "Modifier mes infos", href: "/dashboard/modifications", color: "bg-status-success-bg" },
    { label: "Centre de vote", sub: "Infos électorales", href: "/dashboard/centre-vote", color: "bg-slate-100" },
];

export default function DashboardPage() {
    const recentDocs = documents.slice(0, 3);
    const config = statusConfig[lastRequest.status];

    return (
        <div className="flex flex-col gap-6 mt-10">

            <div className="flex items-start justify-between">
                <div>
                    <h1 className="font-playfair text-[20px] md:text-[22px] font-semibold text-navy leading-tight">
                        Tableau de bord
                    </h1>
                    <p className="text-[13px] text-slate-600 mt-1">
                        Bienvenue, Dieudonne — votre espace citoyen ANIP
                    </p>
                </div>
                {/* Recherche — cachée sur mobile */}
                <div className="hidden md:flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-4 h-10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aab3c6" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Rechercher un service ou document…"
                        className="border-none outline-none text-[13px] text-navy placeholder:text-slate-400 bg-transparent w-56"
                    />
                </div>
            </div>

            <HeroBanner />
            <StatsRow />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                        <p className="text-[13px] font-semibold text-navy">Dernière demande</p>
                        <Link href="/dashboard/mes-demandes" className="text-[12px] text-gold font-medium">
                            Tout voir →
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-4">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`} />
                        <div className="flex-1">
                            <p className="text-[13px] font-medium text-navy">{lastRequest.name}</p>
                            <p className="text-[11px] text-slate-500 mt-[2px]">Demandé le {lastRequest.date}</p>
                        </div>
                        <span className={`text-[11px] font-medium px-3 py-1 rounded-full ${config.badge}`}>
                            {config.label}
                        </span>
                    </div>
                </div>

                {/* Documents récents */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                        <p className="text-[13px] font-semibold text-navy">Documents récents</p>
                        <Link href="/dashboard/mes-documents" className="text-[12px] text-gold font-medium">
                            Tout voir →
                        </Link>
                    </div>
                    {recentDocs.map((doc) => (
                        <div key={doc.id} className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 last:border-none">
                            <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center flex-shrink-0">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5d7e" strokeWidth="1.8">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[12px] font-medium text-navy truncate">{doc.name}</p>
                                <p className="text-[10px] text-slate-500">{doc.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Accès rapides */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100">
                        <p className="text-[13px] font-semibold text-navy">Accès rapides</p>
                    </div>
                    {quickAccess.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 last:border-none hover:bg-slate-50 transition-colors"
                        >
                            <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${item.color}`} />
                            <div>
                                <p className="text-[12px] font-medium text-navy">{item.label}</p>
                                <p className="text-[10px] text-slate-500">{item.sub}</p>
                            </div>
                            <p className="ml-auto text-slate-400">›</p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}