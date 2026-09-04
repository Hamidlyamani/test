import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { business, prestationFaq } from "@/lib/business";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import {
  IconAlertTriangle,
  IconCheckCircle,
  IconClock,
  IconDocument,
  IconEuro,
  IconMail,
  IconMapPin,
  IconPhone,
  IconScale,
  IconSearch,
  IconWrench,
} from "@/components/Icons";

const PAGE_URL = `${business.siteUrl}/refection-toiture-ardoise-angers`;

export const metadata: Metadata = {
  title: "Réfection Toiture Ardoise Angers 49",
  description:
    "Réfection de toiture en ardoise naturelle à Angers : diagnostic gratuit, devis détaillé sous 48 h, décennale AXA. Reprise ciblée ou toiture complète, on vous dit ce qui est vraiment nécessaire.",
  alternates: { canonical: "/refection-toiture-ardoise-angers" },
  openGraph: {
    title: "Réfection de toiture en ardoise à Angers | Couverture Vasseur",
    description:
      "Signes qui doivent alerter, déroulé du chantier, démarches ABF et copropriété : tout ce qu'il faut savoir avant de refaire sa toiture en ardoise à Angers.",
    url: "/refection-toiture-ardoise-angers",
    images: [{ url: "/images/prestation-hero.jpg", width: 1600, height: 1067 }],
  },
};

const alertSigns = [
  {
    title: "Des ardoises glissées ou manquantes",
    text: "Visibles depuis la rue ou le jardin voisin, elles laissent l'écran de sous-toiture — ou pire, le voligeage — exposé aux intempéries à chaque pluie forte.",
  },
  {
    title: "Des auréoles sous les combles",
    text: "Un cerne brunâtre sur le bois de charpente ou l'isolant signale une infiltration en cours, parfois depuis plusieurs mois avant d'être remarquée.",
  },
  {
    title: "Un faîtage descellé",
    text: "Le mortier qui fixe les faîtières se fissure avec le temps et les écarts de température. Un faîtage qui bouge au vent laisse passer l'eau par le haut du toit.",
  },
  {
    title: "Des solins fissurés autour des cheminées",
    text: "Le point de jonction entre une cheminée et la couverture est la cause la plus fréquente de fuite que nous diagnostiquons, bien plus souvent que l'ardoise elle-même.",
  },
  {
    title: "Une sensation de froid ou d'humidité en soupente",
    text: "Signe fréquent d'un écran de sous-toiture absent ou dégradé, invisible sans monter dans les combles.",
  },
];

const steps = [
  { title: "Visite de relevé", text: "Mesure exacte de la surface, de la pente, inspection depuis les combles quand c'est possible, photos des points singuliers." },
  { title: "Devis détaillé", text: "Chiffrage poste par poste — dépose, matériaux, échafaudage, évacuation des déchets, main d'œuvre — remis sous 48 heures." },
  { title: "Démarches administratives", text: "Constitution du dossier de déclaration préalable, et si nécessaire, dépôt auprès des Bâtiments de France." },
  { title: "Installation du chantier", text: "Pose de l'échafaudage, protection des abords, benne pour l'évacuation des ardoises déposées." },
  { title: "Réalisation des travaux", text: "Dépose, reprise de charpente si besoin (avec validation préalable), pose de l'écran de sous-toiture et de la couverture neuve." },
  { title: "Réception avec vous", text: "Vérification conjointe de la toiture terminée, remise de l'attestation décennale AXA et de la facture détaillée." },
];

const costFactors = [
  "L'accès à la toiture pèse souvent plus lourd qu'on ne l'imagine : une maison mitoyenne en centre-ville nécessite un échafaudage sur voirie avec autorisation municipale, alors qu'une maison avec jardin permet un montage plus rapide et moins coûteux.",
  "La complexité de la toiture — nombre de pans, présence de lucarnes, de noues, de cheminées multiples — augmente le temps de pose et de finition, indépendamment de la surface totale.",
  "L'état réel de la charpente, souvent découvert seulement une fois la couverture déposée, peut ajouter un poste de reprise de bois non prévu au devis initial.",
  "Le choix ou l'imposition du matériau joue enfin un rôle direct : l'ardoise naturelle coûte plus cher à l'achat que la tuile ou l'ardoise synthétique, mais dure généralement plusieurs décennies de plus.",
];

