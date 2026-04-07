import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Calendar, User } from "lucide-react";
import posts from "@/data/posts.json";
import services from "@/data/services.json";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import FadeIn from "@/components/FadeIn";
import IrresistibleOffer from "@/components/IrresistibleOffer";
import RelatedLinks from "@/components/RelatedLinks";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | MGP Coatings Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
    },
    alternates: { canonical: `https://mgpcoatings.solutions/blog/${slug}/` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedService = services.find((s) => s.slug === post.relatedService);
  const pageUrl = `https://mgpcoatings.solutions/blog/${slug}/`;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        datePublished={post.datePublished}
        author={post.author}
        image={post.image}
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mgpcoatings.solutions/" },
          { name: "Blog", url: "https://mgpcoatings.solutions/blog/" },
          { name: post.title, url: pageUrl },
        ]}
      />

      {/* HERO IMAGE */}
      <section className="relative pt-32 pb-12 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-xs font-montserrat uppercase tracking-wider mb-6"
          >
            <ArrowLeft size={14} />
            All Articles
          </Link>
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/40 text-gold px-3 py-1.5 rounded-full text-[10px] font-montserrat uppercase tracking-[0.15em] mb-4">
              {post.category}
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream leading-[1.15]">
              {post.title}
            </h1>
            <p className="text-cream/70 text-lg mt-5 leading-relaxed">{post.description}</p>
            <div className="flex items-center gap-5 mt-6 text-xs text-cream/50 font-montserrat uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <User size={12} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(post.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readMinutes} min read
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="prose-mgp">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-playfair text-3xl md:text-4xl text-cream mt-12 mb-4 leading-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="font-playfair text-xl md:text-2xl text-gold mt-8 mb-3 leading-tight"
                    >
                      {block.text}
                    </h3>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-cream/85 text-base md:text-lg leading-relaxed mb-5"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </FadeIn>

          {/* Related service CTA */}
          {relatedService && (
            <FadeIn delay={0.2}>
              <div className="mt-16 p-6 md:p-8 bg-surface border border-gold/30 rounded-2xl">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  Related Service
                </p>
                <h3 className="font-playfair text-2xl md:text-3xl text-cream mb-3">
                  {relatedService.title}
                </h3>
                <p className="text-cream/70 text-sm md:text-base mb-5">
                  {relatedService.description}
                </p>
                <Link
                  href={`/${relatedService.slug}/`}
                  className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-7 py-3 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
                >
                  Learn More
                  <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.3}>
            <div className="mt-12">
              <IrresistibleOffer variant="card" />
            </div>
          </FadeIn>
        </div>
      </article>

      <RelatedLinks currentService={post.relatedService} />
    </>
  );
}
