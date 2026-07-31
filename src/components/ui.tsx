import Link from "next/link";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-surface bg-grain">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow ? (
          <p className="font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-black sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.06em] text-black sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-zinc-600">{description}</p>
      ) : null}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="border-y border-border bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:py-14">
        <div>
          <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] sm:text-3xl">
            Ready for a fresh gloss?
          </h2>
          <p className="mt-2 max-w-xl text-zinc-300">
            Call now or send a message. We come to you across Moreton Bay &
            surrounds.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={site.phoneTel}
            className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-zinc-100"
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-white/30 px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white"
          >
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  );
}
