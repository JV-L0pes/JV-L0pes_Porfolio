import { NextResponse } from "next/server";

const featureWorkPt = [
    {
        title: "aura-central-autou",
        description: "Monorepo da AutoU com domínios de projetos, CRM, recrutamento e identidade — DDD, monólito modular, React, TypeScript, NestJS e FastAPI em produção interna.",
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
        description: "AutoU monorepo covering projects, CRM, recruiting, and identity — DDD, modular monolith, React, TypeScript, NestJS, and FastAPI in internal production.",
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