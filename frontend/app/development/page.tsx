import Link from "next/link";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "progress", label: "Progress" },
  { id: "architecture", label: "Architecture" },
  { id: "roadmap", label: "Roadmap" },
  { id: "versions", label: "Versions" },
  { id: "changelog", label: "Changelog" },
];

const systems = [
  {
    name: "Core Workspace",
    status: "complete",
    description: "The foundation of NOVA: navigation, projects, workspace structure, and core interface systems.",
  },
  {
    name: "Engineering",
    status: "development",
    description: "The first major NOVA application, connecting the engineering development workflow into one workspace.",
  },
  {
    name: "Authentication",
    status: "development",
    description: "Identity, accounts, sessions, and secure access across the NOVA ecosystem.",
  },
  {
    name: "Database",
    status: "development",
    description: "Persistent project data, user data, engineering information, and application state.",
  },
  {
    name: "File Storage",
    status: "development",
    description: "Persistent project files and engineering assets through object storage.",
  },
  {
    name: "AI Systems",
    status: "planned",
    description: "AI capabilities built as a layer over NOVA's structured and deterministic systems.",
  },
  {
    name: "Engineering Engine",
    status: "planned",
    description: "Deterministic calculations, formulas, units, constants, materials, and engineering data.",
  },
  {
    name: "CAD",
    status: "planned",
    description: "Parametric and solid-modeling capabilities connected directly to the engineering workflow.",
  },
  {
    name: "Simulation",
    status: "planned",
    description: "Engineering simulation and analysis integrated with project requirements and designs.",
  },
];

const roadmap = [
  {
    number: "01",
    title: "Core Workspace",
    description:
      "Establish the central NOVA workspace and the systems every future application will depend on.",
    status: "complete",
  },
  {
    number: "02",
    title: "Platform Infrastructure",
    description:
      "Connect authentication, databases, storage, APIs, and persistent project infrastructure.",
    status: "development",
  },
  {
    number: "03",
    title: "Persistent Projects",
    description:
      "Make projects persistent so users can create work, leave, return later, and continue exactly where they stopped.",
    status: "development",
  },
  {
    number: "04",
    title: "Functional Engineering Workflow",
    description:
      "Turn the engineering interface into a functional end-to-end workflow.",
    status: "development",
  },
  {
    number: "05",
    title: "Deterministic Engineering Systems",
    description:
      "Build trustworthy calculations, formulas, units, engineering data, and traceable technical systems.",
    status: "planned",
  },
  {
    number: "06",
    title: "AI Integration",
    description:
      "Introduce AI as an intelligent layer over NOVA's structured engineering systems.",
    status: "planned",
  },
  {
    number: "07",
    title: "Advanced Engineering",
    description:
      "Expand into CAD, simulation, optimization, manufacturing, and advanced engineering capabilities.",
    status: "planned",
  },
  {
    number: "08",
    title: "Additional NOVA Applications",
    description:
      "Expand the ecosystem into Robotics, ORION, AI Lab, Work, and connected project systems.",
    status: "planned",
  },
];

