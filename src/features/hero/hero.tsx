"use client";

import Image from "next/image";
import { ArrowRight, GitHub, LinkedIn } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";

/**
 * Hero em duas colunas: o nome domina a esquerda, e a direita e um trilho
 * de informacao com o retrato dentro dele.
 *
 * O retrato vive no trilho de proposito. Como bloco solto ao lado do nome
 * ele ficava curto para a altura da coluna e abria um vazio; como item do
 * trilho ele tem a largura da coluna e vira mais um dado.
 */
export default function Hero() {
  const { t } = useLanguage();
  const lede = t("lede");
  const strong = t("ledeStrong1");
  const [before, after] = lede.split(strong);

  return (
    <header id="top" className="shell hero">
      <div className="hero-grid">
        <div className="hero-main">
          <p className="mono fade hero-role">{t("role")}</p>

          <h1 className="giant wide">
            <span className="line"><span>João</span></span>
            <span className="line"><span>Victor</span></span>
          </h1>

          <p className="lede fade">
            {before}
            <strong>{strong}</strong>
            {after}
          </p>

          <div className="fade hero-cta">
            <a href="mailto:joao.v.lopes.rosa@gmail.com" className="pill" data-magnet>
              {t("ctaContact")} <ArrowRight className="arw" />
            </a>
          </div>
        </div>

        <aside className="rail fade">
          <div>
            <span className="lab">{t("railBase")}</span>
            <p className="mono">{t("location")}</p>
          </div>

          <Image
            className="portrait"
            src="/images/retrato.jpeg"
            alt={t("portraitAlt")}
            width={600}
            height={750}
            priority
          />

          <div>
            <span className="lab">{t("railToday")}</span>
            <p>{t("railTodayValue")}</p>
          </div>

          <div>
            <span className="lab">{t("railOpen")}</span>
            <p>{t("railOpenValue")}</p>
            <ul className="rail-links">
              <li>
                <a href="mailto:joao.v.lopes.rosa@gmail.com">joao.v.lopes.rosa@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jv-l0pes" target="_blank" rel="noopener noreferrer">
                  <LinkedIn size={12} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/JV-L0pes" target="_blank" rel="noopener noreferrer">
                  <GitHub size={12} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </header>
  );
}
