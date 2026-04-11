import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Tagline */}
          <div>
            <Link href="/">
              <Image
                src="/images/mgp-logo.png"
                alt="MGP Coatings"
                width={160}
                height={60}
                className="w-36 h-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] rounded-md"
              />
            </Link>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Premium concrete coatings and professional painting services across
              San Luis Obispo County. 30+ years of transforming surfaces.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Matt", href: "/about-us/" },
                { name: "Gallery", href: "/results/" },
                { name: "Blog", href: "/blog/" },
                { name: "Financing", href: "/financing/" },
                { name: "Service Areas", href: "/service-areas/" },
                { name: "Contact", href: "/contact/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Garage Floor Coatings", href: "/garage-floor-coatings/" },
                { name: "Pool Deck Coatings", href: "/pool-deck-coatings/" },
                { name: "Patio Coatings", href: "/patio-coatings/" },
                { name: "Driveway Coatings", href: "/driveway-coatings/" },
                { name: "Epoxy Flooring", href: "/epoxy-flooring/" },
                { name: "Epoxy Countertops", href: "/epoxy-countertops/" },
                { name: "Painting", href: "/painting-slocounty/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:8059525301"
                  className="flex items-center gap-3 text-muted text-sm hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  (805) 952-5301
                </a>
              </li>
              <li>
                <a
                  href="mailto:matthew.gifford@yahoo.com"
                  className="flex items-center gap-3 text-muted text-sm hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  Send Us an Email
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Clock size={16} className="text-gold shrink-0" />
                Mon - Sat, 6am - 6pm
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <MapPin size={16} className="text-gold shrink-0" />
                San Luis Obispo County, CA
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Google"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Yelp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.986-4.404c.458-.675 1.565-.343 1.594.478l.105 3.04c.013.37-.167.944-.514 1.083zm-7.664 5.89l-1.07-4.56c-.24-1.022 1.07-1.632 1.77-.82l3.455 3.996c.452.524-.034 1.318-.7 1.144l-2.972-.837c-.35-.098-.39-.58-.483-.923zM7.61 17.87l1.9-4.577c.407-.98 1.88-.592 1.79.47l-.332 3.945c-.037.43-.51.817-.937.724l-2.268-.508c-.36-.08-.333-.69-.153-1.054zm.004-9.846l3.537 2.93c.757.628.06 1.83-.886 1.538l-5.02-1.54c-.655-.2-.66-1.162-.007-1.37l1.774-.534c.373-.113.352-.707.602-1.024zm4.556-5.556v5.22c0 1.05-1.507 1.268-1.837.264l-1.752-5.326c-.214-.65.44-1.227 1.043-1.02l1.52.55c.344.125.677.028 1.026.312z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-site mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs">
            License #1061424 &middot; &copy; {new Date().getFullYear()} Matt Gifford Painting
            LLC. All rights reserved.
          </p>
          <p className="text-muted/40 text-xs">
            Built by{" "}
            <a
              href="https://truexpanse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              TrueXpanse
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
