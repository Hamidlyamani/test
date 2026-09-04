import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { avrilleFaq, business } from "@/lib/business";
import { faqPageSchema, roofingContractorSchema } from "@/lib/schema";
import {
  IconCheckCircle,
  IconClock,
  IconDroplet,
  IconEuro,
  IconFlame,
  IconDocument,
  IconGutter,
  IconLayers,
  IconLeaf,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRoof,
  IconScale,
  IconSearch,
  IconWrench,
} from "@/components/Icons";

const PAGE_URL = `${business.siteUrl}/couvreur-avrille`;

export const metadata: Metadata = {
  title: "Couvreur Avrillé 49 — Toiture Ardoise & Tuile",
  description:
    "Couvreur à Avrillé : réfection et entretien de toiture, ardoise et tuile mécanique, pavillons et maisons de bourg. Devis gratuit sous 48 h, décennale AXA, intervention rapide.",
  alternates: { canonical: "/couvreur-avrille" },
  openGraph: {
    title: "Couvreur à Avrillé : toiture ardoise et tuile pour pavillons et bourg | Couverture Vasseur",
    description:
      "À Avrillé, entre pavillons des années 1970-1990 et maisons de bourg ancien, chaque toiture pose des questions différentes. Notre intervention adaptée au bâti local.",
    url: "/couvreur-avrille",
    images: [{ url: "/images/toiture-ardoise-velux-echafaudage-angers.jpg", width: 900, height: 1200 }],
  },
};

const pathologies = [
  {
    title: "Sur les pavillons des années 1970-1990",
    text: "La tuile mécanique en béton, très utilisée à l'époque, se dégrade progressivement après 40 ans : micro-fissures, perte d'étanchéité de surface, tuiles qui se descellent aux points de fixation. La sous-toiture, quand elle existe, est souvent d'un modèle ancien devenu poreux.",
    icon: <IconRoof className="h-6 w-6" />,
  },
  {
    title: "Sur les maisons du bourg ancien",
    text: "Les charpentes centenaires en ardoise présentent surtout des problèmes de faîtage descellé et de solins fissurés autour des cheminées, les points de jonction qui bougent le plus avec le temps et les écarts de température.",
    icon: <IconLayers className="h-6 w-6" />,
  },
  {
    title: "Sur l'ensemble de la commune",
    text: "L'exposition aux vents dominants d'ouest, fréquents sur ce secteur du Maine-et-Loire, accélère l'usure des rives de toiture et favorise l'installation de mousse sur les pans les moins ensoleillés, en particulier au nord.",
    icon: <IconLeaf className="h-6 w-6" />,
  },
];

const checkpoints = [
  { title: "L'état de la sous-toiture", text: "Sur les pavillons des années 1970-1980, elle est souvent absente ou d'un modèle devenu poreux — le premier point qui détermine si une réfection complète est justifiée.", icon: <IconLayers className="h-6 w-6" /> },
  { title: "La fixation des tuiles ou ardoises", text: "Descellement progressif aux points d'ancrage, particulièrement sur les pans exposés à l'ouest.", icon: <IconWrench className="h-6 w-6" /> },
  { title: "Les solins et le faîtage", text: "Sur le bourg ancien, ce sont les points qui bougent en premier avec l'âge de la charpente.", icon: <IconRoof className="h-6 w-6" /> },
  { title: "L'état de la zinguerie", text: "Gouttières bouchées ou percées, souvent négligées alors qu'elles protègent directement les fondations de la maison.", icon: <IconGutter className="h-6 w-6" /> },
  { title: "La présence de mousse", text: "Sur les pans nord, fréquente et parfois avancée sans que les occupants l'aient remarquée depuis le sol.", icon: <IconLeaf className="h-6 w-6" /> },
  { title: "La charpente depuis les combles", text: "Quand l'accès est possible, vérification directe de traces d'humidité ou d'attaque par les insectes.", icon: <IconSearch className="h-6 w-6" /> },
];

