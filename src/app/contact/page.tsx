import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SocialLinks } from "@/components/SocialLinks";
import { ReviewCta } from "@/components/ReviewCta";
import { SquareBookingEmbed } from "@/components/SquareBookingEmbed";
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
        description="Call for the fastest booking, or use the Square scheduler below to pick a time."
        align="center"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 xl:gap-10">
          <div className="rounded-sm border border-border bg-white p-6 text-center sm:p-8 xl:p-10">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
              Preferred booking
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-black">
              Book your appointment
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Your choice: contact us first for a quick chat, or book your
              appointment directly below. Call {site.phoneDisplay} any time.
            </p>

            <div className="relative z-0 mt-8 rounded-sm border border-border bg-surface p-2 sm:p-3 xl:p-4">
              <SquareBookingEmbed />
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              If the booking widget does not load,
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium text-black underline"
              >
                open Square booking in a new tab
              </a>
              .
            </p>
          </div>

          <aside className="rounded-sm border border-border bg-surface p-6 sm:p-8">
            <div className="mb-6 text-center">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                Contact details
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-[0.08em] text-black">
                Get in touch your way
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-sm border border-border bg-white p-5 text-center">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Call
                </p>
                <a
                  href={site.phoneTel}
                  className="mt-2 inline-flex items-center justify-center gap-2 text-xl font-semibold text-black hover:underline"
                >
                  <Icon src="/icons/phone.svg" size={22} />
                  {site.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-zinc-600">
                  Not on WhatsApp. Phone calls only.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-white p-5 text-center">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </p>
                <a
                  href={site.emailMailto}
                  className="mt-2 inline-flex items-center justify-center gap-2 font-medium text-black hover:underline"
                >
                  <Icon src="/icons/email.svg" size={20} />
                  {site.email}
                </a>
              </div>

              <div className="rounded-sm border border-border bg-white p-5 text-center">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Area
                </p>
                <p className="mt-2 inline-flex items-start justify-center gap-2 text-zinc-700">
                  <Icon
                    src="/icons/location.svg"
                    size={20}
                    className="mt-0.5"
                  />
                  <span>
                    {site.serviceArea}
                    <span className="mt-1 block text-sm text-muted">
                      {site.locationHint}
                    </span>
                  </span>
                </p>
              </div>

              <div className="rounded-sm border border-border bg-white p-5 text-center">
                <p className="mb-3 font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Social
                </p>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
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
            </div>
          </aside>
        </div>
      </section>

      <ReviewCta />
    </>
  );
}
