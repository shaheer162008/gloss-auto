import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SocialLinks } from "@/components/SocialLinks";
import { ReviewCta } from "@/components/ReviewCta";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Gloss Auto to book mobile car detailing. Call ${site.phoneDisplay} or email ${site.email}. Serving ${site.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Bookings & enquiries"
        title="Contact us"
        description="Call for the fastest booking, or open our Square booking page to pick a time."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6 rounded-sm border border-border bg-surface p-6 sm:p-8">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                Call
              </p>
              <a
                href={site.phoneTel}
                className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-black hover:underline"
              >
                <Icon src="/icons/phone.svg" size={22} />
                {site.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-zinc-600">
                Not on WhatsApp. Phone calls only.
              </p>
            </div>

            <div>
              <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                Email
              </p>
              <a
                href={site.emailMailto}
                className="mt-2 inline-flex items-center gap-2 font-medium text-black hover:underline"
              >
                <Icon src="/icons/email.svg" size={20} />
                {site.email}
              </a>
            </div>

            <div>
              <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                Area
              </p>
              <p className="mt-2 inline-flex items-start gap-2 text-zinc-700">
                <Icon src="/icons/location.svg" size={20} className="mt-0.5" />
                <span>
                  {site.serviceArea}
                  <span className="mt-1 block text-sm text-muted">
                    {site.locationHint}
                  </span>
                </span>
              </p>
            </div>

            <div>
              <p className="mb-3 font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                Social
              </p>
              <SocialLinks />
              <ul className="mt-4 space-y-1 text-sm text-zinc-600">
                <li>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram @glossautocareqld
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    TikTok @gloss.auto.qld
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Facebook Gloss Auto
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="rounded-sm border border-border bg-white p-6 sm:p-8">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
              Preferred booking
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-black">
              Book on Square
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
              The fastest way to lock in your detail is through our Square
              appointment page. Pick a time, add your details, and we&apos;ll
              take it from there.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-black px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800"
              >
                Book now
              </a>
              <a
                href={site.phoneTel}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black"
              >
                Call instead
              </a>
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              If you prefer a quick chat first, call {site.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>

      <ReviewCta />
    </>
  );
}
