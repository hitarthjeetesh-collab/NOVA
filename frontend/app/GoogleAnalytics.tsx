"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) {
      return;
    }

    const search = searchParams.toString();
    const pagePath = search
      ? `${pathname}?${search}`
      : pathname;

    window.gtag("config", "G-ES46D799BM", {
      page_path: pagePath,
    });
  }, [pathname, searchParams]);

  return null;
}