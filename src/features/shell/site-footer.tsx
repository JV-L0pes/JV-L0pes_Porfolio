"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";

const NAV = [
  { href: "#trabalho", key: "navWork" },
  { href: "#experiencia", key: "navExperience" },
  { href: "#contato", key: "navContact" },
] as const;

const FIND = [
  { href: "https://github.com/JV-L0pes", label: "GitHub" },
  { href: "https://www.linkedin.com/in/jv-l0pes", label: "LinkedIn" },
  { href: "mailto:joao.v.lopes.rosa@gmail.com", label: "joao.v.lopes.rosa@gmail.com" },
];

/** Relogio de Jacarei. Renderiza vazio no servidor para nao divergir na hidratacao. */
function Clock() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false, timeZone: "America/Sao_Paulo",
      }).format(new Date());
    setNow(format());
    const id = window.setInterval(() => setNow(format()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{now || "--:--:--"}</span>;
}

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
          <ul>{NAV.map(({ href, key }) => <li key={href}><a href={href}>{t(key)}</a></li>)}</ul>
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
          <p className="clock" style={{ margin: 0 }}>
            <Clock /> <span className="mono" style={{ color: "var(--ash)" }}>{t("timezone")}</span>
          </p>
          <a href="#top" className="totop">
            {t("backToTop")} <span className="arrw"><ArrowUp /></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
