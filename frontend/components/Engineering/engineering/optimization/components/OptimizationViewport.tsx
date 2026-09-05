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
    <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[var(--aevra-background)]">
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_70%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] backdrop-blur">
          Front
        </div>

        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_70%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] backdrop-blur">
          Fit
        </div>
      </div>

      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_70%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] backdrop-blur">
          {method}
        </div>

        <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_70%,transparent)] px-2.5 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] backdrop-blur">
          Variables: {variables.length}
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

        <div className="relative h-72 w-96 [perspective:1000px]">
          <div
            className={`absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rotate-x-[55deg] rotate-z-[-12deg] rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--aevra-text)_13%,transparent)] via-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] to-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] shadow-2xl transition-all duration-700 ${
              completed
                ? "scale-[0.82] shadow-[0_0_70px_color-mix(in_srgb,var(--aevra-text)_8%,transparent)]"
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
                <div className="absolute left-12 top-10 h-14 w-12 rounded bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)]" />

                <div className="absolute left-28 top-16 h-20 w-10 rounded bg-[color-mix(in_srgb,var(--aevra-text)_11%,transparent)]" />

                <div className="absolute right-10 top-12 h-16 w-14 rounded bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)]" />

                <div className="absolute bottom-10 left-20 h-8 w-20 rounded bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]" />
              </>
            )}
          </div>

          {running && (
            <>
              <div
                className="absolute left-1/2 top-1/2 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]"
                style={{
                  clipPath: `inset(0 ${100 - progress}% 0 0)`,
                }}
              />

              <div
                className="absolute left-1/2 top-1/2 h-56 w-88 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]"
                style={{
                  clipPath: `inset(0 ${100 - progress}% 0 0)`,
                }}
              />
            </>
          )}
        </div>

        {completed && (
          <>
            <div className="absolute left-[32%] top-[37%] h-3 w-3 rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]" />

            <div className="absolute left-[39%] top-[49%] h-2 w-2 rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]" />

            <div className="absolute left-[59%] top-[42%] h-3 w-3 rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]" />

            <div className="absolute left-[65%] top-[55%] h-2 w-2 rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]" />
          </>
        )}

        {running && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_80%,transparent)] px-3 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] backdrop-blur">
            Optimizing... {progress}%
          </div>
        )}

        {!running && !completed && (
          <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_70%,transparent)] px-3 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)] backdrop-blur">
            Optimization preview
          </div>
        )}

        {completed && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_75%,transparent)] px-3 py-1.5 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] backdrop-blur">
            Optimized geometry
          </div>
        )}
      </div>
    </main>
  );
}