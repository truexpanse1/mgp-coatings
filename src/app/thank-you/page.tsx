import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Thank You | MGP Coatings",
  description: "Thank you for contacting MGP Coatings. We will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary px-6">
      <FadeIn>
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-8">
            <CheckCircle size={40} className="text-gold" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream">
            Thank You!
          </h1>
          <p className="text-muted text-lg mt-6 leading-relaxed">
            We&apos;ve received your request and will be in touch within 24 hours to
            discuss your project.
          </p>
          <p className="text-muted mt-4">
            Need to reach us sooner?
          </p>
          <a
            href="tel:8059525301"
            className="inline-flex items-center gap-2 mt-4 font-montserrat text-sm text-gold hover:text-cream transition-colors"
          >
            <Phone size={16} />
            (805) 952-5301
          </a>
          <div className="mt-10">
            <Link
              href="/"
              className="font-montserrat text-xs uppercase tracking-[0.15em] border border-gold text-gold px-8 py-4 rounded hover:bg-gold hover:text-primary transition-all duration-300 inline-block"
            >
              Return Home
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
