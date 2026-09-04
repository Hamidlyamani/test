import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import Faq from "@/components/Faq";
import HeroReveal from "@/components/HeroReveal";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { areas, business, homeFaq, services } from "@/lib/business";
import { faqPageSchema, roofingContractorSchema } from "@/lib/schema";
import {
  IconBadgeCert,
  IconBroom,
  IconCheckCircle,
  IconClock,
  IconDocument,
  IconDroplet,
  IconEuro,
  IconFlame,
  IconGutter,
  IconHeadset,
  IconLayers,
  IconMail,
  IconMapPin,
  IconMedal,
  IconPhone,
  IconRoof,
  IconSearch,
  IconShieldCheck,
  IconSkylight,
  IconStar,
  IconThermometer,
  IconWrench,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Couvreur Angers 49 — Toiture Ardoise & Zinguerie | Couverture Vasseur",
  description:
    "Couvreur à Angers depuis 12 ans. Toiture ardoise, zinguerie, recherche de fuite. RGE Qualibat, décennale AXA, 47 avis 4,9/5. Devis gratuit sous 48 h.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Couvreur à Angers — Toiture ardoise, zinguerie et rénovation | Couverture Vasseur",
    description:
      "Julien Vasseur et son équipe refont, réparent et entretiennent les toitures à Angers et dans un rayon de 30 km. Ardoise naturelle, décennale AXA, devis gratuit sous 48 h.",
    url: "/",
    images: [{ url: "/images/og-couverture-vasseur-angers.png", width: 1600, height: 1067 }],
  },
};

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.6H24v9h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.6Z"
      />
      <path
        fill="#34A853"
        d="M24 46c6 0 10.9-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.6-3.9-12.4-9.1H4.3v5.7C8 41.6 15.4 46 24 46Z"
      />
      <path
        fill="#FBBC05"
        d="M11.6 28.2c-.5-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3C2.8 17 2 20.4 2 24s.8 7 2.3 9.9l7.3-5.7Z"
      />
      <path
        fill="#EA4335"
        d="M24 10.7c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C34.9 4.2 30 2 24 2 15.4 2 8 6.4 4.3 14.1l7.3 5.7c1.8-5.2 6.6-9.1 12.4-9.1Z"
      />
    </svg>
  );
}

const realisations = [
  {
    image: "/images/restauration-toiture-ardoise-01.webp",
    alt: "Toiture en ardoise réfectionnée sur une maison à pans de bois du quartier de la Doutre à Angers",
    title: "Réfection complète",
    place: "Quartier de la Doutre, Angers",
    text: "Toiture ardoise de 95 m² sur une maison à pans de bois du XVIIe, charpente partiellement reprise, ardoises d'origine remplacées à l'identique après validation des Bâtiments de France.",
  },
  {
    image: "/images/recherche-fuite-solin-cheminee-angers.jpg",
    alt: "Compagnon couvreur appliquant un produit d'étanchéité sur un point sensible de la toiture",
    title: "Recherche de fuite",
    place: "Rue Saint-Aubin, Angers",
    text: "Fuite récurrente signalée depuis six mois par le syndic, jamais localisée. Le problème venait d'un solin de cheminée descellé, invisible depuis l'intérieur des combles.",
  },
  {
    image: "/images/zinguerie-gouttiere-zinc-trelaze.jpg",
    alt: "Couvreurs posant des tuiles sur une toiture en cours de rénovation, échafaudage en place",
    title: "Zinguerie complète",
    place: "Trélazé",
    text: "Remplacement de 40 mètres linéaires de gouttières en zinc, chéneaux encaissés refaits pour stopper les infiltrations en façade constatées chaque automne.",
  },
  {
    image: "/images/demoussage-toiture-ardoise-beaucouze.jpg",
    alt: "Toiture en ardoise après démoussage et traitement hydrofuge à Beaucouzé",
    title: "Démoussage et hydrofuge",
    place: "Beaucouzé",
    text: "Toiture ardoise très exposée au nord, mousse installée en profondeur sur 130 m². Gain estimé de cinq à sept ans avant le prochain entretien lourd.",
  },
];

