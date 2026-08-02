import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/ui";
import { WorkFeed } from "@/components/WorkFeed";

export const metadata: Metadata = {
  title: "Our Work",
  description: `See the Gloss Auto finish. Real results, straight from Facebook, across ${site.serviceArea}.`,
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work"
        description="Real Gloss Auto jobs, straight from Facebook. Open a video to watch, muted, one at a time."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <WorkFeed />

          <p className="mt-10 text-center text-sm text-zinc-600">
            Want your car featured here?{" "}
            <a href={site.phoneTel} className="font-medium text-black underline">
              Call {site.phoneDisplay}
            </a>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-black underline">
              send a message
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
