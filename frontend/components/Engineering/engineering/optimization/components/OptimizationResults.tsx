"use client";

import type {
  OptimizationResults as Results,
  OptimizationStatus,
} from "../types/optimization";

interface OptimizationResultsProps {
  status: OptimizationStatus;
  progress: number;
  results: Results | null;
  error: string | null;
}

function Metric({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.025] p-3">
      <div className="text-[10px] text-white/35">
        {label}
      </div>

      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-lg font-medium tracking-tight text-white">
          {value}
        </span>

        {unit && (
          <span className="text-[10px] text-white/35">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

export default function OptimizationResults({
  status,
  progress,
  results,
  error,
}: OptimizationResultsProps) {
  const running = status === "running";
  const completed = status === "completed";

  return (
    <aside className="flex w-64 shrink-0 flex-col overflow-hidden border-l border-white/10 bg-[#0d1014]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="text-xs font-medium text-white">
          Results
        </div>

        <div className="mt-1 text-[11px] text-white/35">
          Optimization output and metrics.
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <section className="mb-5">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/30">
            Status
          </div>

          <div className="rounded-md border border-white/10 bg-white/[0.025] p-3">
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  running
                    ? "animate-pulse bg-white/60"
                    : completed
                      ? "bg-white/80"
                      : status === "error"
                        ? "bg-white/30"
                        : "bg-white/20"
                }`}
              />

              <span className="text-xs text-white/65">
                {status === "ready"
                  ? "Ready"
                  : status === "running"
                    ? "Running"
                    : status === "completed"
                      ? "Completed"
                      : status === "stopped"
                        ? "Stopped"
                        : "Error"}
              </span>
            </div>

            {running && (
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-[9px] text-white/30">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white/50 transition-all duration-300"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="mt-2 text-[10px] leading-4 text-white/40">
                {error}
              </div>
            )}
          </div>
        </section>

        <section className="mb-5">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/30">
            Key Results
          </div>

          {results ? (
            <div className="space-y-2">
              <Metric
                label="Mass Reduction"
                value={results.massReduction.toFixed(1)}
                unit="%"
              />

              <Metric
                label="Final Mass"
                value={results.finalMass.toFixed(2)}
                unit="kg"
              />

              <Metric
                label="Maximum Stress"
                value={results.maxStress.toFixed(1)}
                unit="MPa"
              />

              <Metric
                label="Displacement"
                value={results.maxDisplacement.toFixed(2)}
                unit="mm"
              />

              <Metric
                label="Safety Factor"
                value={results.safetyFactor.toFixed(2)}
              />
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-[10px] text-white/25">
              Run the optimization to generate results.
            </div>
          )}
        </section>

        {results && (
          <section>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/30">
              Solver
            </div>

            <div className="divide-y divide-white/10 rounded-md border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-white/35">
                  Initial Mass
                </span>

                <span className="text-[10px] text-white/60">
                  {results.initialMass.toFixed(2)} kg
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-white/35">
                  Final Mass
                </span>

                <span className="text-[10px] text-white/60">
                  {results.finalMass.toFixed(2)} kg
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-white/35">
                  Iterations
                </span>

                <span className="text-[10px] text-white/60">
                  {results.iterations}
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-white/35">
                  Convergence
                </span>

                <span className="text-[10px] text-white/60">
                  {results.convergence.toFixed(1)}%
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </aside>
  );
}