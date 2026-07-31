import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mobile Car Detailing | ${site.serviceArea}`,
    template: `%s | ${site.name}`,
  },
  description: `Premium mobile car detailing that comes to you. Exterior, interior, full detail, and cut & polish across ${site.serviceArea}. Call ${site.phoneDisplay}.`,
  openGraph: {
    title: `${site.name} | Mobile Car Detailing`,
    description: `We come to you. Premium mobile detailing across ${site.serviceArea}.`,
    images: [site.logoSrc],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${oswald.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
