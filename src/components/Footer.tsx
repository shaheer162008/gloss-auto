import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t border-white/10 bg-black pb-14 pt-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={site.logoSrc}
            alt={`${site.name} logo`}
            width={150}
            height={52}
            className="h-11 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
            {site.tagline} across {site.serviceArea}. We come to you.
          </p>
          <div className="mt-5">
            <SocialLinks tone="onDark" />
          </div>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/services" className="hover:text-white">
                Services & Pricing
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-zinc-500">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              <a
                href={site.phoneTel}
                className="font-medium text-white hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.emailMailto} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.serviceArea}</li>
            <li className="text-zinc-500">{site.locationHint}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-xs text-zinc-500 sm:px-6 md:text-left">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
