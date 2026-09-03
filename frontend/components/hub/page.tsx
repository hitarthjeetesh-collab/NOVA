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
    <main className="min-h-screen bg-[#0b0d10] text-white">
      {/* HEADER */}
      <header className="flex h-16 items-center justify-between border-b border-white/10 px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-xs font-semibold">
            A
          </div>

          <span className="text-sm font-semibold tracking-wide">
            AEVRA
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.push("/settings")}
            className="rounded-lg px-3 py-2 text-xs text-white/40 transition hover:bg-white/[0.05] hover:text-white"
          >
            Settings
          </button>

          <button
            type="button"
            onClick={() => router.push("/account")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xs text-white/50 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            H
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <section>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Aevra Workspace
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Build what&apos;s next.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
            Your workspace for engineering, robotics, intelligent
            systems, and the products you create with them.
          </p>
        </section>

        {/* APPS */}
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Applications
            </h2>

            <span className="text-[11px] text-white/20">
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
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition ${
                    available
                      ? "border-white/10 bg-[#101318] hover:border-white/20 hover:bg-[#13171d]"
                      : "cursor-default border-white/[0.06] bg-white/[0.015] opacity-60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/60">
                      {app.name.charAt(0)}
                    </div>

                    <span
                      className={`rounded-full border px-2 py-1 text-[10px] ${
                        available
                          ? "border-white/10 bg-white/[0.04] text-white/40"
                          : "border-white/[0.06] text-white/20"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-medium">
                    {app.name}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-white/35">
                    {app.description}
                  </p>

                  {available && (
                    <div className="mt-6 text-xs text-white/40 transition group-hover:text-white/70">
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
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Recent Projects
            </h2>

            <button
              type="button"
              className="text-[11px] text-white/25 transition hover:text-white/60"
            >
              View all
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101318]">
            <button
              type="button"
              onClick={() => router.push("/engineering")}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/[0.03]"
            >
              <div>
                <p className="text-sm text-white/80">
                  ORION
                </p>

                <p className="mt-1 text-xs text-white/30">
                  Engineering workspace
                </p>
              </div>

              <span className="text-xs text-white/25">
                Open →
              </span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}