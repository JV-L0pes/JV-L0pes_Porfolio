"use client";

import Link from "next/link";
import { ArrowUp } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";

const NAV = [
  { href: "/#experiencia", key: "navExperience" },
  { href: "/#trabalho", key: "navWork" },
  { href: "/#contato", key: "navContact" },
] as const;

const FIND = [
  { href: "https://github.com/JV-L0pes", label: "GitHub" },
  { href: "https://www.linkedin.com/in/jv-l0pes", label: "LinkedIn" },
  { href: "mailto:joao.v.lopes.rosa@gmail.com", label: "joao.v.lopes.rosa@gmail.com" },
];

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="foot">
      <div className="shell foot-grid">
        <div>
          <h4>{t("colophonLabel")}</h4>
          <p className="colo">{t("colophon")}</p>
        </div>
        <div>
          <h4>{t("navigate")}</h4>
          <ul>{NAV.map(({ href, key }) => <li key={href}><Link href={href}>{t(key)}</Link></li>)}</ul>
        </div>
        <div>
          <h4>{t("findMe")}</h4>
          <ul>
            {FIND.map(({ href, label }) => (
              <li key={href}>
                <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell">
        <div className="foot-bar">
          <p className="mono" style={{ margin: 0 }}>{t("rights")}</p>
          <Link href="/#top" className="totop">
            {t("backToTop")} <span className="arrw"><ArrowUp /></span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
