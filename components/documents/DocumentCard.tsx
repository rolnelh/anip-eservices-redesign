import { type Document } from "@/lib/data/documents";

export default function DocumentCard({ doc }: { doc: Document }) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between gap-4">

            <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5d7e" strokeWidth="1.8">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[13px] font-semibold text-navy leading-snug">
                        {doc.name}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {doc.date}
                    </div>

                    {doc.downloadsLeft !== undefined && (
                        <div className="flex items-center gap-1 text-[11px] text-slate-500">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            Téléchargements restants: <strong>{doc.downloadsLeft}</strong>
                        </div>
                    )}

                    {doc.status === "disponible" && (
                        <span className="mt-1 w-fit text-[10px] font-semibold uppercase tracking-wider bg-status-success text-white px-2 py-[3px] rounded">
                            Disponible
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <p className="text-[12px] text-slate-500">{doc.beneficiary}</p>
                {doc.status === "disponible" ? (
                    <button className="bg-gold hover:bg-gold-hover text-white text-[12px] font-medium px-4 py-2 rounded-lg transition-colors">
                        Informations
                    </button>
                ) : (
                    <button className="bg-gold hover:bg-gold-hover text-white text-[12px] font-medium px-4 py-2 rounded-lg transition-colors">
                        Télécharger ↓
                    </button>
                )}
            </div>

        </div>
    );
}