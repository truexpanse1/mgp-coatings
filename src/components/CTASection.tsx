"use client";

import { Phone, Mail, Clock, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";
import IrresistibleOffer from "./IrresistibleOffer";

export default function CTASection() {
  return (
    <section id="estimate-form" className="bg-primary py-24">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <FadeIn direction="left">
            <div>
              <SectionLabel label="Request an Estimate" />
              <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3 mb-6">
                Let&apos;s Transform Your Space
              </h2>
              <div className="mb-6">
                <IrresistibleOffer variant="inline" />
              </div>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact Details */}
          <FadeIn direction="right" delay={0.2}>
            <div className="lg:pl-8">
              <SectionLabel label="Get In Touch" />
              <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3 mb-8">
                Contact Details
              </h2>

              <div className="space-y-6">
                <a
                  href="tel:8059525301"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-muted">
                      Phone
                    </p>
                    <p className="text-cream text-lg mt-0.5 group-hover:text-gold transition-colors">
                      (805) 952-5301
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:matt.gifford@mgpcoatings.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-muted">
                      Email
                    </p>
                    <p className="text-cream text-lg mt-0.5 group-hover:text-gold transition-colors">
                      Send Us an Email
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-muted">
                      Hours
                    </p>
                    <p className="text-cream text-lg mt-0.5">
                      Mon - Sat, 6am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-muted">
                      Service Area
                    </p>
                    <p className="text-cream text-lg mt-0.5">
                      San Luis Obispo County, CA
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-surface rounded-xl border border-white/5">
                <p className="text-cream font-playfair text-lg">
                  Ready to get started?
                </p>
                <p className="text-muted text-sm mt-2">
                  Call now for a free, no-obligation estimate. Most projects can be scheduled within the week.
                </p>
                <a
                  href="tel:8059525301"
                  className="inline-block mt-4 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-6 py-3 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
                >
                  Call For a Free Estimate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
