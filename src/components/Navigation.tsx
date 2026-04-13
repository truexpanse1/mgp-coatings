"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us/" },
  { name: "Services", href: "/garage-floor-coatings/" },
  { name: "Gallery", href: "/results/" },
  { name: "Blog", href: "/blog/" },
  { name: "Service Areas", href: "/service-areas/" },
  { name: "Financing", href: "/financing/" },
  { name: "Contact", href: "/contact/" },
];

const serviceLinks = [
  { name: "Garage Floor Coatings", href: "/garage-floor-coatings/" },
  { name: "Pool Deck Coatings", href: "/pool-deck-coatings/" },
  { name: "Patio Coatings", href: "/patio-coatings/" },
  { name: "Driveway Coatings", href: "/driveway-coatings/" },
  { name: "Epoxy Flooring", href: "/epoxy-flooring/" },
  { name: "Epoxy Countertops", href: "/epoxy-countertops/" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger — always visible, top-right, floating over hero */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 right-6 z-50 w-12 h-12 flex flex-col items-center justify-center gap-[6px] group"
        aria-label="Open menu"
      >
        <span className="block w-8 h-[3px] bg-cream rounded-full transition-all group-hover:bg-gold" />
        <span className="block w-8 h-[3px] bg-cream rounded-full transition-all group-hover:bg-gold" />
        <span className="block w-8 h-[3px] bg-cream rounded-full transition-all group-hover:bg-gold" />
      </button>

      {/* Slide-in overlay panel from right — Heslin style */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Dark backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Right panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Nav links */}
          <nav className="flex flex-col items-end justify-center h-full pr-12 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-playfair text-3xl md:text-4xl text-cream hover:text-gold transition-colors duration-300 py-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="w-16 h-[1px] bg-gold/30 my-4" />

            {/* Services sub-links */}
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-montserrat text-sm text-muted hover:text-gold transition-colors duration-300 py-1 tracking-wide"
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="w-16 h-[1px] bg-gold/30 my-4" />

            {/* Phone + CTA */}
            <a
              href="tel:8059525301"
              className="flex items-center gap-2 text-gold hover:text-cream transition-colors text-lg font-montserrat tracking-wide"
            >
              <Phone size={18} />
              (805) 952-5301
            </a>

            <Link
              href="/contact/"
              onClick={() => setMenuOpen(false)}
              className="mt-4 font-montserrat text-xs uppercase tracking-[0.2em] bg-gold text-primary px-8 py-3 hover:bg-gold/90 transition-all duration-300 font-bold"
            >
              Free Estimate
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