const urbanisme = [
  { title: "Déclaration préalable de travaux", text: "Systématique dès que l'aspect extérieur de la toiture change, à déposer en mairie d'Avrillé. Délai d'instruction standard d'un mois hors périmètre protégé.", icon: <IconDocument className="h-6 w-6" /> },
  { title: "Secteur du bourg ancien", text: "Une partie du bourg historique d'Avrillé peut être concernée par des règles d'aspect plus strictes que les lotissements environnants — nous vérifions systématiquement le PLU avant de déposer une demande.", icon: <IconScale className="h-6 w-6" /> },
  { title: "Vote en assemblée de copropriété", text: "Pour les petites copropriétés et résidences de lotissement, un devis détaillé exploitable en assemblée générale est fourni sur demande, avec coordination directe possible avec le syndic.", icon: <IconCheckCircle className="h-6 w-6" /> },
];

const secteurs = [
  {
    title: "Le bourg ancien",
    text: "Maisons mitoyennes en ardoise naturelle, charpentes parfois centenaires, souches de cheminée nombreuses et rues étroites. Techniquement, ce sont les chantiers les plus proches de ce que nous faisons dans le centre d'Angers : faîtage, solins et accès sont les trois sujets, pas la surface.",
    icon: <IconLayers className="h-6 w-6" />,
  },
  {
    title: "Les lotissements des années 1970-1990",
    text: "La plus grande partie du parc avrillais, développé le long de la route de Rennes pendant l'expansion de l'agglomération. Tuile mécanique terre cuite ou béton, charpente industrielle à deux pans, sous-toiture souvent absente. Ces toitures arrivent aujourd'hui à 40-50 ans, l'âge du premier vrai arbitrage entre entretien et réfection.",
    icon: <IconRoof className="h-6 w-6" />,
  },
  {
    title: "Les résidences et pavillons récents",
    text: "Constructions des années 2000 et suivantes, en tuile ou en ardoise fibrociment, encore jeunes. Elles ne demandent pas de réfection mais presque personne n'y fait vérifier la zinguerie, et c'est là que naissent les infiltrations en façade dix ans plus tard.",
    icon: <IconCheckCircle className="h-6 w-6" />,
  },
  {
    title: "Les abords boisés et l'étang Saint-Nicolas",
    text: "Sur les parcelles bordées d'arbres, au nord-ouest de la commune et vers l'étang, la mousse et les feuilles dictent le calendrier d'entretien. Deux nettoyages de gouttière par an y sont la norme, contre un ailleurs, et les pans nord se démoussent plus tôt.",
    icon: <IconLeaf className="h-6 w-6" />,
  },
];

const materiaux = [
  {
    title: "La tuile béton des années 1970-1980",
    text: "Reconnaissable à sa teinte uniforme et à son aspect qui se ternit par plaques. Elle se désagrège en surface après 40 ans : la pluie ne glisse plus, elle s'imprègne. Durée de vie courante 40 à 50 ans — c'est exactement la tranche où se trouve une grande partie du parc avrillais.",
  },
  {
    title: "La tuile mécanique en terre cuite",
    text: "Plus durable que le béton, 60 à 80 ans, mais sensible au gel quand elle a commencé à se fissurer. Sur ces toitures, le remplacement ponctuel de tuiles cassées et la reprise des rives suffisent souvent à gagner dix ans de plus.",
  },
  {
    title: "L'ardoise naturelle du bourg",
    text: "80 à 100 ans quand la pose est saine. Sur les maisons anciennes d'Avrillé comme sur celles d'Angers, ce n'est presque jamais l'ardoise qui impose la réfection, mais le zinc des solins, la fixation et l'état du voligeage en dessous.",
  },
];

