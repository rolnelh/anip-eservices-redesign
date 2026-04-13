const stats = [
    {
        label: "Citoyens enrôlés",
        value: "10,2M",
        sub: "RAVIP complet",
        highlight: true,
    },
    {
        label: "Documents délivrés",
        value: "3,4M",
        sub: "Depuis 2020",
        highlight: false,
    },
    {
        label: "Vos demandes actives",
        value: "2",
        sub: "Dont 1 en cours",
        highlight: false,
    },
    {
        label: "NPI vérifié",
        value: "✓ Confirmé",
        sub: "7200 1985 40221",
        highlight: false,
        isStatus: true,
    },
];

export default function StatsRow() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-slate-200 px-5 py-5"
                >
                    <p className="text-[11px] font-medium uppercase tracking-[0.07em] text-slate-500">
                        {stat.label}
                    </p>
                    <p
                        className={`font-semibold mt-2 leading-none
              ${stat.isStatus
                                ? "text-status-success text-[14px] mt-3"
                                : "text-navy text-[26px]"
                            }`}
                    >
                        {stat.value}
                    </p>
                    <p className="text-[11px] text-slate-600 mt-2">
                        {stat.highlight ? (
                            <span className="text-status-success font-medium">↑ {stat.sub}</span>
                        ) : (
                            stat.sub
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
}