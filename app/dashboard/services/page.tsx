import ServicesGrid from "@/components/dashboard/ServicesGrid";

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-6 mt-10">
            <div>
                <h1 className="font-playfair text-[22px] font-semibold text-navy leading-tight">
                    Nos services en ligne
                </h1>
                <p className="text-[13px] text-slate-600 mt-1">
                    Demandez vos documents officiels en quelques clics
                </p>
            </div>
            <ServicesGrid />
        </div>
    );
}