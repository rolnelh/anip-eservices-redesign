"use client";

import { useState } from "react";
import Link from "next/link";

const operateurs = [
    { id: "mtn", label: "MTN", color: "bg-yellow-400", text: "text-yellow-900" },
    { id: "moov", label: "MOOV", color: "bg-orange-500", text: "text-white" },
    { id: "celtiis", label: "CELTIIS", color: "bg-blue-600", text: "text-white" },
];

export default function ModifierNumeroPage() {
    const [operateur, setOperateur] = useState("");
    const [numero, setNumero] = useState("");
    const [success, setSuccess] = useState(false);

    function handleSubmit() {
        if (operateur && numero.length >= 8) {
            setSuccess(true);
        }
    }

    return (
        <div className="flex flex-col gap-6 mt-10">

            <div className="flex items-center gap-3">
                <Link
                    href="/dashboard/modifications"
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5d7e" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </Link>
                <div>
                    <h1 className="font-playfair text-[22px] font-semibold text-navy leading-tight">
                        Modifier mon numéro
                    </h1>
                    <p className="text-[13px] text-slate-600 mt-1">
                        Mettez à jour votre numéro de téléphone enregistré
                    </p>
                </div>
            </div>

            <div className="w-full md:max-w-lg">
                {success ? (
                    <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col items-center gap-4 text-center">
                        <div className="w-14 h-14 rounded-full bg-status-success-bg flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d8a4e" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h2 className="font-playfair text-[18px] font-semibold text-navy">
                            Demande envoyée
                        </h2>
                        <p className="text-[13px] text-slate-500">
                            Votre demande de modification a été soumise avec succès. Elle sera traitée dans les plus brefs délais.
                        </p>
                        <Link
                            href="/dashboard/modifications"
                            className="mt-2 bg-gold hover:bg-gold-hover text-white text-[13px] font-medium px-6 py-2.5 rounded-lg transition-colors"
                        >
                            Retour aux modifications
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-6">

                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                                Votre opérateur
                            </label>
                            <div className="flex gap-3">
                                {operateurs.map((op) => (
                                    <button
                                        key={op.id}
                                        onClick={() => setOperateur(op.id)}
                                        className={`flex-1 py-3 rounded-lg font-semibold text-[13px] border-2 transition-all
                      ${operateur === op.id
                                                ? "border-gold " + op.color + " " + op.text
                                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                                            }`}
                                    >
                                        {op.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                                Nouveau numéro de téléphone
                            </label>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-3 text-[13px] text-navy bg-slate-50 flex-shrink-0">
                                    🇧🇯 +229
                                </div>
                                <input
                                    type="tel"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    placeholder="XX XX XX XX"
                                    className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-[13px] text-navy placeholder:text-slate-400 outline-none focus:border-gold transition-all"
                                />
                            </div>
                            <p className="text-[11px] text-slate-400">
                                Ce numéro remplacera celui enregistré lors de votre enrôlement RAVIP.
                            </p>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gold hover:bg-gold-hover text-white font-medium text-[14px] py-3 rounded-lg transition-colors"
                        >
                            Valider la modification
                        </button>

                    </div>
                )}
            </div>
        </div>
    );
}