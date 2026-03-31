export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mgpcoatings.solutions",
    name: "MGP Coatings",
    alternateName: "Matt Gifford Painting LLC",
    description:
      "Premium concrete coatings, epoxy flooring, and professional painting services across San Luis Obispo County. 30+ years of experience. One-day installation.",
    url: "https://mgpcoatings.solutions",
    telephone: "+1-805-952-5301",
    email: "matthew.gifford@yahoo.com",
    image: "https://mgpcoatings.solutions/images/mgp-logo.png",
    logo: "https://mgpcoatings.solutions/images/mgp-logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Luis Obispo",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.2828,
      longitude: -120.6596,
    },
    areaServed: [
      "San Luis Obispo",
      "Paso Robles",
      "Atascadero",
      "Templeton",
      "Pismo Beach",
      "Arroyo Grande",
      "Grover Beach",
      "Morro Bay",
      "Los Osos",
      "Cayucos",
      "Cambria",
      "Nipomo",
      "Santa Margarita",
      "Avila Beach",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/mgpcoatings",
      "https://www.yelp.com/biz/mgp-coatings",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coating & Painting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garage Floor Coatings",
            url: "https://mgpcoatings.solutions/garage-floor-coatings/",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pool Deck Coatings",
            url: "https://mgpcoatings.solutions/pool-deck-coatings/",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patio Coatings",
            url: "https://mgpcoatings.solutions/patio-coatings/",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Driveway Coatings",
            url: "https://mgpcoatings.solutions/driveway-coatings/",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Epoxy Flooring",
            url: "https://mgpcoatings.solutions/epoxy-flooring/",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential & Commercial Painting",
            url: "https://mgpcoatings.solutions/painting-slocounty/",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "MGP Coatings",
      telephone: "+1-805-952-5301",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Luis Obispo",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "San Luis Obispo County, CA",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
