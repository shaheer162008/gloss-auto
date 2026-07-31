import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { WorkGallery } from "@/components/WorkGallery";

export function WorkPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Results"
          title="Our work"
          description="Recent jobs from Gloss Auto. Photos and videos of the latest finishes are on their way."
        />

        <WorkGallery count={3} className="mt-12 grid gap-5 sm:grid-cols-3" />

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}
