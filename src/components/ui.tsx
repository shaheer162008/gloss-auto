import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const isCentered = align === "center";

  return (
    <section className="border-b border-border bg-surface bg-grain">
      <div
        className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 ${
          isCentered ? "text-center" : ""
        }`}
      >
        {eyebrow ? (
          <p className="font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`mt-3 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-black sm:text-5xl ${
            isCentered ? "mx-auto max-w-4xl" : "max-w-3xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg ${
            isCentered ? "mx-auto max-w-3xl" : "max-w-2xl"
          }`}
        >
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
    <section id="cta-band" className="border-y border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 md:py-14 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-display text-2xl font-semibold uppercase leading-tight tracking-[0.08em] sm:text-3xl">
            Ready for a fresh gloss?
          </h2>
          <p className="mt-2 max-w-xl text-base text-zinc-300">
            Call{" "}
            <a
              href={site.phoneTel}
              className="whitespace-nowrap font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
            >
              {site.phoneDisplay}
            </a>{" "}
            or send a message. We come to you across Moreton Bay & surrounds.
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:justify-end">
          <a
            href={site.phoneTel}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-white px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-zinc-100 sm:w-auto"
          >
            <Icon src="/icons/phone.svg" size={16} />
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-white/30 px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white sm:w-auto"
          >
            <Icon src="/icons/email.svg" size={16} tone="onDark" />
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}
