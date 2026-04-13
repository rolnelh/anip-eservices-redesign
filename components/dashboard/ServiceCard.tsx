import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    category: string;
    price: string;
    unit: string;
    icon: LucideIcon;
    iconBg: string;
    borderColor?: string;
}

export default function ServiceCard({ title, category, price, unit, icon: Icon, iconBg, borderColor }: ServiceCardProps) {
    return (
        <div className={`bg-white p-6 rounded-2xl border ${borderColor || 'border-slate-100'} shadow-sm hover:shadow-md transition-all cursor-pointer group`}>
            <div className={`${iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-5 h-5 opacity-80" />
            </div>

            <h4 className="text-[14px] font-bold text-slate-900 mb-1 group-hover:text-anip-gold transition-colors">{title}</h4>
            <p className="text-[11px] text-slate-400 mb-6">{category}</p>

            <div className="pt-4 border-t border-slate-50 flex items-baseline gap-1">
                <span className="text-[13px] font-bold text-slate-900">{price}</span>
                <span className="text-[11px] text-slate-400">/ {unit}</span>
            </div>
        </div>
    );
}