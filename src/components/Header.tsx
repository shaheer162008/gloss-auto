"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SocialLinks } from "@/components/SocialLinks";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src={site.logoSrc}
            alt={`${site.name} logo`}
            width={160}
            height={56}
            className="h-11 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneTel}
            className="hidden h-10 items-center justify-center gap-2 rounded-sm bg-white px-4 text-sm font-semibold tracking-wide text-black transition hover:bg-zinc-200 sm:inline-flex"
          >
            <Icon src="/icons/phone.svg" size={16} />
            Call Now
          </a>

          <button
            type="button"
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-colors lg:hidden ${
              open ? "border-white/40 bg-white/10" : "border-white/20 hover:bg-white/10"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 w-full bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        inert={!open}
        className={`relative overflow-y-auto overscroll-contain border-t border-white/10 bg-black transition-[max-height,opacity,border-color] duration-300 ease-in-out lg:hidden ${
          open
            ? "max-h-[calc(100svh-4.5rem)] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        {/* Gloss sheen, matches the CTA band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]"
        />

        <nav
          className="relative mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-8 pt-4"
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-sm px-3 py-3.5 font-display text-base uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                {active ? (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-white"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}

          <div className="mt-4 border-t border-white/10 pt-4">
            <a
              href={site.phoneTel}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-white font-display text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-zinc-100"
            >
              <Icon src="/icons/phone.svg" size={18} />
              Call Now
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <SocialLinks tone="onDark" />
          </div>
        </nav>
      </div>
    </header>
  );
}
