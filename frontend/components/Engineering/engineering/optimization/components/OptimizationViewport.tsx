"use client";

import type {
  OptimizationStatus,
  OptimizationVariable,
} from "../types/optimization";

interface OptimizationViewportProps {
  status: OptimizationStatus;
  progress: number;
  method: string;
  variables: OptimizationVariable[];
}

export default function OptimizationViewport({
  status,
  progress,
  method,
  variables,
}: OptimizationViewportProps) {
  const running = status === "running";
  const completed = status === "completed";

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
          {method}
        </div>

        <div className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 text-[10px] text-white/40 backdrop-blur">
          Variables: {variables.length}
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

        <div className="relative h-72 w-96 [perspective:1000px]">
          <div
            className={`absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rotate-x-[55deg] rotate-z-[-12deg] rounded-xl border border-white/20 bg-gradient-to-br from-white/[0.13] via-white/[0.07] to-white/[0.025] shadow-2xl transition-all duration-700 ${
              completed
                ? "scale-[0.82] shadow-[0_0_70px_rgba(255,255,255,0.08)]"
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
                <div className="absolute left-12 top-10 h-14 w-12 rounded bg-white/[0.06]" />

                <div className="absolute left-28 top-16 h-20 w-10 rounded bg-white/[0.11]" />

                <div className="absolute right-10 top-12 h-16 w-14 rounded bg-white/[0.08]" />

                <div className="absolute bottom-10 left-20 h-8 w-20 rounded bg-white/[0.05]" />
              </>
            )}
          </div>

          {running && (
            <>
              <div
                className="absolute left-1/2 top-1/2 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20"
                style={{
                  clipPath: `inset(0 ${100 - progress}% 0 0)`,
                }}
              />

              <div
                className="absolute left-1/2 top-1/2 h-56 w-88 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/5"
                style={{
                  clipPath: `inset(0 ${100 - progress}% 0 0)`,
                }}
              />
            </>
          )}
        </div>

        {completed && (
          <>
            <div className="absolute left-[32%] top-[37%] h-3 w-3 rounded-full bg-white/30" />
            <div className="absolute left-[39%] top-[49%] h-2 w-2 rounded-full bg-white/20" />
            <div className="absolute left-[59%] top-[42%] h-3 w-3 rounded-full bg-white/30" />
            <div className="absolute left-[65%] top-[55%] h-2 w-2 rounded-full bg-white/20" />
          </>
        )}

        {running && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] text-white/50 backdrop-blur">
            Optimizing... {progress}%
          </div>
        )}

        {!running && !completed && (
          <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] text-white/30 backdrop-blur">
            Optimization preview
          </div>
        )}

        {completed && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] text-white/45 backdrop-blur">
            Optimized geometry
          </div>
        )}
      </div>
    </main>
  );
}