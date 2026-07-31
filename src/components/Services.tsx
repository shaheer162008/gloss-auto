import Link from "next/link";
import { services } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/ui";

export function ServicesPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Packages"
          title="Services & Pricing"
          description="Clear starting prices. Call or message for a quote that fits your car."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition hover:border-black"
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-black/40 to-transparent"
                aria-hidden
              />

              {"badge" in service && service.badge ? (
                <span className="mb-4 inline-flex w-fit self-start rounded-sm border border-black/15 bg-surface-2 px-2 py-0.5 font-display text-[10px] uppercase tracking-[0.2em] text-black">
                  {service.badge}
                </span>
              ) : (
                <span className="mb-4 h-[22px]" aria-hidden />
              )}

              <div className="mb-4">
                <Icon src={service.icon} size={32} />
              </div>

              <h3 className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-black">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                {service.description}
              </p>

              <p className="mt-6 font-display text-2xl font-semibold tracking-wide text-black">
                <span className="mr-1 text-sm font-normal uppercase tracking-[0.2em] text-zinc-500">
                  From
                </span>
                ${service.price}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black"
          >
            View full services
          </Link>
        </div>
      </div>
    </section>
  );
}
