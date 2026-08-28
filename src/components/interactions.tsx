"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useCounters } from "@/components/use-counter";
import { useReveal } from "@/components/use-reveal";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#$%&";

/**
 * Efeitos que dependem do DOM montado, reunidos num componente so para
 * nao espalhar useEffect pelas secoes. Tudo aqui e enriquecimento: sem
 * JS a pagina continua legivel e navegavel.
 */
export default function Interactions() {
  const { language } = useLanguage();

  useReveal();
  useCounters(language);

  /* ancoras internas passam pelo Lenis quando ele existe */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      const lenis = (window as unknown as {
        __lenis?: { scrollTo: (t: Element, o: object) => void };
      }).__lenis;
      if (!target || !lenis) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 1.15 });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  /* decodificacao dos rotulos mono e mola de hover, so em ponteiro fino */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;

    const cleanups: Array<() => void> = [];

    document
      .querySelectorAll<HTMLElement>(".cat-rail p:first-child, .foot h4, .impact .lbl")
      .forEach((el) => {
        let raf = 0;
        const original = el.textContent ?? "";
        const enter = () => {
          let frame = 0;
          cancelAnimationFrame(raf);
          const run = () => {
            el.textContent = original
              .split("")
              .map((ch, i) =>
                ch === " " ? " " : i < frame / 2.2 ? original[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
              )
              .join("");
            frame += 1;
            if (frame / 2.2 < original.length) raf = requestAnimationFrame(run);
            else el.textContent = original;
          };
          run();
        };
        const leave = () => {
          cancelAnimationFrame(raf);
          el.textContent = original;
        };
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          cancelAnimationFrame(raf);
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointerleave", leave);
          el.textContent = original;
        });
      });

    let cancelled = false;
    import("motion")
      .then(({ animate }) => {
        if (cancelled) return;
        const spring = (el: Element, x: number, damping: number) =>
          animate(el, { x }, { type: "spring", stiffness: 320, damping });

        document.querySelectorAll<HTMLElement>(".cat-body a.wrow").forEach((row) => {
          const h3 = row.querySelector("h3");
          if (!h3) return;
          const enter = () => spring(h3, 12, 26);
          const leave = () => spring(h3, 0, 30);
          row.addEventListener("pointerenter", enter);
          row.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            row.removeEventListener("pointerenter", enter);
            row.removeEventListener("pointerleave", leave);
          });
        });

        document.querySelectorAll<HTMLElement>(".foot a, .more a").forEach((el) => {
          const enter = () => spring(el, 5, 22);
          const leave = () => spring(el, 0, 28);
          el.addEventListener("pointerenter", enter);
          el.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            el.removeEventListener("pointerenter", enter);
            el.removeEventListener("pointerleave", leave);
          });
        });

        /* botao magnetico */
        document.querySelectorAll<HTMLElement>("[data-magnet]").forEach((btn) => {
          let mx = 0, my = 0, cx = 0, cy = 0, raf = 0;
          const run = () => {
            cx += (mx - cx) * 0.18;
            cy += (my - cy) * 0.18;
            btn.style.transform = `translate3d(${cx.toFixed(2)}px,${cy.toFixed(2)}px,0)`;
            raf = Math.abs(mx - cx) > 0.1 || Math.abs(my - cy) > 0.1 ? requestAnimationFrame(run) : 0;
          };
          const move = (e: PointerEvent) => {
            const r = btn.getBoundingClientRect();
            mx = (e.clientX - (r.left + r.width / 2)) * 0.32;
            my = (e.clientY - (r.top + r.height / 2)) * 0.45;
            if (!raf) raf = requestAnimationFrame(run);
          };
          const leave = () => {
            mx = 0; my = 0;
            if (!raf) raf = requestAnimationFrame(run);
          };
          btn.addEventListener("pointermove", move);
          btn.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            cancelAnimationFrame(raf);
            btn.removeEventListener("pointermove", move);
            btn.removeEventListener("pointerleave", leave);
            btn.style.transform = "";
          });
        });
      })
      .catch(() => {
        /* sem Motion os hovers em CSS seguem valendo */
      });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
    };
  }, [language]);

  return null;
}
