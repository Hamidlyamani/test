import Link from "next/link";
import { areas, business, services } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-slate-light bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
              Prestations
            </p>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={
                      s.slug === "refection-toiture" || s.slug === "couverture-ardoise"
                        ? "/refection-toiture-ardoise-angers"
                        : `/#${s.slug}`
                    }
                    className="transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
              Zone d&apos;intervention
            </p>
            <ul className="space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a.name}>
                  {a.name === "Avrillé" ? (
                    <Link href="/couvreur-avrille" className="transition-colors hover:text-white">
                      {a.name}
                    </Link>
                  ) : (
                    <Link href="/#zone" className="transition-colors hover:text-white">
                      {a.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-white">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-white">
                  {business.email}
                </a>
              </li>
              <li>
                {business.address.street}, {business.address.postalCode} {business.address.city}
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
              Pages
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Couvreur à Angers (accueil)
                </Link>
              </li>
              <li>
                <Link
                  href="/refection-toiture-ardoise-angers"
                  className="transition-colors hover:text-white"
                >
                  Réfection toiture ardoise à Angers
                </Link>
              </li>
              <li>
                <Link href="/couvreur-avrille" className="transition-colors hover:text-white">
                  Couvreur à Avrillé
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {business.name} — Artisan couvreur RGE Qualibat, garantie
          décennale AXA — Angers, Maine-et-Loire. Exercice de démonstration, client fictif.
        </div>
      </div>
    </footer>
  );
}
