# Exigences SEO — Exercice Ozymandias Agency (Couverture Vasseur)

Source : dashboard candidat Ozymandias Agency, onglet "Ce qu'on attend".
Client fictif : **Couverture Vasseur** (Julien Vasseur, Angers 49).

Ce document réunit **toutes** les règles liées au SEO trouvées dans le brief : les 10 exigences SEO explicites, plus les exigences de contenu/structure par page (qui sont notées comme faisant partie de la densité SEO), plus les contraintes techniques qui conditionnent l'indexabilité.

---

## 1. Les 10 exigences SEO explicites

Mesurées sur les 4 sites de référence déjà livrés par l'agence (Will Couvreur, AFJ Couverture, MD Toiture, N.R. Couverture).

| # | Règle | Détail / seuil mesuré |
|---|-------|------------------------|
| 1 | **Un seul H1**, contenant le métier ET la ville | Ex. « Couvreur zingueur à Vincennes », « Couvreur Rennes ». Les 4 sites de réf. : exactement 1 H1 chacun. |
| 2 | **Title** = métier + ville + département | Ex. « Couvreur Montfermeil 93 — Rénovation Toiture Île-de-France \| N.R. COUVERTURE » |
| 3 | **Meta description** de 140 à 200 caractères | Mesuré sur les 4 sites : 144, 185, 195, 195 caractères. Jamais absente. |
| 4 | **9 à 15 H2**, vraie hiérarchie H2/H3 | Les 4 sites : 9 à 15 H2, 19 à 38 H3. Contenu structuré, pas empilé. |
| 5 | **1 500 mots minimum** sur l'ensemble des 3 pages (accueil + prestation + ville) | Les 4 sites font 1 468 à 3 551 mots pour la seule page d'accueil. La densité fait le référencement local, pas la répétition de mots-clés. |
| 6 | **schema.org `RoofingContractor` complet** | Avec `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`, `AggregateRating`, `OfferCatalog`/`Offer`/`Service`, et `FAQPage` si une FAQ existe. Présent sur les 4 sites. |
| 7 | `lang="fr"`, **canonical**, **Open Graph** | Les trois présents sur les 4 sites, sans exception. |
| 8 | **`alt`** sur chaque image | Mesuré : 0 image sans alt sur AFJ, MD Toiture, N.R. Couverture. |
| 9 | **Téléphone cliquable** (`href="tel:"`) + formulaire de contact | Présent sur les 4 sites. |
| 10 | **Le contenu doit être dans le HTML servi** (SSR/SSG) | Les 4 sites sont rendus côté serveur. Une SPA qui livre une coquille vide au robot d'indexation est **éliminatoire** — défaut le plus fréquent des candidatures reçues. |

---

## 2. Exigences techniques qui conditionnent le SEO

- **Framework** : Next.js, App Router.
- **Rendu** : statique ou serveur — le contenu doit être présent dans le HTML (pas de contenu injecté uniquement côté client).
- **Styles** : libres (Tailwind accepté, non noté).
- **Hébergement** : Vercel ou Netlify, avec un lien public (c'est le site en ligne qui est jugé, pas le code).
- **Images** : libres de droits, optimisées, toutes avec un `alt`.
- Le code source n'est pas demandé — seul le rendu en ligne est jugé, comme le ferait Google.

---

## 3. Contenu minimum par page (densité = SEO)

Le brief est explicite : la densité SEO se joue autant dans le nombre de mots/sections que dans les balises. Chaque page a un plancher.

### 3.1 Page d'accueil — 1 200 mots min., 10 sections min.
(Réf. sites : 1 121 à 3 208 mots, 9 à 15 H2, 19 à 38 H3)

1. Bandeau d'ouverture — H1 métier + ville, promesse en une phrase, téléphone cliquable, bouton devis (visible sans défiler).
2. Demande de devis — bloc réel « Devis gratuit sous 48 h », répété en haut et en bas.
3. Gages de confiance — RGE Qualibat, décennale, ancienneté, avis Google chiffrés (« 47 avis, 4,9/5 »).
4. Prestations en grille — 1 H2 + 1 H3 par métier (6 à 8 métiers), 2-3 lignes chacun.
5. Le matériau expliqué — zinc/ardoise/tuile selon pente et région (ardoise pour l'Anjou).
6. Réalisations — avant/après, 2 à 5 exemples titrés.
7. L'artisan — qui monte sur le toit (distingue d'une plateforme de mise en relation).
8. Déroulé d'un chantier — 4 à 6 étapes en H3.
9. Prix ou facteurs de prix — fourchettes ou facteurs (accès, complexité toit, état charpente, matériau).
10. Garanties et engagements — décennale, assurance, délai urgence, déplacement gratuit.
11. Zone d'intervention — communes nommées une par une (Avrillé, Beaucouzé, Les Ponts-de-Cé, Trélazé, Saint-Barthélemy-d'Anjou, Écouflant) → référencement local mesurable.
12. FAQ — 6 à 10 questions en H3, balisage `FAQPage`.
13. Rappel contact + footer utile — maillage interne (prestations, communes, contact).

