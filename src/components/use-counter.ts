"use client";

import { useEffect } from "react";

/**
 * Conta de zero ate o valor de data-to quando o numero entra na tela.
 * Reexecuta quando `key` muda, porque a troca de idioma remonta o texto.
 */
export function useCounters(key: unknown) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const to = Number(el.dataset.to);
          if (!Number.isFinite(to)) return;
          observer.unobserve(el);

          const duration = 900;
          let start: number | null = null;
          el.textContent = "0";
          const step = (now: number) => {
            start ??= now;
            const k = Math.min((now - start) / duration, 1);
            el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))));
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.9 },
    );

    document.querySelectorAll<HTMLElement>(".num").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
