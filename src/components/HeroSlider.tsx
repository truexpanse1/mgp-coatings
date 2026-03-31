"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.jpg",
    alt: "Premium garage floor coating with metallic finish",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Beautiful pool deck coating in the California sun",
  },
  {
    image: "/images/hero-3.jpg",
    alt: "Stunning patio transformation by MGP Coatings",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent z-10" />

      {/* Bottom content bar — Heslin style: logo left, headline center, CTAs right */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Content area */}
        <div className="max-w-site mx-auto px-6 pb-8">
          <div className="flex items-end justify-between gap-8">
            {/* Logo — bottom left like Heslin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="shrink-0 hidden md:block"
            >
              <Image
                src="/images/mgp-logo.png"
                alt="MGP Coatings"
                width={200}
                height={100}
                className="w-40 lg:w-48 h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Center text */}
            <div className="flex-1 text-center md:text-left md:pl-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-cream leading-[1.1] uppercase tracking-wide"
              >
                Transforming Surfaces.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-cream/70 mt-3 text-sm md:text-base max-w-xl"
              >
                Premium concrete coatings and professional painting across San Luis Obispo County. 30+ years of excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-5 flex items-center gap-6 justify-center md:justify-start"
              >
                <a
                  href="/contact"
                  className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-gold hover:text-cream transition-colors font-bold"
                >
                  Free Estimate
                </a>
                <span className="text-cream/30">|</span>
                <a
                  href="/results"
                  className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-gold hover:text-cream transition-colors font-bold"
                >
                  View Portfolio
                </a>
                {/* Social icons placeholder */}
                <span className="text-cream/30 hidden sm:inline">|</span>
                <div className="hidden sm:flex items-center gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold transition-colors" aria-label="Google">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </a>
                  <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold transition-colors" aria-label="Yelp">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.986-4.404c.458-.675 1.565-.343 1.594.478l.105 3.04c.013.37-.167.944-.514 1.083zm-7.664 5.89l-1.07-4.56c-.24-1.022 1.07-1.632 1.77-.82l3.455 3.996c.452.524-.034 1.318-.7 1.144l-2.972-.837c-.35-.098-.39-.58-.483-.923zM7.61 17.87l1.9-4.577c.407-.98 1.88-.592 1.79.47l-.332 3.945c-.037.43-.51.817-.937.724l-2.268-.508c-.36-.08-.333-.69-.153-1.054zm.004-9.846l3.537 2.93c.757.628.06 1.83-.886 1.538l-5.02-1.54c-.655-.2-.66-1.162-.007-1.37l1.774-.534c.373-.113.352-.707.602-1.024zm4.556-5.556v5.22c0 1.05-1.507 1.268-1.837.264l-1.752-5.326c-.214-.65.44-1.227 1.043-1.02l1.52.55c.344.125.677.028 1.026.312z"/></svg>
                  </a>
                </div>
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
