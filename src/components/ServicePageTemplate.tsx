"use client";

import Image from "next/image";
import { Check, Phone } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";
import Reviews from "./Reviews";

interface ServicePageTemplateProps {
  hero: string;
  title: string;
  intro: string;
  image: string;
  features: string[];
  description: string;
}

export default function ServicePageTemplate({
  hero,
  title,
  intro,
  image,
  features,
  description,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="Our Services" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              {hero}
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">{description}</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden sticky top-32">
                <div className="absolute inset-0 bg-surface" />
                <Image
                  src={image}
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
                <div className="gold-line mb-6" />
                <h2 className="font-playfair text-3xl text-cream">{title}</h2>
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

                <div className="mt-10 p-6 bg-surface rounded-xl border border-white/5">
                  <p className="text-cream font-playfair text-lg">
                    Ready to get started?
                  </p>
                  <p className="text-muted text-sm mt-2">
                    Call for a free estimate or fill out the form below.
                  </p>
                  <a
                    href="tel:8059525301"
                    className="inline-flex items-center gap-2 mt-4 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-6 py-3 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
                  >
                    <Phone size={14} />
                    (805) 952-5301
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Reviews />

      {/* Inline Contact Form */}
      <section className="bg-primary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <SectionLabel label="Get Started" />
                <h2 className="font-playfair text-3xl text-cream mt-3">
                  Request Your Free Estimate
                </h2>
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
