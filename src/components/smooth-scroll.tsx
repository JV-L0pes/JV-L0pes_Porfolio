"use client";

import { useEffect } from "react";

/**
 * Lenis assume o scroll da pagina. Carregado sob demanda para nao entrar
 * no bundle inicial, e desligado por completo em prefers-reduced-motion.
 * Sem ele a pagina rola normal: o resto do site nao depende do Lenis.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    let cancelled = false;

    import("lenis")
      .then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({
          duration: 1.05,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
        });
        const raf = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
        (window as unknown as { __lenis?: unknown }).__lenis = lenis;
      })
      .catch(() => {
        /* sem scroll suave a pagina segue funcional */
      });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
      delete (window as unknown as { __lenis?: unknown }).__lenis;
    };
  }, []);

  return null;
}
