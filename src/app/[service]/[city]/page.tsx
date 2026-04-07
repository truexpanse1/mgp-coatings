import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MapPin, Star, Check, Shield, Clock } from "lucide-react";
import services from "@/data/services.json";
import cities from "@/data/cities.json";
import reviewsData from "@/data/reviews.json";
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import IrresistibleOffer from "@/components/IrresistibleOffer";
import ContactForm from "@/components/ContactForm";
import RelatedLinks from "@/components/RelatedLinks";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";

// Only the 5 cities × 3 highest-revenue services get combo pages
const COMBO_CITIES = ["san-luis-obispo", "paso-robles", "atascadero", "morro-bay", "templeton"];
const COMBO_SERVICES = ["garage-floor-coatings", "patio-coatings", "epoxy-flooring"];

// Generate all 15 static combinations at build time
export async function generateStaticParams() {
  return COMBO_SERVICES.flatMap((service) =>
    COMBO_CITIES.map((city) => ({ service, city }))
  );
}

interface PageProps {
  params: Promise<{ service: string; city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);

  if (!service || !city) {
    return { title: "Not Found" };
  }

  const title = `${service.title} in ${city.name}, CA | MGP Coatings`;
  const description = `Premium ${service.title.toLowerCase()} for ${city.name} homeowners and businesses. 30+ years of experience. Free on-site estimate. Call (805) 952-5301.`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} ${city.name.toLowerCase()}`,
      `${service.slug.replace(/-/g, " ")} ${city.shortName.toLowerCase()}`,
      `${service.title.toLowerCase()} contractor ${city.name.toLowerCase()}`,
      service.title.toLowerCase(),
      city.name.toLowerCase(),
      "san luis obispo county",
    ],
    openGraph: {
      title,
      description,
      images: [service.image],
      type: "website",
    },
    alternates: {
      canonical: `https://mgpcoatings.solutions/${serviceSlug}/${citySlug}/`,
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);

  if (!service || !city) {
    notFound();
  }

  const cityReviews = reviewsData.filter((r) => r.city === city.name).slice(0, 2);
  const fallbackReviews = reviewsData.slice(0, 2);
  const displayReviews = cityReviews.length >= 2 ? cityReviews : fallbackReviews;

  const pageUrl = `https://mgpcoatings.solutions/${serviceSlug}/${citySlug}/`;

  return (
    <>
      <ServiceJsonLd
        name={`${service.title} in ${city.name}`}
        description={service.description}
        url={pageUrl}
        areaServedCity={city.name}
      />
      <FAQPageJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mgpcoatings.solutions/" },
          { name: service.title, url: `https://mgpcoatings.solutions/${serviceSlug}/` },
          { name: city.name, url: pageUrl },
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.title} in ${city.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-site mx-auto px-6 pb-16 pt-40 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/40 text-gold px-3 py-1.5 rounded-full text-[10px] md:text-xs font-montserrat uppercase tracking-[0.15em] mb-4">
              <MapPin size={12} />
              Serving {city.name}, CA
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream max-w-3xl leading-[1.08]">
              {service.title} in <span className="text-gold">{city.name}</span>
            </h1>
            <p className="text-cream/85 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
              {service.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded hover:bg-gold/90 transition-all duration-300 font-bold shadow-2xl"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:8059525301"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] border border-cream/30 text-cream px-8 py-4 rounded hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-md bg-primary/30"
              >
                <Phone size={14} />
                (805) 952-5301
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[#0a0a0a] py-6 border-y border-white/5">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-cream/70 text-sm">5.0 Rated</span>
            </div>
            <div className="text-cream/30 hidden md:block">|</div>
            <span className="text-cream/70 text-sm">{city.responseTime}</span>
            <div className="text-cream/30 hidden md:block">|</div>
            <span className="text-cream/70 text-sm">CA License #1061424</span>
          </div>
        </div>
      </section>

      {/* ===== LOCAL INTRO ===== */}
      <section className="bg-primary py-20">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel label={`${city.name} Coating Pros`} />
              <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                Your Local {service.title} Specialist
              </h2>
              <p className="text-cream/80 text-base md:text-lg mt-6 leading-relaxed">
                {city.intro}
              </p>
              <p className="text-cream/70 text-sm md:text-base mt-4 leading-relaxed italic">
                {city.localContext}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== SERVICE OVERVIEW + FEATURES ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden lg:sticky lg:top-32">
                <Image
                  src={service.gallery && service.gallery.length > 0 ? service.gallery[0] : service.image}
                  alt={`${service.title} project in ${city.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <SectionLabel label="The Service" />
                <div className="gold-line mb-6 mt-4" />
                <h2 className="font-playfair text-3xl md:text-4xl text-cream leading-tight">
                  {service.title} in {city.name}, CA
                </h2>
                <p className="text-muted mt-6 leading-relaxed text-lg">{service.intro}</p>

                <h3 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold mt-10 mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.features.slice(0, 6).map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-gold" />
                      </div>
                      <span className="text-cream/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== NEIGHBORHOODS WE SERVE ===== */}
      {city.neighborhoods && city.neighborhoods.length > 0 && (
        <section className="bg-primary py-20">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <SectionLabel label="We Serve" />
                <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
                  Neighborhoods Across {city.name}
                </h2>
              </div>
            </FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-surface border border-gold/20 text-cream/80 px-4 py-2 rounded-full text-sm font-montserrat"
                >
                  <MapPin size={12} className="inline-block text-gold mr-1.5" />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== LOCAL REVIEWS ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel label={`${city.name} Reviews`} />
              <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                What Local Clients Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {displayReviews.map((review, i) => (
              <FadeIn key={`${review.name}-${i}`} delay={i * 0.1}>
                <div className="bg-surface border border-white/5 rounded-xl p-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-cream/80 leading-relaxed flex-1 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-cream font-montserrat text-xs uppercase tracking-wider block">
                        {review.name}
                      </span>
                      <span className="text-cream/40 text-[10px]">{review.city}</span>
                    </div>
                    <span className="text-gold/60 text-xs">{review.platform}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFER + CTA ===== */}
      <section id="estimate-form" className="bg-primary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <SectionLabel label={`${city.name} Estimates`} />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                  Free On-Site Estimate
                </h2>
                <p className="text-muted mt-4 leading-relaxed text-lg">
                  Tell us about your project and we&apos;ll get back to you within 24 hours with a transparent quote. No pressure. No obligation. Just an honest assessment from a craftsman with 30+ years of local experience.
                </p>
                <div className="mt-8">
                  <IrresistibleOffer variant="card" />
                </div>
                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream font-montserrat text-xs uppercase tracking-wider">Call Us Directly</p>
                      <a href="tel:8059525301" className="text-gold text-lg hover:text-cream transition-colors">
                        (805) 952-5301
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream font-montserrat text-xs uppercase tracking-wider">Hours</p>
                      <p className="text-muted">Mon–Sat: 6:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Shield size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream font-montserrat text-xs uppercase tracking-wider">Licensed & Insured</p>
                      <p className="text-muted">CA License #1061424</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== INTERNAL LINKS ===== */}
      <RelatedLinks currentService={serviceSlug} currentCity={citySlug} />
    </>
  );
}
