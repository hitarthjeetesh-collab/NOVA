"use client";

import { useRouter } from "next/navigation";

const apps = [
  {
    name: "Engineering",
    description:
      "Design and develop products from requirements to testing.",
    status: "Available",
    route: "/engineering",
  },
  {
    name: "Robotics",
    description:
      "Build, program, and develop intelligent robotic systems.",
    status: "Coming soon",
    route: "#",
  },
  {
    name: "ORION",
    description:
      "Develop advanced wearable and human-machine systems.",
    status: "Coming soon",
    route: "#",
  },
  {
    name: "AI Lab",
    description:
      "Experiment with models, agents, and intelligent systems.",
    status: "Coming soon",
    route: "#",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-[-14rem] top-[-18rem] h-[38rem] w-[38rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-accent) 6%, transparent)",
          }}
        />

        <div
          className="absolute bottom-[-20rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-accent) 5%, transparent)",
          }}
        />

        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--aevra-text) 1px, transparent 1px), linear-gradient(90deg, var(--aevra-text) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex h-16 items-center justify-between border-b border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-background)_88%,transparent)] px-6 backdrop-blur-xl lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full blur-lg"
              style={{
                background:
                  "color-mix(in srgb, var(--aevra-accent) 7%, transparent)",
              }}
            />

            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--aevra-border)] bg-[var(--aevra-text)] text-xs font-bold text-[var(--aevra-background)]">
              N
            </div>
          </div>

          <span className="text-sm font-semibold tracking-wide">
            NOVA
          </span>

          <span className="hidden text-[var(--aevra-text-faint)] sm:inline">
            /
          </span>

          <span className="hidden text-xs text-[var(--aevra-text-tertiary)] sm:inline">
            Workspace
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.push("/settings")}
            className="rounded-lg px-3 py-2 text-xs text-[var(--aevra-text-tertiary)] transition-all duration-200 hover:bg-[var(--aevra-hover)] hover:text-[var(--aevra-text)]"
          >
            Settings
          </button>

          <button
            type="button"
            onClick={() => router.push("/account")}
            aria-label="Open account"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--aevra-border)] bg-[var(--aevra-hover)] text-xs text-[var(--aevra-text-tertiary)] transition-all duration-200 hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)]"
          >
            H
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Hero */}
        <section>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                aria-hidden="true"
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--aevra-accent)] opacity-50"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--aevra-accent)]" />
            </span>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--aevra-text-subtle)]">
              NOVA Workspace
            </p>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Build what&apos;s next.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--aevra-text-tertiary)] sm:text-base">
            Your workspace for engineering, robotics, intelligent
            systems, and the products you create with them.
          </p>
        </section>

        {/* Applications */}
        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--aevra-text-tertiary)]">
                Applications
              </h2>

              <p className="mt-1.5 text-[11px] text-[var(--aevra-text-faint)]">
                Explore the NOVA workspace
              </p>
            </div>

            <span className="text-[11px] text-[var(--aevra-text-faint)]">
              {apps.length} applications
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {apps.map((app) => {
              const available = app.status === "Available";

              return (
                <button
                  key={app.name}
                  type="button"
                  disabled={!available}
                  onClick={() => {
                    if (available) {
                      router.push(app.route);
                    }
                  }}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                    available
                      ? "border-[var(--aevra-border)] bg-[var(--aevra-surface)] hover:-translate-y-0.5 hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-surface-light)] hover:shadow-[0_12px_40px_color-mix(in_srgb,var(--aevra-accent)_5%,transparent)]"
                      : "cursor-default border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_1.5%,transparent)] opacity-55"
                  }`}
                >
                  {available && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "color-mix(in srgb, var(--aevra-accent) 7%, transparent)",
                      }}
                    />
                  )}

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] text-sm font-semibold text-[var(--aevra-text-secondary)] transition-all duration-300 group-hover:border-[var(--aevra-border-strong)]">
                      {app.name.charAt(0)}
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                        available
                          ? "border-[color-mix(in_srgb,var(--aevra-success)_20%,var(--aevra-border))] bg-[color-mix(in_srgb,var(--aevra-success)_6%,transparent)] text-[var(--aevra-text-tertiary)]"
                          : "border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] text-[var(--aevra-text-faint)]"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="mt-7 text-base font-medium">
                      {app.name}
                    </h3>

                    <p className="mt-2 max-w-md text-xs leading-5 text-[var(--aevra-text-subtle)]">
                      {app.description}
                    </p>

                    {available && (
                      <div className="mt-6 flex items-center text-xs text-[var(--aevra-text-tertiary)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--aevra-text-secondary)]">
                        Open application
                        <span
                          aria-hidden="true"
                          className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--aevra-text-tertiary)]">
                Recent Projects
              </h2>

              <p className="mt-1.5 text-[11px] text-[var(--aevra-text-faint)]">
                Continue where you left off
              </p>
            </div>

            <button
              type="button"
              className="text-[11px] text-[var(--aevra-text-faint)] transition-colors hover:text-[var(--aevra-text-secondary)]"
            >
              View all →
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] shadow-xl">
            <button
              type="button"
              onClick={() => router.push("/engineering")}
              className="group flex w-full items-center justify-between px-5 py-5 text-left transition-all duration-200 hover:bg-[var(--aevra-hover)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] text-xs font-semibold text-[var(--aevra-text-secondary)]">
                  O
                </div>

                <div>
                  <p className="text-sm font-medium text-[var(--aevra-text)]">
                    ORION
                  </p>

                  <p className="mt-1 text-xs text-[var(--aevra-text-subtle)]">
                    Engineering workspace
                  </p>
                </div>
              </div>

              <span className="text-xs text-[var(--aevra-text-faint)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--aevra-text-secondary)]">
                Open →
              </span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-[var(--aevra-border)] pt-6">
          <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium tracking-[0.16em] text-[var(--aevra-text-faint)]">
              BUILD WHAT&apos;S NEXT.
            </p>

            <p className="text-[var(--aevra-text-faint)]">
              NOVA Workspace
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}