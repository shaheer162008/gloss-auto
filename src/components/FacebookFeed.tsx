"use client";

import { workVideos } from "@/lib/work";

/** Builds a facebook.com/plugins/video.php embed src for a public video/reel URL. */
function embedSrc(videoUrl: string) {
  return `https://www.facebook.com/plugins/video.php?height=560&href=${encodeURIComponent(videoUrl)}&show_text=false&autoplay=false&mute=1&width=315`;
}

/** Our Work reel wall: Facebook videos, muted, embedded directly. */
export function FacebookFeed({ count }: { count?: number } = {}) {
  const videos = typeof count === "number" ? workVideos.slice(0, count) : workVideos;

  if (videos.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((url, i) => (
        <li key={i} className="aspect-9/16">
          <div className="h-full w-full overflow-hidden rounded-sm border border-border bg-black">
            <iframe
              src={embedSrc(url)}
              title={`Gloss Auto video ${i + 1}`}
              width="315"
              height="560"
              allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function EmptyState() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex aspect-9/16 items-center justify-center rounded-sm border border-dashed border-zinc-300 bg-surface text-zinc-400"
        >
          <span className="px-6 text-center text-sm">
            Paste a Facebook link in src/lib/work.ts
          </span>
        </div>
      ))}
    </div>
  );
}
