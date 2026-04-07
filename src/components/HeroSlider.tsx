"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Sparkles } from "lucide-react";
import offers from "@/data/offers.json";

const slides = [
  {
    image: "/images/scraped/scraped-garage-moderno-1.jpg",
    alt: "Premium metallic garage floor coating by MGP Coatings",
  },
  {
    image: "/images/scraped/scraped-pool-deck-1.jpg",
    alt: "Cool-touch pool deck coating in San Luis Obispo County",
  },
  {
    image: "/images/scraped/scraped-patio-1.jpg",
    alt: "Designer patio coating transformation by MGP Coatings",
  },
  {
    image: "/images/scraped/scraped-garage-scott-weyer.jpg",
    alt: "Showroom-quality garage floor by MGP Coatings",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const o = offers.current;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Image slides with crossfade + cinematic zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5 },
            scale: { duration: 8, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay — heavier at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/30 z-10" />

      {/* Trust chips strip — top of hero */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-24 md:pt-28">
        <div className="max-w-site mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3"
          >
            {o.trustChips.map((chip, i) => (
              <span
                key={i}
                className="bg-primary/60 backdrop-blur-md border border-gold/30 text-cream px-3 py-1.5 rounded-full text-[10px] md:text-xs font-montserrat tracking-wider"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-site mx-auto px-6 pb-20 md:pb-24">
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
            {/* Logo bottom-left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="shrink-0 hidden md:block"
            >
              <Image
                src="/images/mgp-logo.png"
                alt="MGP Coatings"
                width={280}
                height={140}
                className="w-44 lg:w-52 xl:w-56 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-md"
                priority
              />
            </motion.div>

            {/* Headline + offer + CTAs */}
            <div className="flex-1 text-center md:text-left md:pl-8 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-gold/20 border border-gold/50 backdrop-blur-md text-gold px-3 py-1.5 rounded-full text-[10px] md:text-xs font-montserrat uppercase tracking-[0.2em] font-bold mb-4"
              >
                <Sparkles size={12} />
                {o.expiresLabel}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] uppercase tracking-tight"
              >
                Transforming<br />
                <span className="text-gold">Surfaces.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-cream/85 mt-4 text-base md:text-lg max-w-xl mx-auto md:mx-0"
              >
                <span className="text-gold font-bold">{o.headline}</span> — premium concrete coatings, epoxy flooring, and professional painting across San Luis Obispo County.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-7 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start"
              >
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded hover:bg-gold/90 transition-all duration-300 font-bold shadow-2xl"
                >
                  {o.ctaText}
                </Link>
                <a
                  href="tel:8059525301"
                  className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] border border-cream/30 text-cream px-8 py-4 rounded hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-md bg-primary/30"
                >
                  <Phone size={14} />
                  (805) 952-5301
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} className="text-cream/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
