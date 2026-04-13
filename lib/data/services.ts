export type ServiceColor = "gold" | "blue" | "slate";

export type Service = {
  id: string;
  name: string;
  type: string;
  price: number | null;
  color: ServiceColor;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "cni",
    name: "Carte d'identité nationale biométrique",
    type: "Pièce d'identité nationale",
    price: 6000,
    color: "gold",
    featured: true,
  },
  {
    id: "acte-naissance",
    name: "Acte de naissance",
    type: "Acte d'état civil",
    price: 1000,
    color: "blue",
  },
  {
    id: "cert-residence",
    name: "Certificat de résidence",
    type: "Certificat administratif",
    price: 2000,
    color: "slate",
  },
  {
    id: "cip",
    name: "Certificat d'identification personnelle",
    type: "Identification CIP",
    price: 1000,
    color: "gold",
  },
  {
    id: "acte-mariage",
    name: "Acte de mariage",
    type: "Acte d'état civil",
    price: 2000,
    color: "blue",
  },
  {
    id: "npi",
    name: "Certificat NPI / fID",
    type: "Numéro d'identification",
    price: null,
    color: "slate",
  },
  {
    id: "acte-naissance-mention",
    name: "Acte de naissance avec mention",
    type: "Acte d'état civil enrichi",
    price: 2000,
    color: "gold",
  },
  {
    id: "coutume-celibat",
    name: "Certificat de coutume et de célibat",
    type: "Certificat administratif",
    price: 2000,
    color: "blue",
  },
];
