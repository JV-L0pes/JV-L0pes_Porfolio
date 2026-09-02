"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { useLanguage } from "@/lib/language-context";

/* ancoras absolutas: a barra tambem monta na pagina do estudo de caso,
   onde "#trabalho" nao existe e precisa voltar para a home */
const NAV = [
  { href: "/#experiencia", key: "navExperience" },
  { href: "/#trabalho", key: "navWork" },
  { href: "/#contato", key: "navContact" },
] as const;

/** O nome so aparece na barra depois que o titulo gigante sai da tela. */
export default function TopBar() {
  const { t, language, setLanguage } = useLanguage();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const onScroll = () => setStuck(window.scrollY > (hero?.offsetHeight ?? 600) * 0.62);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`bar${stuck ? " stuck" : ""}`}>
      <div className="shell bar-in">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/#top" className="mark" aria-label={t("home")}>JV</Link>
          <div className="late mono" aria-hidden>João Victor Lopes Rosa</div>
        </div>

        <nav className="mono hidden items-center gap-8 md:flex">
          {NAV.map(({ href, key }) => (
            <Link key={href} href={href} className="roll">
              <span><i>{t(key)}</i><i>{t(key)}</i></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="seg" role="group" aria-label={t("langLabel")}>
            <button type="button" onClick={() => setLanguage("pt")} aria-pressed={language === "pt"}>PT</button>
            <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
