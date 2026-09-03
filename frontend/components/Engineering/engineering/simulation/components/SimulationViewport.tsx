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
    <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[#090b0e]">
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
        <div className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 text-[10px] text-white/45 backdrop-blur">
          Front
        </div>

        <div className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 text-[10px] text-white/45 backdrop-blur">
          Fit
        </div>
      </div>

      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <div className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 text-[10px] text-white/40 backdrop-blur">
          Loads: {loads.length}
        </div>

        <div className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 text-[10px] text-white/40 backdrop-blur">
          Constraints: {constraints.length}
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_60%)]" />

        <div className="relative h-64 w-80 [perspective:900px]">
          <div
            className={`absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rotate-x-[55deg] rotate-z-[-12deg] rounded-xl border border-white/20 bg-gradient-to-br from-white/[0.13] via-white/[0.07] to-white/[0.025] shadow-2xl transition-all duration-500 ${
              completed
                ? "shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                : ""
            }`}
          >
            <div className="absolute inset-4 rounded-lg border border-white/10" />

            <div className="absolute left-8 top-8 h-4 w-4 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute right-8 top-8 h-4 w-4 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute bottom-8 left-8 h-4 w-4 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute bottom-8 right-8 h-4 w-4 rounded-full border border-white/20 bg-white/10" />

            {completed && (
              <>
                <div className="absolute left-16 top-12 h-20 w-16 rounded bg-white/[0.06]" />
                <div className="absolute right-16 top-12 h-20 w-16 rounded bg-white/[0.12]" />
              </>
            )}
          </div>

          {running && (
            <div
              className="absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20"
              style={{
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
              }}
            />
          )}
        </div>

        {loads.map((load, index) => (
          <div
            key={load.id}
            className="absolute flex items-center gap-1.5 text-[10px] text-white/45"
            style={{
              left: `${35 + index * 8}%`,
              top: `${35 + index * 5}%`,
            }}
          >
            <span className="text-white/60">↓</span>
            {load.value} {load.unit}
          </div>
        ))}

        {constraints.map((constraint, index) => (
          <div
            key={constraint.id}
            className="absolute flex items-center gap-1.5 text-[10px] text-white/35"
            style={{
              left: `${40 + index * 10}%`,
              bottom: `${25 + index * 5}%`,
            }}
          >
            <span className="h-2 w-2 rounded-full bg-white/30" />
            {constraint.location}
          </div>
        ))}

        {running && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] text-white/50 backdrop-blur">
            Solving... {progress}%
          </div>
        )}

        {!running && !completed && (
          <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] text-white/30 backdrop-blur">
            Simulation preview
          </div>
        )}

        {completed && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] text-white/45 backdrop-blur">
            Results visualization
          </div>
        )}
      </div>
    </main>
  );
}