"use client";

import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Appointment Request",
    description:
      "Reach out by phone or form. We\u2019ll discuss your project, timeline, and schedule a convenient on-site consultation.",
  },
  {
    number: "02",
    title: "Scheduling",
    description:
      "After your consultation, we provide a clear quote. Once approved, we lock in your installation date — often within days.",
  },
  {
    number: "03",
    title: "We Get Started",
    description:
      "Our crew arrives on time, preps the surface properly, and installs your coating — most projects completed in 1-2 days.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel label="Our Process" />
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mt-3">
              Three Simple Steps
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-gold/40 flex items-center justify-center mb-6">
                  <span className="font-playfair text-2xl text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-playfair text-xl text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-16 border-t border-gold/20 translate-x-1/2" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
