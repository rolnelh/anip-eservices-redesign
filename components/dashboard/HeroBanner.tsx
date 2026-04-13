export default function HeroBanner() {
    return (
        <div className="bg-navy rounded-xl px-6 md:px-8 py-6 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-4 border-gold relative overflow-hidden">

            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-gold/5 pointer-events-none" />
            <div className="absolute right-10 -bottom-14 w-40 h-40 rounded-full bg-gold/[0.03] pointer-events-none" />

            <div className="relative z-10">
                <h2 className="font-playfair text-[18px] md:text-[20px] font-semibold text-white leading-snug">
                    Obtenez vos documents officiels <br className="hidden md:block" /> en quelques minutes
                </h2>
                <p className="text-slate-500 text-[12px] md:text-[13px] mt-2 max-w-lg leading-relaxed">
                    Actes d'état civil, certificats d'identification, carte biométrique —
                    démarchez 100% en ligne, sécurisé et reconnu par l'État béninois.
                </p>
            </div>

            <button className="relative z-10 flex-shrink-0 w-full md:w-auto bg-gold hover:bg-gold-hover text-white text-[13px] font-medium px-6 py-3 rounded-lg transition-colors tracking-wide">
                Nouvelle demande →
            </button>

        </div>
    );
}