const adminSteps = [
  {
    title: "Déclaration préalable de travaux",
    text: "Obligatoire dans la quasi-totalité des cas dès que l'aspect extérieur du toit change, même pour un remplacement à l'identique. Délai d'instruction généralement d'un mois.",
    icon: <IconDocument className="h-6 w-6" />,
  },
  {
    title: "Avis des Bâtiments de France",
    text: "Si votre maison se situe dans le secteur sauvegardé du centre historique d'Angers ou dans le champ de visibilité d'un monument classé, l'ABF doit valider le matériau et souvent la teinte exacte de l'ardoise.",
    icon: <IconScale className="h-6 w-6" />,
  },
  {
    title: "Vote en assemblée de copropriété",
    text: "Pour un immeuble, la réfection de toiture nécessite un vote en assemblée générale. Nous fournissons un devis détaillé exploitable directement par le syndic.",
    icon: <IconCheckCircle className="h-6 w-6" />,
  },
  {
    title: "Autorisation d'échafaudage sur le domaine public",
    text: "Quand la toiture donne directement sur la rue, une autorisation de voirie est nécessaire. Nous nous chargeons de cette démarche auprès de la mairie d'Angers.",
    icon: <IconMapPin className="h-6 w-6" />,
  },
];

const stepIcons = [
  <IconSearch key="visite" className="h-6 w-6" />,
  <IconDocument key="devis" className="h-6 w-6" />,
  <IconScale key="demarches" className="h-6 w-6" />,
  <IconWrench key="installation" className="h-6 w-6" />,
  <IconWrench key="realisation" className="h-6 w-6" />,
  <IconCheckCircle key="reception" className="h-6 w-6" />,
];

// Alternating tilt like overlapping roof slates — cards straighten on hover, images stay pinned.
const cardTilts = ["-rotate-2", "rotate-2", "-rotate-3", "rotate-1", "-rotate-1", "rotate-3"];
const imageTilts = ["-rotate-2", "rotate-2"];

const contactInfo = [
  { icon: <IconPhone className="h-5 w-5" />, label: business.phone, href: business.phoneHref },
  { icon: <IconMail className="h-5 w-5" />, label: business.email, href: `mailto:${business.email}` },
  { icon: <IconMapPin className="h-5 w-5" />, label: `${business.address.street}, ${business.address.postalCode} ${business.address.city}` },
  { icon: <IconClock className="h-5 w-5" />, label: "Lun-Ven 8h-18h, Sam 9h-12h · urgence 7j/7" },
];

