"use client";

import { useState } from "react";
import { workVideos } from "@/lib/work";
import { FacebookFeed } from "@/components/FacebookFeed";

export function WorkFeed() {
  const [showAll, setShowAll] = useState(false);
  const defaultCount = 6;
  const hasMore = workVideos.length > defaultCount;

  return (
    <div>
      <FacebookFeed count={showAll ? undefined : defaultCount} />

      {hasMore && !showAll ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black"
          >
            View all
          </button>
        </div>
      ) : null}
    </div>
  );
}