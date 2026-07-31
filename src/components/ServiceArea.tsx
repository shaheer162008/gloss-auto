import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function ServiceArea() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-5 inline-flex">
          <Icon src="/icons/location.svg" size={36} />
        </div>
        <p className="font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
          Coverage
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.06em] text-black sm:text-4xl">
          Service area
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          Proudly serving{" "}
          <span className="font-medium text-black">{site.serviceArea}</span>
          {" "}({site.locationHint}). We travel to your location so you
          don&apos;t have to.
        </p>
      </div>
    </section>
  );
}
