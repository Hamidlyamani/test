import HeroSlider from "@/components/HeroSlider";
import { business } from "@/lib/business";
import { IconBadgeCert, IconShieldCheck, IconStar } from "@/components/Icons";

export default function HeroReveal() {
  return (
    <section id="hero" className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 py-16 sm:py-20 lg:min-h-[calc(100vh-61px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-6">
        <HeroCopy />
        <div className="relative lg:px-6">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div>
      <p className="mb-5 inline-block border border-ink/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
        Angers &amp; pays angevin
      </p>
      <h1 className="font-display-italic text-4xl leading-[1.05] text-ink sm:text-5xl xl:text-6xl">
        Couvreur à Angers&nbsp;: l&apos;ardoise <br className="hidden sm:inline" />comme matière première d&apos;un savoir-faire
      </h1>
      <p className="mt-6 max-w-md text-base text-slate">
        Douze ans à couvrir les toits angevins en ardoise naturelle. Julien Vasseur et son
        équipe de quatre — devis gratuit sous 48 heures.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#devis"
          className="btn-skew bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
        >
          Demander mon devis
        </a>
        <a
          href={business.phoneHref}
          className="btn-skew border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          {business.phone}
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate">
        <li className="flex items-center gap-2">
          <IconBadgeCert className="h-5 w-5 text-blue" />
          RGE Qualibat
        </li>
        <li className="flex items-center gap-2">
          <IconShieldCheck className="h-5 w-5 text-blue" />
          Décennale AXA
        </li>
        <li className="flex items-center gap-2">
          <IconStar className="h-4 w-4 text-blue" />
          {business.rating.value}/5 · {business.rating.count} avis
        </li>
      </ul>
    </div>
  );
}
