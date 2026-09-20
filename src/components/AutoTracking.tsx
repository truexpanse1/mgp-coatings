"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/analytics-events";

/**
 * Binds the TrueXpanse standard events at the document level so no per-element
 * wiring is required — new pages and new links are covered automatically.
 *
 * Mounted once in the root layout. Mirrors js/tx-analytics.js on the static
 * client sites so every Quantum Marketing client reports the same events.
 */
function placement(el: Element): string {
  let n: Element | null = el;
  while (n && n !== document.body) {
    const tag = n.tagName.toLowerCase();
    if (tag === "header" || tag === "nav") return "header";
    if (tag === "footer") return "footer";
    const cls = typeof n.className === "string" ? n.className.toLowerCase() : "";
    if (cls.includes("hero")) return "hero";
    if (cls.includes("sticky") || cls.includes("fixed")) return "sticky";
    n = n.parentElement;
  }
  return "body";
}

export default function AutoTracking() {
  useEffect(() => {
    const path = () => window.location.pathname + window.location.search;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        pushEvent("phone_call_click", {
          phone_number: href.replace("tel:", ""),
          link_placement: placement(a),
          page_path: path(),
        });
      } else if (href.startsWith("mailto:")) {
        pushEvent("email_click", { page_path: path() });
      } else if (/\.(pdf|docx?|xlsx?|zip)(\?|$)/i.test(href)) {
        pushEvent("file_download", { file_name: href.split("/").pop(), page_path: path() });
      } else if (/^https?:/i.test(href) && !href.includes(window.location.hostname)) {
        pushEvent("outbound_click", { link_url: href, page_path: path() });
      }
    };

    const marks = [25, 50, 75, 90];
    const hit = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      if (h <= 0) return;
      const pct = (doc.scrollTop / h) * 100;
      for (const m of marks) {
        if (pct >= m && !hit.has(m)) {
          hit.add(m);
          pushEvent("scroll_depth", { percent_scrolled: m, page_path: path() });
        }
      }
    };

    const start = Date.now();
    const onLeave = () => {
      const seconds = Math.round((Date.now() - start) / 1000);
      if (seconds >= 10) pushEvent("engaged_time", { seconds, page_path: path() });
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", onLeave);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", onLeave);
    };
  }, []);

  return null;
}
