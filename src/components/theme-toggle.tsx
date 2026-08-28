"use client";

import { useEffect, useRef, useState } from "react";
import { CircleHalf } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";

type Theme = "light" | "dark";

/**
 * Troca de tema com revelacao circular ancorada no botao.
 *
 * Detalhes que importam:
 * - o raio e o maior entre a distancia ao canto oposto e a diagonal
 *   inteira, com 25% de folga. Cobrir de menos deixa um corte visivel
 *   no fim; cobrir demais nao custa nada.
 * - a duracao acompanha a folga para a varredura visivel manter
 *   velocidade constante em qualquer tamanho de tela.
 * - theme-swapping desliga toda transicao CSS durante a troca, senao
 *   elas competem com o circulo e a pagina salta no fim.
 */
export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>("light");
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) ?? "light");
  }, []);

  const apply = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      window.localStorage.setItem("jv-theme", next);
    } catch {
      /* ignora */
    }
  };

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !document.startViewTransition || !button.current) {
      apply(next);
      return;
    }

    const rect = button.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const corner = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const radius = Math.max(corner, Math.hypot(window.innerWidth, window.innerHeight)) * 1.25;
    const duration = Math.round(400 * (radius / corner));

    root.classList.add("vt-theme", "theme-swapping");
    const transition = document.startViewTransition(() => apply(next));
    transition.finished.finally(() => root.classList.remove("vt-theme", "theme-swapping"));
    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        { duration, easing: "linear", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  return (
    <button
      ref={button}
      type="button"
      className="sq"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? t("themeToLight") : t("themeToDark")}
    >
      <CircleHalf />
    </button>
  );
}
