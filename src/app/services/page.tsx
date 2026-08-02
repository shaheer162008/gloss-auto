import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { PageHero, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: `Gloss Auto services across ${site.serviceArea}. Enquire for mobile detailing, paint enhancement, and deep clean packages.`,
};

type ServiceItem = {
  name: string;
  description: string;
  icon?: string;
  missingIcon?: boolean;
};

type ServiceGroup = {
  heading: string;
  services: ServiceItem[];
};

const serviceGroups: ServiceGroup[] = [
  {
    heading: "Most Popular",
    services: [
      {
        name: "Maintenance Detail",
        description:
          "Interior + exterior maintenance combined to keep your vehicle consistently clean and protected between major details.",
        icon: "/icons/maintenance-detail.svg",
      },
      {
        name: "Full Interior Detail",
        description:
          "A deep clean that removes built-up dirt, stains and dust from every accessible interior surface, restoring it close to factory condition.",
        icon: "/icons/interior.svg",
      },
      {
        name: "Full Exterior Detail",
        description:
          "A restorative wash and decontamination service that removes bonded contaminants and seals your paint with a premium polymer sealant.",
        icon: "/icons/exterior.svg",
      },
      {
        name: "Full Detail",
        description:
          "Our signature package — full interior restoration combined with exterior decontamination and protection. Ideal before resale.",
        icon: "/icons/full.svg",
      },
    ],
  },
  {
    heading: "Maintenance",
    services: [
      {
        name: "Exterior Maintenance Detail",
        description:
          "A safe, regular wash that removes road film, dirt, bugs and contaminants using premium pH-neutral shampoo.",
        icon: "/icons/exterior.svg",
      },
      {
        name: "Interior Maintenance Detail",
        description:
          "A comprehensive interior refresh that removes dust, debris and light soiling while protecting plastics and vinyl.",
        icon: "/icons/interior.svg",
      },
    ],
  },
  {
    heading: "Paint Enhancement",
    services: [
      {
        name: "Single Stage Paint Correction",
        description:
          "Machine polishing that improves gloss and clarity while reducing light swirl marks and minor imperfections.",
        icon: "/icons/paint.svg",
      },
      {
        name: "Multi-Stage Paint Correction",
        description:
          "Our most advanced paint restoration — multiple polishing stages that remove moderate to heavy swirls, oxidation and holograms.",
        icon: "/icons/paint.svg",
      },
      {
        name: "Ceramic Coating",
        description:
          "A professional-grade coating that bonds to your clear coat for long-term protection, gloss and hydrophobic performance.",
        icon: "/icons/paint.svg",
      },
    ],
  },
  {
    heading: "Deep Clean",
    services: [
      {
        name: "Upholstered Seats Extraction",
        description:
          "Hot water extraction cleaning that lifts embedded dirt, stains and odours from cloth seats.",
        icon: "/icons/seat.svg",
      },
      {
        name: "Carpets & Floor Mats Extraction",
        description:
          "Deep extraction cleaning that removes embedded dirt, mud and trapped odours from carpets and floor mats.",
        icon: "/icons/carpet.svg",
      },
    ],
  },
  {
    heading: "Additional Services",
    services: [
      {
        name: "Headlight Restoration",
        description:
          "Removes oxidation and restores clarity to faded headlights, improving both appearance and nighttime visibility.",
        icon: "/icons/paint.svg",
      },
      {
        name: "Plastic & Trim Restoration",
        description:
          "Revives faded exterior and interior plastics and trim with UV-protective restoration products.",
        icon: "/icons/exterior.svg",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Services"
        description="Choose the service that fits your car, then enquire to book a time that works for you."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
          {serviceGroups.map((group) => (
            <section key={group.heading}>
              <h2 className="font-display text-xs uppercase tracking-[0.28em] text-zinc-500">
                {group.heading}
              </h2>

              <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.services.map((service) => (
                  <article
                    key={service.name}
                    className="flex h-full flex-col rounded-sm border border-border bg-white p-6 sm:p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-surface-2">
                      {service.icon && !service.missingIcon ? (
                        <Icon src={service.icon} size={28} />
                      ) : (
                        <div
                          aria-hidden
                          className="h-4 w-4 rounded-sm border border-dashed border-zinc-300"
                        />
                      )}
                    </div>

                    <h3 className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-black">
                      {service.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-sm bg-black px-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800"
                    >
                      Enquire Now
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-sm text-zinc-600 sm:px-6">
          Prefer to message?{" "}
          <Link href="/contact" className="font-medium text-black underline">
            Use the contact page
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
