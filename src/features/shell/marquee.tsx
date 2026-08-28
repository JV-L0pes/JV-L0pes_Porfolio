"use client";

import { useEffect, useRef } from "react";

const STACK = [
  "React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL",
  "DDD", "ADRs", "Azure", "GitHub Actions", "OpenAI API",
];

/**
 * Faixa que acelera e inverte com a velocidade do scroll. Le a velocidade
 * do Lenis quando ele existe, e cai para o delta de scrollY quando nao.
 */
export default function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let offset = 0;
    let velocity = 0;
    let direction = -1;
    let last = window.scrollY;
    let half = 0;
    let frame = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const lenis = (window as unknown as { __lenis?: { velocity: number } }).__lenis;
      const lv = lenis ? Math.abs(lenis.velocity) : 0;
      velocity += (lv ? Math.min(lv * 2.2, 90) : Math.min(Math.abs(y - last), 90)) * 0.55;
      if (y !== last) direction = y > last ? -1 : 1;
      last = y;
    };

    const tick = () => {
      const el = track.current;
      if (el) {
        if (!half) half = el.scrollWidth / 2;
        velocity *= 0.92;
        offset += direction * (0.9 + velocity * 0.08);
        if (half) {
          if (offset <= -half) offset += half;
          if (offset > 0) offset -= half;
        }
        el.style.transform = `translate3d(${offset.toFixed(2)}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const items = [...STACK, ...STACK];

  return (
    <div className="band mono" aria-hidden>
      <div ref={track} className="band-track">
        {items.map((label, i) => (
          <span key={`${label}-${i}`}>
            {label}
            <span className="sep"> / </span>
          </span>
        ))}
      </div>
    </div>
  );
}
