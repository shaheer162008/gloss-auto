const cameraGlyph = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

/**
 * Placeholder work gallery. Each box is a slot for a real Gloss Auto photo
 * or video. Swap the tile content for an image or video player later.
 */
export function WorkGallery({
  count = 6,
  className = "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <ul className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="flex items-center justify-center rounded-sm border border-dashed border-zinc-300 bg-surface text-zinc-400 transition hover:border-zinc-400"
          style={{ aspectRatio: "4 / 3" }}
        >
          <span className="flex flex-col items-center gap-3 px-6 text-center">
            {cameraGlyph}
            <span className="text-sm">Add photo or video</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
