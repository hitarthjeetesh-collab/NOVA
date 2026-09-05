"use client";

import type { CADObject } from "../CAD";

type Props = {
  selectedObject: CADObject | null;
};

export default function CADViewport({ selectedObject }: Props) {
  return (
    <div className="relative min-h-0 flex-1 overflow-hidden bg-[var(--aevra-background)]">
      {/* Mock grid */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--aevra-text) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--aevra-text) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Mock CAD object */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-52 w-80">
          {/* Main body */}
          <div
            className="absolute left-16 top-14 h-32 w-56 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--aevra-text)_16%,transparent)] to-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] shadow-2xl"
            style={{
              transform:
                "perspective(700px) rotateX(8deg) rotateY(-18deg)",
            }}
          >
            <div className="absolute left-8 top-8 h-16 w-32 rounded border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_20%,transparent)]" />

            <div className="absolute right-7 top-7 h-8 w-8 rounded-full border border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_30%,transparent)]" />

            <div className="absolute bottom-6 left-8 h-1 w-36 rounded bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />
          </div>

          {/* Side extrusion */}
          <div
            className="absolute left-12 top-20 h-24 w-12 border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)]"
            style={{
              transform: "skewY(-12deg)",
            }}
          />
        </div>
      </div>

      {/* Axis indicator */}
      <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center">
        <div className="relative h-full w-full text-[10px]">
          <div className="absolute bottom-3 left-7 h-7 w-px bg-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]" />
          <div className="absolute bottom-3 left-7 h-px w-7 bg-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]" />
          <div className="absolute bottom-3 left-7 h-7 w-px rotate-45 bg-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]" />

          <span className="absolute bottom-0 left-9 text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
            X
          </span>
          <span className="absolute bottom-9 left-5 text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
            Z
          </span>
          <span className="absolute bottom-6 left-0 text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
            Y
          </span>
        </div>
      </div>

      {/* View cube */}
      <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-surface)_90%,transparent)] text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] shadow-xl">
          FRONT
        </div>
      </div>

      {/* View controls */}
      <div className="absolute bottom-5 right-5 flex items-center gap-1 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] bg-[color-mix(in_srgb,var(--aevra-surface)_90%,transparent)] p-1 shadow-xl">
        {["−", "+", "⌂"].map((item) => (
          <button
            key={item}
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Selection info */}
      {selectedObject && (
        <div className="absolute left-5 top-5 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] bg-[color-mix(in_srgb,var(--aevra-surface)_90%,transparent)] px-3 py-2 shadow-xl">
          <div className="text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
            Selected
          </div>

          <div className="mt-0.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]">
            {selectedObject.name}
          </div>
        </div>
      )}

      {/* Bottom status */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]">
        Perspective · 1:1
      </div>
    </div>
  );
}