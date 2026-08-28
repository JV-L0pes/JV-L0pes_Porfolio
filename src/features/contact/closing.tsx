"use client";

import { ArrowRight } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";

export default function Closing() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="close">
      <div className="shell" style={{ paddingBlock: "clamp(4rem,9vw,8rem)" }}>
        <p className="mono fade" style={{ margin: "0 0 clamp(1.25rem,2.5vw,2rem)", color: "var(--close-muted)" }}>
          {t("contact")}
        </p>

        <h2 className="wide">
          <span className="line"><span>{t("letsTalkA")}</span></span>
          <span className="line"><span>{t("letsTalkB")}</span></span>
        </h2>

        <div className="fade flex flex-wrap items-center gap-6" style={{ marginTop: "clamp(1.75rem,3.5vw,3rem)" }}>
          <a
            href="mailto:joao.v.lopes.rosa@gmail.com"
            className="pill"
            data-magnet
            style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}
          >
            joao.v.lopes.rosa@gmail.com <ArrowRight className="arw" />
          </a>
          <a href="https://www.linkedin.com/in/jv-l0pes" target="_blank" rel="noopener noreferrer" className="plain">
            <span className="roll"><span><i>LinkedIn</i><i>LinkedIn</i></span></span>
          </a>
          <a href="https://github.com/JV-L0pes" target="_blank" rel="noopener noreferrer" className="plain">
            <span className="roll"><span><i>GitHub</i><i>GitHub</i></span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
