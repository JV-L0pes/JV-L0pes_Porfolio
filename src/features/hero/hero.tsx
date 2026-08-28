"use client";

import Image from "next/image";
import { ArrowRight, GitHub, Instagram, LinkedIn } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";

const SOCIAL = [
  { href: "https://github.com/JV-L0pes", label: "GitHub", Icon: GitHub },
  { href: "https://www.linkedin.com/in/jv-l0pes", label: "LinkedIn", Icon: LinkedIn },
  { href: "https://www.instagram.com/jv_l0pez", label: "Instagram", Icon: Instagram },
];

export default function Hero() {
  const { t } = useLanguage();
  const lede = t("lede");
  const strong = t("ledeStrong1");
  const [before, after] = lede.split(strong);

  return (
    <header id="top" className="shell hero">
      <div className="hero-grid">
        <div>
          <p className="mono meta fade" style={{ color: "var(--ash)", margin: "0 0 clamp(1.25rem,2.5vw,2rem)" }}>
            <span>{t("role")}</span>
            <span>{t("location")}</span>
            <span className="live"><i />{t("available")}</span>
          </p>

          <h1 className="giant wide">
            <span className="line"><span>João</span></span>
            <span className="line"><span>Victor</span></span>
          </h1>

          <p className="lede fade" style={{ margin: "clamp(1.5rem,3vw,2.25rem) 0 0" }}>
            {before}
            <strong>{strong}</strong>
            {after}
          </p>

          <div className="fade flex flex-wrap items-center gap-5" style={{ marginTop: "clamp(1.5rem,3vw,2.25rem)" }}>
            <a href="mailto:joaovlr9@gmail.com" className="pill" data-magnet>
              {t("ctaContact")} <ArrowRight className="arw" />
            </a>
            <a href="#trabalho" className="plain">
              <span className="roll"><span><i>{t("ctaWork")}</i><i>{t("ctaWork")}</i></span></span>
            </a>
          </div>

          <div className="fade flex items-center gap-2" style={{ marginTop: "1.75rem" }}>
            {SOCIAL.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="sq" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="portrait-wrap fade">
          <Image
            className="portrait"
            src="/images/retrato.jpeg"
            alt={t("portraitAlt")}
            width={600}
            height={800}
            priority
          />
        </div>
      </div>
    </header>
  );
}
