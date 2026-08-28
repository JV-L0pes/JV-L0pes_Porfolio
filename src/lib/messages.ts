export type Language = "pt" | "en";

/**
 * Fonte unica de texto do site. Substitui o dicionario por innerHTML do
 * rascunho: aqui a chave e semantica e o TypeScript garante que os dois
 * idiomas tenham exatamente o mesmo conjunto.
 *
 * Conteudo descaracterizado: sem nome de empresa, produto ou cliente.
 */
const pt = {
  // navegacao
  navWork: "Trabalho",
  navExperience: "Experiência",
  navContact: "Contato",
  langLabel: "Idioma",
  themeToLight: "Ativar tema claro",
  themeToDark: "Ativar tema escuro",
  home: "Início",

  // hero
  role: "Desenvolvedor Full Stack",
  location: "Jacareí, Brasil",
  railBase: "Base",
  railToday: "Hoje",
  railTodayValue: "Principal desenvolvedor de plataforma interna",
  railOpen: "Aberto a",
  railOpenValue: "Conversas sobre produto, arquitetura e plataformas internas",
  lede:
    "Construo a plataforma interna que uma consultoria de tecnologia usa todo dia para tocar projetos, vendas, recrutamento e desempenho. Meu trabalho é decidir a arquitetura, justificar o tradeoff antes de codar e entregar sem derrubar quem depende do sistema.",
  ledeStrong1: "decidir a arquitetura, justificar o tradeoff antes de codar",
  ctaContact: "Entrar em contato",
  railReach: "Contato",
  ctaWork: "Ver o trabalho",
  portraitAlt: "Retrato de João Victor Lopes Rosa",

  // secoes
  work: "Trabalho",
  experience: "Experiência",
  professional: "Profissional",
  internshipSince: "Estágio · desde 2025",
  underNda: "Sob confidencialidade",
  ndaNote: "Código fechado. O que dá para mostrar é a decisão e o que ela mudou.",
  academic: "Acadêmico",
  fatec: "FATEC Jacareí · DSM",
  personal: "Pessoal",
  openSource: "Open source",
  production: "Em produção",
  live: "Acesso público",
  privateLabel: "Sem link público",
  open: "Abrir",
  moreProjects: "Mais projetos",
  moreInpe: "Visualização de dados coletados pelo INPE com UFRJ e Furnas, para estudo de balanço de carbono",
  moreArchflow: "Gestão ágil orientada a arquitetura: ADRs versionados, diagramas C4 e rastreabilidade",
  moreInbox: "Triagem de e-mail com LLM em contratos estruturados por JSON Schema",
  moreAnka: "Gestão de carteiras de investimento com Fastify, Prisma e Next.js",
  moreRelay: "Microserviço que leva review de pull request para onde a conversa já acontece",
  moreBurndown: "Burndown integrado ao Trello, com velocidade de equipe e indicadores",
  moreArsenal: "Catálogo local-first de inventário, sem conta e sem telemetria",

  // caso profissional
  caseTitle: "Trocar a fundação de um sistema em uso diário",
  caseIntro:
    "Plataforma interna de uma consultoria de tecnologia, em uso diário por toda a empresa. Atuo como principal desenvolvedor. Abaixo, uma decisão que tomamos em equipe e da qual participei do começo ao fim, porque ela resume como eu trabalho.",
  caseProblemLabel: "O problema.",
  caseProblem:
    "O CRM era usado todo dia, mas boa parte das funções existia no papel e não na prática, porque a fundação não sustentava o que o produto pedia. Vivia fora da plataforma que a empresa já abria todo dia, e a base acumulada estava suja. Reescrever com o sistema no ar é mais delicado que partir do zero.",
  caseDecisionLabel: "A decisão.",
  caseDecision:
    "Decidimos reconstruir do zero como serviço dedicado dentro do ecossistema, em vez de remendar por partes. Mesmo banco da plataforma, schema separado, e autorização delegada ao serviço que já existia em vez de duplicar regra de acesso.",
  caseCostLabel: "O que custou.",
  caseCost:
    "Reescrever e migrar em paralelo, um serviço a mais para operar, e um contrato de API que precisou ser refeito: a primeira versão ainda carregava o formato do sistema antigo. Metade do trabalho foi o ETL, porque a base herdada estava suja e entrar com dado velho num modelo limpo é repetir o problema com outra roupa.",
  caseBoundaryLabel: "Como fechamos a fronteira de dados.",
  caseBoundaryA: "Entrada validada e normalizada antes de qualquer regra rodar, e saída declarada por schema em",
  caseBoundaryB: "endpoints, com",
  caseBoundaryC:
    "campos explicitamente fora da serialização. Coluna nova no banco não aparece sozinha na resposta, e há quatro suítes de teste só para isso.",
  outcomeLabel: "Resultado",
  outcomeA:
    "As funções que existiam só no papel passaram a ser usadas de fato, agora dentro da plataforma que a empresa já abre todo dia. O serviço mantém cadência própria:",
  outcomeB: "deploys em dois meses e meio",
  outcomeC:
    ". O time ficou visivelmente mais ativo, deixou de ser usuário passivo e virou proponente de melhoria.",

  otherWorkTitle: "Outras entregas",
  otherWorkOutcome: "Frontend de plataforma entregue a cliente de grande porte, com 210 commits de autoria própria e entrega rastreada do requisito ao deploy.",
  otherWorkA:
    "Respondo também pelo frontend de plataformas entregues a clientes de grande porte, e contribuo em serviços de apoio como autorização centralizada e notificações. Documentação de arquitetura em C4 e ADR, migrations deploy-safe, e quality gate no CI com",
  otherWorkB: "arquivos de teste rodando a cada PR.",

  // academico
  quantumTitle: "Quantum CRM · 1000 Valle",
  quantumOutcome: "Entregue em três sprints com cliente real e no ar. Maior contribuidor do time: 301 commits, contra 113 do segundo.",
  quantumDesc:
    "CRM completo para a concessionária 1000 Valle Multimarcas: leads, clientes, veículos, negociações, equipes e lojas, com dashboard operacional e analítico. Entregue em Scrum com parceiro real.",
  quantum1: "Monólito modular em NestJS com camadas explícitas, porque o produto tem contextos distintos mas não tem escala que pague microserviço.",
  quantum2: "Autorização exclusivamente no backend. O front nunca decide permissão, só reflete.",
  quantum3: "Audit log como feature administrativa, não como log solto.",
  quantum4:
    "Quatro modos de subida local documentados (Docker ou nativo × banco remoto ou local), para o time inteiro rodar sem depender de quem configurou.",

  // pessoal
  sqlTitle: "sql-to-diagram",
  sqlOutcome: "Lê três dialetos de SQL, PostgreSQL, MySQL e SQL Server, e devolve o diagrama sem precisar subir o banco.",
  sqlDesc:
    "Cola um script SQL, sai um diagrama entidade-relacionamento. Detecta tabelas, chaves primárias e estrangeiras em PostgreSQL, MySQL e SQL Server. Feito por precisar ler schema alheio rápido.",

  // experiencia
  expAutoURole: "Estagiário de Desenvolvimento · AutoU",
  expAutoUWhen: "Dez 2025 até hoje",
  expAutoUWhere: "Rio de Janeiro · Remoto",
  expAutoU1: "Principal desenvolvedor de uma plataforma interna para projetos, vendas, recrutamento, timesheet e desempenho",
  expAutoU2: "Arquitetura orientada a domínios (DDD) em monólito modular, com React/TypeScript e FastAPI/NestJS",
  expAutoU3: "Separação do domínio comercial em serviço dedicado para desacoplar o deploy entre times",
  expAutoU4: "Serviço centralizado de autorização (RBAC), SSO corporativo, integrações e CI/CD",
  expAutoU5: "Documentação de decisões arquiteturais (ADRs) e migrations deploy-safe",

  expAllTechRole: "Estagiário de Desenvolvimento · AllTechBR",
  expAllTechWhen: "Jul 2025 a Dez 2025",
  expAllTechWhere: "Brasil",
  expAllTech1: "Site institucional em Next.js com captação de leads, PostgreSQL e SendGrid",
  expAllTech2: "APIs REST e automações com n8n para fluxos corporativos",
  expAllTech3: "Entrega full stack com foco em segurança: CSRF, rate limiting e validação com Zod",

  expFatecRole: "Scrum Master e Dev · FATEC Jacareí (ABP)",
  expFatecWhen: "2025 até hoje",
  expFatecWhere: "Jacareí, SP",
  expFatec1: "Condução de cerimônias Scrum e organização de backlog",
  expFatec2: "Entrega de projetos acadêmicos com parceiro real, em equipe multidisciplinar",
  expFatec3: "Atuação full stack em frontend, backend e documentação",

  eduWhen: "2025 a 2027",
  eduLabel: "Formação",
  eduTitle: "Tecnologia em Desenvolvimento de Software Multiplataforma",
  eduSub: "FATEC Jacareí, cursando · Inglês avançado para leitura, escrita e comunicação técnica",

  // fecho e rodape
  contact: "Contato",
  letsTalkA: "Vamos",
  letsTalkB: "conversar",
  colophonLabel: "Como este site foi feito",
  colophon:
    "Tipografia em Archivo, no eixo de largura variável, com Martian Mono nos rótulos. Scroll suave com Lenis, física de hover com Motion, parallax em scroll-driven CSS e troca de tema em View Transitions.",
  navigate: "Navegar",
  findMe: "Contato",
  backToTop: "Voltar ao topo",
  rights: "2026 © João Victor Lopes Rosa",
  timezone: "Jacareí, BRT",
} as const;