const entretienAvrille = [
  {
    title: "L'automne : les gouttières",
    text: "Sur les lotissements plantés d'arbres, les descentes se bouchent chaque année. Une gouttière qui déborde ruisselle en façade et finit par attaquer l'enduit et les fondations — un problème de toiture qui se manifeste au ras du sol.",
    icon: <IconGutter className="h-6 w-6" />,
  },
  {
    title: "Après l'hiver : le tour du toit",
    text: "Une tuile déplacée par le vent d'ouest se voit depuis le jardin. C'est aussi le moment de monter dans les combles avec une lampe : les traces sombres sur le bois signalent une infiltration bien avant qu'elle n'atteigne le plafond.",
    icon: <IconSearch className="h-6 w-6" />,
  },
  {
    title: "Tous les 8 à 12 ans : le démoussage",
    text: "Sur l'ardoise, à la brosse et au produit : jamais de jet violent, qui ouvre la porosité de la pierre. Sur la tuile mécanique des pavillons, un lavage à pression maîtrisée suivi d'un hydrofuge reste la méthode la plus efficace pour repousser une réfection complète.",
    icon: <IconLeaf className="h-6 w-6" />,
  },
];

const urgenceAvrille = [
  {
    title: "Le jour même : la mise hors d'eau",
    text: "Bâchage ou réparation provisoire de la zone d'entrée d'eau, pour arrêter le sinistre avant qu'il ne traverse l'isolant. Avrillé étant à moins de dix minutes de l'atelier, c'est le délai que nous tenons réellement, pas un argument commercial.",
    icon: <IconFlame className="h-6 w-6" />,
  },
  {
    title: "Ensuite : trouver l'origine réelle",
    text: "L'eau qui tombe au-dessus du lit n'entre presque jamais à la verticale. Elle chemine le long d'un chevron, parfois sur plusieurs mètres. La recherche se fait par l'extérieur et par les combles, et c'est elle qui évite de réparer au mauvais endroit.",
    icon: <IconDroplet className="h-6 w-6" />,
  },
  {
    title: "Enfin : le dossier d'assurance",
    text: "Après une tempête ou une chute de branche, votre assurance habitation peut prendre en charge tout ou partie des travaux. Nous fournissons un devis détaillé exploitable pour la déclaration et échangeons directement avec l'expert mandaté si nécessaire.",
    icon: <IconDocument className="h-6 w-6" />,
  },
];

