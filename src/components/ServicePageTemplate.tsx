"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Star, ChevronDown, Shield, Clock, Award, ThumbsUp, Sparkles, AlertCircle } from "lucide-react";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";
import IrresistibleOffer from "./IrresistibleOffer";
import ValueStack from "./ValueStack";
import Bonuses from "./Bonuses";
import Guarantee from "./Guarantee";
import Warning from "./Warning";
import BeforeAfter from "./BeforeAfter";
import RelatedLinks from "./RelatedLinks";
import reviewsData from "@/data/reviews.json";

interface Benefit {
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ValueStackItem {
  label: string;
  value: string;
}

interface Bonus {
  title: string;
  value: string;
  desc: string;
}

interface PainPoint {
  title: string;
  desc: string;
}

interface BeforeAfterPair {
  before: string;
  after: string;
  label?: string;
}

interface ServicePageTemplateProps {
  slug: string;
  hero: string;
  heroSubtitle?: string;
  audienceCallout?: string;
  title: string;
  intro: string;
  problemHeadline?: string;
  problem?: string;
  painPoints?: PainPoint[];
  image: string;
  features: string[];
  benefits?: Benefit[];
  valueStack?: ValueStackItem[];
  valueTotal?: string;
  bonuses?: Bonus[];
  guarantee?: { title: string; body: string };
  warning?: { title: string; body: string };
  scarcity?: string;
  pricingNote?: string;
  faqs?: FAQ[];
  gallery?: string[];
  beforeAfter?: BeforeAfterPair[];
  description: string;
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-montserrat text-sm text-cream pr-4">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`text-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-72 pb-5 px-5" : "max-h-0"
        }`}
      >
        <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

const benefitIcons = [Clock, Shield, Award, ThumbsUp];

export default function ServicePageTemplate({
  slug,
  hero,
  heroSubtitle,
  audienceCallout,
  title,
  intro,
  problemHeadline,
  problem,
  painPoints,
  image,
  features,
  benefits,
  valueStack,
  valueTotal,
  bonuses,
  guarantee,
  warning,
  scarcity,
  pricingNote,
  faqs,
  gallery,
  beforeAfter,
}: ServicePageTemplateProps) {
  // Get 3 reviews relevant to this service if possible
  const serviceReviews = reviewsData
    .filter((r) =>
      r.service.toLowerCase().includes(title.toLowerCase().split(" ")[0])
    )
    .slice(0, 3);
  const displayReviews =
    serviceReviews.length >= 3 ? serviceReviews : reviewsData.slice(0, 3);

  return (
    <>
      {/* ===== 1. HERO — Audience callout + headline + subhead + offer CTAs ===== */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={hero}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />

        <div className="relative z-10 max-w-site mx-auto px-6 pb-16 pt-40 w-full">
          <FadeIn>
            {audienceCallout && (
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/40 text-gold px-3 py-1.5 rounded-full text-[10px] md:text-xs font-montserrat uppercase tracking-[0.15em] mb-4">
                <Sparkles size={12} />
                {audienceCallout}
              </div>
            )}
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream max-w-3xl leading-[1.08]">
              {hero}
            </h1>
            {heroSubtitle && (
              <p className="text-cream/85 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
                {heroSubtitle}
              </p>
            )}
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

      {/* ===== 2. TRUST BAR ===== */}
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
            <span className="text-cream/70 text-sm">30+ Years Experience</span>
            <div className="text-cream/30 hidden md:block">|</div>
            <span className="text-cream/70 text-sm">500+ Projects Completed</span>
            <div className="text-cream/30 hidden md:block">|</div>
            <span className="text-cream/70 text-sm">CA License #1061424</span>
            <div className="text-cream/30 hidden md:block">|</div>
            <span className="text-cream/70 text-sm">Family Owned Since 2019</span>
          </div>
        </div>
      </section>

      {/* ===== 3. PROBLEM / PAIN POINTS — "Sound familiar?" ===== */}
      {(painPoints && painPoints.length > 0) || problem ? (
        <section className="bg-primary py-24">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12 max-w-3xl mx-auto">
                <SectionLabel label="Sound Familiar?" />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                  {problemHeadline || "Here's What's Costing You Money Right Now"}
                </h2>
                {problem && (
                  <p className="text-cream/80 text-base md:text-lg mt-5 leading-relaxed">
                    {problem}
                  </p>
                )}
              </div>
            </FadeIn>

            {painPoints && painPoints.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {painPoints.map((p, i) => (
                  <FadeIn key={p.title} delay={i * 0.1}>
                    <div className="bg-surface border border-red-500/20 rounded-xl p-6 h-full">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                        <AlertCircle size={18} className="text-red-400" />
                      </div>
                      <h3 className="font-playfair text-lg text-cream mb-2">{p.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* ===== 4. SOLUTION + FEATURES ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden lg:sticky lg:top-32">
                <Image
                  src={gallery && gallery.length > 0 ? gallery[0] : image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div>
                <SectionLabel label="The Solution" />
                <div className="gold-line mb-6 mt-4" />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream leading-tight">
                  Here&apos;s What We Do Differently
                </h2>
                <p className="text-muted mt-6 leading-relaxed text-lg">{intro}</p>

                <h3 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold mt-10 mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {features.map((feature) => (
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

      {/* ===== 5. AUTHORITY (Matt's 30-year story callout) ===== */}
      <section className="bg-primary py-20">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-surface border border-gold/20 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-gold/30">
                  <Image
                    src="/images/scraped/scraped-matt-headshot.png"
                    alt="Matt Gifford, Owner of MGP Coatings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <SectionLabel label="Your Craftsman" />
                <h3 className="font-playfair text-2xl md:text-3xl text-cream mt-3 leading-tight">
                  Matt Gifford — 30+ Years on the Central Coast
                </h3>
                <p className="text-cream/80 mt-4 leading-relaxed">
                  Matt started in construction at 16 and has been perfecting his craft ever since. He founded MGP Coatings in 2019 to bring premium, no-shortcut coating systems to homeowners and businesses across San Luis Obispo County. Every project is run by Matt personally — no subcontractors, no learning curve, no excuses.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-cream/60 font-montserrat uppercase tracking-wider">
                  <span>CA License #1061424</span>
                  <span className="text-gold/40">•</span>
                  <span>Insured</span>
                  <span className="text-gold/40">•</span>
                  <span>Family Owned</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. BENEFITS GRID ===== */}
      {benefits && benefits.length > 0 && (
        <section className="bg-secondary py-24">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <SectionLabel label="Why Choose MGP" />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                  Results You Can Count On
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <FadeIn key={benefit.title} delay={i * 0.1}>
                    <div className="bg-surface border border-white/5 rounded-xl p-8 text-center hover:border-gold/30 transition-colors duration-300 h-full">
                      <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                        <Icon size={24} className="text-gold" />
                      </div>
                      <h3 className="font-playfair text-xl text-cream mb-3">{benefit.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== 7. BEFORE / AFTER ===== */}
      {beforeAfter && beforeAfter.length > 0 && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <SectionLabel label="Before & After" />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                  See the Transformation
                </h2>
                <p className="text-muted mt-3 max-w-xl mx-auto">
                  Drag the handle to reveal the difference. Real projects, real results.
                </p>
              </div>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <FadeIn delay={0.1}>
                <BeforeAfter
                  beforeSrc={beforeAfter[0].before}
                  afterSrc={beforeAfter[0].after}
                  label={beforeAfter[0].label}
                />
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ===== 8. SOCIAL PROOF / SERVICE REVIEWS ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel label="Real Reviews From Real Clients" />
              <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                What Our Clients Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayReviews.map((review, i) => (
              <FadeIn key={`${review.name}-${i}`} delay={i * 0.1}>
                <div className="bg-surface border border-white/5 rounded-xl p-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-cream/80 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-cream font-montserrat text-xs uppercase tracking-wider block">
                        {review.name}
                      </span>
                      {"city" in review && (
                        <span className="text-cream/40 text-[10px]">{review.city}</span>
                      )}
                    </div>
                    <span className="text-gold/60 text-xs">{review.platform}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9-11. VALUE STACK (combines offer + features + values) ===== */}
      {valueStack && valueStack.length > 0 && valueTotal && (
        <ValueStack items={valueStack} total={valueTotal} pricingNote={pricingNote} />
      )}

      {/* ===== 10. BONUSES ===== */}
      {bonuses && bonuses.length > 0 && <Bonuses bonuses={bonuses} />}

      {/* ===== 13. SCARCITY ===== */}
      {scarcity && (
        <section className="bg-primary py-12 border-y border-gold/20">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-2">
                  Limited Availability
                </p>
                <p className="text-cream text-lg md:text-xl font-playfair italic">
                  &ldquo;{scarcity}&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ===== 14. GUARANTEE ===== */}
      {guarantee && <Guarantee title={guarantee.title} body={guarantee.body} />}

      {/* ===== 15. CTA + IRRESISTIBLE OFFER + FORM ===== */}
      <section id="estimate-form" className="bg-primary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <SectionLabel label="Get Started Today" />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                  Request Your Free Estimate
                </h2>
                <p className="text-muted mt-4 leading-relaxed text-lg">
                  Fill out the form and we&apos;ll get back to you within 24 hours with a free on-site estimate. No pressure. No obligation. Just an honest quote from a craftsman with 30+ years of experience.
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
                      <p className="text-cream font-montserrat text-xs uppercase tracking-wider">
                        Call Us Directly
                      </p>
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
                      <p className="text-cream font-montserrat text-xs uppercase tracking-wider">
                        Hours
                      </p>
                      <p className="text-muted">Mon–Sat: 6:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Shield size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream font-montserrat text-xs uppercase tracking-wider">
                        Licensed & Insured
                      </p>
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

      {/* ===== 16. WARNING (cost of inaction) ===== */}
      {warning && <Warning title={warning.title} body={warning.body} />}

      {/* ===== PROJECT GALLERY ===== */}
      {gallery && gallery.length > 0 && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <SectionLabel label="Our Work" />
                <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                  Real Projects. Real Results.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((img, i) => (
                <FadeIn key={img} delay={i * 0.08}>
                  <div className="group relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${title} project ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="text-center mt-10">
                <a
                  href="/results/"
                  className="font-montserrat text-xs uppercase tracking-[0.15em] border border-gold text-gold px-8 py-4 rounded hover:bg-gold hover:text-primary transition-all duration-300 inline-block"
                >
                  View Full Gallery
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ===== 18. FAQ ===== */}
      {faqs && faqs.length > 0 && (
        <section className="bg-secondary py-24">
          <div className="max-w-site mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <div>
                  <SectionLabel label="Common Questions" />
                  <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-3 leading-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted mt-4 leading-relaxed">
                    Have a question that&apos;s not listed here? Give us a call at{" "}
                    <a href="tel:8059525301" className="text-gold hover:text-cream transition-colors">
                      (805) 952-5301
                    </a>{" "}
                    — we&apos;re happy to help.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} faq={faq} />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ===== 17. FINAL REMINDER + RELATED LINKS ===== */}
      <RelatedLinks currentService={slug} />
    </>
  );
}
