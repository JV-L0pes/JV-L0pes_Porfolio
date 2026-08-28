"use client";

import { useEffect } from "react";

/**
 * Revela os elementos .fade e .line em cascata conforme entram na tela.
 *
 * A rede de seguranca de 2s existe porque opacity:0 sem JS deixaria a
 * pagina invisivel. prefers-reduced-motion revela tudo de imediato.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".fade, h1, h2");
    const showAll = () => {
      targets.forEach((el) => el.classList.add("on"));
      document.querySelectorAll(".line").forEach((el) => el.classList.add("on"));
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []).filter(
            (n) =>
              n.classList.contains("fade") || n.tagName === "H1" || n.tagName === "H2",
          );
          const delay = Math.min(Math.max(siblings.indexOf(el), 0), 5) * 90;
          el.style.transitionDelay = `${delay}ms`;
          el.querySelectorAll<HTMLElement>(".line > span").forEach((span, i) => {
            span.style.transitionDelay = `${delay + i * 110}ms`;
          });
          el.classList.add("on");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    const safety = window.setTimeout(showAll, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
}
