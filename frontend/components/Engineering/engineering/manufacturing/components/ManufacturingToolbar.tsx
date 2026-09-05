"use client";

import type { ManufacturingProcess } from "../types/manufacturing";

interface ManufacturingToolbarProps {
  process: ManufacturingProcess;
  status: "ready" | "preparing" | "completed" | "error";
  onProcessChange: (process: ManufacturingProcess) => void;
  onPrepare: () => void;
  onReset: () => void;
}

const processLabels: Record<
  ManufacturingProcess,
  string
> = {
  cnc: "CNC",
  "3d-printing": "3D Printing",
  "sheet-metal": "Sheet Metal",
};

export default function ManufacturingToolbar({
  process,
  status,
  onProcessChange,
  onPrepare,
  onReset,
}: ManufacturingToolbarProps) {
  return (
    <div className="flex h-12 items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold">
          Manufacturing
        </span>

        <div className="h-4 w-px bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

        <select
          value={process}
          onChange={(event) =>
            onProcessChange(
              event.target.value as ManufacturingProcess,
            )
          }
          className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] px-2 py-1.5 text-xs text-[var(--aevra-text)] outline-none"
        >
          {Object.entries(processLabels).map(
            ([value, label]) => (
              <option
                key={value}
                value={value}
                className="bg-[var(--aevra-surface)]"
              >
                {label}
              </option>
            ),
          )}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrepare}
          disabled={status === "preparing"}
          className="rounded-md bg-[var(--aevra-text)] px-3 py-1.5 text-xs font-medium text-[var(--aevra-background)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "preparing"
            ? "Preparing..."
            : "Prepare"}
        </button>

        <button
          type="button"
          onClick={onReset}
          className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-3 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
        >
          Reset
        </button>
      </div>
    </div>
  );
}