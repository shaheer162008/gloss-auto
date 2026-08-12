"use client";

import { useEffect, useRef } from "react";

const SQUARE_BOOKING_SCRIPT =
  "https://square.site/appointments/buyer/widget/ecz3ynqyxqsg5q/LNQB1AMB9307D.js";

export function SquareBookingEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (container.querySelector("iframe")) {
      return;
    }

    const script = document.createElement("script");
    script.src = SQUARE_BOOKING_SCRIPT;
    script.async = true;
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} className="square-booking-embed w-full" />;
}
