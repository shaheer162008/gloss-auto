"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

/**
 * Floating Instagram + call buttons, bottom-right corner.
 * Shows on every page and screen size, but hides while the CTA band or
 * footer is on screen — those sections already have their own call/follow
 * options, so the buttons never sit on top of them.
 */
export function MobileCallBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("#cta-band, #site-footer"),
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHidden(entries.some((entry) => entry.isIntersecting));
      },
      // Shrink the viewport from the bottom so the buttons only hide once
      // the section is actually on screen, not the instant it grazes the edge.
      { rootMargin: "0px 0px -20% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 transition-opacity duration-200 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <a
        href={site.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Gloss Auto on Instagram"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-300 bg-white text-black shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition hover:bg-zinc-100"
      >
        <Icon src="/icons/instagram.svg" size={20} />
      </a>
      <a
        href={site.phoneTel}
        aria-label={`Call ${site.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white ring-2 ring-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:bg-zinc-800"
      >
        <Icon src="/icons/phone.svg" size={22} tone="onDark" />
      </a>
    </div>
  );
}
