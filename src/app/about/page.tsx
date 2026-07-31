import type { Metadata } from "next";
import { aboutHighlights, site, trustPoints } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { PageHero, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about Gloss Auto mobile car detailing across ${site.serviceArea}. Affordable, reliable, high quality, and we come to you.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Gloss Auto"
        title="Mobile detailing done properly"
        description={`${site.name} brings showroom-level care to your driveway. Based around ${site.locationHint}, we serve ${site.serviceArea}.`}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
          {aboutHighlights.map((item) => (
            <article key={item.title}>
              <h2 className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-black">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-surface bg-grain py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.06em] text-black">
            What we stand for
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <li key={point.title}>
                <Icon src={point.icon} size={28} />
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-[0.1em]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Icon src="/icons/location.svg" size={36} className="mx-auto" />
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.06em]">
            {site.serviceArea}
          </h2>
          <p className="mt-4 text-zinc-600">
            From Burpengary and across the Moreton Bay region. If you are
            nearby, we can likely come to you. Call to confirm availability for
            your suburb.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
