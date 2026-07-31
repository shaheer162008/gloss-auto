import { trustPoints } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/ui";

export function WhyChooseUs() {
  return (
    <section className="border-b border-border bg-surface bg-grain py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Gloss difference"
          title="Why choose us"
          description="Mobile detailing built around convenience, without cutting corners on the finish."
        />

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point.title} className="text-center sm:text-left">
              <div className="mx-auto mb-4 inline-flex sm:mx-0">
                <Icon src={point.icon} size={30} />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.1em] text-black">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
