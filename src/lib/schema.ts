import { areas, business, services } from "./business";
import type { FaqItem } from "./business";

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "09:00",
    closes: "12:00",
  },
];

export function roofingContractorSchema(opts: { url: string; areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: business.name,
    alternateName: `${business.founder} Couvreur`,
    image: `${business.siteUrl}/images/og-couverture-vasseur-angers.jpg`,
    url: opts.url,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    priceRange: "€€",
    description:
      "Entreprise de couverture à Angers spécialisée dans l'ardoise naturelle, la zinguerie et la rénovation de toiture. RGE Qualibat, garantie décennale AXA, 12 ans d'expérience.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: (opts.areaServed ?? areas.map((a) => a.name)).map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      ...openingHours,
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "Astreinte téléphonique urgence fuite, 7 jours sur 7",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(business.rating.value),
      reviewCount: String(business.rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de couverture Vasseur",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
    founder: {
      "@type": "Person",
      name: business.founder,
      jobTitle: "Artisan couvreur",
    },
    foundingDate: "2014",
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  url: string;
  name: string;
  description: string;
  areaServedName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    url: opts.url,
    description: opts.description,
    provider: {
      "@type": "RoofingContractor",
      name: business.name,
      telephone: business.phoneHref.replace("tel:", ""),
      url: business.siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        postalCode: business.address.postalCode,
        addressRegion: business.address.region,
        addressCountry: business.address.country,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(business.rating.value),
        reviewCount: String(business.rating.count),
        bestRating: "5",
      },
    },
    areaServed: { "@type": "City", name: opts.areaServedName },
    offers: {
      "@type": "Offer",
      priceRange: "12000-28000 EUR",
      priceCurrency: "EUR",
    },
  };
}