const en: Record<keyof typeof pt, string> = {
  navWork: "Work",
  navExperience: "Experience",
  navContact: "Contact",
  langLabel: "Language",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
  home: "Home",

  role: "Full Stack Developer",
  location: "Jacareí, Brazil",
  railBase: "Based in",
  railToday: "Today",
  railTodayValue: "Lead developer of an internal platform",
  railOpen: "Open to",
  railOpenValue: "Conversations about product, architecture and internal platforms",
  lede:
    "I build the internal platform a technology consultancy uses every day to run projects, sales, recruiting and performance. My job is deciding the architecture, justifying the tradeoff before writing code, and shipping without taking down the people who depend on it.",
  ledeStrong1: "deciding the architecture, justifying the tradeoff before writing code",
  ctaContact: "Get in touch",
  railReach: "Contact",
  ctaWork: "See the work",
  portraitAlt: "Portrait of João Victor Lopes Rosa",

  work: "Work",
  experience: "Experience",
  professional: "Professional",
  internshipSince: "Internship · since 2025",
  underNda: "Under NDA",
  ndaNote: "Closed source. What I can show is the decision and what it changed.",
  academic: "Academic",
  fatec: "FATEC Jacareí · DSM",
  personal: "Personal",
  openSource: "Open source",
  production: "In production",
  live: "Publicly available",
  privateLabel: "No public link",
  open: "Open",
  moreProjects: "More projects",
  moreInpe: "Visualising data collected by INPE with UFRJ and Furnas, for a carbon balance study",
  moreArchflow: "Architecture-first agile tooling: versioned ADRs, C4 diagrams and traceability",
  moreInbox: "Email triage with an LLM under contracts structured by JSON Schema",
  moreAnka: "Investment portfolio management with Fastify, Prisma and Next.js",
  moreRelay: "A microservice that takes pull request reviews to where the conversation already happens",
  moreBurndown: "Burndown integrated with Trello, with team velocity and indicators",
  moreArsenal: "A local-first inventory catalogue, no account and no telemetry",

  caseTitle: "Replacing the foundation of a system in daily use",
  caseIntro:
    "An internal platform at a technology consultancy, used daily across the company. I am its lead developer. Below is one decision we made as a team and that I was part of from start to finish, because it sums up how I work.",
  caseProblemLabel: "The problem.",
  caseProblem:
    "The CRM was used every day, but many of its features existed on paper rather than in practice, because the foundation could not support what the product had come to demand. It lived outside the platform the company already opened daily, and the accumulated data was dirty. Rewriting with the system live is more delicate than starting from scratch.",
  caseDecisionLabel: "The decision.",
  caseDecision:
    "We chose to rebuild from scratch as a dedicated service inside the ecosystem, rather than patch it piece by piece. Same platform database, separate schema, and authorisation delegated to the service that already existed instead of duplicating access rules.",
  caseCostLabel: "What it cost.",
  caseCost:
    "Rewriting and migrating in parallel, one more service to run, and an API contract that had to be redone: the first version still carried the old system's shape. Half the work was the ETL, because the inherited database was dirty, and pouring old data into a clean model just repeats the problem in new clothes.",
  caseBoundaryLabel: "How we closed the data boundary.",
  caseBoundaryA: "Input validated and normalised before any rule runs, and output declared by schema across",
  caseBoundaryB: "endpoints, with",
  caseBoundaryC:
    "fields explicitly excluded from serialisation. A new database column never shows up in a response on its own, and four test suites exist for that alone.",
  outcomeLabel: "Outcome",
  outcomeA:
    "Features that existed only on paper are now genuinely used, inside the platform the company already opens every day. The service keeps its own cadence:",
  outcomeB: "deploys in two and a half months",
  outcomeC: ". The team became visibly more active, going from passive users to proposing improvements.",

  otherWorkTitle: "Other work",
  otherWorkOutcome: "Frontend of a platform delivered to a large client, with 210 commits of my own authorship and delivery traced from requirement to deploy.",
  otherWorkA:
    "I also own the frontend of platforms delivered to large clients, and contribute to supporting services such as centralised authorisation and notifications. Architecture documented in C4 and ADRs, deploy-safe migrations, and a CI quality gate with",
  otherWorkB: "test files running on every PR.",

  quantumTitle: "Quantum CRM · 1000 Valle",
  quantumOutcome: "Delivered in three sprints with a real client and shipped. Top contributor on the team: 301 commits against 113 for the second.",
  quantumDesc:
    "A full CRM for the 1000 Valle Multimarcas dealership: leads, customers, vehicles, deals, teams and stores, with operational and analytical dashboards. Delivered in Scrum with a real client.",
  quantum1: "Modular monolith in NestJS with explicit layers, because the product has distinct contexts but not the scale to justify microservices.",
  quantum2: "Authorisation lives only in the backend. The front never decides permission, it only reflects it.",
  quantum3: "Audit log as an administrative feature, not as stray logging.",
  quantum4:
    "Four documented ways to run it locally (Docker or native × remote or local database), so the whole team can run it without depending on whoever set it up.",

  sqlTitle: "sql-to-diagram",
  sqlOutcome: "Reads three SQL dialects, PostgreSQL, MySQL and SQL Server, and returns the diagram without spinning up a database.",
  sqlDesc:
    "Paste a SQL script, get an entity-relationship diagram. Detects tables, primary and foreign keys across PostgreSQL, MySQL and SQL Server. Built out of needing to read someone else's schema fast.",

  expAutoURole: "Software Development Intern · AutoU",
  expAutoUWhen: "Dec 2025 to today",
  expAutoUWhere: "Rio de Janeiro · Remote",
  expAutoU1: "Lead developer of an internal platform for projects, sales, recruiting, timesheet and performance",
  expAutoU2: "Domain-driven design (DDD) in a modular monolith, with React/TypeScript and FastAPI/NestJS",
  expAutoU3: "Sales domain split into a dedicated service to decouple deploys between teams",
  expAutoU4: "Centralised authorisation service (RBAC), corporate SSO, integrations and CI/CD",
  expAutoU5: "Architecture decision records (ADRs) and deploy-safe migrations",

  expAllTechRole: "Software Development Intern · AllTechBR",
  expAllTechWhen: "Jul 2025 to Dec 2025",
  expAllTechWhere: "Brazil",
  expAllTech1: "Corporate website in Next.js with lead capture, PostgreSQL and SendGrid",
  expAllTech2: "REST APIs and n8n automations for business workflows",
  expAllTech3: "Full stack delivery with a security focus: CSRF, rate limiting and Zod validation",

  expFatecRole: "Scrum Master and Developer · FATEC Jacareí (ABP)",
  expFatecWhen: "2025 to today",
  expFatecWhere: "Jacareí, SP",
  expFatec1: "Running Scrum ceremonies and organising the backlog",
  expFatec2: "Delivering academic projects with a real client, in a multidisciplinary team",
  expFatec3: "Full stack work across frontend, backend and documentation",

  eduWhen: "2025 to 2027",
  eduLabel: "Education",
  eduTitle: "Multiplatform Software Development",
  eduSub: "FATEC Jacareí, in progress · Advanced English for reading, writing and technical communication",

  contact: "Contact",
  letsTalkA: "Let's",
  letsTalkB: "talk",
  colophonLabel: "How this site was built",
  colophon:
    "Set in Archivo on its variable width axis, with Martian Mono for labels. Smooth scroll by Lenis, hover physics by Motion, parallax in scroll-driven CSS, and theme switching via View Transitions.",
  navigate: "Navigate",
  findMe: "Contact",
  backToTop: "Back to top",
  rights: "2026 © João Victor Lopes Rosa",
  timezone: "Jacareí, BRT",
};

export type MessageKey = keyof typeof pt;

export const messages: Record<Language, Record<MessageKey, string>> = { pt, en };
