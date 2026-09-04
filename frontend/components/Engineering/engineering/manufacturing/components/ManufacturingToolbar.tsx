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
    <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold">
          Manufacturing
        </span>

        <div className="h-4 w-px bg-white/10" />

        <select
          value={process}
          onChange={(event) =>
            onProcessChange(
              event.target.value as ManufacturingProcess
            )
          }
          className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white outline-none"
        >
          {Object.entries(processLabels).map(
            ([value, label]) => (
              <option
                key={value}
                value={value}
                className="bg-[#101318]"
              >
                {label}
              </option>
            )
          )}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onPrepare}
          disabled={status === "preparing"}
          className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "preparing"
            ? "Preparing..."
            : "Prepare"}
        </button>

        <button
          onClick={onReset}
          className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:bg-white/5 hover:text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}