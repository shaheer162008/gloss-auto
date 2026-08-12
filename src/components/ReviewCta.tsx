import Script from "next/script";

/** Google review link. Update this short URL if it ever changes. */
const reviewUrl = "https://maps.app.goo.gl/xTAUhkgzdMmoUpycA";

/** Encourages happy customers to leave a Google review for Gloss Auto. */
export function ReviewCta({ tone = "surface" }: { tone?: "surface" | "white" }) {
  return (
    <section
      className={
        tone === "surface"
          ? "border-b border-border bg-surface bg-grain"
          : "border-b border-border bg-white"
      }
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="flex items-center justify-center gap-1" aria-label="Five stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <div className="mt-8 rounded-sm border border-border bg-white p-2 sm:p-3">
          <div id="shapo-widget-097c574af22bf5588593" />
        </div>
        <Script
          id="shapo-embed-js"
          src="https://cdn.shapo.io/js/embed.js"
          strategy="afterInteractive"
        />

        <p className="mt-6 font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
          Google reviews
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.06em] text-black sm:text-4xl">
          Loved the gloss?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          If you were happy with your detail, a quick review on Google helps
          other car owners across Moreton Bay find us, and it only takes a
          minute.
        </p>

        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leave a review for Gloss Auto on Google"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2.5 rounded-sm bg-black px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800"
        >
          <GoogleG />
          Leave a review
        </a>

        <p className="mt-4 text-sm text-zinc-500">
          No pressure at all. Only if the finish made you smile.
        </p>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="#f59e0b"
      />
    </svg>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2C37 39.3 44 34.5 44 24c0-1.3-.1-2.6-.4-3.9z"
      />
    </svg>
  );
}
