const requests = [
    {
        id: 1,
        name: "Acte de naissance",
        date: "02 avr. 2026",
        status: "done" as const,
    },
    {
        id: 2,
        name: "Carte d'identité biométrique",
        date: "07 avr. 2026",
        status: "processing" as const,
    },
    {
        id: 3,
        name: "Certificat de résidence",
        date: "08 avr. 2026",
        status: "pending" as const,
    },
];

const quickActions = [
    {
        id: 1,
        label: "Retrouver mon NPI",
        sub: "Via RAVIP ou état civil",
        color: "gold",
    },
    {
        id: 2,
        label: "Vérifier un document",
        sub: "Authenticité via QR code",
        color: "blue",
    },
    {
        id: 3,
        label: "Suivre une demande",
        sub: "Via numéro de reçu",
        color: "green",
    },
    {
        id: 4,
        label: "Contacter le support",
        sub: "7054 · WhatsApp · Email",
        color: "slate",
    },
];

const statusConfig = {
    done: {
        dot: "bg-status-success",
        badge: "bg-status-success-bg text-status-success",
        label: "Livré",
    },
    processing: {
        dot: "bg-status-info",
        badge: "bg-status-info-bg text-status-info",
        label: "En traitement",
    },
    pending: {
        dot: "bg-gold",
        badge: "bg-gold-light text-gold",
        label: "En attente",
    },
};

const actionIconBg: Record<string, string> = {
    gold: "bg-gold-light",
    blue: "bg-status-info-bg",
    green: "bg-status-success-bg",
    slate: "bg-slate-100",
};

export default function BottomGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-4">

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                    <p className="text-[13px] font-semibold text-navy">Mes dernières demandes</p>
                    <p className="text-[12px] text-gold font-medium cursor-pointer">Tout voir →</p>
                </div>

                <div className="flex border-b border-slate-100 px-5">
                    {["Toutes", "En cours", "Livrées"].map((tab, i) => (
                        <div
                            key={tab}
                            className={`text-[12px] font-medium py-3 px-4 cursor-pointer border-b-2 -mb-px
                ${i === 0
                                    ? "text-navy border-gold"
                                    : "text-slate-500 border-transparent hover:text-navy"
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {requests.map((req) => {
                    const config = statusConfig[req.status];
                    return (
                        <div
                            key={req.id}
                            className="flex items-center gap-4 px-5 py-4 border-b border-slate-50 last:border-none"
                        >
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`} />
                            <div className="flex-1">
                                <p className="text-[13px] font-medium text-navy">{req.name}</p>
                                <p className="text-[11px] text-slate-500 mt-[2px]">Demandé le {req.date}</p>
                            </div>
                            <span className={`text-[11px] font-medium px-3 py-1 rounded-full ${config.badge}`}>
                                {config.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                    <p className="text-[13px] font-semibold text-navy">Actions rapides</p>
                </div>
                {quickActions.map((action) => (
                    <div
                        key={action.id}
                        className="flex items-center gap-3 px-5 py-4 border-b border-slate-50 last:border-none cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${actionIconBg[action.color]}`}>
                            <div className="w-2 h-2 rounded-full bg-slate-400" />
                        </div>
                        <div>
                            <p className="text-[13px] font-medium text-navy">{action.label}</p>
                            <p className="text-[11px] text-slate-500 mt-[1px]">{action.sub}</p>
                        </div>
                        <p className="ml-auto text-slate-400 text-[16px]">›</p>
                    </div>
                ))}
            </div>

        </div>
    );
}