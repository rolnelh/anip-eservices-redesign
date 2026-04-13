export type DocumentStatus = "disponible" | "telechargeable";

export type Document = {
  id: string;
  name: string;
  date: string;
  downloadsLeft?: number;
  status: DocumentStatus;
  beneficiary: string;
};

export const documents: Document[] = [
  {
    id: "cip-1",
    name: "Certificat d'Identification Personnelle",
    date: "31/07/2025",
    downloadsLeft: 4,
    status: "telechargeable",
    beneficiary: "Pour moi",
  },
  {
    id: "acte-naissance",
    name: "Acte de Naissance",
    date: "21/06/2025",
    downloadsLeft: 2,
    status: "telechargeable",
    beneficiary: "Pour moi",
  },
  {
    id: "npi-fid",
    name: "Certificat Numéro Personnel d'Identification / fID",
    date: "22/01/2026",
    status: "telechargeable",
    beneficiary: "Pour moi",
  },
  {
    id: "cni",
    name: "Carte d'identité Nationale Biométrique",
    date: "22/01/2026",
    status: "disponible",
    beneficiary: "Pour moi",
  },
  {
    id: "cip-2",
    name: "Certificat d'Identification Personnelle",
    date: "24/01/2025",
    downloadsLeft: 3,
    status: "telechargeable",
    beneficiary: "Pour moi",
  },
];
