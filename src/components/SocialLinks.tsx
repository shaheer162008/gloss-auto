import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

const links = [
  {
    href: site.emailMailto,
    label: "Email",
    icon: "/icons/email.svg",
  },
  {
    href: site.socials.instagram,
    label: "Instagram",
    icon: "/icons/instagram.svg",
  },
  {
    href: site.socials.tiktok,
    label: "TikTok",
    icon: "/icons/tiktok.svg",
  },
  {
    href: site.socials.facebook,
    label: "Facebook",
    icon: "/icons/facebook.svg",
  },
] as const;

export function SocialLinks({
  className = "",
  tone = "onLight",
}: {
  className?: string;
  tone?: "onDark" | "onLight";
}) {
  const onDark = tone === "onDark";

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={link.label}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border transition ${
              onDark
                ? "border-white/20 bg-white/5 hover:border-white/50"
                : "border-border bg-white hover:border-black"
            }`}
          >
            <Icon src={link.icon} size={18} tone={tone} />
          </a>
        </li>
      ))}
    </ul>
  );
}
