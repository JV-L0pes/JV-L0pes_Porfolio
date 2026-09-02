import type { Language } from "@/lib/messages";

/**
 * Conteudo do estudo de caso, fora do dicionario de mensagens de proposito.
 * Sao dezenas de paragrafos: como chave plana em messages.ts o arquivo
 * viraria ilegivel, e aqui a estrutura da pagina fica explicita no tipo.
 *
 * Descaracterizado: sem nome de empresa, de produto nem de cliente.
 */

export type CaseBlock =
  | { kind: "p"; text: string }
  | { kind: "lead"; label: string; text: string }
  | { kind: "ol"; items: string[] }
  | { kind: "ul"; items: string[] };

export type CaseSection = { n: string; heading: string; blocks: CaseBlock[] };

export type CaseStudy = {
  kicker: string;
  title: string;
  deck: string;
  meta: ReadonlyArray<{ label: string; value: string }>;
  sections: ReadonlyArray<CaseSection>;
  back: string;
  contactLead: string;
  contactCta: string;
};

const pt: CaseStudy = {
  kicker: "Estudo de caso",
  title: "Trocar a fundação de um sistema em uso diário",
  deck:
    "Um CRM que o time comercial abria todo dia, e cuja fundação não sustentava metade do que o produto prometia. Reconstruir com o sistema no ar é mais delicado do que partir do zero.",
  meta: [
    { label: "Contexto", value: "Plataforma interna de uma consultoria de tecnologia" },
    { label: "Papel", value: "Principal desenvolvedor" },
    { label: "Stack", value: "React · TypeScript · FastAPI · NestJS · PostgreSQL" },
    { label: "Confidencialidade", value: "Código fechado, sem nome de empresa ou cliente" },
  ],
  sections: [
    {
      n: "01",
      heading: "Contexto",
      blocks: [
        {
          kind: "p",
          text:
            "Plataforma interna de uma consultoria de tecnologia, usada no dia a dia por toda a empresa. Cobre projetos, comercial, recrutamento, timesheet e desempenho.",
        },
        {
          kind: "p",
          text:
            "A arquitetura é um ecossistema de serviços por domínio, cada um organizado internamente em camadas. Existe um serviço dedicado de autorização, que já rodava antes desta história e é o que torna o resto viável.",
        },
        {
          kind: "p",
          text:
            "Atuo como principal desenvolvedor. As decisões descritas aqui foram tomadas em equipe. Descrevo o raciocínio de que participei e o trabalho que executei.",
        },
      ],
    },
    {
      n: "02",
      heading: "O problema",
      blocks: [
        {
          kind: "p",
          text:
            "O CRM era usado todo dia pelo time comercial. O problema não era adoção, era fundação.",
        },
        {
          kind: "p",
          text:
            "Tinha sido construído às pressas, sobre um modelo de dados que não sustentava o que o produto passou a pedir. O efeito aparecia no uso: boa parte das funções existia no papel e não era usada na prática. Não por desconhecimento, mas porque não entregavam de forma confiável o suficiente para alguém apoiar o próprio trabalho nelas.",
        },
        {
          kind: "p",
          text:
            "Vivia também fora da plataforma que o resto da empresa já abria todo dia, então o comercial trabalhava alternando entre dois sistemas.",
        },
        {
          kind: "p",
          text:
            "E o dado acumulado refletia tudo isso: sujo e sem padrão, porque um modelo que não sustenta o uso real acaba recebendo o que der.",
        },
        {
          kind: "p",
          text:
            "Reescrever nesse cenário é mais delicado do que partir do zero. O sistema estava em uso diário, então não havia janela para simplesmente desligar e trocar.",
        },
      ],
    },
    {
      n: "03",
      heading: "As opções na mesa",
      blocks: [
        {
          kind: "ol",
          items: [
            "Corrigir o CRM existente por partes. Menos arriscado no curto prazo, e não interrompe quem está usando. Mas mantém o modelo de dados que era a raiz do problema, e continua fora da plataforma.",
            "Reconstruir como serviço dedicado dentro do ecossistema. Custa reescrever e migrar com o sistema antigo no ar. Resolve a fundação e a integração de uma vez.",
          ],
        },
        { kind: "p", text: "Decidimos pela segunda, sabendo que era a mais trabalhosa." },
      ],
    },
    {
      n: "04",
      heading: "A decisão",
      blocks: [
        {
          kind: "p",
          text:
            "Reconstruir o CRM do zero como serviço próprio do ecossistema, em vez de remendar a fundação por partes. Três definições sustentam isso.",
        },
        {
          kind: "lead",
          label: "Serviço dedicado, não módulo.",
          text:
            "O domínio comercial tem ciclo de mudança próprio, e um serviço separado dá a ele deploy independente sem prender o resto da plataforma.",
        },
        {
          kind: "lead",
          label: "Mesmo banco, schema separado.",
          text:
            "Não criamos uma base nova. O serviço vive no banco da plataforma com schema próprio, o que mantém a fronteira de domínio explícita sem pagar o custo de mais uma instância para monitorar, versionar e restaurar.",
        },
        {
          kind: "lead",
          label: "Autorização reaproveitada, não duplicada.",
          text:
            "O serviço de autorização já existia, criado antes para resolver quem enxerga o quê. O CRM novo delega a ele em vez de trazer regra de permissão para dentro. Regra de acesso duplicada é como brecha nasce.",
        },
      ],
    },
    {
      n: "05",
      heading: "A migração, que era metade do trabalho",
      blocks: [
        {
          kind: "p",
          text: "Reescrever era a parte previsível. O que consumiu de verdade foi trazer o dado antigo.",
        },
        {
          kind: "p",
          text:
            "A base herdada estava suja e sem padrão. Construímos um processo de ETL para extrair, reorganizar e reestruturar tudo antes de entrar no schema novo, em vez de despejar o legado dentro de um modelo limpo e contaminá-lo no primeiro dia.",
        },
        {
          kind: "p",
          text:
            "Essa é a decisão silenciosa que define se uma migração dura. Modelo novo com dado velho e sujo dentro não é modelo novo. É o problema anterior com outra roupa.",
        },
      ],
    },
    {
      n: "06",
      heading: "Fechar a fronteira de dados",
      blocks: [
        {
          kind: "p",
          text:
            "Serviço separado significa dado passando por rede, e cada passagem é uma chance de expor campo que não deveria sair. Fechamos a fronteira nos dois sentidos.",
        },
        {
          kind: "lead",
          label: "Na entrada,",
          text: "validação e normalização antes de qualquer regra de negócio rodar. Requisição malformada morre na borda.",
        },
        {
          kind: "lead",
          label: "Na saída,",
          text:
            "contrato declarado por schema: 46 endpoints com resposta declarada e 42 campos explicitamente fora da serialização.",
        },
        {
          kind: "p",
          text:
            "O que importa não é a contagem, é a consequência: coluna nova no banco não aparece sozinha na resposta. Devolver o objeto do ORM direto transforma toda migration numa chance de expor campo interno.",
        },
        {
          kind: "p",
          text:
            "Para isso sobreviver ao primeiro refactor, há quatro suítes de teste dedicadas só a serialização, dentro das 31 do serviço.",
        },
      ],
    },
    {
      n: "07",
      heading: "O que isso custou",
      blocks: [
        {
          kind: "ul",
          items: [
            "Reescrever e migrar em paralelo, mantendo o antigo de pé enquanto o novo não estava pronto.",
            "Um serviço a mais para operar, com pipeline e monitoramento próprios.",
            "Um contrato de API entre o CRM e o núcleo da plataforma. O que seria chamada de função virou chamada de rede, com latência e falha parcial no pacote.",
          ],
        },
        {
          kind: "p",
          text:
            "E o contrato precisou ser refeito. A primeira versão ainda carregava o formato do sistema antigo, porque era o que existia para integrar. Só depois de reprojetar do zero ele passou a refletir o domínio de verdade em vez do legado.",
        },
      ],
    },
    {
      n: "08",
      heading: "O resultado",
      blocks: [
        {
          kind: "p",
          text:
            "As funções que existiam no papel passaram a ser usadas de fato, e o CRM deixou de ser um sistema à parte: agora vive dentro da plataforma que a empresa já abre todo dia. Acabou a alternância entre dois lugares para tocar o mesmo trabalho.",
        },
        {
          kind: "p",
          text:
            "O serviço mantém cadência própria: 58 deploys em dois meses e meio, cerca de cinco por semana, sem depender do ciclo dos outros times.",
        },
        {
          kind: "p",
          text:
            "O efeito que eu não previa foi de comportamento. Quando a ferramenta passa a sustentar o que promete e o intervalo entre pedir e receber encolhe, as pessoas voltam a pedir. O time ficou visivelmente mais ativo, deixou de ser usuário passivo e virou proponente de melhoria, e o fluxo de feedback é constante.",
        },
      ],
    },
    {
      n: "09",
      heading: "O que eu faria diferente",
      blocks: [
        {
          kind: "lead",
          label: "O contrato de API.",
          text:
            "Foi desenhado em cima do que o sistema antigo expunha, porque era o que estava na mesa. Deu retrabalho. Hoje eu defenderia modelar o domínio primeiro e tratar o legado como detalhe de migração, não como ponto de partida.",
        },
        {
          kind: "lead",
          label: "O resto eu repetiria.",
          text:
            "Reconstruir em vez de remendar foi o caminho mais trabalhoso e é o que sustentou o resultado. A estrutura está sólida.",
        },
      ],
    },
    {
      n: "10",
      heading: "O princípio que fica",
      blocks: [
        {
          kind: "p",
          text:
            "Função que ninguém usa dentro de um sistema que todo mundo usa raramente é problema de treinamento. É sintoma de fundação: em geral, a função existe mas não entrega de forma confiável o bastante para alguém apostar o próprio trabalho nela.",
        },
        {
          kind: "p",
          text: "E migração não termina quando o código novo sobe. Termina quando o dado antigo entrou limpo.",
        },
      ],
    },
  ],
  back: "Voltar ao portfólio",
  contactLead: "Quer conversar sobre decisões assim?",
  contactCta: "Entrar em contato",
};

