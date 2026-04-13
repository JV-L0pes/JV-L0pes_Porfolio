import { NextResponse } from "next/server";

const experienceDataPt = [
    {
        icon: "/images/icon/experience-internal-product.svg",
        role: "Estagiário Full Stack - AutoU",
        location: "Brasil",
        startYear: "Dez 2025",
        endYear: "Atual",
        bulletPoints: [
            "Atuação em monorepo orientado a DDD no projeto aura-central-autou",
            "Implementação de SSO com Azure AD e integrações com Jira",
            "Desenvolvimento de interfaces React e serviços FastAPI para uso interno"
        ]
    },
    {
        icon: "/images/icon/experience-automation.svg",
        role: "Estagiário de Desenvolvimento - AllTechBR",
        location: "Brasil",
        startYear: "Jul 2025",
        endYear: "Dez 2025",
        bulletPoints: [
            "Criação de aplicações web e automações com n8n",
            "Desenvolvimento de APIs e fluxos de processamento de dados",
            "Projetos com IA, YOLOv5/YOLOv8 e visão computacional"
        ]
    },
    {
        icon: "/images/icon/experience-agile.svg",
        role: "Scrum Master e Dev - FATEC Jacareí (ABP)",
        location: "Jacareí, SP",
        startYear: "2025",
        endYear: "Atual",
        bulletPoints: [
            "Condução de cerimônias Scrum e organização de backlog",
            "Entrega de projetos acadêmicos em equipe multidisciplinar",
            "Atuação full stack em frontend, backend e documentação"
        ]
    },
]

const experienceDataEn = [
    {
        icon: "/images/icon/experience-internal-product.svg",
        role: "Full Stack Intern - AutoU",
        location: "Brazil",
        startYear: "Dec 2025",
        endYear: "Present",
        bulletPoints: [
            "Working in a DDD-oriented monorepo on the aura-central-autou project",
            "Implemented Azure AD SSO and Jira integrations",
            "Built React interfaces and FastAPI services for internal product flows"
        ]
    },
    {
        icon: "/images/icon/experience-automation.svg",
        role: "Software Development Intern - AllTechBR",
        location: "Brazil",
        startYear: "Jul 2025",
        endYear: "Dec 2025",
        bulletPoints: [
            "Built web applications and automations with n8n",
            "Developed APIs and data-processing pipelines",
            "Delivered AI projects with YOLOv5/YOLOv8 and computer vision"
        ]
    },
    {
        icon: "/images/icon/experience-agile.svg",
        role: "Scrum Master and Developer - FATEC Jacareí (ABP)",
        location: "Jacareí, SP",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Led Scrum ceremonies and backlog organization",
            "Delivered academic projects in multidisciplinary teams",
            "Contributed across frontend, backend, and documentation"
        ]
    },
]

const educationDataPt = [
    {
        date: "2025 - 2027",
        title: "Tecnologia em Desenvolvimento de Software Multiplataforma",
        subtitle: "FATEC Jacareí — Cursando"
    }
];

const educationDataEn = [
    {
        date: "2025 - 2027",
        title: "Multiplatform Software Development",
        subtitle: "FATEC Jacareí — Currently attending"
    }
];


const projectOverviewPt = {
    caseStudies: [
        {
            name: "aura-central-autou",
            url: "https://github.com/appautou/aura-central-autou",
            description:
                "Monorepo da AutoU com domínios de projetos, CRM, recrutamento e identidade — stack React, TypeScript, Node e FastAPI em produção interna.",
        },
        {
            name: "ArchFlow MVP",
            url: "https://github.com/ArchFlowPlatform/ArchFlow",
            description:
                "Gestão ágil orientada a arquitetura: ADRs versionados, C4, ERD com geração de SQL/migrations e rastreabilidade do requisito ao deploy — Scrumban e foco em DX.",
        },
    ],
    sideProjects: [
        {
            name: "Inbox-Copilot",
            url: "https://github.com/JV-L0pes/Inbox-Copilot",
            description:
                "Triagem de e-mails com IA, anexos e histórico de análises — stack Next.js, TypeScript, FastAPI e OpenAI.",
        },
        {
            name: "ABP3 - Sistema de Gestão de Leads",
            url: "https://github.com/ErrorSquad-ABP/ABP3-Sistema-Gestao-Leads",
            description:
                "Projeto acadêmico em squad (DSM): dashboards e fluxo de leads com entrega colaborativa e práticas ágeis.",
        },
        {
            name: "pr-review-slack-relay",
            url: "https://github.com/JV-L0pes/pr-review-slack-relay",
            description:
                "Microserviço que encaminha eventos de revisão de PR para o Slack — útil para times que querem notificações centralizadas.",
        },
    ],
};

const projectOverviewEn = {
    caseStudies: [
        {
            name: "aura-central-autou",
            url: "https://github.com/appautou/aura-central-autou",
            description:
                "AutoU monorepo spanning projects, CRM, recruiting, and identity — React, TypeScript, Node, and FastAPI powering internal product flows.",
        },
        {
            name: "ArchFlow MVP",
            url: "https://github.com/ArchFlowPlatform/ArchFlow",
            description:
                "Architecture-first agile product: versioned ADRs, C4 diagrams, ERD with SQL/migration generation, and traceability from idea to deploy — Scrumban and strong developer UX.",
        },
    ],
    sideProjects: [
        {
            name: "Inbox-Copilot",
            url: "https://github.com/JV-L0pes/Inbox-Copilot",
            description:
                "AI-assisted email triage with attachments and analysis history — Next.js, TypeScript, FastAPI, and OpenAI.",
        },
        {
            name: "ABP3 - Lead Management Platform",
            url: "https://github.com/ErrorSquad-ABP/ABP3-Sistema-Gestao-Leads",
            description:
                "Academic squad project (DSM): lead pipelines and dashboards built collaboratively with agile practices.",
        },
        {
            name: "pr-review-slack-relay",
            url: "https://github.com/JV-L0pes/pr-review-slack-relay",
            description:
                "Microservice that forwards PR review events to Slack for teams that want centralized notifications.",
        },
    ],
};


export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") === "en" ? "en" : "pt";

    return NextResponse.json({
        experienceData: lang === "en" ? experienceDataEn : experienceDataPt,
        educationData: lang === "en" ? educationDataEn : educationDataPt,
        projectOverview: lang === "en" ? projectOverviewEn : projectOverviewPt
    });
};