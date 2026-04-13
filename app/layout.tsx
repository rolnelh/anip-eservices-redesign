import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorkerRegister from "@/components/ui/ServiceWorkerRegister";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ANIP — E-Services | République du Bénin",
  description: "Plateforme officielle des services d'identification des personnes",
  manifest: "/manifest.json",
  themeColor: "#0d1b35",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ANIP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans bg-slate-50 text-navy">
        {children}
        <Analytics />
        <ServiceWorkerRegister />


      </body>
    </html>
  );
}