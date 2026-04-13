import DocumentCard from "@/components/documents/DocumentCard";
import { documents } from "@/lib/data/documents";

export default function MesDocumentsPage() {
    return (
        <div className="flex flex-col gap-6 mt-10">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <h1 className="font-playfair text-[20px] md:text-[22px] font-semibold text-navy leading-tight">
                        Mes documents
                    </h1>
                    <p className="text-[13px] text-slate-600 mt-1">
                        Retrouvez et téléchargez vos documents officiels
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-[13px] font-medium px-5 py-2.5 rounded-lg transition-colors w-full sm:w-auto justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                    Récupérer un document
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map((doc) => (
                    <DocumentCard key={doc.id} doc={doc} />
                ))}
            </div>

        </div>
    );
}