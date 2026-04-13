"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/Topbar";

const FAKE_NPI = "7036105351";
const FAKE_PHONE = "01 40 91 10 50";

export default function LoginPage() {
    const router = useRouter();
    const [step, setStep] = useState<1 | 2>(1);
    const [npi, setNpi] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    function handleNpi() {
        if (npi === FAKE_NPI) {
            setError("");
            setStep(2);
        } else {
            setError("NPI introuvable. Vérifiez votre numéro.");
        }
    }

    function handlePhone() {
        if (phone.replace(/\s/g, "") === FAKE_PHONE.replace(/\s/g, "")) {
            setError("");
            router.push("/dashboard");
        } else {
            setError("Numéro de téléphone incorrect.");
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Topbar />

            <div className="flex-1 flex items-center justify-center px-4 mt-[63px]">
                <div className="w-full max-w-md">

                    <div className="bg-white rounded-2xl border border-slate-200 p-10 flex flex-col items-center gap-6">

                        {/* Icône */}
                        <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>

                        {/* Stepper */}
                        <div className="flex items-center gap-3 w-full justify-center">
                            <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all
                  ${step === 1 ? "bg-navy text-white" : "bg-status-success text-white"}`}>
                                    {step === 2 ? "✓" : "1"}
                                </div>
                                <span className={`text-[12px] font-medium ${step === 1 ? "text-navy" : "text-status-success"}`}>
                                    Identifiant
                                </span>
                            </div>
                            <div className="flex-1 h-px bg-slate-200 max-w-[40px]" />
                            <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all
                  ${step === 2 ? "bg-navy text-white" : "bg-slate-200 text-slate-400"}`}>
                                    2
                                </div>
                                <span className={`text-[12px] font-medium ${step === 2 ? "text-navy" : "text-slate-400"}`}>
                                    Vérification
                                </span>
                            </div>
                        </div>

                        {/* Étape 1 — NPI */}
                        {step === 1 && (
                            <div className="w-full flex flex-col gap-4">
                                <div className="text-center">
                                    <h1 className="font-playfair text-[20px] font-semibold text-navy">
                                        Votre NPI
                                    </h1>
                                    <p className="text-[13px] text-slate-500 mt-1">
                                        Saisissez votre Numéro Personnel d'Identification
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-medium text-slate-600 uppercase tracking-wider">
                                        NPI
                                    </label>
                                    <input
                                        type="text"
                                        value={npi}
                                        onChange={(e) => { setNpi(e.target.value); setError(""); }}
                                        placeholder="Ex: 7036105351"
                                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[13px] text-navy placeholder:text-slate-400 outline-none focus:border-gold transition-all"
                                    />
                                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                                    <p className="text-[11px] text-slate-400">
                                        Votre NPI figure sur votre certificat d'identification ou votre acte de naissance.
                                    </p>
                                </div>

                                <button
                                    onClick={handleNpi}
                                    className="w-full bg-gold hover:bg-gold-hover text-white font-medium text-[14px] py-3 rounded-lg transition-colors"
                                >
                                    Continuer →
                                </button>

                                <p className="text-center text-[12px] text-slate-500">
                                    Vous ne connaissez pas votre NPI ?{" "}
                                    <a href="#" className="text-gold font-medium hover:underline">
                                        Retrouvez-le ici
                                    </a>
                                </p>
                            </div>
                        )}

                        {/* Étape 2 — Téléphone */}
                        {step === 2 && (
                            <div className="w-full flex flex-col gap-4">
                                <div className="text-center">
                                    <h1 className="font-playfair text-[20px] font-semibold text-navy">
                                        Vérification
                                    </h1>
                                    <p className="text-[13px] text-slate-500 mt-1">
                                        Confirmez avec votre numéro de téléphone
                                    </p>
                                </div>

                                {/* NPI confirmé */}
                                <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">NPI saisi</p>
                                        <p className="text-[13px] font-semibold text-navy mt-[2px]">{npi}</p>
                                    </div>
                                    <button
                                        onClick={() => { setStep(1); setError(""); }}
                                        className="text-[11px] text-gold font-medium hover:underline"
                                    >
                                        Modifier
                                    </button>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-medium text-slate-600 uppercase tracking-wider">
                                        Numéro de téléphone
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-3 text-[13px] text-navy bg-slate-50 flex-shrink-0">
                                            🇧🇯 +229
                                        </div>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => { setPhone(e.target.value); setError(""); }}
                                            placeholder="01 40 91 10 50"
                                            className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-[13px] text-navy placeholder:text-slate-400 outline-none focus:border-gold transition-all"
                                        />
                                    </div>
                                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                                    <p className="text-[11px] text-slate-400">
                                        Numéro enregistré lors de votre enrôlement RAVIP.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => { setStep(1); setError(""); }}
                                        className="border border-slate-200 text-slate-500 font-medium text-[13px] px-5 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                                    >
                                        ← Retour
                                    </button>
                                    <button
                                        onClick={handlePhone}
                                        className="flex-1 bg-gold hover:bg-gold-hover text-white font-medium text-[14px] py-3 rounded-lg transition-colors"
                                    >
                                        Valider →
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                    <p className="text-center text-[11px] text-slate-400 mt-6">
                        Plateforme officielle · République du Bénin · © 2025 ANIP
                    </p>

                </div>
            </div>
        </div>
    );
}