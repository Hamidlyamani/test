// L'URL publique réelle du site. NEXT_PUBLIC_SITE_URL permet de la surcharger
// (domaine définitif du client) sans toucher au code.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://test-psi-bice-48.vercel.app"
).replace(/\/$/, "");

export const business = {
  name: "Couverture Vasseur",
  founder: "Julien Vasseur",
  phone: "02 41 87 34 12",
  phoneHref: "tel:+33241873412",
  email: "contact@couverture-vasseur.fr",
  siteUrl: SITE_URL,
  address: {
    street: "14 rue des Ardoisiers",
    postalCode: "49000",
    city: "Angers",
    region: "Maine-et-Loire",
    country: "FR",
  },
  geo: {
    latitude: 47.4784,
    longitude: -0.5632,
  },
  rating: {
    value: 4.9,
    count: 47,
  },
  yearsExperience: 12,
  teamSize: 4,
  certifications: ["RGE Qualibat", "Garantie décennale AXA"],
} as const;

export const areas = [
  { name: "Angers", note: "le cœur de notre activité, du centre historique aux quartiers plus récents", drive: "Atelier" },
  { name: "Avrillé", note: "pavillons des années 1970-1990 et maisons de bourg", drive: "10 min" },
  { name: "Beaucouzé", note: "zone résidentielle en développement, toitures récentes et rénovations", drive: "12 min" },
  { name: "Les Ponts-de-Cé", note: "bâti ancien en bord de Loire, sensible à l'humidité", drive: "10 min" },
  { name: "Trélazé", note: "terre historique de l'ardoise, encore beaucoup de couvertures d'origine à entretenir", drive: "10 min" },
  { name: "Saint-Barthélemy-d'Anjou", note: "mix de maisons anciennes et de constructions plus récentes", drive: "8 min" },
  { name: "Écouflant", note: "secteur pavillonnaire au nord d'Angers", drive: "10 min" },
] as const;

export const services = [
  {
    slug: "refection-toiture",
    title: "Réfection complète de toiture",
    short:
      "Dépose de la couverture existante, reprise ou renforcement de la charpente si nécessaire, pose d'un écran de sous-toiture et couverture neuve en ardoise, tuile ou zinc selon votre bâti. La solution la plus durable quand la toiture dépasse 40 à 50 ans ou cumule les points faibles.",
  },
  {
    slug: "recherche-fuite",
    title: "Réparation et recherche de fuite",
    short:
      "Une tache au plafond ne dit jamais d'où vient l'eau. Nous localisons l'origine réelle de l'infiltration — souvent un solin, un faîtage descellé ou une ardoise fissurée loin de la tache visible — avant de proposer une réparation ciblée.",
  },
  {
    slug: "couverture-ardoise",
    title: "Couverture ardoise — notre spécialité",
    short:
      "L'ardoise naturelle est le matériau que nous posons le plus, et celui que nous maîtrisons le mieux : pureau, recouvrement, clouage, tout est calculé pour la pente et l'exposition de votre toit.",
  },
  {
    slug: "zinguerie",
    title: "Zinguerie : gouttières, chéneaux, descentes",
    short:
      "Sans une évacuation d'eau qui fonctionne, la meilleure couverture du monde s'abîme. Pose et remplacement de gouttières, chéneaux encaissés et descentes en zinc, cuivre ou PVC selon votre budget et le style de la maison.",
  },
  {
    slug: "demoussage",
    title: "Démoussage et traitement hydrofuge",
    short:
      "La mousse retient l'humidité contre l'ardoise et accélère son vieillissement. Démoussage manuel, traitement anti-mousse et hydrofuge de protection pour gagner plusieurs années avant la prochaine intervention lourde.",
  },
  {
    slug: "fenetres-de-toit",
    title: "Pose de fenêtres de toit",
    short:
      "Velux ou équivalent, avec reprise de l'étanchéité autour du châssis — le point qui fuit le plus souvent quand la pose est mal faite. Utile pour l'aménagement de combles.",
  },
  {
    slug: "isolation-combles",
    title: "Isolation de combles",
    short:
      "Souvent réalisée en même temps que la réfection de toiture, par l'intérieur ou par l'extérieur selon votre projet. Éligible aux aides de l'État dans de nombreux cas grâce à notre certification RGE.",
  },
] as const;

