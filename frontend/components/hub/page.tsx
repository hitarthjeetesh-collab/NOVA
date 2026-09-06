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
    <main className="min-h-screen bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      {/* HEADER */}
      <header className="flex h-16 items-center justify-between border-b border-[var(--aevra-border)] px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--aevra-border)] bg-[var(--aevra-hover)] text-xs font-semibold">
            N
          </div>

          <span className="text-sm font-semibold tracking-wide">
            NOVA
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.push("/settings")}
            className="rounded-lg px-3 py-2 text-xs text-[var(--aevra-text-tertiary)] transition hover:bg-[var(--aevra-hover)] hover:text-[var(--aevra-text)]"
          >
            Settings
          </button>

          <button
            type="button"
            onClick={() => router.push("/account")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--aevra-border)] bg-[var(--aevra-hover)] text-xs text-[var(--aevra-text-tertiary)] transition hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)]"
          >
            H
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <section>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--aevra-text-subtle)]">
            Nova Workspace
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Build what&apos;s next.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--aevra-text-tertiary)]">
            Your workspace for engineering, robotics, intelligent
            systems, and the products you create with them.
          </p>
        </section>

        {/* APPS */}
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--aevra-text-tertiary)]">
              Applications
            </h2>

            <span className="text-[11px] text-[var(--aevra-text-faint)]">
              {apps.length} applications
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {apps.map((app) => {
              const available =
                app.status === "Available";

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
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition ${
                    available
                      ? "border-[var(--aevra-border)] bg-[var(--aevra-surface)] hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-surface-light)]"
                      : "cursor-default border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_1.5%,transparent)] opacity-60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] text-sm font-semibold text-[var(--aevra-text-secondary)]">
                      {app.name.charAt(0)}
                    </div>

                    <span
                      className={`rounded-full border px-2 py-1 text-[10px] ${
                        available
                          ? "border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] text-[var(--aevra-text-tertiary)]"
                          : "border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] text-[var(--aevra-text-faint)]"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-medium">
                    {app.name}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-[var(--aevra-text-subtle)]">
                    {app.description}
                  </p>

                  {available && (
                    <div className="mt-6 text-xs text-[var(--aevra-text-tertiary)] transition group-hover:text-[var(--aevra-text-secondary)]">
                      Open application →
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* RECENT PROJECTS */}
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--aevra-text-tertiary)]">
              Recent Projects
            </h2>

            <button
              type="button"
              className="text-[11px] text-[var(--aevra-text-faint)] transition hover:text-[var(--aevra-text-secondary)]"
            >
              View all
            </button>
          </div>

          <div className="rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)]">
            <button
              type="button"
              onClick={() =>
                router.push("/engineering")
              }
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-[var(--aevra-hover)]"
            >
              <div>
                <p className="text-sm text-[var(--aevra-text)]">
                  ORION
                </p>

                <p className="mt-1 text-xs text-[var(--aevra-text-subtle)]">
                  Engineering workspace
                </p>
              </div>

              <span className="text-xs text-[var(--aevra-text-faint)]">
                Open →
              </span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}