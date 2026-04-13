import Link from "next/link";

export default function Topbar() {
  return (
    <div className="bg-navy flex items-center justify-between px-7 h-[65px] border-b-2 border-gold">

      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-gold rounded-md flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.5 2 5.5 4.5 5 8H3l3 4-3 4h2c.5 3.5 3.5 6 7 6s6.5-2.5 7-6h2l-3-4 3-4h-2c-.5-3.5-3.5-6-7-6zm0 2c2.8 0 5 2.2 5 5v6c0 2.8-2.2 5-5 5s-5-2.2-5-5V9c0-2.8 2.2-5 5-5zm-1 4v2H9v2h2v2h2v-2h2v-2h-2V8h-2z" />
          </svg>
        </div>
        <div>
          <p className="text-white font-semibold text-[15px] tracking-wide">
            ANIP — E-Services
          </p>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">
            République du Bénin · Présidence de la République
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
          Centre de vote
        </button>
        <button className="text-white text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
          Vérifier un document
        </button>
        <button className="text-white text-[12px] font-medium uppercase tracking-wider hover:text-white transition-colors">
          Services et coûts
        </button>
        <Link
          href="/login"
          className="bg-gold hover:bg-gold-hover text-white text-[12px] font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-colors"
        >
          Accéder à mon espace
        </Link>
      </div>

    </div>
  );
}