const process = [
  { title: "Premier contact", text: "Appel ou formulaire, rendez-vous fixé sous 48 heures." },
  { title: "Visite sur place", text: "Relevé complet, photos, vérification de la charpente depuis les combles." },
  { title: "Devis détaillé", text: "Poste par poste — matériaux, main d'œuvre, échafaudage, évacuation." },
  { title: "Travaux", text: "Dans les délais annoncés, point d'avancement sur les chantiers longs." },
  { title: "Réception", text: "Revue des travaux ensemble, remise de la garantie décennale et de la facture." },
  { title: "Suivi", text: "Le même numéro répond en cas de doute dans les mois qui suivent." },
];

const priceFactors = [
  { title: "L'accès au toit", text: "Une maison mitoyenne en centre-ville nécessite souvent un échafaudage sur voirie." },
  { title: "La complexité de la toiture", text: "Lucarnes, noues, cheminées : chaque point singulier ajoute du temps de pose." },
  { title: "L'état de la charpente", text: "Une reprise avant pose est parfois découverte une fois la toiture ouverte." },
  { title: "Le matériau", text: "L'ardoise naturelle coûte plus cher à l'achat, mais dure plus longtemps." },
];

const guarantees = [
  { title: "Devis gratuit sous 48 h", text: "Sans engagement, chiffré poste par poste après visite." },
  { title: "Décennale AXA", text: "Attestation remise à la réception, valable dix ans." },
  { title: "Urgence 7j/7", text: "Mise hors d'eau prioritaire le jour même pour une fuite active." },
  { title: "Diagnostic gratuit", text: "Aucun frais de visite, que le chantier se fasse ou non." },
];

const epoques = [
  {
    era: "Avant 1900",
    material: "Ardoise naturelle",
    text: "Maisons de ville mitoyennes du centre ancien : fortes pentes, lucarnes, souches de cheminée multiples. Le chantier se joue sur les points singuliers et l'échafaudage sur voirie, pas sur la surface.",
  },
  {
    era: "1900-1960",
    material: "Ardoise, combles aménagés",
    text: "Maisons bourgeoises des faubourgs. L'enjeu n'est plus la couverture mais l'écran de sous-toiture, absent à l'origine, et l'isolation ajoutée plus tard sans pare-vapeur.",
  },
  {
    era: "1960-1990",
    material: "Tuile mécanique",
    text: "Les quartiers pavillonnaires d'Angers, Avrillé et Beaucouzé. Ces toitures atteignent 40 à 50 ans : la tuile béton se désagrège en surface, les fixations lâchent côté ouest.",
  },
  {
    era: "Après 2000",
    material: "Tuile ou fibrociment",
    text: "Encore jeunes, mais jamais contrôlées. C'est l'âge où un démoussage et une reprise de zinguerie coûtent quelques centaines d'euros au lieu de quelques milliers.",
  },
];

const whyUs = [
  {
    title: "Rapidité d'intervention",
    text: "Devis détaillé sous 48 h, astreinte urgence 7 j/7 pour les fuites actives.",
    icon: <IconFlame className="h-8 w-8" />,
  },
  {
    title: "Expérience locale",
    text: "Douze ans de présence sur Angers et l'ensemble du Maine-et-Loire.",
    icon: <IconMedal className="h-8 w-8" />,
  },
  {
    title: "Savoir-faire artisanal",
    text: "Techniques traditionnelles et ardoise naturelle, sans sous-traitance.",
    icon: <IconWrench className="h-8 w-8" />,
  },
  {
    title: "Suivi & garanties",
    text: "Décennale AXA et RGE Qualibat, un interlocuteur unique jusqu'à la réception.",
    icon: <IconShieldCheck className="h-8 w-8" />,
  },
];

const serviceIcons: Record<string, ReactNode> = {
  "refection-toiture": <IconRoof className="h-7 w-7" />,
  "recherche-fuite": <IconDroplet className="h-7 w-7" />,
  "couverture-ardoise": <IconLayers className="h-7 w-7" />,
  zinguerie: <IconGutter className="h-7 w-7" />,
  demoussage: <IconBroom className="h-7 w-7" />,
  "fenetres-de-toit": <IconSkylight className="h-7 w-7" />,
  "isolation-combles": <IconThermometer className="h-7 w-7" />,
};

