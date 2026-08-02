import Image from "next/image";

type IconProps = {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
  /** Black SVG icons. onLight keeps them dark for white UI */
  tone?: "onDark" | "onLight";
};

/** Renders an SVG from /public/icons. Swap files in place to update icons. */
export function Icon({
  src,
  alt = "",
  className = "",
  size = 28,
  tone = "onLight",
}: IconProps) {
  const toneClass =
    tone === "onDark"
      ? "brightness-0 invert opacity-90"
      : "brightness-0 opacity-90";

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`${toneClass} ${className}`}
      unoptimized
    />
  );
}
