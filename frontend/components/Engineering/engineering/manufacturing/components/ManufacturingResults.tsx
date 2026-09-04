"use client";

import type {
  ManufacturingResults,
  ManufacturingStatus,
} from "../types/manufacturing";

interface ManufacturingResultsProps {
  status: ManufacturingStatus;
  results: ManufacturingResults | null;
  error: string | null;
}

export default function ManufacturingResults({
  status,
  results,
  error,
}: ManufacturingResultsProps) {
  return (
    <aside className="w-64 shrink-0 overflow-y-auto border-l border-white/10">
      <div className="border-b border-white/10 p-4">
        <p className="text-xs font-semibold text-white/80">
          Manufacturing Summary
        </p>
      </div>

      <section className="border-b border-white/10 p-4">
        <p className="text-[11px] uppercase tracking-wide text-white/30">
          Status
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              status === "error"
                ? "bg-red-400"
                : status === "preparing"
                  ? "bg-yellow-400"
                  : status === "completed"
                    ? "bg-green-400"
                    : "bg-white/40"
            }`}
          />

          <span className="text-xs text-white/70">
            {getStatusLabel(status)}
          </span>
        </div>

        {error && (
          <p className="mt-3 text-xs leading-5 text-red-300">
            {error}
          </p>
        )}
      </section>

      <section className="border-b border-white/10 p-4">
        <Metric
          label="Estimated Time"
          value={
            results
              ? formatHours(results.estimatedTime)
              : "—"
          }
        />

        <Metric
          label="Material Usage"
          value={
            results
              ? `${results.materialUsage.toFixed(2)} kg`
              : "—"
          }
        />

        <Metric
          label="Estimated Cost"
          value={
            results
              ? `$${results.estimatedCost.toFixed(2)}`
              : "—"
          }
        />

        <Metric
          label="Toolpaths"
          value={
            results ? String(results.toolpaths) : "—"
          }
        />
      </section>

      <section className="p-4">
        <p className="mb-3 text-[11px] uppercase tracking-wide text-white/30">
          Warnings
        </p>

        {!results || results.warnings.length === 0 ? (
          <p className="text-xs text-white/30">
            No warnings.
          </p>
        ) : (
          <div className="space-y-2">
            {results.warnings.map((warning) => (
              <div
                key={warning.id}
                className="rounded-md border border-white/10 bg-white/[0.03] p-3"
              >
                <p className="text-[11px] leading-4 text-white/50">
                  {warning.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </aside>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <p className="text-[11px] text-white/30">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-white/80">
        {value}
      </p>
    </div>
  );
}

function getStatusLabel(status: ManufacturingStatus) {
  switch (status) {
    case "ready":
      return "Ready";
    case "preparing":
      return "Preparing";
    case "completed":
      return "Completed";
    case "error":
      return "Error";
  }
}

function formatHours(hours: number) {
  const wholeHours = Math.floor(hours);
  const minutes = Math.round(
    (hours - wholeHours) * 60
  );

  return `${wholeHours}h ${minutes}m`;
}