### 3.2 Page prestation — 900 mots min., 8 sections min.
(Réf. sites : 2 916 à 3 947 mots, 13 à 16 H2)
Doit ressortir sur « réfection toiture ardoise Angers ».

1. H1 prestation + ville (la requête, pas juste le nom du métier).
2. Devis en tête.
3. Signes qui doivent alerter (tuiles glissées, auréoles, faîtage descellé, solins fissurés) — capte les recherches de symptômes.
4. Détail de l'intervention (vocabulaire métier : liteaunage, écran de sous-toiture, points singuliers).
5. Reprise ciblée ou réfection totale.
6. Déroulé étape par étape (5-6 H3).
7. Facteurs de coût, chiffrés si possible.
8. Démarches administratives (déclaration préalable, ABF, copropriété, échafaudage domaine public) — fort à Angers (centre ancien, bâtiments de France).
9. FAQ propre à la prestation (6-8 questions, différentes de l'accueil).
10. Maillage interne « à lire ensuite » — 4 à 6 liens vers autres prestations + page ville.

### 3.3 Page ville — 900 mots min., 8 sections min., rien de recopié de l'accueil
(Réf. page ville : 2 874 mots, 15 H2)

1. H1 métier + ville **avec angle local** (ex. « Couvreur zingueur à Saint-Mandé : toitures de collectif et brisis en zinc »).
2. Bâti réel de la commune (à Angers : maisons de ville anciennes, ardoise d'Anjou, secteur sauvegardé).
3. Pathologies fréquentes localement (humidité, mousse, exposition).
4. Contrainte d'accès locale (échafaudage, benne, stationnement, rue étroite).
5. Pourquoi le prix varie ici.
6. Points vérifiés en premier (5-6 H3 concrets, bâti local).
7. Déroulé de chantier dans la commune (autorisations locales, copropriété si besoin).
8. Urbanisme et copropriété (ABF, déclaration préalable, vote assemblée).
9. FAQ locale (5-6 questions propres à la ville).
10. Communes limitrophes — liens vers les alentours (maillage qui fait remonter le réseau de pages).

---

## 4. Sites de référence (niveau à atteindre, ne pas copier la structure)

| Site | Ville | Mots | H2 | Sections | Pages liées |
|------|-------|------|----|----------|-------------|
| Will Couvreur | Vincennes (94) | 3 551 | 15 | 18 | 31 |
| AFJ Couverture | Metz (57) | 2 445 | 9 | 11 | 51 |
| MD Toiture | Rennes (35) | 2 411 | 10 | 11 | 34 |
| N.R. Couverture | Montfermeil (93) | 1 468 | 9 | 12 | 40 |

⚠️ L'agence dit mesurer la ressemblance des intitulés de section entre candidats : ne pas reprendre le squelette d'un site existant.

---

## 5. Rappel du contexte client (utile pour un contenu SEO pertinent)

- **Couverture Vasseur** — Julien Vasseur, Angers, Maine-et-Loire (49).
- 12 ans d'ancienneté, Julien + 3 compagnons.
- Certifications : RGE Qualibat, garantie décennale AXA.
- Téléphone : 02 41 87 34 12.
- Réputation : 47 avis Google, 4,9/5.
- Zone d'intervention : Angers + 30 km — Avrillé, Beaucouzé, Les Ponts-de-Cé, Trélazé, Saint-Barthélemy-d'Anjou, Écouflant.
- Prestations : réfection complète de toiture, réparation/recherche de fuite, couverture ardoise (spécialité), zinguerie, démoussage/hydrofuge, fenêtres de toit, isolation de combles.
- Différenciation : spécialiste ardoise naturelle (vs couvreurs tuile de la région) ; nombreuses maisons anciennes en centre d'Angers avec contraintes copropriété/ABF ; devis gratuit 48h ; urgence fuite 7j/7.
- Logo imposé : bleu-nuit `#0C131C` (77%) et bleu `#0061C6` (23%).

---

## 6. Audit du 2026-09-04 — mesures réelles sur le HTML rendu

Audit effectué en interrogeant le HTML servi par le serveur (curl, pas le DOM après hydratation) sur les 3 pages, pour coller à la méthode annoncée par l'agence ("nous jugeons le site en ligne, comme le fera Google").

| Règle | Accueil | Prestation | Ville (Avrillé) |
|---|---|---|---|
| H1 unique, métier + ville | ❌ → ✅ corrigé | ✅ | ✅ |
| Title métier+ville+dépt | ❌ → ✅ corrigé (bug de branding) | ✅ | ✅ |
| Meta description 140-200 | ✅ 149 | ✅ 193 | ✅ 175 |
| H2 (9-15) | ✅ 10 | ✅ 9 | ✅ 10 |
| H3 (19-38) | ✅ 31 | ✅ 24 | ❌ 18 → ✅ 20 corrigé |
| Mots (planchers 1200/900/900) | ✅ 1729 | ✅ 1734 | ✅ 1535 |
| Total 3 pages ≥ 1500 mots | ✅ 4998 | | |
| schema.org RoofingContractor complet | ✅ | — (Service + provider RoofingContractor) | ✅ |
| FAQPage | ✅ | ✅ | ✅ |
| lang="fr", canonical, Open Graph | ✅ | ✅ | ✅ |
| alt sur chaque image | ✅ 0 manquant / 11 | ✅ 0/4 | ✅ 0/3 |
| tel: cliquable + formulaire | ✅ | ✅ | ✅ |
| Contenu dans le HTML servi (SSR) | ✅ confirmé par curl (sans JS) | ✅ | ✅ |

### Corrections apportées

1. **H1 accueil (critique)** — `src/components/HeroReveal.tsx` : le H1 "L'ardoise comme matière première d'un savoir-faire" ne contenait ni le métier ni la ville, en violation directe de la règle n°1. Remplacé par « Couvreur à Angers : l'ardoise comme matière première d'un savoir-faire », qui conserve la tonalité éditoriale de la direction artistique tout en satisfaisant la règle.
2. **Title accueil (bug technique)** — `src/app/page.tsx` : le `<title>` rendu ne portait pas le suffixe de marque (« | Couverture Vasseur ») contrairement aux deux autres pages. Cause : en App Router, `title.template` défini dans `layout.tsx` ne s'applique pas à un `title` défini dans le `page.tsx` du **même segment de route** (la racine `/`) — seulement aux segments enfants. D'où l'incohérence entre l'accueil et les pages `refection-toiture-ardoise-angers` / `couvreur-avrille`, qui sont des segments enfants et héritaient bien du template. Corrigé en insérant le suffixe directement dans le titre de la page.
3. **H3 page Avrillé (mineur)** — `src/app/couvreur-avrille/page.tsx` : la section « Pourquoi le prix varie » était un unique paragraphe, portant le total de H3 de la page à 18 (sous le plancher de 19 mesuré sur les 4 sites de référence). Restructurée en deux points (« Le type de toiture et sa complexité », « Le matériau imposé ou choisi »), sans ajouter de contenu superflu — seulement une hiérarchie plus fine du même propos.

Aucune autre non-conformité détectée. `npx tsc --noEmit` passe sans erreur ; `npx eslint .` ne signale que des erreurs préexistantes dans `.claude/skills/*.cjs`, sans rapport avec ces changements.

## 7. Checklist de vérification rapide

- [ ] 1 seul H1 par page, métier + ville
- [ ] Title = métier + ville + département
- [ ] Meta description 140-200 caractères sur chaque page
- [ ] 9-15 H2 par page, hiérarchie H2/H3 propre
- [ ] ≥ 1 500 mots cumulés sur les 3 pages (accueil ≥ 1 200, prestation ≥ 900, ville ≥ 900)
- [ ] JSON-LD `RoofingContractor` complet (PostalAddress, GeoCoordinates, OpeningHoursSpecification, AggregateRating, OfferCatalog/Offer/Service) + `FAQPage` si FAQ
- [ ] `lang="fr"`, `<link rel="canonical">`, balises Open Graph
- [ ] `alt` non vide sur toutes les images
- [ ] Téléphone en `href="tel:..."` + formulaire de contact fonctionnel
- [ ] Rendu SSR/SSG — vérifier que le contenu est bien dans le HTML source (view-source, pas seulement dans le DOM après hydratation)
- [ ] Page ville : contenu 100% distinct de l'accueil, angle local réel
- [ ] Maillage interne : footer + liens "à lire ensuite" + communes limitrophes
