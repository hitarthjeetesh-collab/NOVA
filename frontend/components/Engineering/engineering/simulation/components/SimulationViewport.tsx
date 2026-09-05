"use client";

import type {
  SimulationConstraint,
  SimulationLoad,
  SimulationStatus,
} from "../types/simulation";

interface SimulationViewportProps {
  status: SimulationStatus;
  progress: number;
  loads: SimulationLoad[];
  constraints: SimulationConstraint[];
}

export default function SimulationViewport({
  status,
  progress,
  loads,
  constraints,
}: SimulationViewportProps) {
  const completed = status === "completed";
  const running = status === "running";

  return (
    <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[var(--aevra-background)]">
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] backdrop-blur">
          Front
        </div>

        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] backdrop-blur">
          Fit
        </div>
      </div>

      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] backdrop-blur">
          Loads: {loads.length}
        </div>

        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] backdrop-blur">
          Constraints: {constraints.length}
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--aevra-text) 3.5%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--aevra-text) 3.5%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--aevra-text)_3.5%,transparent),transparent_60%)]" />

        <div className="relative h-64 w-80 [perspective:900px]">
          <div
            className={`absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rotate-x-[55deg] rotate-z-[-12deg] rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--aevra-text)_13%,transparent)] via-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] to-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] shadow-2xl transition-all duration-500 ${
              completed
                ? "shadow-[0_0_60px_color-mix(in_srgb,var(--aevra-text)_8%,transparent)]"
                : ""
            }`}
          >
            <div className="absolute inset-4 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

            <div className="absolute left-8 top-8 h-4 w-4 rounded-full border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

            <div className="absolute right-8 top-8 h-4 w-4 rounded-full border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

            <div className="absolute bottom-8 left-8 h-4 w-4 rounded-full border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

            <div className="absolute bottom-8 right-8 h-4 w-4 rounded-full border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

            {completed && (
              <>
                <div className="absolute left-16 top-12 h-20 w-16 rounded bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)]" />

                <div className="absolute right-16 top-12 h-20 w-16 rounded bg-[color-mix(in_srgb,var(--aevra-text)_12%,transparent)]" />
              </>
            )}
          </div>

          {running && (
            <div
              className="absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]"
              style={{
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
              }}
            />
          )}
        </div>

        {loads.map((load, index) => (
          <div
            key={load.id}
            className="absolute flex items-center gap-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]"
            style={{
              left: `${35 + index * 8}%`,
              top: `${35 + index * 5}%`,
            }}
          >
            <span className="text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
              ↓
            </span>
            {load.value} {load.unit}
          </div>
        ))}

        {constraints.map((constraint, index) => (
          <div
            key={constraint.id}
            className="absolute flex items-center gap-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]"
            style={{
              left: `${40 + index * 10}%`,
              bottom: `${25 + index * 5}%`,
            }}
          >
            <span className="h-2 w-2 rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]" />
            {constraint.location}
          </div>
        ))}

        {running && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_50%,transparent)] px-3 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] backdrop-blur">
            Solving... {progress}%
          </div>
        )}

        {!running && !completed && (
          <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-3 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)] backdrop-blur">
            Simulation preview
          </div>
        )}

        {completed && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_40%,transparent)] px-3 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] backdrop-blur">
            Results visualization
          </div>
        )}
      </div>
    </main>
  );
}