const neighbours = [
  { name: "Angers", text: "notre zone d'activité principale, du centre historique aux quartiers récents.", href: "/" },
  { name: "Écouflant", text: "secteur pavillonnaire au nord, bâti comparable à celui d'Avrillé." },
  { name: "Beaucouzé", text: "zone résidentielle en développement à l'ouest de l'agglomération." },
  { name: "Saint-Barthélemy-d'Anjou", text: "mix de maisons anciennes et de constructions plus récentes." },
  { name: "Les Ponts-de-Cé", text: "bâti ancien en bord de Loire." },
  { name: "Trélazé", text: "terre historique de l'ardoise, à l'est de l'agglomération." },
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

export default function CouvreurAvrille() {
  return (
    <>
      <JsonLd
        data={roofingContractorSchema({ url: PAGE_URL, areaServed: ["Avrillé"] })}
      />
      <JsonLd data={faqPageSchema(avrilleFaq)} />

      <section id="hero" className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="mb-4 inline-block border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
              À 10 min d&apos;Angers
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Couvreur à Avrillé : toiture ardoise et tuile pour pavillons et maisons de bourg
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              À dix minutes de notre atelier angevin, Avrillé mélange lotissements pavillonnaires
              des années 1970-1990 et bourg ancien. Deux types de toitures, deux diagnostics
              différents — nous nous adaptons à votre bâti plutôt que de proposer la même
              solution partout.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="btn-skew bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Demander mon devis gratuit à Avrillé
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
              src="/images/toiture-ardoise-velux-echafaudage-angers.jpg"
              alt="Toiture en ardoise refaite sur un pavillon, fenêtre de toit et échafaudage encore en place"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-ink/70 px-3 py-1.5 text-[11px] uppercase tracking-wide text-white/80">
              Pavillon rénové, Avrillé
            </p>
          </div>
        </div>
      </section>

      <section id="devis" className="scroll-mt-20 bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Devis</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Votre devis pour une toiture à Avrillé
            </h2>
            <p className="mt-4 text-slate">
              Décrivez-nous votre toiture — pavillon récent ou maison du bourg — et nous fixons un
              rendez-vous de diagnostic sous 48 heures. Déplacement, relevé et chiffrage
              gratuits.
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
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Le bâti local</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Ce qu&apos;on trouve sur les toits d&apos;Avrillé
            </h2>
            <p className="mt-4 text-slate">
              Avrillé n&apos;a pas le bâti homogène qu&apos;on imagine parfois pour une commune de
              périphérie. Le bourg ancien, autour de l&apos;église et des rues historiques,
              conserve des maisons couvertes en ardoise naturelle, semblables à ce qu&apos;on
              trouve dans les quartiers anciens d&apos;Angers, avec des charpentes parfois
              centenaires. Tout autour, les lotissements pavillonnaires construits entre 1970 et
              1990 pendant l&apos;expansion de l&apos;agglomération angevine ont largement
              généralisé la tuile mécanique en terre cuite ou en béton, sur des charpentes
              industrielles plus récentes mais qui approchent aujourd&apos;hui les 40 à 50 ans —
              l&apos;âge où les premiers signes de fatigue apparaissent.
            </p>
            <p className="mt-4 text-slate">
              S&apos;ajoutent des constructions plus récentes, années 2000 et après, en tuile ou
              en ardoise synthétique, généralement encore en bon état mais où l&apos;entretien
              préventif — démoussage, vérification de la zinguerie — fait souvent défaut faute
              d&apos;y avoir pensé.
            </p>
            <p className="mt-4 text-slate">
              Cette diversité change concrètement notre approche : nous ne proposons pas la même
              intervention sur une maison de bourg en ardoise que sur un pavillon en tuile béton
              des années 1980.
            </p>
          </div>
          <div className={`relative aspect-[4/3] overflow-hidden border-[6px] border-white shadow-xl ${imageTilts[1]}`}>
            <Image
              src="/images/toits-ardoise-centre-historique-angers.jpg"
              alt="Toiture ancienne en ardoise irrégulière, typique du bâti de bourg"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-ink/70 px-3 py-1.5 text-[11px] uppercase tracking-wide text-white/80">
              Bourg ancien et lotissement, Avrillé
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Secteurs</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Avrillé secteur par secteur : quatre bâtis, quatre chantiers
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Une commune de quatorze mille habitants collée à Angers ne se traite pas comme un
            bourg isolé. Avrillé s&apos;est construite par couches successives, et on ne monte
            pas le même chantier selon la couche où se trouve votre maison. Voici comment nous
            lisons la commune avant même la visite.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {secteurs.map((sec, i) => (
              <div
                key={sec.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{sec.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{sec.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{sec.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-slate">
            Cette lecture n&apos;est pas un exercice de style : elle détermine le matériau que
            nous proposons, la façon dont l&apos;échafaudage se monte, le délai
            d&apos;instruction en mairie et, au bout du compte, le montant du devis. Dites-nous
            simplement dans quel type de maison vous êtes, nous saurons déjà de quoi nous parlons.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Pathologies</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Les problèmes les plus fréquents à Avrillé
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pathologies.map((p, i) => (
              <div
                key={p.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{p.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.text}</p>
              </div>
            ))}
          </div>
          <a
            href="#devis"
            className="btn-skew mt-8 inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Diagnostiquer ma toiture à Avrillé
          </a>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Matériaux</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Tuile béton, terre cuite ou ardoise : ce que porte votre toit
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            À Avrillé, la question n&apos;est pas « ardoise ou tuile » comme dans le centre
            d&apos;Angers : les trois matériaux cohabitent, parfois dans la même rue. Savoir
            lequel vous avez sur la tête change la durée de vie attendue, le coût au mètre carré
            et la nature de l&apos;entretien.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {materiaux.map((m, i) => (
              <div
                key={m.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <h3 className="font-display text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-slate">
            Nous ne poussons pas au changement de matériau quand le bâti ne le justifie pas.
            Remplacer une tuile béton par de l&apos;ardoise sur un pavillon de lotissement
            double la facture, alourdit la charpente et n&apos;apporte rien à la maison. À
            l&apos;inverse, sur une maison de bourg en ardoise, poser de la tuile serait une
            faute — et souvent un refus en mairie.
          </p>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Accès chantier</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            L&apos;accès aux toitures à Avrillé
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Contrairement au centre-ville d&apos;Angers où le stationnement et les rues étroites
            compliquent souvent l&apos;installation d&apos;un chantier, les lotissements
            pavillonnaires d&apos;Avrillé offrent en général un accès plus simple : jardin
            disponible pour l&apos;échafaudage, stationnement possible devant la maison pour la
            benne d&apos;évacuation. Le bourg ancien reste plus contraint, avec certaines rues
            étroites qui demandent une autorisation de voirie pour le montage de
            l&apos;échafaudage, comme en centre-ville angevin.
          </p>
          <p className="mt-4 max-w-3xl text-slate">
            Cette différence d&apos;accès explique en partie pourquoi deux devis pour une surface
            de toiture comparable peuvent varier sensiblement entre un pavillon de lotissement et
            une maison du bourg.
          </p>
        </div>
      </section>

      <section
        className="relative bg-ink"
        style={{
          backgroundImage: "url('/images/toiture-ardoise-ancienne-anjou.jpg')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Tarif</p>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Pourquoi le prix varie selon le quartier d&apos;Avrillé
          </h2>
          <p className="mt-4 max-w-3xl text-gray-200">
            Deux chantiers de surface comparable peuvent afficher des devis très différents à
            Avrillé, selon le quartier et le bâti concernés — deux facteurs pèsent
            particulièrement.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[0]}`}>
              <IconRoof className="h-6 w-6 text-blue" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                Le type de toiture et sa complexité
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Un pavillon de lotissement à deux pans, sans point singulier majeur, se chiffre
                plus simplement qu&apos;une maison de bourg à la charpente plus complexe, avec
                lucarnes, noues ou cheminées multiples.
              </p>
            </div>
            <div className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[1]}`}>
              <IconLayers className="h-6 w-6 text-blue" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                Le matériau imposé ou choisi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                La tuile mécanique reste moins coûteuse à l&apos;achat que l&apos;ardoise
                naturelle, même si cette dernière dure plus longtemps. Nous donnons ces
                éléments de comparaison au moment du devis, sans orienter vers un matériau que
                votre bâti ne justifie pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Budget</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Les budgets que nous constatons à Avrillé
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Refuser de parler d&apos;argent avant la visite fait perdre du temps à tout le monde.
            Voici les fourchettes que nous observons réellement sur la commune — elles ne
            remplacent pas un devis, elles vous disent si votre projet tient dans votre budget.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[0]}`}>
              <IconEuro className="h-6 w-6 text-blue" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                Un pavillon de lotissement, 90 à 120 m² de toiture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Réfection complète en tuile mécanique avec écran de sous-toiture neuf : le plus
                souvent 9 000 à 16 000 euros, échafaudage et évacuation compris. Deux pans, pas
                de point singulier majeur, accès par le jardin — c&apos;est le chantier le plus
                simple à chiffrer sur la commune. Un démoussage avec traitement hydrofuge sur la
                même surface se situe entre 900 et 1 800 euros.
              </p>
            </div>
            <div className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[1]}`}>
              <IconEuro className="h-6 w-6 text-blue" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                Une maison du bourg en ardoise
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Comptez plutôt 12 000 à 24 000 euros pour une réfection complète en ardoise
                naturelle : la matière coûte plus cher, les points singuliers sont plus nombreux
                et l&apos;échafaudage demande parfois une autorisation de voirie. Une reprise
                ciblée — quelques ardoises, un solin, un faîtage — reste entre 800 et 3 000
                euros selon l&apos;accès.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-slate">
            Dans les deux cas, le déplacement, le relevé et le chiffrage sont gratuits, le devis
            est détaillé poste par poste et reste valable trois mois. Si un volet isolation de
            combles entre dans le projet, notre certification RGE Qualibat ouvre l&apos;accès à
            MaPrimeRénov&apos; et à l&apos;éco-prêt à taux zéro selon vos revenus.
          </p>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Diagnostic</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Ce que nous vérifions en premier sur une toiture avrillaise
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {checkpoints.map((c, i) => (
              <div
                key={c.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{c.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Entretien</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            L&apos;entretien d&apos;une toiture avrillaise, année après année
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            La majorité des réfections que nous chiffrons à Avrillé auraient pu être repoussées
            de dix ans avec trois gestes d&apos;entretien. Ce n&apos;est pas une formule : sur un
            pavillon des années 1980, la différence entre une toiture à refaire et une toiture à
            entretenir se joue presque toujours sur la sous-toiture, et donc sur ce qui a été
            laissé s&apos;infiltrer pendant des années.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {entretienAvrille.map((e, i) => (
              <div
                key={e.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{e.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{e.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-slate">
            Une visite de contrôle tous les trois à cinq ans suffit sur une toiture saine. Elle
            coûte le prix d&apos;un déplacement et c&apos;est, de loin, le meilleur rapport entre
            ce que vous dépensez et ce que vous évitez.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Déroulé</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Le déroulé d&apos;un chantier à Avrillé
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Le principe reste le même qu&apos;ailleurs — visite de relevé, devis détaillé,
            réalisation, réception — mais deux points varient selon le type de bâti. Sur un
            pavillon de lotissement récent, le chantier démarre généralement plus vite : accès
            simple, pas de contrainte patrimoniale, déclaration préalable instruite en mairie
            d&apos;Avrillé sous un délai standard d&apos;un mois. Sur une maison du bourg ancien,
            nous vérifions en amont si la parcelle est concernée par un périmètre de protection
            patrimoniale avant de déposer le dossier, ce qui peut ajouter l&apos;avis d&apos;un
            service instructeur supplémentaire au délai global.
          </p>
          <p className="mt-4 max-w-3xl text-slate">
            Dans les deux cas, le chantier se termine par une réception avec vous, remise de
            l&apos;attestation décennale AXA et de la facture détaillée.
          </p>
          <a
            href="#devis"
            className="btn-skew mt-6 inline-block border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
          >
            Planifier ma visite de relevé
          </a>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">Urgence</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Fuite à Avrillé : ce que nous faisons le jour même
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            Une fuite active ne se traite pas comme un chantier planifié. L&apos;astreinte
            téléphonique répond 7 jours sur 7 au {business.phone}, et la proximité change tout :
            depuis notre atelier angevin, une intervention à Avrillé se déclenche en moins de dix
            minutes de route.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {urgenceAvrille.map((u, i) => (
              <div
                key={u.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{u.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{u.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={business.phoneHref}
              className="btn-skew inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Urgence fuite — appeler le {business.phone}
            </a>
            <span className="text-sm text-slate">Astreinte 7 j / 7, y compris week-ends et jours fériés.</span>
          </div>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Démarches</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Urbanisme et copropriété à Avrillé
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {urbanisme.map((u, i) => (
              <div
                key={u.title}
                className={`border border-slate-light bg-white p-6 shadow-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <span className="text-blue">{u.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue">FAQ</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Les questions fréquentes à Avrillé
          </h2>
          <div className="mt-10">
            <Faq items={avrilleFaq} />
          </div>
        </div>
      </section>

      <section className="bg-paper-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">Communes limitrophes</p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Les communes autour d&apos;Avrillé où nous intervenons aussi
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {neighbours.map((n, i) => (
              <li
                key={n.name}
                className={`flex items-start gap-2 border border-slate-light bg-white px-5 py-4 text-sm transition-transform duration-300 hover:rotate-0 ${cardTilts[i]}`}
              >
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                <span>
                  {n.href ? (
                    <Link href={n.href} className="font-semibold text-blue">
                      {n.name}
                    </Link>
                  ) : (
                    <span className="font-semibold text-ink">{n.name}</span>
                  )}
                  <span className="text-slate"> — {n.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#devis"
              className="btn-skew inline-block bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Demander mon devis gratuit à Avrillé
            </a>
            <Link
              href="/"
              className="btn-skew inline-block border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              Voir toutes nos prestations à Angers et alentours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
