"use client";

import Script from "next/script";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Renders a grid of Instagram reels with only ONE live embed mounted at a
 * time — the reel nearest the vertical centre of the viewport.
 *
 * Instagram's embed iframes are cross-origin, so the site can't reach inside
 * them to pause or mute videos. Mounting a single iframe at a time is the
 * only reliable way to get "one reel plays, no stray sound": the active reel
 * auto-plays muted, and when you scroll away it unmounts (audio stops) and
 * the next one mounts in its place. Everything else is a quiet placeholder
 * tile that links straight to Instagram.
 */
export function ReelGrid({
  urls,
  className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
}: {
  urls: readonly string[];
  className?: string;
}) {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const cards = list.querySelectorAll<HTMLElement>("[data-reel]");
    if (!cards.length) return;

    // Approx half-height of a reel card. Anchoring on the card's TOP keeps
    // the pick stable even when a mounted embed changes the card's height.
    const HALF_CARD = 310;
    let raf = 0;
    let current: string | null = null;

    const pickActive = () => {
      const target = window.innerHeight / 2 - HALF_CARD;
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -160 || rect.top > window.innerHeight + 160) continue;
        const dist = Math.abs(rect.top - target);
        if (dist < bestDist) {
          bestDist = dist;
          best = card;
        }
      }
      const next = best?.dataset.reel ?? null;
      if (next !== current) {
        current = next;
        setActiveUrl(next);
      }
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pickActive);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    pickActive();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, [urls]);

  return (
    <>
      <ul ref={listRef} className={className}>
        {urls.map((url) => (
          <li key={url} data-reel={url} className="flex min-w-0 justify-center">
            {activeUrl === url ? <ActiveReel url={url} /> : <ReelTile url={url} />}
          </li>
        ))}
      </ul>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}

/** The one live embed. No `data-instgrm-captioned` attribute — captions stay hidden. */
function ActiveReel({ url }: { url: string }) {
  useEffect(() => {
    // Let the blockquote commit to the DOM, then ask Instagram to build it.
    const t = window.setTimeout(() => window.instgrm?.Embeds.process(), 0);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        margin: "1px auto",
        maxWidth: 540,
        minWidth: "min(326px, 100%)",
        width: "100%",
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          padding: 16,
          textAlign: "center",
          color: "#3897f0",
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          fontWeight: 550,
          lineHeight: 18,
        }}
      >
        View this post on Instagram
      </a>
    </blockquote>
  );
}

/** Quiet placeholder for reels that aren't the active one. */
function ReelTile({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open reel on Instagram"
      className="flex aspect-[9/16] w-full items-center justify-center rounded-sm border border-border bg-surface transition hover:border-black"
    >
      <span className="flex flex-col items-center gap-3 px-6 text-center">
        <Image
          src="/icons/instagram.svg"
          alt=""
          width={28}
          height={28}
          className="opacity-50 brightness-0"
          unoptimized
        />
        <span className="font-display text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Gloss Auto
        </span>
      </span>
    </a>
  );
}
