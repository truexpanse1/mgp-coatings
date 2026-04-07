import { AlertTriangle } from "lucide-react";
import FadeIn from "./FadeIn";

interface WarningProps {
  title: string;
  body: string;
}

/**
 * Cost-of-inaction warning section. Per the 17-point landing model,
 * this is the emotional push after the logical case — what does it
 * cost the visitor to leave this page and do nothing?
 */
export default function Warning({ title, body }: WarningProps) {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-red-900/20 via-surface to-surface border-l-4 border-red-500 rounded-r-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center shrink-0">
                <AlertTriangle size={22} className="text-red-400" />
              </div>
              <div className="flex-1">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-red-400 font-bold">
                  Warning
                </p>
                <h3 className="font-playfair text-2xl md:text-3xl text-cream mt-1 leading-tight">
                  {title}
                </h3>
                <p className="text-cream/80 mt-4 leading-relaxed text-base md:text-lg">{body}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
