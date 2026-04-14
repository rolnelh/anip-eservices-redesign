import { profil } from "@/lib/data/profil";

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-none">
            <span className="text-[13px] text-slate-500">{label}</span>
            <span className="text-[13px] font-semibold text-navy">{value}</span>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                    {title}
                </p>
            </div>
            <div className="px-6">
                {children}
            </div>
        </div>
    );
}

export default function ProfilPage() {
    const { identite, naissance, residences, filiation } = profil;

    return (
        <div className="flex flex-col gap-6 mt-10">

            <div className="flex items-start justify-between">
                <div>
                    <h1 className="font-playfair text-[22px] font-semibold text-navy leading-tight">
                        Mon Profil
                    </h1>
                    <p className="text-[13px] text-slate-600 mt-1">
                        Vos données d'identification personnelle
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-[13px] font-medium px-5 py-2.5 rounded-lg transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Demander des modifications
                </button>
            </div>

            <div className="bg-navy rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 border-l-4 border-gold">

                <div className="relative shrink-0">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-50 border-[3px] border-white shadow-md overflow-hidden ring-2 ring-[#EF9F27]/20">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <p className="text-white font-playfair text-[18px] md:text-[20px] font-semibold">
                        {identite.prenoms} {identite.nom}
                    </p>
                    <p className="text-slate-400 text-[13px] mt-1">
                        NPI · <span className="text-gold font-semibold">{identite.npi}</span>
                    </p>
                    <p className="text-slate-500 text-[12px] mt-1">
                        {identite.nationalite} · Né(e) le {identite.dateNaissance}
                    </p>
                </div>

                <div className="sm:ml-auto w-full sm:w-auto">
                    <label className="cursor-pointer flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium px-4 py-2 rounded-lg transition-colors w-full sm:w-auto">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        Changer la photo
                        <input type="file" accept="image/*" className="hidden" />
                    </label>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Section title="Identité">
                    <Row label="Nom" value={identite.nom} />
                    <Row label="Prénom(s)" value={identite.prenoms} />
                    <Row label="Sexe" value={identite.sexe} />
                    <Row label="Date de naissance" value={identite.dateNaissance} />
                    <Row label="Téléphone" value={identite.telephone} />
                    <Row label="Email" value={identite.email} />
                    <Row label="Nationalité" value={identite.nationalite} />
                    <Row label="Profession" value={identite.profession} />
                </Section>

                <Section title="Naissance">
                    <Row label="Pays" value={naissance.pays} />
                    <Row label="Département" value={naissance.departement} />
                    <Row label="Commune" value={naissance.commune} />
                    <Row label="Arrondissement" value={naissance.arrondissement} />
                    <Row label="Village / Quartier" value={naissance.villageQuartier} />
                    <Row label="Lieu de naissance" value={naissance.lieuNaissance} />
                </Section>

                <Section title="Résidence principale">
                    <Row label="Pays" value={residences.principale.pays} />
                    <Row label="Département" value={residences.principale.departement} />
                    <Row label="Commune" value={residences.principale.commune} />
                    <Row label="Arrondissement" value={residences.principale.arrondissement} />
                    <Row label="Village / Quartier" value={residences.principale.villageQuartier} />
                    <Row label="Lieu de résidence" value={residences.principale.lieuResidence} />
                </Section>

                <Section title="Filiation">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 pt-3 pb-1">
                        Père
                    </p>
                    <Row label="Nom" value={filiation.pere.nom} />
                    <Row label="Prénom(s)" value={filiation.pere.prenoms} />
                    <Row label="Date de naissance" value={filiation.pere.dateNaissance} />
                    <Row label="Profession" value={filiation.pere.profession} />
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 pt-4 pb-1">
                        Mère
                    </p>
                    <Row label="Nom" value={filiation.mere.nom} />
                    <Row label="Prénom(s)" value={filiation.mere.prenoms} />
                    <Row label="Date de naissance" value={filiation.mere.dateNaissance} />
                    <Row label="Profession" value={filiation.mere.profession} />
                </Section>

            </div>
        </div>
    );
}