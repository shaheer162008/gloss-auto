import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={site.phoneTel}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-black font-display text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        <Icon src="/icons/phone.svg" size={18} tone="onDark" />
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