const en: CaseStudy = {
  kicker: "Case study",
  title: "Replacing the foundation of a system in daily use",
  deck:
    "A CRM the sales team opened every day, whose foundation could not support half of what the product promised. Rewriting with the system live is more delicate than starting from scratch.",
  meta: [
    { label: "Context", value: "Internal platform at a technology consultancy" },
    { label: "Role", value: "Lead developer" },
    { label: "Stack", value: "React · TypeScript · FastAPI · NestJS · PostgreSQL" },
    { label: "Confidentiality", value: "Closed source, no company or client named" },
  ],
  sections: [
    {
      n: "01",
      heading: "Context",
      blocks: [
        {
          kind: "p",
          text:
            "An internal platform at a technology consultancy, used daily across the company. It covers projects, sales, recruiting, timesheets and performance.",
        },
        {
          kind: "p",
          text:
            "The architecture is an ecosystem of services split by domain, each organised internally in layers. There is a dedicated authorisation service, which was already running before this story and is what makes the rest viable.",
        },
        {
          kind: "p",
          text:
            "I am its lead developer. The decisions described here were made as a team. I describe the reasoning I took part in and the work I carried out.",
        },
      ],
    },
    {
      n: "02",
      heading: "The problem",
      blocks: [
        { kind: "p", text: "The CRM was used every day by the sales team. The problem was not adoption, it was foundation." },
        {
          kind: "p",
          text:
            "It had been built in a hurry, on a data model that could not support what the product had come to demand. The effect showed up in usage: many features existed on paper and were not used in practice. Not out of ignorance, but because they did not deliver reliably enough for anyone to rest their own work on them.",
        },
        {
          kind: "p",
          text:
            "It also lived outside the platform the rest of the company already opened every day, so the sales team worked by switching between two systems.",
        },
        {
          kind: "p",
          text:
            "And the accumulated data reflected all of that: dirty and inconsistent, because a model that does not support real usage ends up taking whatever it is given.",
        },
        {
          kind: "p",
          text:
            "Rewriting in that scenario is more delicate than starting from scratch. The system was in daily use, so there was no window to simply switch it off and swap it.",
        },
      ],
    },
    {
      n: "03",
      heading: "The options on the table",
      blocks: [
        {
          kind: "ol",
          items: [
            "Fix the existing CRM piece by piece. Less risky in the short term, and it does not interrupt anyone using it. But it keeps the data model that was the root of the problem, and it stays outside the platform.",
            "Rebuild it as a dedicated service inside the ecosystem. It costs a rewrite and a migration with the old system still live. It solves the foundation and the integration at once.",
          ],
        },
        { kind: "p", text: "We chose the second, knowing it was the harder one." },
      ],
    },
    {
      n: "04",
      heading: "The decision",
      blocks: [
        {
          kind: "p",
          text:
            "Rebuild the CRM from scratch as its own service in the ecosystem, rather than patching the foundation piece by piece. Three definitions hold that up.",
        },
        {
          kind: "lead",
          label: "A dedicated service, not a module.",
          text:
            "The sales domain has its own rate of change, and a separate service gives it independent deploys without holding back the rest of the platform.",
        },
        {
          kind: "lead",
          label: "Same database, separate schema.",
          text:
            "We did not create a new database. The service lives in the platform database with its own schema, which keeps the domain boundary explicit without paying for one more instance to monitor, version and restore.",
        },
        {
          kind: "lead",
          label: "Authorisation reused, not duplicated.",
          text:
            "The authorisation service already existed, built earlier to settle who sees what. The new CRM delegates to it instead of pulling permission rules inside. Duplicated access rules are how gaps are born.",
        },
      ],
    },
    {
      n: "05",
      heading: "The migration, which was half the work",
      blocks: [
        { kind: "p", text: "The rewrite was the predictable part. What really consumed the effort was bringing the old data across." },
        {
          kind: "p",
          text:
            "The inherited database was dirty and inconsistent. We built an ETL process to extract, reorganise and restructure everything before it entered the new schema, rather than pouring the legacy into a clean model and contaminating it on day one.",
        },
        {
          kind: "p",
          text:
            "That is the quiet decision that determines whether a migration lasts. A new model with old dirty data inside is not a new model. It is the previous problem in new clothes.",
        },
      ],
    },
    {
      n: "06",
      heading: "Closing the data boundary",
      blocks: [
        {
          kind: "p",
          text:
            "A separate service means data crossing the network, and every crossing is a chance to expose a field that should not leave. We closed the boundary in both directions.",
        },
        {
          kind: "lead",
          label: "On the way in,",
          text: "validation and normalisation before any business rule runs. A malformed request dies at the edge.",
        },
        {
          kind: "lead",
          label: "On the way out,",
          text: "a contract declared by schema: 46 endpoints with declared responses and 42 fields explicitly excluded from serialisation.",
        },
        {
          kind: "p",
          text:
            "What matters is not the count, it is the consequence: a new database column never shows up in a response on its own. Returning the ORM object directly turns every migration into a chance to expose an internal field.",
        },
        {
          kind: "p",
          text: "For that to survive the first refactor, four test suites exist for serialisation alone, among the 31 in the service.",
        },
      ],
    },
    {
      n: "07",
      heading: "What it cost",
      blocks: [
        {
          kind: "ul",
          items: [
            "Rewriting and migrating in parallel, keeping the old system standing while the new one was not ready.",
            "One more service to run, with its own pipeline and monitoring.",
            "An API contract between the CRM and the platform core. What would have been a function call became a network call, with latency and partial failure in the package.",
          ],
        },
        {
          kind: "p",
          text:
            "And the contract had to be redone. The first version still carried the shape of the old system, because that was what existed to integrate with. Only after redesigning it from scratch did it start reflecting the real domain instead of the legacy.",
        },
      ],
    },
    {
      n: "08",
      heading: "The outcome",
      blocks: [
        {
          kind: "p",
          text:
            "Features that existed only on paper are now genuinely used, and the CRM stopped being a system apart: it now lives inside the platform the company already opens every day. The switching between two places to do one job is gone.",
        },
        {
          kind: "p",
          text:
            "The service keeps its own cadence: 58 deploys in two and a half months, about five a week, without depending on other teams' cycles.",
        },
        {
          kind: "p",
          text:
            "The effect I did not predict was behavioural. When the tool starts holding up what it promises and the gap between asking and receiving shrinks, people start asking again. The team became visibly more active, went from passive user to proposing improvements, and the flow of feedback is constant.",
        },
      ],
    },
    {
      n: "09",
      heading: "What I would do differently",
      blocks: [
        {
          kind: "lead",
          label: "The API contract.",
          text:
            "It was designed on top of what the old system exposed, because that was what was on the table. It caused rework. Today I would argue for modelling the domain first and treating the legacy as a migration detail, not as a starting point.",
        },
        {
          kind: "lead",
          label: "The rest I would repeat.",
          text: "Rebuilding instead of patching was the harder path and it is what held the result up. The structure is solid.",
        },
      ],
    },
    {
      n: "10",
      heading: "The principle that stays",
      blocks: [
        {
          kind: "p",
          text:
            "A feature nobody uses inside a system everybody uses is rarely a training problem. It is a symptom of foundation: usually the feature exists but does not deliver reliably enough for anyone to bet their own work on it.",
        },
        {
          kind: "p",
          text: "And a migration does not end when the new code ships. It ends when the old data has come in clean.",
        },
      ],
    },
  ],
  back: "Back to the portfolio",
  contactLead: "Want to talk about decisions like this one?",
  contactCta: "Get in touch",
};

export const caseStudy: Record<Language, CaseStudy> = { pt, en };
