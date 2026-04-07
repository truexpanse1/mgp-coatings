import { Gift } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

interface Bonus {
  title: string;
  value: string;
  desc: string;
}

interface BonusesProps {
  bonuses: Bonus[];
}

/**
 * "Plus you also get..." bonus stack section. Each bonus has a name,
 * dollar value, and short description. 2-3 bonuses is the sweet spot.
 */
export default function Bonuses({ bonuses }: BonusesProps) {
  if (!bonuses || bonuses.length === 0) return null;

  return (
    <section className="bg-primary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel label="Plus You Also Get" />
            <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
              Bonuses Worth More Than the Project
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              Every project includes these extras at no additional cost.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <FadeIn key={bonus.title} delay={i * 0.1}>
              <div className="relative bg-surface border-2 border-gold/30 rounded-2xl p-7 h-full hover:border-gold transition-all duration-300 hover:scale-[1.02]">
                {/* Value badge */}
                <div className="absolute -top-3 -right-3 bg-gold text-primary px-3 py-1 rounded-full font-montserrat text-xs font-black shadow-lg">
                  {bonus.value} value
                </div>
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Gift size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair text-lg text-cream mb-2 leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{bonus.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
