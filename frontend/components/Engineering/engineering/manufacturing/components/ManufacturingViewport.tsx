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
    <main className="relative min-w-0 flex-1 overflow-hidden bg-[#0b0d10]">
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-56 w-72">
          <div
            className="absolute left-1/2 top-1/2 h-32 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-xl border border-white/20 bg-white/10 shadow-2xl"
            style={{
              transform:
                "translate(-50%, -50%) perspective(600px) rotateX(18deg) rotateY(-18deg) rotateZ(-8deg)",
            }}
          >
            <div className="absolute inset-5 rounded-lg border border-white/10 bg-white/5" />

            <div className="absolute -bottom-5 left-8 right-8 h-5 rounded-full bg-black/30 blur-md" />
          </div>

          {status === "preparing" && (
            <div className="absolute inset-x-8 bottom-4">
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-white transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-center text-[11px] text-white/40">
                Preparing manufacturing process... {progress}%
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-sm">
        <p className="text-[11px] text-white/40">
          Manufacturing Preview
        </p>
        <p className="mt-1 text-xs text-white/70">
          {getProcessLabel(process)}
        </p>
      </div>

      <div className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-sm">
        <p className="text-[11px] text-white/30">
          Model
        </p>
        <p className="mt-1 text-xs text-white/60">
          Manufacturing-ready geometry
        </p>
      </div>
    </main>
  );
}

function getProcessLabel(
  process: ManufacturingProcess
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