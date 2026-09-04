import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { business, prestationFaq } from "@/lib/business";
import { faqPageSchema, roofingContractorSchema, serviceSchema } from "@/lib/schema";
import {
  IconAlertTriangle,
  IconCheckCircle,
  IconLayers,
  IconMedal,
  IconRoof,
  IconShieldCheck,
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

const ardoiseDetails = [
  {
    title: "Le format et l'épaisseur",
    text: "En Anjou, le 32×22 et le 30×20 couvrent l'essentiel des maisons de ville. Plus la pente est faible, plus le recouvrement doit être important, donc plus il faut d'ardoises au mètre carré : c'est ce calcul, et pas la surface brute, qui fixe la quantité au devis. L'épaisseur courante va de 3,5 à 5 mm ; nous montons en épaisseur sur les toits très exposés à l'ouest.",
    icon: <IconLayers className="h-6 w-6" />,
  },
  {
    title: "Crochet inox ou clou cuivre",
    text: "La pose au crochet inox est plus rapide, se répare pièce par pièce et laisse le crochet visible en bas d'ardoise. La pose au clou, traditionnelle, donne un plan de toiture plus net et reste souvent exigée par les Bâtiments de France en secteur protégé. Nous pratiquons les deux et vous disons laquelle votre situation impose.",
    icon: <IconWrench className="h-6 w-6" />,
  },
  {
    title: "L'écran de sous-toiture",
    text: "Absent sur la quasi-totalité des maisons angevines d'avant 1970. C'est la couche qui protège la charpente le jour où une ardoise se fissure, et la seule qui vous évite de découvrir l'infiltration trois ans après. Nous ne posons pas de couverture neuve sans écran, même quand le devis serait moins cher sans.",
    icon: <IconShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Le zinc des points singuliers",
    text: "Noues, solins, entourages de cheminée et de fenêtre de toit : ces raccords concentrent la majorité des fuites que nous diagnostiquons. Ils se façonnent sur place, au zinc, et c'est le poste où la différence entre deux couvreurs se voit à dix ans, pas à la réception.",
    icon: <IconRoof className="h-6 w-6" />,
  },
];

const charpenteFindings = [
  {
    title: "Le voligeage et le liteaunage",
    text: "Les lattes sur lesquelles l'ardoise s'accroche sont la première chose que l'on découvre. Sur une maison angevine ancienne, il n'est pas rare d'en remplacer 20 à 40 % : le bois travaille sous les fuites anciennes, même quand la charpente porteuse est saine.",
  },
  {
    title: "Les chevrons et les pannes",
    text: "La structure elle-même est rarement à refaire entièrement. On reprend en général des sections localisées, en about de chevron près de l'égout ou autour d'une souche de cheminée, là où l'eau a stagné le plus longtemps.",
  },
  {
    title: "Insectes et humidité",
    text: "Capricornes et vrillettes se repèrent aux trous de sortie et à la vermoulure. Un traitement curatif par injection se décide au cas par cas, et se fait toujours toiture ouverte : c'est le seul moment où le bois est réellement accessible.",
  },
];

const devisChecklist = [
  {
    title: "Le détail poste par poste",
    text: "Un devis sérieux sépare la dépose, l'évacuation, l'échafaudage, la fourniture et la pose. Un devis « réfection de toiture : 18 000 € » ne vous permet de comparer rien du tout, et ne vous protège pas si un poste manque.",
  },
  {
    title: "La marque et l'origine de l'ardoise",
    text: "Ardoise naturelle d'Espagne, du Portugal, ou ardoise fibrociment : l'écart de durée de vie va du simple au double. Le devis doit nommer le produit, pas dire « ardoise ».",
  },
  {
    title: "L'écran de sous-toiture, présent ou absent",
    text: "C'est la ligne la plus souvent supprimée pour faire baisser un prix. Si un devis est nettement moins cher qu'un autre, c'est très souvent là que se trouve la différence.",
  },
  {
    title: "L'attestation décennale à jour",
    text: "Demandez-la, vérifiez que l'activité « travaux de couverture » y figure nommément et que la période couvre la date du chantier. Une attestation périmée n'a aucune valeur le jour d'un sinistre.",
  },
  {
    title: "Qui monte réellement sur le toit",
    text: "Demandez si l'entreprise sous-traite. Ce n'est pas disqualifiant en soi, mais vous devez savoir qui sera responsable devant vous à la réception.",
  },
];

const readNext = [
  {
    href: "/#recherche-fuite",
    label: "Recherche et réparation de fuite à Angers",
    text: "pour un désordre localisé plutôt qu'une réfection complète.",
  },
  {
    href: "/#zinguerie",
    label: "Zinguerie : gouttières, chéneaux, descentes",
    text: "l'évacuation d'eau qui protège votre réfection neuve.",
  },
  {
    href: "/#demoussage",
    label: "Démoussage et traitement hydrofuge",
    text: "pour prolonger la durée de vie d'une toiture qui n'a pas encore besoin d'être refaite.",
  },
  {
    href: "/couvreur-avrille",
    label: "Couvreur à Avrillé",
    text: "notre intervention sur les toitures pavillonnaires de la périphérie angevine.",
  },
  {
    href: "/#zone",
    label: "Notre zone d'intervention autour d'Angers",
    text: "les sept communes où nous nous déplaçons chaque semaine.",
  },
  {
    href: "/#isolation-combles",
    label: "Isolation de combles",
    text: "souvent réalisée en même temps que la réfection, et éligible aux aides grâce au RGE.",
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
      <JsonLd data={roofingContractorSchema({ url: PAGE_URL, areaServed: ["Angers"] })} />
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
                src="/images/ardoises-fissurees-faitage-descelle-angers.jpg"
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Matériau</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            L&apos;ardoise d&apos;Anjou : ce qu&apos;on pose vraiment sur un toit angevin
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Trélazé, à dix minutes d&apos;Angers, a été l&apos;un des plus grands sites
            d&apos;extraction d&apos;ardoise d&apos;Europe pendant plus d&apos;un siècle. Les
            carrières sont fermées, mais le bâti qu&apos;elles ont couvert est toujours là : la
            majorité des maisons anciennes du centre d&apos;Angers sont en ardoise, pas en tuile,
            et c&apos;est ce qui rend la région différente du reste du Val de Loire. Quand nous
            parlons d&apos;ardoise naturelle, quatre choix techniques se cachent derrière le mot,
            et ce sont eux qui font la durée de vie de votre toiture.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ardoiseDetails.map((d, i) => (
              <div
                key={d.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{d.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-slate">
            L&apos;ardoise synthétique et le fibrociment existent, coûtent moins cher et se
            posent plus vite. Nous les proposons sur certaines constructions récentes hors
            secteur protégé, en expliquant l&apos;écart : une ardoise naturelle correctement
            posée tient couramment 80 à 100 ans, une ardoise fibrociment 30 à 40. Sur la durée
            de vie d&apos;une maison, le calcul n&apos;est pas celui qu&apos;on croit au moment
            de signer.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Charpente</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Ce qu&apos;on découvre en ouvrant la toiture
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            C&apos;est le moment que redoutent tous les propriétaires, et la principale source de
            mauvaise surprise sur un chantier de réfection : la charpente ne se juge pleinement
            qu&apos;une fois la couverture déposée. Nous inspectons systématiquement depuis les
            combles avant de chiffrer, ce qui permet d&apos;anticiper l&apos;essentiel — mais
            l&apos;about de chevron sous l&apos;égout, lui, ne se voit pas de l&apos;intérieur.
            Voici les trois cas que nous rencontrons le plus souvent sur le bâti angevin ancien.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {charpenteFindings.map((c, i) => (
              <div
                key={c.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-slate">
            Notre règle est simple et elle est écrite au devis : aucune reprise de charpente
            n&apos;est engagée sans votre accord. Nous arrêtons, nous photographions, nous vous
            chiffrons l&apos;avenant, et vous décidez. Sur une maison de ville angevine
            classique, une reprise partielle de voligeage et de quelques abouts représente
            généralement 800 à 2 500 euros — un ordre de grandeur qu&apos;il vaut mieux avoir en
            tête au moment de fixer son budget que découvrir en cours de chantier.
          </p>
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
          <p className="mt-8 max-w-3xl text-slate">
            En ordre de grandeur, sur Angers et son agglomération : comptez{" "}
            <strong className="text-ink">12 000 à 28 000 euros</strong> pour une réfection
            complète en ardoise naturelle sur une maison de ville, échafaudage et évacuation
            compris ; <strong className="text-ink">800 à 3 000 euros</strong> pour une reprise
            ciblée ; <strong className="text-ink">250 à 600 euros</strong> pour une recherche de
            fuite seule, déduite du chantier si vous nous confiez la réparation. Le devis reste
            gratuit et il est le seul chiffre qui engage.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Comparer</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Ce qu&apos;il faut comparer entre deux devis de couvreur
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Vous allez probablement demander deux ou trois devis, et c&apos;est une bonne chose.
            Le problème, c&apos;est que deux devis de couverture ne se comparent presque jamais
            ligne à ligne : les postes ne portent pas les mêmes noms, et l&apos;écart de prix
            vient rarement de la marge. Voici ce que nous vous conseillons de vérifier — y
            compris sur le nôtre.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devisChecklist.map((d, i) => (
              <li
                key={d.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <IconCheckCircle className="h-6 w-6 text-blue" />
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-slate">
            Un devis nettement en dessous des autres n&apos;est pas une bonne affaire : c&apos;est
            un devis auquel il manque une ligne. Dans neuf cas sur dix que nous voyons repasser
            en réparation, c&apos;était l&apos;écran de sous-toiture ou la reprise des points
            singuliers en zinc.
          </p>
        </div>
      </section>

      <section
        className="relative bg-ink"
        style={{
          backgroundImage: "url('/images/fond-ardoise-texture.jpg')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-20">
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
            className="btn-skew mt-8 inline-block border border-white bg-white px-6 py-3 text-sm font-semibold text-blue transition-colors hover:bg-blue hover:text-white"
          >
            On s&apos;occupe des démarches — demander un devis
          </a>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Durée de vie</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Combien de temps tient une toiture en ardoise, et comment la faire durer
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2">
            <div className="space-y-4 text-slate">
              <p>
                Une couverture en ardoise naturelle correctement posée dure couramment 80 à 100
                ans. Ce n&apos;est pas l&apos;ardoise qui lâche en premier : c&apos;est la
                fixation, le zinc des noues et des solins, et le bois qui la porte. Sur les
                toitures que nous refaisons à Angers, l&apos;ardoise d&apos;origine est souvent
                encore saine à 60 % — nous en réemployons une partie quand la teinte et
                l&apos;épaisseur le permettent, notamment en secteur ABF où l&apos;aspect
                d&apos;origine doit être conservé.
              </p>
              <p>
                Après une réfection complète, la toiture ne demande presque rien pendant une
                dizaine d&apos;années. Le premier entretien utile est le nettoyage des
                gouttières, à l&apos;automne, surtout si des arbres surplombent la maison. Le
                premier démoussage se justifie vers huit à douze ans selon l&apos;exposition des
                pans nord.
              </p>
            </div>
            <div className="space-y-4 text-slate">
              <p>
                Deux erreurs abrègent la vie d&apos;une toiture ardoise plus sûrement que le
                temps. La première est le nettoyage haute pression : la lance décolle le film de
                surface, ouvre la porosité de l&apos;ardoise et fait entrer l&apos;eau — nous
                démoussons à la brosse et au produit, jamais au karcher. La seconde est de
                marcher directement sur la couverture : une ardoise supporte mal une charge
                ponctuelle, et une intervention d&apos;antenniste ou de ramoneur mal préparée
                fissure plus de toitures que les tempêtes.
              </p>
              <p>
                Enfin, une fuite ne se répare pas seule et ne reste pas stable. Entre le moment
                où l&apos;eau passe et celui où elle atteint le plafond, elle a traversé
                l&apos;isolant et le bois de charpente. Traiter une infiltration dans le mois
                coûte quelques centaines d&apos;euros ; attendre deux hivers transforme le même
                désordre en reprise de charpente.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#devis"
              className="btn-skew inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Faire diagnostiquer ma toiture
            </a>
            <span className="flex items-center gap-2 text-sm text-slate">
              <IconMedal className="h-5 w-5 text-blue" />
              12 ans de chantiers en ardoise sur Angers et sa couronne
            </span>
          </div>
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
            {readNext.map((r, i) => (
              <li
                key={r.label}
                className={`border border-slate-light bg-white px-5 py-4 text-sm text-slate transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <Link href={r.href} className="font-semibold text-blue hover:text-ink">
                  {r.label}
                </Link>{" "}
                — {r.text}
              </li>
            ))}
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