const stats = [
  { value: "12 ans", label: "d'expérience artisanale", icon: <IconMedal className="h-7 w-7" /> },
  { value: `${business.rating.value}/5`, label: `${business.rating.count} avis Google vérifiés`, icon: <IconStar className="h-6 w-6" /> },
  { value: "30 km", label: "zone d'intervention autour d'Angers", icon: <IconMapPin className="h-7 w-7" /> },
  { value: "7j/7", label: "astreinte urgence fuite", icon: <IconClock className="h-7 w-7" /> },
];

const artisanBadges = [
  { label: "12 ans d'expérience", icon: <IconMedal className="h-5 w-5" /> },
  { label: "RGE Qualibat", icon: <IconBadgeCert className="h-5 w-5" /> },
  { label: "Décennale AXA", icon: <IconShieldCheck className="h-5 w-5" /> },
];

const processIcons = [
  <IconPhone key="phone" className="h-6 w-6" />,
  <IconSearch key="search" className="h-6 w-6" />,
  <IconDocument key="document" className="h-6 w-6" />,
  <IconWrench key="wrench" className="h-6 w-6" />,
  <IconCheckCircle key="check" className="h-6 w-6" />,
  <IconHeadset key="headset" className="h-6 w-6" />,
];

const priceFactorIcons = [
  <IconMapPin key="access" className="h-6 w-6" />,
  <IconRoof key="complexity" className="h-6 w-6" />,
  <IconWrench key="charpente" className="h-6 w-6" />,
  <IconLayers key="materiau" className="h-6 w-6" />,
];

const guaranteeIcons = [
  <IconClock key="devis" className="h-6 w-6" />,
  <IconShieldCheck key="decennale" className="h-6 w-6" />,
  <IconFlame key="urgence" className="h-6 w-6" />,
  <IconCheckCircle key="diagnostic" className="h-6 w-6" />,
];

const realisationIcons = [
  <IconRoof key="refection" className="h-5 w-5" />,
  <IconDroplet key="fuite" className="h-5 w-5" />,
  <IconGutter key="zinguerie" className="h-5 w-5" />,
  <IconBroom key="demoussage" className="h-5 w-5" />,
];

const realisationStats = [
  "95 m² · ardoise naturelle",
  "Fuite localisée en 1 visite",
  "40 ml de gouttière posés",
  "130 m² traités",
];

// Alternating tilt like overlapping roof slates — cards straighten on hover, images stay pinned.
const cardTilts = ["-rotate-2", "rotate-2", "-rotate-3", "rotate-1", "-rotate-1", "rotate-3", "-rotate-2"];
const imageTilts = ["-rotate-3", "rotate-3"];

