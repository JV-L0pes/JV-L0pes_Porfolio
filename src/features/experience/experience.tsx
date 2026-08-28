"use client";

import { useLanguage } from "@/lib/language-context";
import type { MessageKey } from "@/lib/messages";

type Entry = {
  when: MessageKey;
  where: MessageKey;
  role: MessageKey;
  current?: boolean;
  bullets: MessageKey[];
};

const ENTRIES: Entry[] = [
  {
    when: "expAutoUWhen",
    where: "expAutoUWhere",
    role: "expAutoURole",
    current: true,
    bullets: ["expAutoU1", "expAutoU2", "expAutoU3", "expAutoU4", "expAutoU5"],
  },
  {
    when: "expAllTechWhen",
    where: "expAllTechWhere",
    role: "expAllTechRole",
    bullets: ["expAllTech1", "expAllTech2", "expAllTech3"],
  },
  {
    when: "expFatecWhen",
    where: "expFatecWhere",
    role: "expFatecRole",
    current: true,
    bullets: ["expFatec1", "expFatec2", "expFatec3"],
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="shell" style={{ paddingBlock: "clamp(4rem,8vw,7rem) 0" }}>
      <div className="sec-head">
        <span className="mono kicker fade">02 · Trajetória</span>
        <div className="row">
          <h2 style={{ fontSize: "clamp(2rem,5.5vw,4.25rem)" }}>
            <span className="line"><span>{t("experience")}</span></span>
          </h2>
        </div>
      </div>

      <div className="rule-top">
        {ENTRIES.map((entry) => (
          <div key={entry.role} className="led fade">
            <div>
              <p className="mono" style={{ margin: "0 0 .5rem" }}>
                {entry.current ? <span className="live"><i />{t(entry.when)}</span> : t(entry.when)}
              </p>
              <p className="mono" style={{ margin: 0, color: "var(--ash)" }}>{t(entry.where)}</p>
            </div>
            <div>
              <h3>{t(entry.role)}</h3>
              <ul>
                {entry.bullets.map((key) => <li key={key}>{t(key)}</li>)}
              </ul>
            </div>
          </div>
        ))}

        <div className="led fade">
          <div>
            <p className="mono" style={{ margin: "0 0 .5rem" }}>{t("eduWhen")}</p>
            <p className="mono" style={{ margin: 0, color: "var(--ash)" }}>{t("eduLabel")}</p>
          </div>
          <div>
            <h3>{t("eduTitle")}</h3>
            <p style={{ color: "var(--ash)", margin: ".6rem 0 0" }}>{t("eduSub")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
