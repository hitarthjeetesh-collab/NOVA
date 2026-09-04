"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag || !pathname) {
      return;
    }

    window.gtag("config", "G-ES46D799BM", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}