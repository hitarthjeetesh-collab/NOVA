"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Hub from "@/components/hub/page";

export default function Home() {
  const router = useRouter();
  const [authenticated, setAuthenticated] =
    useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("aevra-fake-auth");

    if (auth === "true") {
      setAuthenticated(true);
    } else {
      router.replace("/login");
    }
  }, [router]);

  if (authenticated !== true) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--aevra-background)] text-[var(--aevra-text)]">
        <p className="text-sm text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
          Loading...
        </p>
      </main>
    );
  }

  return <Hub />;
}