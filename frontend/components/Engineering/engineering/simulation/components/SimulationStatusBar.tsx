"use client";

import type {
  MeshSettings,
  SimulationStatus,
} from "../types/simulation";

interface SimulationStatusBarProps {
  status: SimulationStatus;
  mesh: MeshSettings;
  elementCount?: number;
  progress: number;
}

export default function SimulationStatusBar({
  status,
  mesh,
  elementCount,
  progress,
}: SimulationStatusBarProps) {
  const statusLabel =
    status === "running"
      ? `Solving ${progress}%`
      : status === "completed"
        ? "Solver: Complete"
        : status === "stopped"
          ? "Solver: Stopped"
          : status === "error"
            ? "Solver: Error"
            : "Solver: Ready";

  return (
    <div className="flex h-8 shrink-0 items-center border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] px-3 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
      <div className="flex items-center gap-4">
        <span>
          Mesh:{" "}
          {elementCount
            ? `${elementCount.toLocaleString()} elements`
            : mesh.quality}
        </span>

        <span className="hidden sm:inline">
          Element size: {mesh.elementSize} mm
        </span>

        <span className="hidden md:inline">
          Adaptive: {mesh.adaptive ? "On" : "Off"}
        </span>
      </div>

      <div className="ml-auto">
        <span>{statusLabel}</span>
      </div>
    </div>
  );
}