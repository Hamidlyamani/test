"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Inclinaison de la carte, desktop uniquement. Une seule valeur a changer.
const TILT = "lg:rotate-[-10deg] lg:scale-95";
const DELAY = 4500;
const FADE = 1100; // duree du fondu, en ms

const slides = [
  {
    src: "/images/restauration-toiture-ardoise-01.webp",
    alt: "Réfection d'une toiture en ardoise naturelle sur une maison de ville angevine, lucarnes et zinguerie reprises",
    caption: "Réfection ardoise — maison de ville, Angers",
  },
  {
    src: "/images/materiau-ardoise.webp",
    alt: "Compagnons couvreurs posant des ardoises sur un liteaunage neuf",
    caption: "Pose d'ardoise sur liteaunage neuf",
  },
  {
    src: "/images/toits-ardoise-centre-historique-angers.jpg",
    alt: "Les toits en ardoise du centre historique d'Angers vus depuis les hauteurs",
    caption: "Les toits d'ardoise du centre d'Angers",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      DELAY,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className={`relative aspect-[4/3] w-full border-[6px] border-white shadow-2xl transition-transform duration-500 lg:aspect-[4/5] ${TILT}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-all ease-out ${
              i === index
                ? "scale-100 opacity-100"
                : "scale-[1.06] opacity-0"
            }`}
            style={{ transitionDuration: `${FADE}ms` }}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        ))}

        <p className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 text-[11px] uppercase tracking-wide text-white/80">
          {slides[index].caption}
        </p>

        <div className="absolute right-3 top-3 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Voir : ${s.caption}`}
              aria-current={i === index}
              className={`h-2 w-6 transition-colors ${
                i === index ? "bg-blue" : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
