"use client";

import type {
  SimulationResults as Results,
  SimulationStatus,
} from "../types/simulation";

interface SimulationResultsProps {
  status: SimulationStatus;
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
    <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] p-3">
      <div className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
        {label}
      </div>

      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-lg font-medium tracking-tight text-[var(--aevra-text)]">
          {value}
        </span>

        {unit && (
          <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SimulationResults({
  status,
  progress,
  results,
  error,
}: SimulationResultsProps) {
  const running = status === "running";
  const completed = status === "completed";

  return (
    <aside className="flex w-64 shrink-0 flex-col overflow-hidden border-l border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <div className="text-xs font-medium text-[var(--aevra-text)]">
          Results
        </div>

        <div className="mt-1 text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
          Simulation output and metrics.
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <section className="mb-5">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Status
          </div>

          <div className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] p-3">
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  running
                    ? "animate-pulse bg-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]"
                    : completed
                      ? "bg-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]"
                      : status === "error"
                        ? "bg-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
                        : "bg-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]"
                }`}
              />

              <span className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_65%,transparent)]">
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
                <div className="mb-1 flex justify-between text-[9px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]">
                  <div
                    className="h-full rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] transition-all duration-300"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="mt-2 text-[10px] leading-4 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
                {error}
              </div>
            )}
          </div>
        </section>

        <section className="mb-5">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Key Results
          </div>

          {results ? (
            <div className="space-y-2">
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

              <Metric
                label="Temperature"
                value={results.maxTemperature.toFixed(1)}
                unit="°C"
              />
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-3 py-6 text-center text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
              Run the simulation to generate results.
            </div>
          )}
        </section>

        {results && (
          <section>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
              Solver
            </div>

            <div className="divide-y divide-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)]">
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
                  Elements
                </span>

                <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
                  {results.elementCount.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
                  Nodes
                </span>

                <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
                  {results.nodeCount.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
                  Iterations
                </span>

                <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
                  {results.iterations}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </aside>
  );
}