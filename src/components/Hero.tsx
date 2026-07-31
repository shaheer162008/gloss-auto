import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-black text-white sm:min-h-[calc(100svh-4.5rem)]">
      <Image
        src={site.heroImage}
        alt="Freshly detailed car with a glossy finish"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Full-bleed overlay for readable type */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-24">
        <Image
          src={site.logoSrc}
          alt={`${site.name} logo`}
          width={320}
          height={110}
          className="mb-8 h-auto w-[min(70vw,280px)] drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]"
          priority
        />

        <p className="font-display text-xs uppercase tracking-[0.3em] text-zinc-300">
          Mobile detailing · {site.serviceArea}
        </p>

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We come to you
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-200 sm:text-lg">
          Premium mobile car detailing. Interior, exterior, and paint correction
          right at your door.
        </p>

        <div className="mt-9 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={site.phoneTel}
            className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-zinc-200"
          >
            Call Now
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-white/35 bg-white/5 px-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
          >
            Book via DM
          </a>
          <Link
            href="/work"
            className="inline-flex h-12 items-center justify-center rounded-sm px-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-300 underline-offset-4 transition hover:text-white hover:underline"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
