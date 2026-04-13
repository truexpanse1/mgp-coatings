import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import posts from "@/data/posts.json";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Coatings Blog | Tips, Guides & Resources | MGP Coatings",
  description:
    "Expert articles on garage floor coatings, pool decks, and epoxy flooring from MGP Coatings — 30+ years of Central Coast experience.",
  keywords: [
    "concrete coating blog",
    "garage floor tips",
    "epoxy flooring guide",
    "san luis obispo contractor blog",
    "central coast home improvement",
  ],
  alternates: { canonical: "https://mgpcoatings.solutions/blog/" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="The MGP Blog" />
            <h1 className="font-playfair text-4xl md:text-6xl text-cream mt-3 leading-tight">
              Coating Insights
            </h1>
            <p className="text-cream/70 text-lg mt-4 max-w-2xl">
              Real-world tips, guides, and resources from 30+ years of professional coating experience across San Luis Obispo County.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}/`} className="group block h-full">
                  <article className="bg-surface border border-white/5 rounded-xl overflow-hidden h-full flex flex-col hover:border-gold/40 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-gold text-primary px-3 py-1 rounded-full font-montserrat text-[10px] uppercase tracking-wider font-bold">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <div className="flex items-center gap-3 text-[10px] text-cream/40 font-montserrat uppercase tracking-wider mb-3">
                        <Clock size={11} />
                        <span>{post.readMinutes} min read</span>
                      </div>
                      <h2 className="font-playfair text-xl text-cream group-hover:text-gold transition-colors leading-tight mb-3 flex-1">
                        {post.title}
                      </h2>
                      <p className="text-muted text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center text-gold text-xs font-montserrat uppercase tracking-wider">
                        Read Article
                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
