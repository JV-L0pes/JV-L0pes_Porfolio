"use client";

import { useEffect, useRef, useState } from "react";

const STACK = [
  "React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL",
  "DDD", "ADRs", "Azure", "GitHub Actions", "OpenAI API",
];

/**
 * Faixa da stack, em deriva lenta e constante.
 *
 * A versao anterior acelerava e invertia junto com a velocidade do scroll.
 * Parecia craft e era ruido: o texto fugia justo quando alguem tentava
 * ler. Agora a velocidade nao depende do scroll, caiu para um terco, e a
 * faixa para no hover e no foco de teclado.
 */
export default function Marquee() {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let offset = 0;
    let half = 0;
    let frame = 0;
    let previous = 0;

    const tick = (now: number) => {
      const el = track.current;
      if (el) {
        const delta = previous ? Math.min(now - previous, 50) : 16;
        previous = now;
        if (!half) half = el.scrollWidth / 2;
        if (!paused) {
          offset -= (delta / 1000) * 18; // 18px por segundo
          if (half && offset <= -half) offset += half;
          el.style.transform = `translate3d(${offset.toFixed(2)}px,0,0)`;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  const items = [...STACK, ...STACK];

  return (
    <div
      className="band mono"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div ref={track} className="band-track" aria-hidden>
        {items.map((label, i) => (
          <span key={`${label}-${i}`}>
            {label}
            <span className="sep"> / </span>
          </span>
        ))}
      </div>
      <span className="sr-only">
        Stack: {STACK.join(", ")}.
      </span>
    </div>
  );
}
