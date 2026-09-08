"use client";

import { useState } from "react";

import Hub from "@/components/hub/page";

export default function Home() {
  const [showHub, setShowHub] = useState(false);

  if (showHub) {
    return <Hub />;
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--aevra-background)] px-5 py-12 text-[var(--aevra-text)] sm:px-8">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-[10%] top-[-16rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-accent) 9%, transparent)",
          }}
        />

        <div
          className="absolute bottom-[-18rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-accent) 7%, transparent)",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-text) 2%, transparent)",
          }}
        />

        {/* Engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--aevra-text) 1px, transparent 1px), linear-gradient(90deg, var(--aevra-text) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Brand */}
        <header className="mb-10 text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-full blur-2xl"
              style={{
                background:
                  "color-mix(in srgb, var(--aevra-accent) 12%, transparent)",
              }}
            />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-[var(--aevra-border)] bg-[var(--aevra-text)] text-2xl font-bold text-[var(--aevra-background)] shadow-2xl">
              N
            </div>
          </div>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
            NOVA
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--aevra-text-tertiary)] sm:text-base">
            Intelligent workspace for building what&apos;s next.
          </p>
        </header>

        {/* Main card */}
        <section
          aria-labelledby="development-title"
          className="relative overflow-hidden rounded-[2rem] border border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-surface)_94%,transparent)] p-7 shadow-2xl backdrop-blur-xl sm:p-10"
        >
          {/* Card glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--aevra-accent) 8%, transparent)",
            }}
          />

          <div className="relative">
            {/* Status */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--aevra-accent)_25%,transparent)] bg-[color-mix(in_srgb,var(--aevra-accent)_7%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--aevra-accent-hover)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--aevra-accent)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--aevra-accent)]" />
                </span>

                NOVA is actively being built
              </div>
            </div>

            <h2
              id="development-title"
              className="mt-7 text-center text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
            >
              We&apos;re building NOVA.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-7 text-[var(--aevra-text-secondary)]">
              NOVA is currently in early development. The platform is being
              built from its core workspace and infrastructure upward, with
              new systems being introduced as they become ready.
            </p>

            {/* Development status */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] p-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--aevra-success)] shadow-[0_0_10px_var(--aevra-success)]" />
                  <span className="text-xs font-medium">
                    Core workspace
                  </span>
                </div>

                <p className="mt-2 text-[10px] uppercase tracking-wide text-[var(--aevra-text-faint)]">
                  Complete
                </p>
              </div>

              <div className="rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] p-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--aevra-accent)] shadow-[0_0_10px_var(--aevra-accent)]" />
                  <span className="text-xs font-medium">
                    Platform
                  </span>
                </div>

                <p className="mt-2 text-[10px] uppercase tracking-wide text-[var(--aevra-text-faint)]">
                  In development
                </p>
              </div>

              <div className="rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] p-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--aevra-text-tertiary)]" />
                  <span className="text-xs font-medium">
                    AI systems
                  </span>
                </div>

                <p className="mt-2 text-[10px] uppercase tracking-wide text-[var(--aevra-text-faint)]">
                  Planned
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShowHub(true)}
                className="group inline-flex h-11 items-center justify-center rounded-xl bg-[var(--aevra-text)] px-6 text-sm font-semibold text-[var(--aevra-background)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--aevra-text)] focus:ring-offset-2 focus:ring-offset-[var(--aevra-background)]"
              >
                Enter NOVA Hub

                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <a
                href="/development"
                className="group inline-flex h-11 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] px-6 text-sm font-medium text-[var(--aevra-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--aevra-accent)_25%,var(--aevra-border))] hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)] focus:outline-none focus:ring-2 focus:ring-[var(--aevra-accent)] focus:ring-offset-2 focus:ring-offset-[var(--aevra-background)]"
              >
                Development

                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-[var(--aevra-text-faint)]">
            BUILD WHAT&apos;S NEXT.
          </p>
        </footer>
      </div>
    </main>
  );
}