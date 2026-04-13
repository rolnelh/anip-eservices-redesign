import Link from "next/link";

const modifications = [
    {
        id: "numero",
        title: "Mon numéro",
        description: "Modifier votre numéro de téléphone enregistré lors du RAVIP",
        href: "/dashboard/modifications/numero",
        color: "bg-gold-light",
        iconColor: "#c9993a",
    },
    {
        id: "numero-enfant",
        title: "Numéro enfant",
        description: "Modifier le numéro de téléphone associé à un enfant",
        href: "/dashboard/modifications/numero-enfant",
        color: "bg-status-info-bg",
        iconColor: "#2a52a3",
    },
    {
        id: "photo",
        title: "Ma photo",
        description: "Mettre à jour votre photo d'identité sur le registre ANIP",
        href: "/dashboard/modifications/photo",
        color: "bg-status-success-bg",
        iconColor: "#2d8a4e",
    },
    {
        id: "donnees",
        title: "Mes données",
        description: "Demander une correction sur vos données d'identification",
        href: "/dashboard/modifications/donnees",
        color: "bg-slate-100",
        iconColor: "#4a5d7e",
    },
];

const icons: Record<string, JSX.Element> = {
    numero: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    "numero-enfant": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    photo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
        </svg>
    ),
    donnees: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
    ),
};

export default function ModificationsPage() {
    return (
        <div className="flex flex-col gap-6 mt-10">

            <div>
                <h1 className="font-playfair text-[22px] font-semibold text-navy leading-tight">
                    Modifications
                </h1>
                <p className="text-[13px] text-slate-600 mt-1">
                    Que souhaitez-vous modifier sur votre profil ?
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modifications.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-4 hover:border-gold hover:-translate-y-[2px] transition-all"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                            style={{ color: item.iconColor }}>
                            {icons[item.id]}
                        </div>
                        <div>
                            <p className="text-[15px] font-semibold text-navy">{item.title}</p>
                            <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-gold text-[12px] font-medium mt-auto">
                            Modifier <span>→</span>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}