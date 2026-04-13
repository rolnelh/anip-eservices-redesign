import { services, type ServiceColor } from "@/lib/data/services";

const iconBg: Record<ServiceColor, string> = {
    gold: "bg-gold-light",
    blue: "bg-status-info-bg",
    slate: "bg-slate-100",
};

const iconStroke: Record<ServiceColor, string> = {
    gold: "#c9993a",
    blue: "#3a6fd8",
    slate: "#4a5d7e",
};

function ServiceIcon({ color }: { color: ServiceColor }) {
    const stroke = iconStroke[color];
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
    );
}

export default function ServicesGrid() {
    return (
        <div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`bg-white rounded-xl border px-5 py-5 cursor-pointer transition-all hover:-translate-y-[2px] hover:border-gold
              ${service.featured ? "border-gold/30" : "border-slate-200"}`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${iconBg[service.color]}`}>
                            <ServiceIcon color={service.color} />
                        </div>
                        <p className="text-[13px] font-semibold text-navy leading-snug mb-1">
                            {service.name}
                        </p>
                        <p className="text-[11px] text-slate-500 mb-3">
                            {service.type}
                        </p>
                        <div className="border-t border-slate-100 pt-3">
                            <p className="text-[13px] font-semibold text-navy">
                                {service.price !== null
                                    ? `${service.price.toLocaleString("fr-FR")} FCFA`
                                    : "Gratuit"}
                                {" "}
                                <span className="text-slate-500 font-normal text-[11px]">
                                    / {service.type.toLowerCase().includes("carte") ? "carte" : "document"}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}