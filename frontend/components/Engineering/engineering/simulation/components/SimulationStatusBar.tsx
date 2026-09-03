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
    <div className="flex h-8 shrink-0 items-center border-t border-white/10 bg-[#0d1014] px-3 text-[10px] text-white/30">
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