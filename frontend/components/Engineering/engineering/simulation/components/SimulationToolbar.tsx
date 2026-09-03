"use client";

import type { AnalysisType, SimulationStatus } from "../types/simulation";

interface SimulationToolbarProps {
  analysisType: AnalysisType;
  status: SimulationStatus;
  onRun: () => void;
  onStop: () => void;
  onReset: () => void;
}

const analysisLabels: Record<AnalysisType, string> = {
  "static-structural": "Static Structural",
  thermal: "Thermal",
  modal: "Modal",
  transient: "Transient",
  fluid: "Fluid Flow",
};

export default function SimulationToolbar({
  analysisType,
  status,
  onRun,
  onStop,
  onReset,
}: SimulationToolbarProps) {
  const running = status === "running";

  return (
    <div className="flex h-12 shrink-0 items-center border-b border-white/10 bg-[#0d1014] px-3">
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium text-white">
          Simulation
        </div>

        <div className="h-4 w-px bg-white/10" />

        <button
          type="button"
          onClick={onRun}
          disabled={running}
          className="flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-3 text-xs text-white transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="text-[10px]">▶</span>
          Run
        </button>

        <button
          type="button"
          onClick={onStop}
          disabled={!running}
          className="flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-3 text-xs text-white transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="text-[10px]">■</span>
          Stop
        </button>

        <button
          type="button"
          onClick={onReset}
          className="flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-3 text-xs text-white transition hover:bg-white/[0.08]"
        >
          <span className="text-[11px]">↻</span>
          Reset
        </button>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden text-xs text-white/35 sm:block">
          {analysisLabels[analysisType]}
        </div>

        <div className="h-4 w-px bg-white/10" />

        <button
          type="button"
          className="rounded-md px-2 py-1 text-xs text-white/40 transition hover:bg-white/[0.05] hover:text-white/70"
        >
          ⋮
        </button>
      </div>
    </div>
  );
}