"use client";

import Image from "next/image";
import { Check, Phone, Star, ChevronDown, Shield, Clock, Award, ThumbsUp } from "lucide-react";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";

interface Benefit {
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageTemplateProps {
  hero: string;
  heroSubtitle?: string;
  title: string;
  intro: string;
  problem?: string;
  image: string;
  features: string[];
  benefits?: Benefit[];
  faqs?: FAQ[];
  gallery?: string[];
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
          open ? "max-h-48 pb-5 px-5" : "max-h-0"
        }`}
      >
        <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

const benefitIcons = [Clock, Shield, Award, ThumbsUp];

export default function ServicePageTemplate({
  hero,
  heroSubtitle,
  title,
  intro,
  problem,
  image,
  features,
  benefits,
  faqs,
  gallery,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* ===== HERO — Full-width with image background ===== */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
        <div className="relative z-10 max-w-site mx-auto px-6 pb-16 pt-40 w-full">
          <FadeIn>
            <SectionLabel label="MGP Coatings" />
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mt-3 max-w-3xl leading-[1.1]">
              {hero}
            </h1>
            {heroSubtitle && (
              <p className="text-cream/80 text-lg md:text-xl mt-4 max-w-2xl">
                {heroSubtitle}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
              >
                Get Your Free Estimate
              </a>
              <a
                href="tel:8059525301"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] border border-cream/30 text-cream px-8 py-4 rounded hover:border-gold hover:text-gold transition-all duration-300"
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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
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
            <span className="text-cream/70 text-sm">Licensed & Insured #1061424</span>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / PAIN POINT ===== */}
      {problem && (
        <section className="bg-primary py-20">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <SectionLabel label="The Problem" />
                <p className="text-cream/90 text-xl md:text-2xl leading-relaxed mt-4 font-playfair italic">
                  &ldquo;{problem}&rdquo;
                </p>
                <div className="gold-line mx-auto mt-8" style={{ width: "60px" }} />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ===== SOLUTION / INTRO + FEATURES ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden sticky top-32">
                <Image
                  src={gallery && gallery.length > 0 ? gallery[0] : image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            {/* Details */}
            <FadeIn direction="right" delay={0.2}>
              <div>
                <SectionLabel label="The Solution" />
                <div className="gold-line mb-6 mt-4" />
                <h2 className="font-playfair text-3xl md:text-4xl text-cream">{title}</h2>
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

      {/* ===== BENEFITS GRID ===== */}
      {benefits && benefits.length > 0 && (
        <section className="bg-primary py-24">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <SectionLabel label="Why Choose MGP" />
                <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
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

      {/* ===== PROJECT GALLERY ===== */}
      {gallery && gallery.length > 0 && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-site mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <SectionLabel label="Our Work" />
                <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
                  Real Projects. Real Results.
                </h2>
                <p className="text-muted mt-3 max-w-xl mx-auto">
                  Every photo represents a satisfied client and a surface transformed by MGP Coatings.
                </p>
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
                  href="/results"
                  className="font-montserrat text-xs uppercase tracking-[0.15em] border border-gold text-gold px-8 py-4 rounded hover:bg-gold hover:text-primary transition-all duration-300 inline-block"
                >
                  View Full Gallery
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ===== SOCIAL PROOF / REVIEWS ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel label="Testimonials" />
              <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
                What Our Clients Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Matt and his team transformed our garage floor in one day. It looks like a showroom. Professional, clean, and the quality is incredible.", platform: "Google" },
              { name: "Tom R.", text: "We've used MGP for our pool deck and patio. Both projects came out beautiful. Highly recommend to anyone in SLO County.", platform: "Yelp" },
              { name: "Linda K.", text: "After 30 years of painting experience, you can really tell the difference. Matt's attention to detail is second to none. Our house looks brand new.", platform: "Facebook" },
            ].map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.1}>
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
                    <span className="text-cream font-montserrat text-xs uppercase tracking-wider">
                      {review.name}
                    </span>
                    <span className="text-gold/60 text-xs">{review.platform}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      {faqs && faqs.length > 0 && (
        <section className="bg-primary py-24">
          <div className="max-w-site mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <div>
                  <SectionLabel label="Common Questions" />
                  <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted mt-4 leading-relaxed">
                    Have a question that&apos;s not listed here? Give us a call at{" "}
                    <a href="tel:8059525301" className="text-gold hover:text-cream transition-colors">
                      (805) 952-5301
                    </a>{" "}
                    — we&apos;re happy to help.
                  </p>
                  <div className="mt-8 p-6 bg-surface rounded-xl border border-white/5 hidden lg:block">
                    <p className="text-cream font-playfair text-lg">
                      Ready to get started?
                    </p>
                    <p className="text-muted text-sm mt-2">
                      Free estimates — no obligation, no pressure.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-4 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-6 py-3 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
                    >
                      Request Free Estimate
                    </a>
                  </div>
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

      {/* ===== FINAL CTA — Contact Form ===== */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <SectionLabel label="Get Started Today" />
                <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
                  Request Your Free Estimate
                </h2>
                <p className="text-muted mt-4 leading-relaxed text-lg">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                  No pressure, no obligation — just honest pricing from a team
                  with 30+ years of experience.
                </p>

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
                      <p className="text-muted">Mon–Sat: 7:00 AM – 6:00 PM</p>
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
    </>
  );
}
