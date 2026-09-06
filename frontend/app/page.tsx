"use client";

import { useState } from "react";
import Hub from "@/components/hub/page";

export default function Home() {
const [showHub, setShowHub] = useState(false);

if (showHub) {
return <Hub />;
}

return (
<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--aevra-background)] px-6 py-12 text-[var(--aevra-text)]">
{/* Subtle background glow */}
<div aria-hidden="true" className="pointer-events-none absolute inset-0" >
<div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--aevra-text)] opacity-[0.025] blur-3xl" />
</div>

  <div className="relative z-10 w-full max-w-xl text-center">
    {/* Brand */}
    <header className="mb-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--aevra-text)] text-lg font-bold text-[var(--aevra-background)] shadow-xl">
        N
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em]">
        NOVA
      </h1>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--aevra-text-tertiary)]">
        Intelligent workspace for building what&apos;s next.
      </p>
    </header>

    {/* Development notice */}
    <section
      aria-labelledby="development-title"
      className="rounded-3xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-8 shadow-2xl sm:p-10"
    >
      {/* Status icon */}
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--aevra-warning)_10%,transparent)] text-sm font-semibold text-[var(--aevra-warning)] ring-1 ring-[color-mix(in_srgb,var(--aevra-warning)_20%,transparent)]">
        !
      </div>

      <h2
        id="development-title"
        className="mt-6 text-2xl font-semibold tracking-tight"
      >
        We&apos;re building NOVA.
      </h2>

      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--aevra-text-tertiary)]">
        NOVA is currently in early development. Some features are
        incomplete, experimental, or still being built.
      </p>

      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--aevra-text-tertiary)]">
        Follow the project on GitHub for development progress, source
        code, architecture, and upcoming work.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => setShowHub(true)}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--aevra-text)] px-6 text-sm font-medium text-[var(--aevra-background)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--aevra-text)] focus:ring-offset-2 focus:ring-offset-[var(--aevra-background)]"
        >
          Enter NOVA Hub
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </button>

        <a
          href="https://github.com/hitarthjeetesh-collab/NOVA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] px-6 text-sm font-medium text-[var(--aevra-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)] focus:outline-none focus:ring-2 focus:ring-[var(--aevra-text)] focus:ring-offset-2 focus:ring-offset-[var(--aevra-background)]"
        >
          View on GitHub
          <span aria-hidden="true" className="ml-2">
            ↗
          </span>
        </a>
      </div>
    </section>

    {/* Footer */}
    <footer className="mt-8">
      <p className="text-xs font-medium tracking-wide text-[var(--aevra-text-faint)]">
        BUILD WHAT&apos;S NEXT.
      </p>
    </footer>
  </div>
</main>


);
}