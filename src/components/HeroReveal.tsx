import Image from "next/image";
import { business } from "@/lib/business";
import { IconBadgeCert, IconShieldCheck, IconStar } from "@/components/Icons";

export default function HeroReveal() {
  return (
    <section id="hero" className="relative bg-paper">
      <div className="absolute inset-x-0 -top-[61px] bottom-0">
        <Image
          src="/images/chateau-angers-vue-aerienne.webp"
          alt="Vue aérienne du château d'Angers et de la ville"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-paper/60" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-16 sm:py-20 lg:min-h-[calc(100vh-61px)] lg:px-10 xl:px-6">
        <div>
          <HeroCopy />
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
