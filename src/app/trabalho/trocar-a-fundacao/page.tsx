import type { Metadata } from "next";
import CaseArticle from "@/features/case/case-article";

export const metadata: Metadata = {
  title: "Trocar a fundação de um sistema em uso diário · João Victor Lopes Rosa",
  description:
    "Estudo de caso: reconstruir um CRM em uso diário como serviço dedicado, com ETL de migração e contrato de API declarado por schema, sem derrubar quem dependia do sistema.",
  robots: "index, follow, noai, noimageai",
};

export default function Page() {
  return <CaseArticle />;
}
