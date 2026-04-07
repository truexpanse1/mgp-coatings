import Link from "next/link";
import { ArrowRight, MapPin, Wrench, BookOpen } from "lucide-react";
import services from "@/data/services.json";
import cities from "@/data/cities.json";
import posts from "@/data/posts.json";
import SectionLabel from "./SectionLabel";
import FadeIn from "./FadeIn";

interface RelatedLinksProps {
  currentService?: string; // slug
  currentCity?: string; // slug
  showServices?: boolean;
  showCities?: boolean;
  showPosts?: boolean;
}

/**
 * Internal-link block for SEO juice + crawlability. Surfaces related
 * services, nearby cities, and relevant blog posts. Every page should
 * include this somewhere.
 */
export default function RelatedLinks({
  currentService,
  currentCity,
  showServices = true,
  showCities = true,
  showPosts = true,
}: RelatedLinksProps) {
  // Filter out the current service/city
  const relatedServices = services.filter((s) => s.slug !== currentService).slice(0, 3);
  const relatedCities = cities.filter((c) => c.slug !== currentCity).slice(0, 4);
  const relatedPosts = posts.slice(0, 2);

  return (
    <section className="bg-secondary py-20">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel label="Keep Exploring" />
            <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
              More From MGP Coatings
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Services column */}
          {showServices && (
            <FadeIn>
              <div className="bg-surface border border-white/5 rounded-xl p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench size={18} className="text-gold" />
                  <h3 className="font-playfair text-xl text-cream">Other Services</h3>
                </div>
                <ul className="space-y-2">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}/`}
                        className="flex items-center justify-between text-cream/80 hover:text-gold transition-colors text-sm py-1.5 group"
                      >
                        <span>{s.title}</span>
                        <ArrowRight
                          size={14}
                          className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}

          {/* Cities column */}
          {showCities && (
            <FadeIn delay={0.1}>
              <div className="bg-surface border border-white/5 rounded-xl p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={18} className="text-gold" />
                  <h3 className="font-playfair text-xl text-cream">Service Areas</h3>
                </div>
                <ul className="space-y-2">
                  {relatedCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/service-areas/`}
                        className="flex items-center justify-between text-cream/80 hover:text-gold transition-colors text-sm py-1.5 group"
                      >
                        <span>{c.name}</span>
                        <ArrowRight
                          size={14}
                          className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}

          {/* Blog column */}
          {showPosts && (
            <FadeIn delay={0.2}>
              <div className="bg-surface border border-white/5 rounded-xl p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-gold" />
                  <h3 className="font-playfair text-xl text-cream">From the Blog</h3>
                </div>
                <ul className="space-y-3">
                  {relatedPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}/`}
                        className="block text-cream/80 hover:text-gold transition-colors text-sm py-1.5 group leading-snug"
                      >
                        <span className="font-bold block group-hover:text-gold transition-colors">
                          {p.title}
                        </span>
                        <span className="text-cream/50 text-xs">{p.readMinutes} min read</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
