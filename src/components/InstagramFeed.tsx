import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/ui";

const platforms = [
  {
    name: "Instagram",
    handle: "@glossautocareqld",
    href: site.socials.instagram,
    icon: "/icons/instagram.svg",
  },
  {
    name: "TikTok",
    handle: "@gloss.auto.qld",
    href: site.socials.tiktok,
    icon: "/icons/tiktok.svg",
  },
  {
    name: "Facebook",
    handle: "Gloss Auto",
    href: site.socials.facebook,
    icon: "/icons/facebook.svg",
  },
] as const;

/** Follow cards. Each tap opens the profile so visitors can follow Gloss Auto. */
export function InstagramFeed() {
  return (
    <section
      id="instagram-feed"
      className="scroll-mt-24 border-b border-border bg-surface bg-grain py-20 sm:py-24"
      aria-label="Follow Gloss Auto on social media"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Social proof"
          title="Follow the gloss"
          description="Daily detailing videos, before and after shots, and finished jobs. Follow along to see the quality up close."
        />

        <ul className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-sm border border-border bg-white p-8 text-center transition hover:border-black"
              >
                <Icon src={platform.icon} size={30} />
                <span className="mt-4 font-display text-lg font-semibold uppercase tracking-widest text-black">
                  {platform.name}
                </span>
                <span className="mt-1 text-sm text-zinc-500">{platform.handle}</span>
                <span className="mt-6 inline-flex h-10 items-center justify-center rounded-sm bg-black px-7 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800">
                  Follow
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
