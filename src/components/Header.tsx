"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/refection-toiture-ardoise-angers", label: "Réfection toiture ardoise" },
  { href: "/couvreur-avrille", label: "Couvreur à Avrillé" },
];

const HERO_SCROLL_THRESHOLD = 0.5;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function update() {
      const heroEl = document.getElementById("hero");
      if (!heroEl) {
        setScrolled(window.scrollY > 10);
        return;
      }
      const progress = window.scrollY / heroEl.offsetHeight;
      setScrolled(progress >= HERO_SCROLL_THRESHOLD);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-slate-light bg-white/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-0">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo-vasseur.png"
            alt="Couverture Vasseur — artisan couvreur à Angers"
            width={64}
            height={38}
            className="h-16 w-auto"
            priority
          />
         
        </Link>

        <nav className="hidden lg:flex items-center gap-6 py-3 text-sm font-medium text-slate">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="btn-skew inline-flex shrink-0 items-center gap-2 bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
          <span className="hidden sm:inline">{business.phone}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}
