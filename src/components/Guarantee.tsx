import { ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

interface GuaranteeProps {
  title: string;
  body: string;
}

/**
 * Bold guarantee section — removes risk for the buyer. Big shield icon,
 * gold border, prominent placement. Stronger guarantees = higher conversion.
 */
export default function Guarantee({ title, body }: GuaranteeProps) {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gold/15 via-surface to-surface border-2 border-gold/40 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative background shield */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              <ShieldCheck size={400} className="text-gold" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex w-20 h-20 rounded-full bg-gold/20 border-2 border-gold items-center justify-center mb-6">
                <ShieldCheck size={42} className="text-gold" />
              </div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-2">
                Our Promise to You
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-cream leading-tight mb-5">
                {title}
              </h2>
              <p className="text-cream/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {body}
              </p>

              {/* Trust line */}
              <div className="mt-8 pt-6 border-t border-gold/20 flex flex-wrap items-center justify-center gap-4 text-xs text-cream/60 font-montserrat uppercase tracking-wider">
                <span>Licensed CA #1061424</span>
                <span className="text-gold/40">•</span>
                <span>Insured</span>
                <span className="text-gold/40">•</span>
                <span>30+ Years</span>
                <span className="text-gold/40">•</span>
                <span>Family Owned</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
