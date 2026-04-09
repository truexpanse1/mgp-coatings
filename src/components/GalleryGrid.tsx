"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  location: string;
  images: GalleryImage[];
}

interface Category {
  category: string;
  slug: string;
  projects: Project[];
}

interface GalleryGridProps {
  categories: Category[];
}

export default function GalleryGrid({ categories }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
    projectTitle: string;
    location: string;
  } | null>(null);

  const filters = [
    { label: "All Projects", value: "all" },
    ...categories.map((c) => ({ label: c.category, value: c.slug })),
  ];

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((c) => c.slug === activeFilter);

  const openLightbox = (project: Project, imageIndex: number) => {
    setLightbox({
      images: project.images,
      index: imageIndex,
      projectTitle: project.title,
      location: project.location,
    });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (!lightbox) return;
      setLightbox((prev) => {
        if (!prev) return null;
        const next = (prev.index + dir + prev.images.length) % prev.images.length;
        return { ...prev, index: next };
      });
    },
    [lightbox]
  );

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, navigate]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      {/* Filter bar */}
      <section className="bg-primary sticky top-0 z-30 border-b border-white/5">
        <div className="max-w-site mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`font-montserrat text-[10px] md:text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === f.value
                    ? "bg-gold text-primary border-gold font-bold"
                    : "bg-transparent text-cream/70 border-white/15 hover:border-gold/50 hover:text-cream"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-primary pb-24">
        <div className="max-w-site mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredCategories.map((cat) => (
                <div key={cat.slug} className="mt-12 first:mt-8">
                  <FadeIn>
                    <h2 className="font-playfair text-2xl md:text-3xl text-cream mb-2">
                      {cat.category}
                    </h2>
                    <div className="gold-line mb-8" />
                  </FadeIn>

                  {cat.projects.map((project) => (
                    <div key={project.title} className="mb-12">
                      <FadeIn>
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold font-bold">
                            {project.title}
                          </h3>
                          <span className="flex items-center gap-1 text-cream/40 text-xs">
                            <MapPin size={12} />
                            {project.location}
                          </span>
                        </div>
                      </FadeIn>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {project.images.map((img, imgIdx) => (
                          <FadeIn key={img.src} delay={imgIdx * 0.05}>
                            <button
                              onClick={() => openLightbox(project, imgIdx)}
                              className="group relative aspect-[4/3] rounded-lg overflow-hidden w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                                <span className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                  View
                                </span>
                              </div>
                            </button>
                          </FadeIn>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Project info */}
            <div className="absolute top-4 left-4 z-50">
              <p className="font-montserrat text-xs uppercase tracking-[0.15em] text-gold font-bold">
                {lightbox.projectTitle}
              </p>
              <p className="text-white/50 text-xs flex items-center gap-1 mt-1">
                <MapPin size={10} />
                {lightbox.location}
              </p>
            </div>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
              <span className="font-montserrat text-xs text-white/50 tracking-wider">
                {lightbox.index + 1} / {lightbox.images.length}
              </span>
            </div>

            {/* Main image */}
            <div
              className="relative w-full max-w-5xl mx-auto px-16 flex-1 flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox.index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full aspect-[4/3] max-h-[80vh]"
                >
                  <Image
                    src={lightbox.images[lightbox.index].src}
                    alt={lightbox.images[lightbox.index].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(-1);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            {lightbox.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
                {lightbox.images.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox((prev) => (prev ? { ...prev, index: i } : null));
                    }}
                    className={`relative w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                      i === lightbox.index
                        ? "border-gold scale-110"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