const contactInfo = [
  { icon: <IconPhone className="h-5 w-5" />, label: business.phone, href: business.phoneHref },
  { icon: <IconMail className="h-5 w-5" />, label: business.email, href: `mailto:${business.email}` },
  {
    icon: <IconMapPin className="h-5 w-5" />,
    label: `${business.address.street}, ${business.address.postalCode} ${business.address.city}`,
  },
  { icon: <IconClock className="h-5 w-5" />, label: "Lun-Ven 8h-18h, Sam 9h-12h · urgence 7j/7" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={roofingContractorSchema({ url: business.siteUrl })} />
      <JsonLd data={faqPageSchema(homeFaq)} />

      <HeroReveal />

      {/* Devis */}
      <section id="devis" className="relative scroll-mt-20 border-t border-slate-light">
        {/* tiled background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/devis_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        {/* glass overlay over the whole section */}
        <div className="absolute inset-0 bg-[#0c131ca9]" />
        <div className="relative z-30 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Devis
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-white sm:text-4xl">
              Un devis sous 48 heures, pas dans trois semaines
            </h2>
            <p className="mt-6 text-white/60">
              Décrivez-nous votre toiture en deux minutes. Pour une fuite active, appelez
              directement le {business.phone} : l&apos;astreinte répond 7 jours sur 7.
            </p>
            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="text-blue">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="hover:text-white">
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <DevisForm variant="glass" />
          </Reveal>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-t border-slate-light bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                <div className="text-blue">{s.icon}</div>
                <p className="font-display-italic text-3xl text-white sm:text-4xl">{s.value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le matériau */}
      <section className="border-t border-slate-light bg-paper-dark/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="lg:order-1">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 -rotate-1 overflow-hidden border-[6px] border-white shadow-xl">
                <Image
                  src="/images/materiau-ardoise.webp"
                  alt="Compagnons couvreurs posant des ardoises sur une charpente neuve"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <p className="absolute top-0 left-0 right-0 bg-ink/70 px-3 py-1.5 text-[11px] uppercase tracking-wide text-white/80">
                  Pose d&apos;ardoise sur charpente neuve
                </p>
              </div>
              <div className="absolute -bottom-6 -left-6 z-10 h-[48%] w-[58%] rotate-2 overflow-hidden border-[6px] border-white shadow-2xl sm:-bottom-8 sm:-left-8">
                <Image
                  src="/images/toits-ardoise-centre-historique-angers.jpg"
                  alt="Vue aérienne des toits en ardoise du centre historique d'Angers"
                  fill
                  sizes="(min-width: 1024px) 26vw, 52vw"
                  className="object-cover"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-ink/70 px-2 py-1 text-[10px] uppercase tracking-wide text-white/80">
                  Toits d&apos;Angers
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              La matière
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Une matière qui a construit une ville
            </h2>
            <p className="mt-6 text-slate">
              À quelques kilomètres d&apos;Angers, Trélazé a longtemps été l&apos;un des plus
              grands sites d&apos;extraction d&apos;ardoise d&apos;Europe. Cette histoire se lit
              encore sur les toits du centre-ville : la majorité des maisons de ville anciennes
              d&apos;Angers sont couvertes en ardoise, pas en tuile.
            </p>
            <p className="mt-4 text-slate">
              L&apos;ardoise naturelle supporte les pentes fortes de l&apos;architecture
              angevine, résiste à l&apos;humidité ligérienne et se répare pièce par pièce sans
              refaire tout un pan de toiture. Nous la travaillons en priorité, format et
              épaisseur choisis selon l&apos;exposition, en composant avec les exigences de
              teinte des Bâtiments de France en centre historique.
            </p>
            <p className="mt-4 text-slate">
              Concrètement, une couverture en ardoise naturelle correctement posée tient
              couramment 80 à 100 ans. Ce n&apos;est presque jamais la pierre qui lâche en
              premier : c&apos;est la fixation, le zinc des noues et des solins, et le bois qui
              la porte. Sur les toitures que nous ouvrons à Angers, l&apos;ardoise d&apos;origine
              est souvent encore saine à plus de la moitié — nous en réemployons une partie
              quand la teinte et l&apos;épaisseur le permettent, ce que les Bâtiments de France
              apprécient en secteur protégé et ce qui allège votre devis.
            </p>
            <p className="mt-4 text-slate">
              L&apos;ardoise synthétique et le fibrociment existent, coûtent moins cher et se
              posent plus vite. Nous les proposons sur certaines constructions récentes hors
              secteur protégé, en expliquant l&apos;écart plutôt qu&apos;en le taisant : trente à
              quarante ans de durée de vie contre quatre-vingts. Sur l&apos;échelle d&apos;une
              maison, le calcul n&apos;est pas celui qu&apos;on croit au moment de signer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Le bâti angevin — frise par époque */}
      <section id="bati" className="scroll-mt-20 border-t border-slate-light bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Le bâti local
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Un toit par époque
            </h2>
            <p className="mt-6 max-w-2xl text-slate">
              Angers n&apos;a pas un bâti, elle en a quatre. On ne monte pas le même chantier sur
              une maison de la Doutre et sur un pavillon de Beaucouzé — et c&apos;est la première
              chose que nous regardons en arrivant.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {epoques.map((e, i) => (
              <Reveal key={e.era} delay={i * 60} className="relative border-t-2 border-ink/15 pt-7">
                <span className="absolute -top-[7px] left-0 block h-3 w-3 bg-blue" />
                <p className="font-display-italic text-3xl leading-none text-ink">{e.era}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue">
                  {e.material}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

  {/* Pourquoi nous choisir */}
      <section className="relative overflow-hidden border-t border-slate-light bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-accueil.jpg"
            alt="Couvreur en intervention sur une charpente à Angers"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink from-40% via-ink/85 via-70% to-ink/20" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue">
              Pourquoi nous choisir
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-white sm:text-4xl">
              Pourquoi faire confiance à Couverture Vasseur ?
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              Choisir Couverture Vasseur, c&apos;est opter pour un couvreur artisan qui allie
              expertise technique et proximité humaine. Implantés au cœur d&apos;Angers depuis
              douze ans, nous intervenons dans un rayon de 30 km pour les particuliers comme pour
              les professionnels.
            </p>
            <p className="mt-4 max-w-md text-white/70">
              Notre connaissance du bâti angevin, de ses spécificités architecturales et de
              l&apos;ardoise naturelle, nous permet d&apos;adapter chaque intervention aux besoins
              réels de votre toiture.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative">
            {/* Mobile rating badge */}
            <div className="mb-5 flex -rotate-2 items-center gap-4 border-2 border-blue bg-white p-5 sm:hidden">
              <GoogleMark className="h-8 w-8 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink">
                  Avis Google
                </p>
                <p className="font-display-italic text-2xl text-ink">
                  {business.rating.value}
                  <span className="ml-2 text-sm font-sans text-slate">
                    sur {business.rating.count} avis
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2">
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white/95 pt-9 pb-9 shadow-lg transition-transform duration-300 hover:rotate-0 hover:shadow-xl ${cardTilts[i]} ${
                    i % 2 === 0 ? "pl-9 pr-16" : "pl-16 pr-9"
                  }`}
                >
                  <div className="text-blue">{item.icon}</div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Floating rating badge, desktop only — centered in the gap between the four cards */}
            <div className="absolute left-1/2 top-1/2 z-10 hidden w-[160px] rotate-3 -translate-x-1/2 -translate-y-1/2 flex-col items-center border-2 border-blue bg-white p-4 text-center shadow-xl sm:flex">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink">Avis Google</p>
              <GoogleMark className="mt-3 h-7 w-7" />
              <p className="mt-2 font-display-italic text-3xl text-ink">{business.rating.value}</p>
              <div className="mt-1 flex gap-0.5 text-blue">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate">
                sur {business.rating.count} avis vérifiés
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="scroll-mt-20 border-t border-slate-light bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold text-center uppercase tracking-[0.2em] text-slate">
              Prestations
            </p>
            <h2 className="font-display-italic text-3xl text-center leading-tight text-ink sm:text-4xl">
              Ce que nous posons, réparons et entretenons
            </h2>
            <p className="mt-4 text-center text-slate">
              De la réfection complète à l&apos;entretien courant, une équipe unique pour
              suivre votre toiture dans la durée.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-slate">
              Nous couvrons l&apos;ensemble du métier plutôt qu&apos;une seule prestation, pour
              une raison simple : une fuite se répare rarement toute seule. Derrière une
              infiltration signalée au plafond, il y a souvent un solin à refaire, une gouttière
              à reprendre et une mousse à traiter — trois interventions que nous préférons mener
              dans le même déplacement, plutôt que de vous renvoyer vers trois entreprises
              différentes.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <div
                  id={s.slug}
                  className={`group h-full scroll-mt-24 border border-slate-light bg-white p-6 shadow-sm transition-all duration-300 hover:rotate-0 hover:border-blue hover:shadow-lg ${cardTilts[i]}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-blue transition-colors group-hover:text-ink">
                      {serviceIcons[s.slug]}
                    </div>
                    <span className="font-display-italic text-3xl text-slate-light transition-colors group-hover:text-blue/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#devis"
              className="btn-skew inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Demander un devis pour cette prestation
            </a>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="border-t border-slate-light bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Réalisations
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Nos derniers chantiers en Anjou
            </h2>
            <p className="mt-6 max-w-2xl text-slate">
              Quatre chantiers récents, choisis parce qu&apos;ils couvrent quatre situations
              différentes plutôt que quatre belles photos : une réfection lourde en secteur
              protégé, une fuite que personne n&apos;arrivait à localiser, une zinguerie qui
              ruinait une façade, et un entretien préventif qui repousse une réfection de
              plusieurs années. Les surfaces, les délais et les matériaux annoncés sont ceux du
              devis signé.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 ">
            {realisations.map((r, i) => (
              <Reveal key={r.title + r.place}>
                <article
                  className={`grid grid-cols-1 items-center lg:grid-cols-2  ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] w-full overflow-hidden border-[6px] border-white shadow-xl ${imageTilts[i % 2]}`}
                  >
                    <Image
                      src={r.image}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 1024px) 48vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-blue">
                      {realisationIcons[i]}
                      <p className="text-xs font-semibold uppercase tracking-[0.2em]">{r.place}</p>
                    </div>
                    <h3 className="mt-3 font-display-italic text-2xl text-ink sm:text-3xl">
                      {r.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">{r.text}</p>
                    <p className="mt-4 inline-block border border-slate-light bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate">
                      {realisationStats[i]}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a
              href="#devis"
              className="btn-skew inline-block border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              Un projet comparable ? Demandez votre devis
            </a>
          </div>
        </div>
      </section>

      {/* L'artisan */}
      <section className="border-t border-slate-light bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className={`relative aspect-[4/3] w-full overflow-hidden border-[6px] border-white shadow-xl ${imageTilts[0]}`}>
            <Image
              src="/images/artisan-julien.jpg"
              alt="Julien Vasseur, artisan couvreur, en intervention sur une toiture"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              L&apos;artisan
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Qui monte réellement sur votre toit
            </h2>
            <p className="mt-6 text-slate">
              Julien Vasseur a commencé comme compagnon couvreur avant de reprendre
              l&apos;entreprise il y a douze ans. Il travaille avec trois compagnons qu&apos;il
              connaît depuis plusieurs chantiers — pas des intérimaires recrutés à la mission.
            </p>
            <p className="mt-4 text-slate">
              La personne qui monte sur votre toit est aussi celle qui a établi le devis et sera
              responsable de la réception des travaux avec vous. Pas de sous-traitant inconnu au
              moment de signer, pas d&apos;équipe qui change entre la visite et le chantier.
            </p>
            <p className="mt-4 text-slate">
              Concrètement, cela veut dire qu&apos;un seul numéro répond du premier appel
              jusqu&apos;à la garantie décennale, et que la personne au bout du fil sait de quel
              toit vous parlez. Cela veut dire aussi que nous refusons des chantiers : quand le
              planning est plein, nous le disons plutôt que de sous-traiter à une équipe que nous
              ne connaissons pas. C&apos;est la raison pour laquelle nous ne traitons qu&apos;une
              trentaine de réfections complètes par an — le rythme que quatre personnes peuvent
              tenir sans dégrader la finition.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {artisanBadges.map((b, i) => (
                <li
                  key={b.label}
                  className={`flex items-center gap-2 border border-slate-light bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
                >
                  <span className="text-blue">{b.icon}</span>
                  {b.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process + Prix + Garanties */}
      <section className="border-t border-slate-light bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Déroulé
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Comment se déroule un chantier
            </h2>
            <p className="mt-6 max-w-2xl text-slate">
              La crainte la plus fréquente n&apos;est pas le prix du devis, c&apos;est le devis
              qui change en cours de route. Voici donc exactement comment se passe une
              intervention, du premier appel jusqu&apos;à la remise de la décennale. Chaque étape
              a un interlocuteur unique — le même du début à la fin — et aucun poste n&apos;est
              ajouté sans un avenant que vous signez.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 40} className="border-t border-slate-light pt-5">
                <div className="flex items-center gap-3">
                  <span className="text-blue">{processIcons[i]}</span>
                  <span className="text-xs font-semibold text-blue">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Prix */}
      <section id="prix" className="scroll-mt-20 border-t border-slate-light bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Budget
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Ce que coûte une toiture, et ce qui fait varier le prix
            </h2>
            <p className="mt-6 max-w-3xl text-slate">
              Beaucoup de couvreurs évitent le sujet jusqu&apos;à la visite. Nous préférons
              donner des ordres de grandeur tout de suite, quitte à les préciser ensuite : à
              Angers, une <strong className="text-ink">réfection complète en ardoise naturelle</strong>{" "}
              sur une maison de ville se situe le plus souvent{" "}
              <strong className="text-ink">entre 12 000 et 28 000 euros</strong>, pose,
              échafaudage et évacuation compris. Une reprise ciblée — quelques ardoises, un
              solin, un faîtage à refaire — reste dans une fourchette de 800 à 3 000 euros
              selon l&apos;accès. Une recherche de fuite seule se facture le plus souvent entre
              250 et 600 euros, déduite du chantier si vous nous confiez la réparation.
            </p>
            <p className="mt-4 max-w-3xl text-slate">
              Ces chiffres ne remplacent pas un devis : ils servent à savoir si votre projet
              tient dans votre budget avant même de nous appeler. Quatre facteurs expliquent
              l&apos;essentiel de l&apos;écart entre deux devis pour une surface comparable.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {priceFactors.map((f, i) => (
              <Reveal key={f.title} delay={i * 40} className="flex gap-4 border-t border-slate-light pt-5">
                <span className="mt-0.5 text-blue">{priceFactorIcons[i]}</span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 flex items-start gap-2 max-w-3xl text-sm text-slate">
              <IconEuro className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
              <span>
                Le devis est gratuit, détaillé poste par poste — dépose, matériaux,
                échafaudage, évacuation des déchets, main d&apos;œuvre — et valable trois mois.
                Aucun poste n&apos;est ajouté en cours de chantier sans un avenant que vous
                signez : si la charpente se révèle abîmée une fois la couverture ouverte, nous
                vous montrons la zone en photo et vous chiffrons la reprise avant de continuer.
              </span>
            </p>
            <a
              href="#devis"
              className="btn-skew mt-8 inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Obtenir le chiffre exact pour ma toiture
            </a>
          </Reveal>
        </div>
      </section>

      {/* Garanties */}
      <section id="garanties" className="scroll-mt-20 border-t border-slate-light bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Garanties
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Nos garanties et nos engagements
            </h2>
            <p className="mt-6 max-w-3xl text-slate">
              Une toiture se juge sur dix ans, pas sur la semaine du chantier. Tous nos travaux
              sont couverts par la garantie décennale souscrite auprès d&apos;AXA :
              l&apos;attestation vous est remise avec la facture, elle reste valable dix ans et
              se transmet à l&apos;acquéreur si vous vendez la maison. La certification RGE
              Qualibat, elle, conditionne l&apos;accès aux aides publiques dès qu&apos;un volet
              isolation entre dans le projet.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 40} className="flex gap-4 border-t border-slate-light pt-5">
                <span className="mt-0.5 text-blue">{guaranteeIcons[i]}</span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-3xl text-sm text-slate">
              Un point que peu de gens connaissent : la décennale ne couvre pas l&apos;usure
              normale, elle couvre les désordres qui compromettent l&apos;étanchéité ou la
              solidité de l&apos;ouvrage. Concrètement, une infiltration qui apparaît trois ans
              après nos travaux est prise en charge ; une ardoise arrachée par une tempête relève
              de votre assurance habitation. Nous vous expliquons la différence à la réception,
              parce que c&apos;est au moment du sinistre qu&apos;elle compte, et parce
              qu&apos;une attestation qu&apos;on ne comprend pas ne protège personne.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Entretien */}
      <section id="entretien" className="scroll-mt-20 border-t border-slate-light bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Entretien
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Entretenir une toiture en Anjou, saison par saison
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2">
              <div className="space-y-4 text-slate">
                <p>
                  Le climat ligérien est doux et humide : peu de gel destructeur, mais une
                  humidité quasi permanente d&apos;octobre à mars et des vents d&apos;ouest qui
                  poussent la pluie sous les rives. C&apos;est le contexte idéal pour la mousse,
                  qui s&apos;installe d&apos;abord sur les pans nord et nord-ouest, retient
                  l&apos;eau contre l&apos;ardoise et accélère son vieillissement bien plus que
                  le soleil ne le ferait.
                </p>
                <p>
                  À l&apos;automne, le seul geste vraiment rentable est le nettoyage des
                  gouttières et des chéneaux. Une descente bouchée par les feuilles fait déborder
                  l&apos;eau en façade, et l&apos;infiltration qui suit n&apos;apparaît parfois
                  qu&apos;au printemps, sous forme d&apos;une auréole au plafond dont personne ne
                  comprend l&apos;origine. Sur les maisons entourées d&apos;arbres, deux passages
                  par an valent mieux qu&apos;un.
                </p>
              </div>
              <div className="space-y-4 text-slate">
                <p>
                  Après l&apos;hiver, la bonne habitude est de faire le tour de la maison et de
                  regarder le toit depuis le sol, jumelles si besoin : une ardoise glissée, une
                  tuile déplacée, un faîtage qui a bougé se voient d&apos;en bas. C&apos;est
                  aussi le moment de monter dans les combles avec une lampe et de chercher les
                  traces sombres sur le bois de charpente, qui trahissent une infiltration
                  ancienne bien avant qu&apos;elle ne traverse le plafond.
                </p>
                <p>
                  Un démoussage suivi d&apos;un traitement hydrofuge se justifie tous les huit à
                  douze ans selon l&apos;exposition, au printemps ou en début d&apos;automne, pas
                  en plein hiver. Et une visite de contrôle tous les trois à cinq ans suffit
                  largement sur une toiture saine : elle coûte le prix d&apos;un déplacement et
                  évite la plupart des chantiers d&apos;urgence que nous traitons dans la
                  panique, un dimanche de tempête.
                </p>
              </div>
            </div>
            <a
              href="#devis"
              className="btn-skew mt-10 inline-block border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              Faire contrôler ma toiture
            </a>
          </Reveal>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zone" className="scroll-mt-20 border-t border-slate-light bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Zone d&apos;intervention
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Angers et le pays angevin
            </h2>
            <p className="mt-6 max-w-md text-slate">
              Basés à Angers, nous intervenons dans un rayon d&apos;environ 30 km, toujours à
              moins de trente minutes de notre atelier.
            </p>
            <p className="mt-4 max-w-md text-slate">
              Cette limite n&apos;est pas commerciale, elle est technique : au-delà, le temps de
              trajet quotidien de l&apos;équipe et le coût de rotation de la benne se répercutent
              sur le devis, et l&apos;astreinte urgence perd son sens. Sur les sept communes
              ci-contre, nous garantissons une mise hors d&apos;eau le jour même en cas de fuite
              active, et un rendez-vous de diagnostic sous 48 heures.
            </p>
            <a
              href="#devis"
              className="btn-skew mt-8 inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Vérifier si j&apos;habite votre zone
            </a>
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-slate-light border-t border-slate-light">
              {areas.map((a) => (
                <li key={a.name} className="flex flex-wrap items-baseline gap-x-3 py-4 text-sm">
                  <IconMapPin className="h-4 w-4 shrink-0 self-center text-blue" />
                  {a.name === "Avrillé" ? (
                    <Link href="/couvreur-avrille" className="font-semibold text-blue">
                      {a.name}
                    </Link>
                  ) : (
                    <span className="font-semibold text-ink">{a.name}</span>
                  )}
                  <span className="border border-slate-light px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate">
                    {a.drive}
                  </span>
                  <span className="text-slate">{a.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-light bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Questions fréquentes
            </p>
            <h2 className="font-display-italic text-3xl leading-tight text-ink sm:text-4xl">
              Ce qu&apos;on nous demande le plus souvent
            </h2>
            <p className="mt-6 max-w-3xl text-slate">
              Ce sont les huit questions qui reviennent dans presque tous nos premiers rendez-vous
              à Angers. Nous y répondons ici avec des chiffres et des délais réels plutôt
              qu&apos;avec des formules d&apos;attente, pour que vous puissiez avancer sur votre
              projet avant même de nous appeler. Si la vôtre n&apos;y figure pas, le téléphone
              reste le moyen le plus rapide d&apos;obtenir une réponse précise.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <Faq items={homeFaq} />
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative border-t border-slate-light bg-paper">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/prestation-hero.jpg"
            alt="Toiture en ardoise refaite par Couverture Vasseur à Angers"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <Reveal className="">
            <h2 className="font-display-italic text-4xl leading-tight text-ink sm:text-5xl">
              Parlons de votre toiture
            </h2>
            <p className="mt-6 text-slate">
              Un appel suffit pour poser les bases. Réponse sous 48 heures, urgence fuite traitée
              le jour même.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
              <li className="flex items-center gap-2">
                <IconCheckCircle className="h-4 w-4 text-blue" /> Devis gratuit sous 48 h
              </li>
              <li className="flex items-center gap-2">
                <IconCheckCircle className="h-4 w-4 text-blue" /> Décennale AXA
              </li>
              <li className="flex items-center gap-2">
                <IconCheckCircle className="h-4 w-4 text-blue" /> Urgence 7j/7
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="btn-skew bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Demander mon devis gratuit
              </a>
              <a
                href={business.phoneHref}
                className="btn-skew border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                {business.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
