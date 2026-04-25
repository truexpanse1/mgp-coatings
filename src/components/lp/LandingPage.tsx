import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Shield, Award, Star } from "lucide-react";
import EstimateFormLP from "@/components/lp/EstimateFormLP";
import LeadMagnetForm from "@/components/lp/LeadMagnetForm";

interface Bonus {
  name: string;
  value: string;
}

interface Guarantee {
  title: string;
  body: string;
}

interface FAQ {
  q: string;
  a: string;
}

export interface LandingPageData {
  slug: string;
  service: string;
  serviceShort: string;
  leadMagnetTag: string;
  ghlServiceInterest: string;
  heroImage: string;
  hero: {
    preHeadline: string;
    headline: string;
    subheadline: string;
    trustChips: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  offer: {
    title: string;
    bonuses: Bonus[];
    totalValue: string;
    scarcity: string;
  };
  problem: {
    headline: string;
    points: string[];
  };
  solution: {
    headline: string;
    points: string[];
  };
  guarantees: Guarantee[];
  leadMagnet: {
    title: string;
    subtitle: string;
    bullets: string[];
    filename: string;
  };
  faqs: FAQ[];
}

export default function LandingPage({ data }: { data: LandingPageData }) {
  const sourcePage = `lp-${data.slug}`;

  return (
    <div className="min-h-screen bg-primary text-cream">
      {/* Minimal branded bar — no nav, just logo + phone */}
      <header className="bg-primary border-b border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/mgp-logo.png"
              alt="MGP Coatings"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <a
            href="tel:+18059525301"
            className="flex items-center gap-2 text-gold hover:text-gold/80 font-montserrat text-sm font-bold"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">(805) 952-5301</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.service}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {data.hero.preHeadline}
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              {data.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-cream/80 mb-8 max-w-2xl">
              {data.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {data.hero.trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 border border-gold/30 text-xs font-montserrat uppercase tracking-[0.1em] text-cream/90"
                >
                  <Star size={12} className="text-gold fill-gold" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-[0.12em] bg-gold text-primary px-8 py-4 rounded-lg hover:bg-gold/90 font-bold"
              >
                {data.hero.primaryCta}
              </a>
              <a
                href="#guide"
                className="inline-flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-[0.12em] border border-gold/50 text-gold px-8 py-4 rounded-lg hover:bg-gold/10 font-bold"
              >
                {data.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="bg-surface py-6 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-playfair text-3xl text-gold">5.0★</div>
            <div className="text-xs uppercase tracking-wider text-cream/60">
              94 Google Reviews
            </div>
          </div>
          <div>
            <div className="font-playfair text-3xl text-gold">30+</div>
            <div className="text-xs uppercase tracking-wider text-cream/60">
              Years Experience
            </div>
          </div>
          <div>
            <div className="font-playfair text-3xl text-gold">500+</div>
            <div className="text-xs uppercase tracking-wider text-cream/60">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="font-playfair text-3xl text-gold">15-Yr</div>
            <div className="text-xs uppercase tracking-wider text-cream/60">
              Written Warranty
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-8 text-center">
            {data.problem.headline}
          </h2>
          <ul className="space-y-4">
            {data.problem.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 bg-surface/50 rounded-lg border-l-4 border-red-500/80"
              >
                <span className="text-red-500 text-2xl leading-none">×</span>
                <p className="text-cream/90">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 lg:py-20 bg-surface/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-8 text-center">
            {data.solution.headline}
          </h2>
          <ul className="space-y-4">
            {data.solution.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 bg-primary/60 rounded-lg border-l-4 border-gold"
              >
                <Check className="text-gold shrink-0 mt-0.5" size={22} />
                <p className="text-cream/90">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OFFER STACK */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gold mb-3">
              This Month Only
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl text-cream leading-tight">
              {data.offer.title}
            </h2>
          </div>

          <div className="bg-gradient-to-b from-surface to-surface/60 border border-gold/30 rounded-2xl p-6 sm:p-10 max-w-2xl mx-auto">
            <div className="space-y-3 mb-6">
              {data.offer.bonuses.map((bonus, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 pb-3 border-b border-gold/10 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <Check className="text-gold shrink-0 mt-1" size={18} />
                    <span className="text-cream/90 text-sm sm:text-base">
                      {bonus.name}
                    </span>
                  </div>
                  <span className="font-playfair text-gold shrink-0">
                    {bonus.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gold/40">
              <span className="font-montserrat uppercase tracking-wider text-cream">
                Total Value
              </span>
              <span className="font-playfair text-3xl text-gold">
                {data.offer.totalValue}
              </span>
            </div>
            <p className="text-center mt-6 text-cream/70 text-sm italic">
              {data.offer.scarcity}
            </p>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-16 lg:py-20 bg-surface/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-4 text-center">
            Triple Guarantee. No Fine Print.
          </h2>
          <p className="text-center text-cream/70 mb-12 max-w-2xl mx-auto">
            Risk-reversal is how confident contractors separate themselves from
            fly-by-night ones. Here&apos;s ours.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {data.guarantees.map((g, i) => (
              <div
                key={i}
                className="bg-primary/60 border border-gold/30 rounded-xl p-6 text-center"
              >
                <Shield className="mx-auto text-gold mb-4" size={36} />
                <h3 className="font-playfair text-xl text-cream mb-3">
                  {g.title}
                </h3>
                <p className="text-cream/70 text-sm">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="guide" className="py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gold/10 via-surface to-surface border border-gold/40 rounded-2xl p-6 sm:p-10 lg:p-14">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gold mb-3">
                  Free Guide
                </p>
                <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-4">
                  {data.leadMagnet.title}
                </h2>
                <p className="text-cream/80 mb-6">
                  {data.leadMagnet.subtitle}
                </p>
                <ul className="space-y-2.5 mb-0">
                  {data.leadMagnet.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-cream/90 text-sm">
                      <Check className="text-gold shrink-0 mt-0.5" size={18} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/80 border border-gold/20 rounded-xl p-6">
                <LeadMagnetForm
                  service={data.ghlServiceInterest}
                  sourcePage={sourcePage}
                  leadMagnetTag={data.leadMagnetTag}
                  leadMagnetTitle={data.leadMagnet.title}
                  leadMagnetFilename={data.leadMagnet.filename}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATE CTA (primary) */}
      <section id="estimate" className="py-16 lg:py-24 bg-surface scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gold mb-3">
                Ready Now
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-4 leading-tight">
                Get your free on-site {data.serviceShort.toLowerCase()} estimate.
              </h2>
              <p className="text-cream/80 mb-6">
                Matt Gifford personally handles every estimate. No subcontractors,
                no high-pressure sales, no bait-and-switch pricing. Just a real
                number you can count on, from the owner himself.
              </p>
              <div className="space-y-3 text-cream/90">
                <div className="flex items-center gap-3">
                  <Award className="text-gold" size={20} />
                  <span>30+ years. Licensed #1061424.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-gold fill-gold" size={20} />
                  <span>94 five-star Google reviews.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-gold" size={20} />
                  <span>Premium workmanship warranty on every project.</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/80 border border-gold/30 rounded-xl p-6 sm:p-8">
              <EstimateFormLP
                service={data.ghlServiceInterest}
                sourcePage={sourcePage}
                buttonLabel={data.hero.primaryCta}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-10 text-center">
            Common Questions
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-surface/60 rounded-lg border border-gold/15 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-montserrat font-bold text-cream hover:text-gold transition-colors list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-gold ml-4 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-cream/80 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-surface to-primary border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-4">
            Done in a day. Premium warranty. 94 five-star reviews.
          </h2>
          <p className="text-cream/80 mb-8 text-lg">
            Book your free in-home consultation today before this month&apos;s slots run out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center font-montserrat text-sm uppercase tracking-[0.12em] bg-gold text-primary px-8 py-4 rounded-lg hover:bg-gold/90 font-bold"
            >
              {data.hero.primaryCta}
            </a>
            <a
              href="tel:+18059525301"
              className="inline-flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-[0.12em] border border-gold/50 text-gold px-8 py-4 rounded-lg hover:bg-gold/10 font-bold"
            >
              <Phone size={16} />
              (805) 952-5301
            </a>
          </div>
          <p className="text-cream/50 text-xs mt-6">{data.offer.scarcity}</p>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-primary border-t border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-cream/50 text-xs space-y-2">
          <p>
            MGP Coatings &middot; Licensed #1061424 &middot; San Luis Obispo
            County
          </p>
          <p>
            <a href="tel:+18059525301" className="hover:text-gold">
              (805) 952-5301
            </a>
            {" "}·{" "}
            <Link href="/" className="hover:text-gold">
              Full Site
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
