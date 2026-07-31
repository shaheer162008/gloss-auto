import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";
import { SectionHeading } from "@/components/ui";

/** Placeholder grid — replace children with your Instagram embed later. */
export function InstagramFeed() {
  return (
    <section
      id="instagram-feed"
      className="scroll-mt-24 border-b border-border bg-surface bg-grain py-20 sm:py-24"
      aria-label="Instagram feed placeholder"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Social proof"
          title="Follow the gloss"
          description="See real results on Instagram, TikTok, and Facebook. Drop your embeds into this grid later."
        />

        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <a
              key={i}
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-sm border border-dashed border-zinc-300 bg-white transition hover:border-black"
              data-instagram-placeholder
            >
              <span className="sr-only">Open Instagram (placeholder {i + 1})</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
