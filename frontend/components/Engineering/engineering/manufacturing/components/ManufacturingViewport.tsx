"use client";

import type {
  ManufacturingProcess,
  ManufacturingStatus,
} from "../types/manufacturing";

interface ManufacturingViewportProps {
  process: ManufacturingProcess;
  status: ManufacturingStatus;
  progress: number;
}

export default function ManufacturingViewport({
  process,
  status,
  progress,
}: ManufacturingViewportProps) {
  return (
    <main className="relative min-w-0 flex-1 overflow-hidden bg-[var(--aevra-background)]">
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--aevra-text) 4%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--aevra-text) 4%, transparent) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-56 w-72">
          <div
            className="absolute left-1/2 top-1/2 h-32 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] shadow-2xl"
            style={{
              transform:
                "translate(-50%, -50%) perspective(600px) rotateX(18deg) rotateY(-18deg) rotateZ(-8deg)",
            }}
          >
            <div className="absolute inset-5 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]" />

            <div className="absolute -bottom-5 left-8 right-8 h-5 rounded-full bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] blur-md" />
          </div>

          {status === "preparing" && (
            <div className="absolute inset-x-8 bottom-4">
              <div className="h-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]">
                <div
                  className="h-full bg-[var(--aevra-text)] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-center text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
                Preparing manufacturing process...{" "}
                {progress}%
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute left-4 top-4 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-3 py-2 backdrop-blur-sm">
        <p className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          Manufacturing Preview
        </p>

        <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]">
          {getProcessLabel(process)}
        </p>
      </div>

      <div className="absolute bottom-4 left-4 rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)] px-3 py-2 backdrop-blur-sm">
        <p className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
          Model
        </p>

        <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
          Manufacturing-ready geometry
        </p>
      </div>
    </main>
  );
}

function getProcessLabel(
  process: ManufacturingProcess,
) {
  switch (process) {
    case "cnc":
      return "CNC Machining";

    case "3d-printing":
      return "3D Printing";

    case "sheet-metal":
      return "Sheet Metal";
  }
}