import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { PageHero, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Exterior, interior, full detail, and cut & polish from Gloss Auto. Mobile detailing across ${site.serviceArea}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Services & Pricing"
        description="Transparent starting prices. Every job is finished at your location: home, work, or wherever you park."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-6 rounded-sm border border-border bg-white p-6 sm:grid-cols-[1fr_auto] sm:p-8"
            >
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Icon src={service.icon} size={30} />
                  {"badge" in service && service.badge ? (
                    <span className="rounded-sm border border-black/15 bg-surface-2 px-2 py-0.5 font-display text-[10px] uppercase tracking-[0.2em]">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-black">
                  {service.name}
                </h2>
                <p className="mt-2 max-w-2xl text-zinc-600">
                  {service.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.details.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-4 border-t border-border pt-4 sm:min-w-[180px] sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="font-display text-3xl font-semibold text-black">
                  <span className="block text-xs font-normal uppercase tracking-[0.22em] text-zinc-500">
                    From
                  </span>
                  ${service.price}
                </p>
                <a
                  href={site.phoneTel}
                  className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-black px-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800 sm:w-auto"
                >
                  Book by phone
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-sm text-zinc-600 sm:px-6">
          Prefer to message?{" "}
          <Link href="/contact" className="font-medium text-black underline">
            Use the contact form
          </Link>{" "}
          or DM us on{" "}
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline"
          >
            Instagram
          </a>
          .
        </p>
      </section>

      <CtaBand />
    </>
  );
}
