"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Renders a grid of Instagram reels as official embeds. Every reel mounts at
 * once so visitors can play as many as they like. Instagram embeds autoplay
 * muted by default and only make sound if a viewer taps the speaker inside a
 * reel — the iframes are cross-origin, so the site can't mute them further.
 */
export function ReelGrid({
  urls,
  className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
}: {
  urls: readonly string[];
  className?: string;
}) {
  return (
    <>
      <ul className={className}>
        {urls.map((url) => (
          <li key={url} className="flex min-w-0 justify-center">
            <ReelEmbed url={url} />
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

/**
 * One official Instagram embed.
 * No `data-instgrm-captioned` attribute — captions stay hidden.
 */
function ReelEmbed({ url }: { url: string }) {
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
