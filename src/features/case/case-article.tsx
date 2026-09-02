"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import Interactions from "@/components/interactions";
import SiteFooter from "@/features/shell/site-footer";
import TopBar from "@/features/shell/top-bar";
import { caseStudy, type CaseBlock } from "@/lib/case-study";
import { useLanguage } from "@/lib/language-context";

function Block({ block }: { block: CaseBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="fade">{block.text}</p>;
    case "lead":
      return (
        <p className="fade">
          <strong>{block.label}</strong> {block.text}
        </p>
      );
    case "ol":
      return (
        <ol className="fade case-ol">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ol>
      );
    case "ul":
      return (
        <ul className="fade case-ul">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
  }
}

export default function CaseArticle() {
  const { language } = useLanguage();
  const study = caseStudy[language];

  /* o provider nao mexe no titulo fora da home, entao a pagina responde
     pelo dela quando o idioma muda */
  useEffect(() => {
    document.title = `${study.title} · João Victor Lopes Rosa`;
  }, [study.title]);

  return (
    <>
      <TopBar />

      <main className="shell case">
        <Link href="/#trabalho" className="mono case-back">
          <ArrowUpRight className="back-arw" /> {study.back}
        </Link>

        <header className="case-head">
          <span className="mono kicker fade">{study.kicker}</span>
          <h1 className="case-title">
            <span className="line"><span>{study.title}</span></span>
          </h1>
          <p className="lede fade">{study.deck}</p>

          <dl className="case-meta fade">
            {study.meta.map(({ label, value }) => (
              <div key={label}>
                <dt className="mono">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <article>
          {study.sections.map((section) => (
            <section key={section.n} className="case-sec">
              <div className="case-rail">
                <span className="mono fade">{section.n}</span>
                <h2 className="fade">{section.heading}</h2>
              </div>
              <div className="case-prose">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </article>

        <div className="case-end fade">
          <p>{study.contactLead}</p>
          <a href="mailto:joao.v.lopes.rosa@gmail.com" className="pill" data-magnet>
            {study.contactCta} <ArrowRight className="arw" />
          </a>
        </div>
      </main>

      <SiteFooter />
      <Interactions />
    </>
  );
}
