# Journal du projet — Exercice Ozymandias Agency (Couverture Vasseur)

Ce document résume tout ce qui a été fait sur ce projet, dans l'ordre, pour pouvoir reprendre le travail sans perdre le contexte. Contexte général de l'exercice : voir `../exercice-ozymandias-couverture-vasseur.md` (analyse du brief + plan initial).

Statut au moment de la rédaction : **site fonctionnel en local, prêt à être déployé.**

---

## 1. Ce qui a été demandé

Construire un site de 3 pages pour un client fictif (Couverture Vasseur, artisan couvreur à Angers) dans le cadre d'un test de recrutement Ozymandias Agency :
- Page d'accueil complète
- Une page prestation au choix
- Une page ville (Angers ou une commune de la zone)

Jugé sur, dans cet ordre : la direction artistique, puis la densité/rigueur SEO. Rendu = lien public uniquement (Vercel/Netlify), Next.js App Router, contenu obligatoirement dans le HTML servi (SSR/SSG — un SPA client-only est éliminatoire).

## 2. Recherche effectuée avant rédaction

- **Concurrence réelle** : recherche Google "couvreur Angers", analyse des 3 premiers résultats (Avenir Couverture, Technitoit, ED Ouest). Constat : tous ont FAQ + zone d'intervention + décennale/RGE affichés, mais **aucun n'affiche de fourchette de prix**, aucun ne détaille les démarches ABF/copropriété du centre ancien d'Angers, et aucun ne met en avant "qui monte réellement sur le toit". Ces trous ont été utilisés comme axes de différenciation.
- **4 sites de référence de l'agence** (fournis dans le brief) : Will Couvreur (Vincennes), AFJ Couverture (Metz), MD Toiture (Rennes), N.R. Couverture (Montfermeil) — structure commune identifiée (hero → confiance → services → matériaux → réalisations → process → prix → garanties → zone → FAQ → footer maillé), schema.org RoofingContractor + FAQPage systématique.
- Le contenu textuel complet (3 pages, prêt à coller) avait été rédigé au préalable dans des fichiers `.txt` à la racine de `test-frelance/` avant la mise en place du projet Next.js :
  - `../contenu-01-accueil.txt`
  - `../contenu-02-prestation-refection-toiture-ardoise.txt`
  - `../contenu-03-ville-avrille.txt`

## 3. Décisions prises (et pourquoi)

- **Page ville = Avrillé, pas Angers.** La page d'accueil traite déjà Angers (H1, centre historique, ABF). Une page ville sur Angers dupliquerait ce contenu. Avrillé (commune de la zone d'intervention citée dans le brief) permet un angle différent : lotissements pavillonnaires 1970-1990 (tuile mécanique) vs bourg ancien (ardoise), plutôt que de recopier l'angle "centre historique" déjà traité.
- **Palette** : bleu-nuit `#0C131C` et bleu `#0061C6` imposés par le logo, complétés par un gris ardoise (`--color-slate`), un fond crème/pierre (`--color-paper`, évoque le tuffeau angevin) et une touche cuivre (`--color-copper`) pour les accents — pour éviter le bleu corporate seul et ancrer visuellement le site en Anjou.
- **Typographie** : Fraunces (serif, display) pour les titres + Inter (sans-serif) pour le corps — via `next/font/google`.
- **Contenu piloté par données** : services, zones, FAQ (`src/lib/business.ts`) sont des tableaux uniques réutilisés à la fois pour l'affichage (JSX) et pour générer le JSON-LD (`src/lib/schema.ts`), pour éviter toute divergence entre le contenu visible et le balisage structuré.
- **Formulaire de devis réel** (`DevisForm.tsx`, client component) plutôt qu'un simple lien mailto, conformément à l'exigence du brief ("un vrai bloc, pas un lien"). Pas de backend réel : soumission = affichage d'un message de confirmation côté client (le client étant fictif, aucune donnée n'est envoyée nulle part).
- **FAQ en `<details>/<summary>`** natif plutôt qu'un composant JS avec state, pour un accordéon accessible sans JavaScript.

## 4. Structure technique du projet

```
couverture-vasseur/
├── src/
│   ├── app/
│   │   ├── layout.tsx                        → layout racine, fonts, metadata par défaut, Header/Footer
│   │   ├── globals.css                        → tokens couleur/police (Tailwind v4, @theme)
│   │   ├── page.tsx                            → page d'accueil (13 sections)
│   │   ├── icon.png                            → favicon généré depuis le logo (fond crème, cf. §6)
│   │   ├── sitemap.ts / robots.ts              → SEO technique
│   │   ├── refection-toiture-ardoise-angers/page.tsx  → page prestation (10 sections)
│   │   └── couvreur-avrille/page.tsx           → page ville (10 sections)
│   ├── components/
│   │   ├── Header.tsx, Footer.tsx              → nav + footer maillé (liens internes)
│   │   ├── DevisForm.tsx                       → formulaire devis (client component)
│   │   ├── Faq.tsx                             → accordéon FAQ (accessible, sans JS)
│   │   └── JsonLd.tsx                          → injecteur de <script type="application/ld+json">
│   └── lib/
│       ├── business.ts                         → source unique : coordonnées, services, zones, FAQ
│       └── schema.ts                           → générateurs de schema.org (RoofingContractor, Service, FAQPage)
└── public/images/                              → logo + 9 photos (cf. §6)
```

