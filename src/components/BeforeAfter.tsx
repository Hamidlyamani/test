"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  sizes?: string;
};

export default function BeforeAfter({
  before,
  beforeAlt,
  after,
  afterAlt,
  sizes = "(min-width: 1024px) 48vw, 90vw",
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const moveTo = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full w-full cursor-ew-resize select-none overflow-hidden"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 1) moveTo(e.clientX);
      }}
    >
      {/* Après : image de fond, toujours complète */}
      <Image src={after} alt={afterAlt} fill sizes={sizes} className="object-cover" />

      {/* Avant : révélée de la gauche jusqu'à la poignée */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill sizes={sizes} className="object-cover" />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 bg-ink/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
        Avant
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-blue px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
        Après
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_0_1px_rgba(12,19,28,0.25)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Glisser pour comparer avant et après"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          tabIndex={0}
          className="pointer-events-auto absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue bg-white text-xs font-bold text-blue shadow-lg"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
        >
          ‹ ›
        </button>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 bg-ink/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white">
        Glissez pour comparer
      </span>
    </div>
  );
}
