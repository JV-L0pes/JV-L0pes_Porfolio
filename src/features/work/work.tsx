"use client";

import { ArrowRight, ArrowUpRight, Lock } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";
import type { MessageKey } from "@/lib/messages";

const MORE = [
  { href: "https://github.com/ExceptionH4ndlers/ABP_2DSM", label: "Dados Limnológicos · INPE", desc: "moreInpe" },
  { href: "https://github.com/JV-L0pes/sql-to-diagram", label: "sql-to-diagram", desc: "moreSql" },
  { href: "https://github.com/JV-L0pes/Inbox-Copilot", label: "Inbox-Copilot", desc: "moreInbox" },
  { href: "https://github.com/JV-L0pes/Investment-Management-Platform", label: "AnkaFlow", desc: "moreAnka" },
  { href: "https://github.com/JV-L0pes/pr-review-slack-relay", label: "pr-review-slack-relay", desc: "moreRelay" },
  { href: "https://github.com/JV-L0pes/burndown-chart", label: "burndown-chart", desc: "moreBurndown" },
  { href: "https://github.com/JV-L0pes/warframe-arsenal-index", label: "Arsenal Index", desc: "moreArsenal" },
] as const satisfies ReadonlyArray<{ href: string; label: string; desc: MessageKey }>;

function Num({ value }: { value: number }) {
  return <span className="num" data-to={value}>{value}</span>;
}

function Rail({ title, sub, nda }: { title: string; sub: string; nda?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className="cat-rail">
      <p className="mono fade" style={{ margin: "0 0 .5rem" }}>{title}</p>
      <p className="mono fade" style={{ margin: 0, color: "var(--ash)", textTransform: "none", letterSpacing: ".06em" }}>
        {sub}
      </p>
      {nda && (
        <>
          <p className="mono fade lock" style={{ margin: "1rem 0 0" }}>
            <Lock /> {t("underNda")}
          </p>
          <p className="fade nda-note">{t("ndaNote")}</p>
        </>
      )}
    </div>
  );
}

function Bullet({ label, children }: { label: MessageKey; children: React.ReactNode }) {
  const { t } = useLanguage();
  return <li><strong>{t(label)}</strong> {children}</li>;
}

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="trabalho" className="shell" style={{ paddingBlock: "clamp(4rem,8vw,7rem) 0" }}>
      <div className="sec-head">
        <span className="mono kicker fade">02 · Projetos</span>
        <div className="row">
          <h2 style={{ fontSize: "clamp(2rem,5.5vw,4.25rem)" }}>
            <span className="line"><span>{t("work")}</span></span>
          </h2>
          <a href="https://github.com/JV-L0pes" target="_blank" rel="noopener noreferrer" className="plain mono fade">
            GitHub <ArrowRight size={14} className="arw" />
          </a>
        </div>
      </div>

      {/* ---------- profissional ---------- */}
      <div className="cat">
        <Rail title={t("professional")} sub={t("internshipSince")} nda />
        <div className="cat-body work">
          <div className="wrow fade">
            <div className="mono idx">01 · <span className="live"><i />{t("production")}</span></div>
            <div>
              <h3>{t("caseTitle")}</h3>
              <p className="wdesc">{t("caseIntro")}</p>
              <ul className="dec">
                <Bullet label="caseProblemLabel">{t("caseProblem")}</Bullet>
                <Bullet label="caseDecisionLabel">{t("caseDecision")}</Bullet>
                <Bullet label="caseCostLabel">{t("caseCost")}</Bullet>
                <Bullet label="caseBoundaryLabel">
                  {t("caseBoundaryA")} <Num value={46} /> {t("caseBoundaryB")} <Num value={42} />{" "}
                  {t("caseBoundaryC")}
                </Bullet>
              </ul>

              <div className="impact">
                <span className="lbl">{t("outcomeLabel")}</span>
                <p>
                  {t("outcomeA")} <strong><Num value={58} /> {t("outcomeB")}</strong>
                  {t("outcomeC")}
                </p>
              </div>

              <p className="mono stack">React · TypeScript · FastAPI · NestJS · PostgreSQL · Azure</p>
            </div>
            <span className="go mono priv">{t("privateLabel")}</span>
          </div>

          <div className="wrow fade">
            <div className="mono idx">02</div>
            <div>
              <h3>{t("otherWorkTitle")}</h3>
              <p className="wdesc">
                {t("otherWorkA")} <Num value={91} /> {t("otherWorkB")}
              </p>
              <div className="impact">
                <span className="lbl">{t("outcomeLabel")}</span>
                <p>{t("otherWorkOutcome")}</p>
              </div>
              <p className="mono stack">React · TypeScript · Java · AWS · Docker</p>
            </div>
            <span className="go mono priv">{t("privateLabel")}</span>
          </div>
        </div>
      </div>

      {/* ---------- academico ---------- */}
      <div className="cat">
        <Rail title={t("academic")} sub={t("fatec")} />
        <div className="cat-body work">
          <a
            href="https://abp3-sistema-gestao-leads-front.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="wrow fade"
          >
            <div className="mono idx">03 · <span className="live"><i />{t("live")}</span></div>
            <div>
              <h3>{t("quantumTitle")}</h3>
              <p className="wdesc">{t("quantumDesc")}</p>
              <ul className="dec">
                <li>{t("quantum1")}</li>
                <li>{t("quantum2")}</li>
                <li>{t("quantum3")}</li>
                <li>{t("quantum4")}</li>
              </ul>
              <div className="impact">
                <span className="lbl">{t("outcomeLabel")}</span>
                <p>{t("quantumOutcome")}</p>
              </div>
              <p className="mono stack">NestJS · Next.js · Prisma · PostgreSQL · Vercel + Neon</p>
            </div>
            <span className="go mono">{t("open")} <ArrowRight size={15} className="arw" /></span>
          </a>
        </div>
      </div>

      {/* ---------- pessoal ---------- */}
      <div className="cat">
        <Rail title={t("personal")} sub={t("openSource")} />
        <div className="cat-body work">
          <a
            href="https://github.com/ArchFlowPlatform/AgileTracker-Front"
            target="_blank"
            rel="noopener noreferrer"
            className="wrow fade"
          >
            <div className="mono idx">04</div>
            <div>
              <h3>{t("archflowTitle")}</h3>
              <p className="wdesc">{t("archflowDesc")}</p>
              <ul className="dec">
                <li>{t("archflow1")}</li>
                <li>{t("archflow2")}</li>
                <li>{t("archflow3")}</li>
                <li>{t("archflow4")}</li>
              </ul>
              <div className="impact">
                <span className="lbl">{t("outcomeLabel")}</span>
                <p>{t("archflowOutcome")}</p>
              </div>
              <p className="mono stack">Next.js · TypeScript · Zustand · dnd-kit · Radix · Tailwind</p>
            </div>
            <span className="go mono">{t("open")} <ArrowRight size={15} className="arw" /></span>
          </a>
        </div>
      </div>

      <div className="tail fade">
        <p className="mono" style={{ margin: "0 0 1.25rem", color: "var(--ash)" }}>{t("moreProjects")}</p>
        <div className="more">
          {MORE.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
              <div>
                <h3>{item.label}</h3>
                <p>{t(item.desc)}</p>
              </div>
              <ArrowUpRight className="ext" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
