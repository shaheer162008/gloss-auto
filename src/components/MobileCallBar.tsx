import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

/** Small floating call button — bottom-right corner, mobile only. */
export function MobileCallBar() {
  return (
    <a
      href={site.phoneTel}
      aria-label={`Call ${site.phoneDisplay}`}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:bg-zinc-800 md:hidden"
    >
      <Icon src="/icons/phone.svg" size={22} tone="onDark" />
    </a>
  );
}
