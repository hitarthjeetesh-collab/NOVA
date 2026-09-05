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
    <aside className="w-64 shrink-0 overflow-y-auto border-l border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-4">
        <p className="text-xs font-semibold text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
          Manufacturing Summary
        </p>
      </div>

      <section className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-4">
        <p className="text-[11px] uppercase tracking-wide text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
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
                    : "bg-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]"
            }`}
          />

          <span className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]">
            {getStatusLabel(status)}
          </span>
        </div>

        {error && (
          <p className="mt-3 text-xs leading-5 text-red-300">
            {error}
          </p>
        )}
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-4">
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
        <p className="mb-3 text-[11px] uppercase tracking-wide text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
          Warnings
        </p>

        {!results || results.warnings.length === 0 ? (
          <p className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            No warnings.
          </p>
        ) : (
          <div className="space-y-2">
            {results.warnings.map((warning) => (
              <div
                key={warning.id}
                className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] p-3"
              >
                <p className="text-[11px] leading-4 text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
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
      <p className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
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
    (hours - wholeHours) * 60,
  );

  return `${wholeHours}h ${minutes}m`;
}