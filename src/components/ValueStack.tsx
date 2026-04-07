import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

interface ValueStackItem {
  label: string;
  value: string;
}

interface ValueStackProps {
  items: ValueStackItem[];
  total: string;
  pricingNote?: string;
}

/**
 * Line-item value stack section. Shows everything included in the project
 * with a dollar value next to each, then a bold total at the bottom that
 * makes the actual price feel like a steal.
 */
export default function ValueStack({ items, total, pricingNote }: ValueStackProps) {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel label="Here's What You Get" />
            <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
              Everything Included In Your Project
            </h2>
            <p className="text-muted mt-3 max-w-2xl mx-auto">
              No hidden line items. No surprise upcharges. Here is exactly what comes with every project — and what each piece is worth.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto bg-surface border-2 border-gold/20 rounded-2xl overflow-hidden shadow-2xl">
            <ul className="divide-y divide-white/5">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-cream/90 text-sm md:text-base">{item.label}</span>
                  </div>
                  <span className="font-montserrat text-gold font-bold text-sm md:text-base shrink-0">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            {/* Total row */}
            <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 px-6 py-5 border-t-2 border-gold/40">
              <div className="flex items-center justify-between gap-4">
                <span className="font-playfair text-xl md:text-2xl text-cream font-bold">
                  Total Value
                </span>
                <span className="font-playfair text-3xl md:text-4xl text-gold font-black">
                  {total}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {pricingNote && (
          <FadeIn delay={0.2}>
            <p className="text-center text-cream/70 mt-8 max-w-2xl mx-auto text-sm md:text-base italic">
              {pricingNote}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
