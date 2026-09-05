"use client";

import ManufacturingResults from "./components/ManufacturingResults";
import ManufacturingSetup from "./components/ManufacturingSetup";
import ManufacturingToolbar from "./components/ManufacturingToolbar";
import ManufacturingViewport from "./components/ManufacturingViewport";

import { useManufacturing } from "./hooks/useManufacturing";

export default function Manufacturing() {
  const {
    state,
    updateSettings,
    prepare,
    reset,
  } = useManufacturing();

  return (
    <div className="flex h-full min-h-0 flex-col bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      <ManufacturingToolbar
        process={state.settings.process}
        status={state.status}
        onProcessChange={(process) =>
          updateSettings({ process })
        }
        onPrepare={prepare}
        onReset={reset}
      />

      <div className="flex min-h-0 flex-1">
        <ManufacturingSetup
          settings={state.settings}
          onChange={updateSettings}
        />

        <ManufacturingViewport
          process={state.settings.process}
          status={state.status}
          progress={state.progress}
        />

        <ManufacturingResults
          status={state.status}
          results={state.results}
          error={state.error}
        />
      </div>

      <div className="flex h-8 shrink-0 items-center justify-between border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
        <div className="flex items-center gap-5">
          <span>
            Process:{" "}
            {getProcessLabel(state.settings.process)}
          </span>

          <span>
            Toolpaths:{" "}
            {state.results?.toolpaths ?? "—"}
          </span>

          <span>
            Estimated Cost:{" "}
            {state.results
              ? `$${state.results.estimatedCost.toFixed(2)}`
              : "—"}
          </span>
        </div>

        <span>
          {state.status === "completed"
            ? "Manufacturing preparation complete"
            : "Ready"}
        </span>
      </div>
    </div>
  );
}

function getProcessLabel(
  process: "cnc" | "3d-printing" | "sheet-metal",
) {
  switch (process) {
    case "cnc":
      return "CNC";

    case "3d-printing":
      return "3D Printing";

    case "sheet-metal":
      return "Sheet Metal";
  }
}