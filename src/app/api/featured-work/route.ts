import { NextResponse } from "next/server";

const featureWorkPt = [
    {
        title: "aura-central-autou",
        description: "Monorepo profissional com módulos de projetos, CRM, recrutamento, identidade e desempenho em ambiente real — interfaces React, APIs e integrações para uso interno.",
        roles: ["React", "TypeScript", "Node.js", "FastAPI"],
        image: "/images/feature-work/feature-img-1.png",
        url: "https://github.com/appautou/aura-central-autou",
    },
    {
        title: "ArchFlow MVP - Architecture-First Project Management",
        description: "A única ferramenta ágil que coloca arquitetura no centro: ADRs, diagramas C4, schema de banco e rastreabilidade ponta a ponta, além de Scrumban e fluxo pensado para desenvolvedores.",
        roles: [".NET", "Next.js", "TypeScript", "PostgreSQL"],
        image: "/images/feature-work/feature-img-2.png",
        url: "https://github.com/ArchFlowPlatform/ArchFlow",
    }
]

const featureWorkEn = [
    {
        title: "aura-central-autou",
        description: "Professional monorepo covering projects, CRM, recruiting, identity, and performance in a real internal product — React UIs, APIs, and integrations.",
        roles: ["React", "TypeScript", "Node.js", "FastAPI"],
        image: "/images/feature-work/feature-img-1.png",
        url: "https://github.com/appautou/aura-central-autou",
    },
    {
        title: "ArchFlow MVP - Architecture-First Project Management",
        description: "Agile tooling that treats architecture as a first-class citizen: ADRs, C4 diagrams, database schema, end-to-end traceability, Scrumban, and a developer-first workflow.",
        roles: [".NET", "Next.js", "TypeScript", "PostgreSQL"],
        image: "/images/feature-work/feature-img-2.png",
        url: "https://github.com/ArchFlowPlatform/ArchFlow",
    }
]

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") === "en" ? "en" : "pt";

    return NextResponse.json({
        featureWork: lang === "en" ? featureWorkEn : featureWorkPt
    });
};