export type FaqItem = { question: string; answer: string };

export const homeFaq: FaqItem[] = [
  {
    question: "Combien coûte une réfection de toiture à Angers ?",
    answer:
      "Cela dépend de la surface, de la pente, de l'état de la charpente et du matériau. À titre indicatif, une réfection complète en ardoise sur une maison angevine classique se chiffre le plus souvent entre 12 000 et 28 000 euros. Le devis est gratuit et détaillé poste par poste, sans surprise à la fin du chantier.",
  },
  {
    question: "Intervenez-vous en urgence en cas de fuite ?",
    answer:
      "Oui. Une astreinte téléphonique est assurée 7 jours sur 7 pour les fuites actives. Nous priorisons systématiquement une bâche ou une réparation provisoire dans la journée quand l'eau rentre, avant de revenir pour l'intervention définitive.",
  },
  {
    question: "Travaillez-vous uniquement l'ardoise, ou aussi la tuile ?",
    answer:
      "L'ardoise naturelle est notre spécialité et la matière que nous posons le plus souvent en Anjou, mais nous intervenons aussi sur les toitures en tuile mécanique, en tuile plate et en zinc, notamment sur les pavillons plus récents de la périphérie angevine.",
  },
  {
    question: "Ma toiture est-elle éligible à des aides financières ?",
    answer:
      "Les travaux d'isolation de combles associés à la réfection peuvent ouvrir droit à MaPrimeRénov' ou à l'éco-prêt à taux zéro selon vos revenus et l'ancienneté du logement. Notre certification RGE Qualibat est la condition indispensable pour ces aides, et nous vous orientons vers les bons dossiers dès le devis.",
  },
  {
    question: "Faut-il une autorisation pour refaire sa toiture à Angers ?",
    answer:
      "Dans la plupart des cas, une déclaration préalable de travaux suffit. Si votre maison se trouve dans le secteur sauvegardé du centre-ville ou est visible depuis un monument classé, l'avis de l'Architecte des Bâtiments de France est requis et peut imposer la couleur ou le type d'ardoise. Nous montons ce dossier avec vous.",
  },
  {
    question: "Combien de temps dure un chantier de couverture ?",
    answer:
      "Une réfection complète dure en moyenne une à deux semaines selon la surface et la météo. Une recherche de fuite ou une réparation ponctuelle se règle le plus souvent en une demi-journée à une journée.",
  },
  {
    question: "Proposez-vous une garantie après les travaux ?",
    answer:
      "Tous nos chantiers sont couverts par la garantie décennale souscrite auprès d'AXA. L'attestation vous est remise avec la facture finale et reste valable dix ans, transmissible en cas de revente du bien.",
  },
  {
    question: "Intervenez-vous en copropriété ?",
    answer:
      "Oui, régulièrement sur les immeubles de centre-ville. Nous fournissons un devis détaillé exploitable pour le vote en assemblée générale, ainsi que tous les justificatifs d'assurance demandés par le syndic.",
  },
];

