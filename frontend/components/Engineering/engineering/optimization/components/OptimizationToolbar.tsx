"use client";

import type {
  OptimizationMethod,
  OptimizationStatus,
} from "../types/optimization";

interface OptimizationToolbarProps {
  method: OptimizationMethod;
  status: OptimizationStatus;
  onRun: () => void;
  onStop: () => void;
  onReset: () => void;
}

const methodLabels: Record<OptimizationMethod, string> = {
  topology: "Topology Optimization",
  shape: "Shape Optimization",
  parameter: "Parameter Optimization",
};

export default function OptimizationToolbar({
  method,
  status,
  onRun,
  onStop,
  onReset,
}: OptimizationToolbarProps) {
  const running = status === "running";

  return (
    <div className="flex h-12 shrink-0 items-center border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)] px-3">
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium text-[var(--aevra-text)]">
          Optimization
        </div>

        <div className="h-4 w-px bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

        <button
          type="button"
          onClick={onRun}
          disabled={running}
          className="flex h-8 items-center gap-1.5 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] px-3 text-xs text-[var(--aevra-text)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="text-[10px]">▶</span>
          Run
        </button>

        <button
          type="button"
          onClick={onStop}
          disabled={!running}
          className="flex h-8 items-center gap-1.5 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] px-3 text-xs text-[var(--aevra-text)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="text-[10px]">■</span>
          Stop
        </button>

        <button
          type="button"
          onClick={onReset}
          className="flex h-8 items-center gap-1.5 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] px-3 text-xs text-[var(--aevra-text)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)]"
        >
          <span className="text-[11px]">↻</span>
          Reset
        </button>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] sm:block">
          {methodLabels[method]}
        </div>

        <div className="h-4 w-px bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

        <button
          type="button"
          className="rounded-md px-2 py-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
        >
          ⋮
        </button>
      </div>
    </div>
  );
}