function StatusDot({
  status,
}: {
  status: "complete" | "development" | "planned";
}) {
  const label =
    status === "complete"
      ? "Complete"
      : status === "development"
        ? "In development"
        : "Planned";

  const color =
    status === "complete"
      ? "var(--aevra-success)"
      : status === "development"
        ? "var(--aevra-accent)"
        : "var(--aevra-text-tertiary)";

  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--aevra-text-secondary)]">
      <span
        className={`relative flex h-2 w-2 rounded-full ${
          status === "development" ? "animate-pulse" : ""
        }`}
        style={{
          background: color,
          boxShadow: `0 0 12px ${color}`,
        }}
      />
      {label}
    </span>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute left-[8%] top-[-12rem] h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-accent) 10%, transparent)",
          }}
        />

        <div
          className="absolute right-[-10rem] top-[25%] h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-info) 7%, transparent)",
          }}
        />

        <div
          className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--aevra-accent) 6%, transparent)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--aevra-text) 1px, transparent 1px), linear-gradient(90deg, var(--aevra-text) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-background)_88%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.01em]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--aevra-text)] text-xs font-bold text-[var(--aevra-background)] shadow-lg transition-transform duration-200 group-hover:scale-105">
              N
            </span>

            <span>NOVA</span>

            <span className="hidden text-[var(--aevra-text-faint)] sm:inline">
              /
            </span>

            <span className="hidden font-normal text-[var(--aevra-text-tertiary)] sm:inline">
              Development
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {sections.slice(0, 5).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-lg px-3 py-2 text-xs text-[var(--aevra-text-tertiary)] transition-colors duration-200 hover:bg-[var(--aevra-hover)] hover:text-[var(--aevra-text)]"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com/hitarthjeetesh-collab/NOVA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-[var(--aevra-border)] bg-[var(--aevra-hover)] px-3 py-2 text-xs font-medium text-[var(--aevra-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)]"
          >
            GitHub
            <Arrow />
          </a>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Hero */}
        <section
          id="overview"
          className="relative flex min-h-[calc(100vh-4rem)] items-center py-20 sm:py-28"
        >
          <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--aevra-accent)_25%,transparent)] bg-[color-mix(in_srgb,var(--aevra-accent)_7%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--aevra-accent-hover)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--aevra-accent)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--aevra-accent)]" />
                </span>
                NOVA is actively being built
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Building the system
                <span className="block text-[var(--aevra-text-tertiary)]">
                  behind NOVA.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--aevra-text-secondary)] sm:text-lg">
                This is the public development portal for NOVA — its
                architecture, progress, roadmap, releases, and the systems
                being built to create one connected engineering workspace.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#progress"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--aevra-text)] px-5 text-sm font-semibold text-[var(--aevra-background)] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)] hover:shadow-2xl"
                >
                  Explore development
                  <Arrow />
                </a>

                <a
                  href="https://github.com/hitarthjeetesh-collab/NOVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] px-5 text-sm font-medium text-[var(--aevra-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)]"
                >
                  View source
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--aevra-border)] pt-6">
                <div>
                  <p className="text-xs text-[var(--aevra-text-faint)]">
                    Current focus
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Core platform foundation
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[var(--aevra-text-faint)]">
                    Primary application
                  </p>
                  <p className="mt-1 text-sm font-medium">NOVA Engineering</p>
                </div>

                <div>
                  <p className="text-xs text-[var(--aevra-text-faint)]">
                    Release history
                  </p>
                  <p className="mt-1 text-sm font-medium">Not started</p>
                </div>
              </div>
            </div>

            {/* System visualization */}
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="absolute inset-8 rounded-full blur-3xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--aevra-accent) 12%, transparent)",
                }}
              />

              <div className="relative rounded-[2rem] border border-[var(--aevra-border)] bg-[color-mix(in_srgb,var(--aevra-surface)_90%,transparent)] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-[var(--aevra-border)] pb-4">
                  <div>
                    <p className="text-xs font-medium text-[var(--aevra-text-faint)]">
                      SYSTEM STATUS
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      NOVA Platform
                    </p>
                  </div>

                  <StatusDot status="development" />
                </div>

                <div className="relative mt-6 min-h-[390px] overflow-hidden rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-background)] p-5">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--aevra-text) 1px, transparent 1px), linear-gradient(90deg, var(--aevra-text) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="relative flex h-full min-h-[350px] flex-col items-center justify-center gap-4">
                    <div className="relative">
                      <div
                        className="absolute -inset-8 animate-pulse rounded-full blur-2xl"
                        style={{
                          background:
                            "color-mix(in srgb, var(--aevra-accent) 14%, transparent)",
                        }}
                      />

                      <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-[color-mix(in_srgb,var(--aevra-accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--aevra-accent)_10%,var(--aevra-surface))] text-2xl font-semibold shadow-xl">
                        N
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-semibold">NOVA Core</p>
                      <p className="mt-1 text-xs text-[var(--aevra-text-faint)]">
                        Connected platform foundation
                      </p>
                    </div>

                    <div className="grid w-full max-w-sm grid-cols-2 gap-3 pt-5">
                      {[
                        ["Engineering", "development"],
                        ["Infrastructure", "development"],
                        ["AI Systems", "planned"],
                        ["Applications", "planned"],
                      ].map(([name, status]) => (
                        <div
                          key={name}
                          className="rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--aevra-border-strong)]"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                status === "development"
                                  ? "animate-pulse"
                                  : ""
                              }`}
                              style={{
                                background:
                                  status === "development"
                                    ? "var(--aevra-accent)"
                                    : "var(--aevra-text-tertiary)",
                              }}
                            />
                            <span className="text-xs font-medium">
                              {name}
                            </span>
                          </div>

                          <p className="mt-2 text-[10px] uppercase tracking-wide text-[var(--aevra-text-faint)]">
                            {status}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-[var(--aevra-text-faint)]">
                  <span>Architecture evolves continuously</span>
                  <span>LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section id="progress" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--aevra-accent)]">
              Current progress
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              What is being built
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--aevra-text-tertiary)]">
              NOVA is intentionally being built from the foundation upward.
              These statuses represent the current state of the actual
              systems, not artificial completion percentages.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system, index) => (
              <article
                key={system.name}
                className="group relative overflow-hidden rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--aevra-accent)_25%,var(--aevra-border))] hover:shadow-xl"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className="absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "color-mix(in srgb, var(--aevra-accent) 12%, transparent)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-semibold">{system.name}</h3>
                    <StatusDot status={system.status as "complete" | "development" | "planned"} />
                  </div>

                  <p className="mt-4 text-xs leading-6 text-[var(--aevra-text-tertiary)]">
                    {system.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--aevra-accent)]">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              One platform. Multiple systems.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--aevra-text-tertiary)]">
              NOVA is designed as a connected platform rather than a
              collection of isolated applications.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--aevra-border)] bg-[var(--aevra-surface)] shadow-2xl">
            <div className="grid lg:grid-cols-[1fr_0.65fr]">
              <div className="relative min-h-[520px] overflow-hidden border-b border-[var(--aevra-border)] p-6 sm:p-10 lg:border-b-0 lg:border-r">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--aevra-text) 1px, transparent 1px), linear-gradient(90deg, var(--aevra-text) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative flex h-full min-h-[450px] items-center justify-center">
                  <div className="absolute h-px w-[70%] bg-[var(--aevra-border)]" />
                  <div className="absolute h-[70%] w-px bg-[var(--aevra-border)]" />

                  <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[color-mix(in_srgb,var(--aevra-accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--aevra-accent)_8%,var(--aevra-surface))] text-2xl font-semibold shadow-[0_0_60px_color-mix(in_srgb,var(--aevra-accent)_12%,transparent)]">
                    NOVA
                  </div>

                  {[
                    ["Firebase", "top-8 left-1/2 -translate-x-1/2"],
                    ["Render API", "bottom-8 left-1/2 -translate-x-1/2"],
                    ["Neon", "left-8 top-1/2 -translate-y-1/2"],
                    ["Filebase", "right-8 top-1/2 -translate-y-1/2"],
                  ].map(([name, position]) => (
                    <div
                      key={name}
                      className={`absolute ${position} rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-surface-light)] px-4 py-3 text-xs font-medium shadow-lg`}
                    >
                      {name}
                    </div>
                  ))}

                  <div className="absolute bottom-20 left-8 rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-surface-light)] px-4 py-3 text-xs font-medium shadow-lg">
                    GitHub
                  </div>

                  <div className="absolute right-8 top-20 rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-surface-light)] px-4 py-3 text-xs font-medium shadow-lg">
                    Cloudflare
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--aevra-text-faint)]">
                  Platform layers
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    [
                      "Applications",
                      "Engineering · Robotics · ORION · AI Lab · Work",
                    ],
                    [
                      "AI",
                      "Intelligence layered over structured platform systems",
                    ],
                    [
                      "Engineering Systems",
                      "Calculations · CAD · Simulation · Optimization",
                    ],
                    [
                      "Platform",
                      "Projects · Identity · Data · Files · APIs",
                    ],
                    [
                      "Infrastructure",
                      "Firebase · Neon · Filebase · Render · Cloudflare",
                    ],
                  ].map(([title, description], index) => (
                    <div
                      key={title}
                      className="group rounded-xl border border-[var(--aevra-border)] p-4 transition-all duration-200 hover:border-[color-mix(in_srgb,var(--aevra-accent)_25%,var(--aevra-border))] hover:bg-[var(--aevra-hover)]"
                    >
                      <div className="flex gap-4">
                        <span className="text-xs font-semibold text-[var(--aevra-accent)]">
                          0{index + 1}
                        </span>

                        <div>
                          <p className="text-sm font-semibold">{title}</p>
                          <p className="mt-1 text-xs leading-5 text-[var(--aevra-text-tertiary)]">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--aevra-accent)]">
              Roadmap
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              From foundation to platform.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--aevra-text-tertiary)]">
              The roadmap is deliberately sequential. Each layer becomes the
              foundation for the systems that follow it.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-[var(--aevra-border)] sm:block" />

            <div className="space-y-4">
              {roadmap.map((item) => (
                <article
                  key={item.number}
                  className="group relative grid gap-5 rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--aevra-accent)_25%,var(--aevra-border))] sm:grid-cols-[48px_1fr_auto] sm:items-center sm:p-6"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-surface-light)] text-xs font-semibold text-[var(--aevra-text-tertiary)] transition-colors duration-200 group-hover:border-[color-mix(in_srgb,var(--aevra-accent)_30%,var(--aevra-border))] group-hover:text-[var(--aevra-accent)]">
                    {item.number}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <StatusDot
                        status={
                          item.status as
                            | "complete"
                            | "development"
                            | "planned"
                        }
                      />
                    </div>

                    <p className="mt-2 max-w-3xl text-xs leading-6 text-[var(--aevra-text-tertiary)]">
                      {item.description}
                    </p>
                  </div>

                  <span className="hidden text-xs text-[var(--aevra-text-faint)] sm:block">
                    {item.status === "complete"
                      ? "Done"
                      : item.status === "development"
                        ? "Now"
                        : "Future"}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Versions */}
        <section id="versions" className="scroll-mt-24 py-24 sm:py-32">
          <div className="rounded-[2rem] border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-8 shadow-xl sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--aevra-accent)]">
                  Versions
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  Release history starts here.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--aevra-text-tertiary)]">
                  Public version history will begin when NOVA reaches its
                  first stable production release. Development changes are
                  tracked internally until then.
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--aevra-text-faint)]">
                  Current release
                </p>
                <p className="mt-1 text-sm font-semibold">
                  No stable release yet
                </p>
              </div>
            </div>

            <div className="mt-10 flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-[var(--aevra-border-strong)] bg-[var(--aevra-background)]">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] text-lg text-[var(--aevra-text-tertiary)]">
                  ∅
                </div>

                <p className="mt-4 text-sm font-medium">
                  No public versions yet
                </p>

                <p className="mt-1 text-xs text-[var(--aevra-text-faint)]">
                  Versions will appear once NOVA reaches a stable production
                  release.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Changelog */}
        <section id="changelog" className="scroll-mt-24 py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--aevra-accent)]">
                Changelog
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Development, documented.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--aevra-text-tertiary)]">
                The changelog will record meaningful public changes to NOVA,
                from new capabilities to interface improvements and fixes.
              </p>

              <a
                href="https://github.com/hitarthjeetesh-collab/NOVA"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--aevra-text)]"
              >
                Follow development on GitHub
                <Arrow />
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-6">
              <div className="flex items-center justify-between border-b border-[var(--aevra-border)] pb-4">
                <div>
                  <p className="text-sm font-semibold">Development log</p>
                  <p className="mt-1 text-xs text-[var(--aevra-text-faint)]">
                    Public release notes will appear here.
                  </p>
                </div>

                <span className="rounded-full border border-[var(--aevra-border)] px-2.5 py-1 text-[10px] text-[var(--aevra-text-faint)]">
                  EMPTY
                </span>
              </div>

              <div className="flex min-h-40 items-center justify-center text-center">
                <p className="max-w-sm text-xs leading-6 text-[var(--aevra-text-faint)]">
                  The first public changelog entries will be published with
                  NOVA's production release history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="pb-16 pt-16 sm:pb-24">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-[color-mix(in_srgb,var(--aevra-accent)_20%,var(--aevra-border))] p-8 sm:p-12"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--aevra-accent) 8%, var(--aevra-surface)), var(--aevra-surface))",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{
                background:
                  "color-mix(in srgb, var(--aevra-accent) 12%, transparent)",
              }}
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--aevra-accent)]">
                  Build what's next.
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  NOVA is still being built.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--aevra-text-tertiary)]">
                  Follow the source, architecture, and future development of
                  the platform.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--aevra-text)] px-5 text-sm font-semibold text-[var(--aevra-background)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Back to NOVA
                  <Arrow />
                </Link>

                <a
                  href="https://github.com/hitarthjeetesh-collab/NOVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--aevra-border)] bg-[var(--aevra-hover)] px-5 text-sm font-medium text-[var(--aevra-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--aevra-hover-strong)] hover:text-[var(--aevra-text)]"
                >
                  GitHub
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--aevra-border)] py-8">
          <div className="flex flex-col gap-3 text-xs text-[var(--aevra-text-faint)] sm:flex-row sm:items-center sm:justify-between">
            <p>NOVA — Intelligent workspace for building what&apos;s next.</p>
            <p>Development portal</p>
          </div>
        </footer>
      </div>
    </main>
  );
}