export default function RefectionToitureArdoiseAngers() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          url: PAGE_URL,
          name: "Réfection de toiture en ardoise à Angers",
          description:
            "Réfection complète ou reprise ciblée de toiture en ardoise naturelle à Angers : dépose, reprise de charpente si nécessaire, écran de sous-toiture, pose d'ardoise. Devis gratuit sous 48 h.",
          areaServedName: "Angers",
        })}
      />
      <JsonLd data={faqPageSchema(prestationFaq)} />

      <section id="hero" className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Réfection de toiture en ardoise à Angers
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Douze ans d&apos;expérience sur les toitures ardoise du centre-ville et de
              l&apos;agglomération angevine. Diagnostic sur place gratuit, devis détaillé sous 48
              heures, garantie décennale AXA sur l&apos;ensemble du chantier.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="btn-skew bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Demander mon devis gratuit
              </a>
              <a
                href={business.phoneHref}
                className="btn-skew border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                {business.phone}
              </a>
            </div>
          </div>
          <div className={`relative aspect-[4/3] overflow-hidden border-[6px] border-white shadow-xl ${imageTilts[0]}`}>
            <Image
              src="/images/prestation-hero.jpg"
              alt="Couvreurs posant des tuiles sur une toiture en cours de réfection, échafaudage en place"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-ink/70 px-3 py-1.5 text-[11px] uppercase tracking-wide text-white/80">
              Chantier de réfection, Angers
            </p>
          </div>
        </div>
      </section>

      <section id="devis" className="scroll-mt-20 bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Devis</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Un devis avant même d&apos;en discuter longuement
            </h2>
            <p className="mt-4 text-slate">
              Si vous êtes sur cette page, vous savez probablement déjà que votre toiture a
              besoin d&apos;une réfection, totale ou partielle. Décrivez-nous votre situation —
              âge approximatif de la toiture, signes constatés, surface si vous la connaissez —
              et nous fixons un rendez-vous de diagnostic sous 48 heures.
            </p>
            <p className="mt-4 text-slate">
              Le déplacement, le relevé et le chiffrage sont gratuits, que vous donniez suite ou
              non au devis.
            </p>
            <ul className="mt-8 space-y-3 border-t border-slate-light pt-6">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-center gap-3 text-sm text-slate">
                  <span className="text-blue">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="hover:text-ink">
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <DevisForm />
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Diagnostic</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Les signes qui doivent vous alerter
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Une toiture qui a besoin d&apos;une réfection ne le crie pas toujours de façon
            évidente. Voici ce que nous retrouvons le plus souvent en centre-ville
            d&apos;Angers et alentours, par ordre de gravité croissante :
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {alertSigns.map((s, i) => (
                <li
                  key={s.title}
                  className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
                >
                  <IconAlertTriangle className="h-6 w-6 text-blue" />
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
                </li>
              ))}
            </ul>
            <div className={`relative aspect-[3/5] overflow-hidden border-[6px] border-white shadow-xl ${imageTilts[1]}`}>
              <Image
                src="/images/img2.jpeg"
                alt="Ardoises fissurées et faîtage descellé sur une toiture ancienne à Angers"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-6 text-slate">
            Si vous reconnaissez un ou plusieurs de ces signes, un diagnostic rapide évite
            souvent que le problème ne s&apos;aggrave à la prochaine grosse pluie.
          </p>
          <a
            href="#devis"
            className="btn-skew mt-6 inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Je reconnais ces signes — demander un diagnostic
          </a>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.8fr_1fr]">
          <div className={`relative aspect-[4/4] overflow-hidden border-[6px] border-white shadow-xl ${imageTilts[0]}`}>
            <Image
              src="/images/pose-ardoise.jpg"
              alt="Couvreur harnaché appliquant un produit d'étanchéité lors d'une reprise de toiture"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Intervention</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Ce que nous faisons concrètement, dans l&apos;ordre
            </h2>
            <p className="mt-4 text-slate">
              Une réfection complète suit toujours la même logique, adaptée à ce que révèle la
              toiture une fois ouverte : dépose de la couverture existante, ardoise par ardoise
              quand certaines peuvent être réemployées, ou en dépose complète si l&apos;état ne
              le permet pas.
            </p>
            <p className="mt-4 text-slate">
              Vérification du voligeage et du liteaunage — les lattes de bois sur lesquelles les
              ardoises viennent s&apos;accrocher — avec remplacement des éléments attaqués par
              l&apos;humidité ou les insectes. Pose d&apos;un écran de sous-toiture haute
              performance, la couche qui protège la charpente même si une ardoise venait à se
              fissurer plus tard.
            </p>
            <p className="mt-4 text-slate">
              Reprise des points singuliers : noues, arêtiers, faîtage, solins de cheminée — les
              zones où se concentrent la majorité des fuites sur une toiture ancienne. Pose de la
              couverture en ardoise naturelle, pureau et recouvrement calculés selon la pente
              exacte de votre toit, clouage adapté à l&apos;exposition au vent. Finitions :
              rives, closoirs, raccords de zinguerie, avant la réception du chantier avec vous.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Notre conseil</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Reprise ciblée ou réfection totale : comment trancher
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            C&apos;est la question que la plupart des propriétaires se posent avant même de nous
            appeler, et nous préférons y répondre franchement plutôt que de systématiquement
            proposer le chantier le plus large.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[0]}`}>
              <h3 className="font-display text-base font-semibold text-ink">
                Une reprise ciblée suffit
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Quand les désordres sont localisés : une zone de fuite identifiée précisément,
                quelques ardoises fissurées ou glissées sur une portion limitée, un solin ou un
                faîtage à refaire. Elle coûte moins cher et se règle en quelques jours.
              </p>
            </div>
            <div className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[1]}`}>
              <h3 className="font-display text-base font-semibold text-ink">
                La réfection complète devient nécessaire
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Quand la toiture cumule plusieurs points faibles, dépasse 45 à 50 ans d&apos;âge,
                ou que l&apos;écran de sous-toiture est absent — fréquent sur les maisons
                angevines des années 1960-1980 jamais rénovées. Multiplier les réparations
                revient souvent plus cher, sur cinq ans, qu&apos;une réfection unique.
              </p>
            </div>
          </div>
          <p className="mt-6 text-slate">
            Le diagnostic sur place permet de trancher avec vous, sans orienter systématiquement
            vers le devis le plus élevé.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Déroulé</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Le déroulé du chantier, étape par étape
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-blue">{stepIcons[i]}</span>
                  <span className="font-display text-2xl font-semibold text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Tarif</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Ce qui fait varier le coût de votre réfection
          </h2>
          <div className="mt-8 space-y-4">
            {costFactors.map((text) => (
              <p key={text} className="flex gap-3 text-slate">
                <IconEuro className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <span>{text}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="back"  style={{
            backgroundImage: "url('/images/photo.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundColor: "ink"
          }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20 z-999 relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Démarches</p>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Les démarches à régler avant de commencer
          </h2>
          <p className="mt-4 max-w-3xl text-gray-200">
            À Angers, la réfection de toiture touche presque toujours à une démarche
            administrative, plus ou moins lourde selon la localisation de votre maison :
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {adminSteps.map((a, i) => (
              <div
                key={a.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{a.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{a.text}</p>
              </div>
            ))}
          </div>
          <a
            href="#devis"
            className="btn-skew mt-8 inline-white border border-white px-6 py-3 text-sm font-semibold text-blue transition-colors hover:border-blue hover:text-blue"
          >
            On s&apos;occupe des démarches — demander un devis
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">FAQ</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Les questions qu&apos;on nous pose sur ce chantier
          </h2>
          <div className="mt-10">
            <Faq items={prestationFaq} />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Pour aller plus loin</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            À lire ensuite
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className={`border border-slate-light bg-white px-5 py-4 text-sm text-slate transition-transform duration-300 hover:rotate-0 ${cardTilts[0]}`}>
              Recherche et réparation de fuite — pour un désordre localisé plutôt qu&apos;une
              réfection complète.
            </li>
            <li className={`border border-slate-light bg-white px-5 py-4 text-sm text-slate transition-transform duration-300 hover:rotate-0 ${cardTilts[1]}`}>
              Zinguerie : gouttières, chéneaux, descentes — l&apos;évacuation d&apos;eau qui
              protège votre réfection neuve.
            </li>
            <li className={`border border-slate-light bg-white px-5 py-4 text-sm text-slate transition-transform duration-300 hover:rotate-0 ${cardTilts[2]}`}>
              Démoussage et traitement hydrofuge — pour prolonger la durée de vie d&apos;une
              toiture qui n&apos;a pas encore besoin d&apos;être refaite.
            </li>
            <li className={`border border-slate-light bg-white px-5 py-4 text-sm text-slate transition-transform duration-300 hover:rotate-0 ${cardTilts[3]}`}>
              <Link href="/couvreur-avrille" className="font-semibold text-blue">
                Couvreur à Avrillé
              </Link>{" "}
              — notre intervention sur les toitures pavillonnaires de la périphérie angevine.
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#devis"
              className="btn-skew inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Demander mon devis gratuit
            </a>
            
          </div>
        </div>
      </section>
    </>
  );
}
