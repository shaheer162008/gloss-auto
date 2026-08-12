import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="border-b border-border bg-surface bg-grain">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
          Error 404
        </p>

        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-black sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          The page you are looking for may have moved, been removed, or the URL
          might be incorrect.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-black px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800"
          >
            Go to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-white px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black"
          >
            Contact us
          </Link>
          <a
            href={site.phoneTel}
            className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-white px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black"
          >
            Call now
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Need a booking now? Call {site.phoneDisplay} and we will help you out.
        </p>
      </div>
    </section>
  );
}
