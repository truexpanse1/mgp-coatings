import reviewsData from "@/data/reviews.json";
import offersData from "@/data/offers.json";

const SITE_URL = "https://mgpcoatings.solutions";

export function LocalBusinessJsonLd() {
  const reviewCount = reviewsData.length;
  const avgRating =
    reviewsData.reduce((sum, r) => sum + r.rating, 0) / Math.max(reviewCount, 1);

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "MGP Coatings",
    alternateName: "Matt Gifford Painting LLC",
    legalName: "Matt Gifford Painting LLC",
    description:
      "Premium concrete coatings, epoxy flooring, epoxy countertops, and professional painting services across San Luis Obispo County. 30+ years of experience. Most projects completed in 1-2 days. Family owned since 2019.",
    slogan: "Transforming Surfaces.",
    url: SITE_URL,
    telephone: "+1-805-952-5301",
    email: "matthew.gifford@yahoo.com",
    image: `${SITE_URL}/images/og-image.jpg`,
    logo: `${SITE_URL}/images/mgp-logo.png`,
    priceRange: "$$",
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      name: "Matt Gifford",
      jobTitle: "Owner",
      description: "30+ years of construction and painting experience since age 16.",
    },
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
      { "@type": "City", name: "San Luis Obispo", "@id": "https://www.wikidata.org/wiki/Q486868" },
      { "@type": "City", name: "Paso Robles" },
      { "@type": "City", name: "Atascadero" },
      { "@type": "City", name: "Templeton" },
      { "@type": "City", name: "Pismo Beach" },
      { "@type": "City", name: "Arroyo Grande" },
      { "@type": "City", name: "Grover Beach" },
      { "@type": "City", name: "Morro Bay" },
      { "@type": "City", name: "Los Osos" },
      { "@type": "City", name: "Cayucos" },
      { "@type": "City", name: "Cambria" },
      { "@type": "City", name: "Nipomo" },
      { "@type": "City", name: "Santa Margarita" },
      { "@type": "City", name: "Avila Beach" },
    ],
    knowsAbout: [
      "Concrete Coatings",
      "Epoxy Flooring",
      "Polyaspartic Coatings",
      "Garage Floor Coatings",
      "Pool Deck Coatings",
      "Patio Coatings",
      "Driveway Coatings",
      "Epoxy Countertops",
      "Residential Painting",
      "Commercial Painting",
      "Surface Preparation",
      "Diamond Grinding",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "California State Contractor License",
      identifier: "1061424",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "California Contractors State License Board (CSLB)",
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
          itemOffered: { "@type": "Service", name: "Garage Floor Coatings", url: `${SITE_URL}/garage-floor-coatings/` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Pool Deck Coatings", url: `${SITE_URL}/pool-deck-coatings/` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Patio Coatings", url: `${SITE_URL}/patio-coatings/` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Driveway Coatings", url: `${SITE_URL}/driveway-coatings/` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Epoxy Flooring", url: `${SITE_URL}/epoxy-flooring/` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Epoxy Countertops", url: `${SITE_URL}/epoxy-countertops/` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Residential & Commercial Painting", url: `${SITE_URL}/painting-slocounty/` },
        },
      ],
    },
    makesOffer: {
      "@type": "Offer",
      name: offersData.current.headline,
      description: offersData.current.valueProposition,
      priceCurrency: "USD",
      eligibleRegion: { "@type": "AdministrativeArea", name: "San Luis Obispo County, CA" },
      validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: String(reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviewsData.slice(0, 5).map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
    })),
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
  areaServedCity,
}: {
  name: string;
  description: string;
  url: string;
  areaServedCity?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "MGP Coatings",
      telephone: "+1-805-952-5301",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Luis Obispo",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: areaServedCity
      ? { "@type": "City", name: areaServedCity, containedInPlace: { "@type": "AdministrativeArea", name: "San Luis Obispo County, CA" } }
      : { "@type": "AdministrativeArea", name: "San Luis Obispo County, CA" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  author,
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  image?: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "MGP Coatings",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/mgp-logo.png`,
      },
    },
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/images/og-image.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OfferJsonLd() {
  const o = offersData.current;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: o.headline,
    description: o.valueProposition,
    seller: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "MGP Coatings",
    },
    priceCurrency: "USD",
    eligibleRegion: { "@type": "AdministrativeArea", name: "San Luis Obispo County, CA" },
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