export const prestationFaq: FaqItem[] = [
  {
    question: "Comment savoir si je dois réparer ou refaire toute ma toiture ?",
    answer:
      "Si les désordres sont localisés — une zone de fuite précise, quelques ardoises fissurées, un solin abîmé — une reprise ciblée suffit généralement. Si la toiture a plus de 50 ans, cumule plusieurs points faibles ou si l'écran de sous-toiture est absent ou dégradé, la réfection complète devient plus économique sur la durée qu'une succession de réparations. Nous vous donnons cet avis lors du diagnostic gratuit, sans orienter systématiquement vers le chantier le plus coûteux.",
  },
  {
    question: "Combien coûte une réfection complète en ardoise à Angers ?",
    answer:
      "Le plus souvent entre 12 000 et 28 000 euros pour une maison de ville angevine classique, selon la surface, l'accès, la complexité de la toiture et l'état de la charpente découverte au moment des travaux. Le devis détaillé, gratuit, reste le seul chiffre fiable pour votre cas précis.",
  },
  {
    question: "Combien de temps dure une réfection de toiture en ardoise ?",
    answer:
      "En moyenne une à deux semaines pour une maison individuelle, selon la surface, la météo et la complexité de la charpente. Nous vous donnons un délai précis dans le devis, avant le début du chantier.",
  },
  {
    question: "Dois-je demander une autorisation à la mairie ou aux Bâtiments de France ?",
    answer:
      "Une déclaration préalable de travaux est nécessaire dans la quasi-totalité des cas. Si votre maison se trouve dans le secteur sauvegardé du centre-ville d'Angers ou est visible depuis un monument classé, l'avis conforme de l'Architecte des Bâtiments de France s'ajoute, et peut fixer le type et la teinte d'ardoise autorisés. Nous montons ce dossier avec vous et savons ce que les ABF acceptent en centre-ville.",
  },
  {
    question: "Utilisez-vous de l'ardoise naturelle ou de l'ardoise synthétique ?",
    answer:
      "Nous posons de l'ardoise naturelle en priorité, en cohérence avec le bâti angevin traditionnel et les exigences des Bâtiments de France en centre-ville. L'ardoise synthétique ou fibrociment peut être proposée sur certaines constructions récentes hors secteur protégé, sur demande et après explication des différences de durée de vie.",
  },
  {
    question: "Que se passe-t-il si vous découvrez la charpente abîmée en cours de chantier ?",
    answer:
      "Nous vous arrêtons avant de continuer, vous montrons la zone concernée en photo, et vous proposons un avenant chiffré pour la reprise nécessaire. Aucune reprise de charpente n'est facturée sans validation préalable de votre part.",
  },
  {
    question: "La réfection est-elle prise en charge par l'assurance en cas de sinistre ?",
    answer:
      "Si la réfection fait suite à un sinistre reconnu (tempête, chute d'arbre, dégât des eaux), votre assurance habitation peut prendre en charge tout ou partie des travaux. Nous établissons un devis détaillé exploitable pour votre déclaration de sinistre et pouvons échanger directement avec l'expert mandaté.",
  },
];

export const avrilleFaq: FaqItem[] = [
  {
    question: "Intervenez-vous rapidement à Avrillé en cas de fuite ?",
    answer:
      "Oui. Avrillé se trouve à moins de dix minutes de notre atelier angevin, ce qui nous permet d'intervenir le jour même pour une mise hors d'eau en cas de fuite active, dans le cadre de notre astreinte 7 jours sur 7.",
  },
  {
    question:
      "Les pavillons des lotissements d'Avrillé ont-ils les mêmes problèmes que les maisons du bourg ?",
    answer:
      "Non. Les pavillons construits entre 1970 et 1990 posent surtout des questions d'usure de la tuile mécanique et de sous-toiture vieillissante ou absente, alors que les maisons du bourg ancien, souvent en ardoise, sont plus sensibles aux problèmes de faîtage, de solins et de charpente centenaire. Le diagnostic s'adapte à chaque type de bâti.",
  },
  {
    question: "Faut-il une déclaration préalable pour changer sa toiture à Avrillé ?",
    answer:
      "Oui, une déclaration préalable de travaux est nécessaire auprès de la mairie d'Avrillé dès que l'aspect extérieur de la toiture change, même à l'identique. Contrairement au centre historique d'Angers, Avrillé n'est pas soumise au secteur sauvegardé, ce qui simplifie généralement le dossier hors bourg ancien classé.",
  },
  {
    question: "Travaillez-vous aussi sur les toitures en tuile béton des années 1970-1980 ?",
    answer:
      "Oui, c'est une part importante de notre activité à Avrillé. Nous intervenons en réparation ponctuelle, en démoussage ou en réfection complète selon l'état de la tuile et de la sous-toiture, sans systématiquement pousser vers un changement de matériau si ce n'est pas nécessaire.",
  },
  {
    question: "Intervenez-vous en copropriété ou en lotissement à Avrillé ?",
    answer:
      "Oui, notamment sur les petites copropriétés et résidences de lotissement construites dans les années 1980-2000. Nous fournissons un devis détaillé exploitable pour le vote en assemblée générale et coordonnons l'intervention avec le syndic.",
  },
  {
    question: "Combien de temps pour obtenir un devis pour une maison à Avrillé ?",
    answer:
      "Le rendez-vous de diagnostic se fixe généralement sous 48 heures, et le devis détaillé est remis dans la foulée de la visite, souvent le jour même pour les interventions simples.",
  },
];