Chaque page exporte son propre `metadata` (title, description, canonical, OpenGraph) et injecte son propre JSON-LD via `<JsonLd data={...} />`. Toutes les pages sont **statiquement pré-rendues** (confirmé par `next build` : `○ (Static) prerendered as static content` sur les 3 routes) — le contenu est donc bien dans le HTML servi, condition éliminatoire du brief.

## 5. Vérifications faites

- `npx eslint .` → propre (0 erreur, 0 warning)
- `npx next build` → compile, typecheck et prérendu statique OK sur les 3 pages
- HTML brut inspecté via `curl` sur les 3 pages (voir tableau) :

| Page | H1 | H2 | H3 | alt sur images | canonical | JSON-LD |
|---|---|---|---|---|---|---|
| Accueil | 1 | 12 | 37 | 8/8 | ✓ | RoofingContractor + FAQPage |
| Prestation | 1 | 9 | 24 | 4/4 | ✓ | Service + RoofingContractor + FAQPage |
| Ville (Avrillé) | 1 | 10 | 18 | 3/3 | ✓ | RoofingContractor + FAQPage |

- `href="tel:+33241873412"` présent et cliquable sur les 3 pages.
- Mots-clés cibles bien couverts (cumul largement > 1500 mots exigés sur les 3 pages, cf. fichiers `.txt` source pour le détail par page).

## 6. Images

9 photos libres de droits (licence Unsplash), toutes avec `alt` descriptif :

| Fichier | Contenu réel | Utilisée sur |
|---|---|---|
| `hero-accueil.jpg` | Gros plan toiture ardoise | Hero accueil |
| `materiau-ardoise.jpg` | Toit ardoise ancien (maison en pierre) | Section "Le matériau" (accueil) |
| `realisation-doutre.jpg` | Ardoises avec crochets, gros plan | Réalisation "Doutre" (accueil) |
| `realisation-beaucouze.jpg` | Ardoises en écaille avec mousse | Réalisation "Beaucouzé" (accueil) |
| `pose-ardoise.jpg` | Couvreur harnaché appliquant un mastic/étanchéité | Réalisation "recherche de fuite" (accueil) + détail intervention (prestation) |
| `prestation-hero.jpg` | Deux couvreurs posant des tuiles, échafaudage | Hero page prestation + réalisation "zinguerie" (accueil) |
| `artisan-julien.jpg` | Couvreur au travail sur toiture tuile | Section "L'artisan" (accueil) |
| `avrille-hero.jpg` | Vue aérienne toiture de pavillon | Hero page Avrillé |
| `avrille-bourg.jpg` | Rue ancienne de centre-ville | Section "bâti d'Avrillé" |
| `logo-vasseur.png` | Logo client (fourni par l'exercice) | Header + favicon |

**Point de vigilance corrigé** : les premières photos choisies pour `pose-ardoise.jpg`, `artisan-julien.jpg` et `prestation-hero.jpg` étaient hors-sujet (un agent de maintenance ferroviaire, un ferrailleur sur un chantier BTP, un installateur de panneaux solaires) — la recherche par mots-clés Unsplash ("roofer-working" etc.) donnait des résultats mal étiquetés. Elles ont été identifiées en ouvrant chaque image en pleine résolution (pas seulement les vignettes) et remplacées par de vraies photos de couvreurs. **Toujours vérifier une image en taille réelle avant de l'intégrer, jamais sur la seule foi du mot-clé de recherche ou de la vignette.**

## 7. Problèmes rencontrés en cours de route

- **`scroll-behavior: smooth` global** (mis dans `globals.css`) faisait animer le scroll à la molette, ce qui rendait les captures d'écran automatisées incohérentes pendant les tests. Retiré : gardé seulement `scroll-mt-20` sur les sections ciblées par ancre (`#devis`).
- **Cache d'optimisation d'images Next.js** : après avoir remplacé un fichier image sur disque (même nom de fichier), `next build` seul ne suffit pas — le dossier `.next/cache/images` garde les variantes optimisées de l'ancien fichier tant que `.next` n'est pas entièrement supprimé (`rm -rf .next`). À refaire systématiquement après tout remplacement d'image.
- L'outil de capture d'écran de l'environnement de développement se fige occasionnellement sur du contenu profondément scrollé ou sur une image tout juste chargée — vérifié à chaque fois via l'inspection du DOM (`getBoundingClientRect`, `img.complete`, `img.naturalWidth`) que le rendu réel était correct. Ce n'est pas un défaut du site livré.

## 8. Comment relancer le projet en local

```bash
cd couverture-vasseur
npm install          # si besoin
npx next build        # build de production
npx next start -p 3000  # sert le build sur http://localhost:3000
```

Pour le développement avec rechargement à chaud : `npm run dev`.

## 9. Ce qu'il reste à faire

1. **Déployer sur Vercel ou Netlify** (nécessite un compte — pas fait par l'assistant, action à confirmer avec l'utilisateur avant tout déploiement).
2. Vérifier le rendu en ligne (`view-source:` pour confirmer le SSR en prod, comme fait en local).
3. Rédiger le court texte d'accompagnement demandé par l'agence (choix de DA, ce qui a marqué dans la concurrence d'Angers, ce qui aurait été fait avec plus de temps) — voir section 8 de `../exercice-ozymandias-couverture-vasseur.md` pour la trame.
4. Soumettre le lien via l'onglet "Rendre & questions" du dashboard, avant le **4 septembre 2026**.
5. Cocher au fur et à mesure les cases du dashboard (Direction artistique arrêtée, Page d'accueil, Page prestation, Page ville, SEO vérifié, Mis en ligne).
