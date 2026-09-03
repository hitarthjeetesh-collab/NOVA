"use client";

import type { CADObject } from "../CAD";

type Props = {
  selectedObject: CADObject | null;
};

export default function CADViewport({ selectedObject }: Props) {
  return (
    <div className="relative min-h-0 flex-1 overflow-hidden bg-[#090b0e]">
      {/* Mock grid */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Mock CAD object */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-52 w-80">
          {/* Main body */}
          <div
            className="absolute left-16 top-14 h-32 w-56 rounded-lg border border-white/20 bg-gradient-to-br from-white/[0.16] to-white/[0.04] shadow-2xl"
            style={{
              transform: "perspective(700px) rotateX(8deg) rotateY(-18deg)",
            }}
          >
            <div className="absolute left-8 top-8 h-16 w-32 rounded border border-white/10 bg-black/20" />

            <div className="absolute right-7 top-7 h-8 w-8 rounded-full border border-white/20 bg-black/30" />

            <div className="absolute bottom-6 left-8 h-1 w-36 rounded bg-white/10" />
          </div>

          {/* Side extrusion */}
          <div
            className="absolute left-12 top-20 h-24 w-12 border border-white/10 bg-white/[0.04]"
            style={{
              transform: "skewY(-12deg)",
            }}
          />
        </div>
      </div>

      {/* Axis indicator */}
      <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center">
        <div className="relative h-full w-full text-[10px]">
          <div className="absolute bottom-3 left-7 h-7 w-px bg-white/40" />
          <div className="absolute bottom-3 left-7 h-px w-7 bg-white/40" />
          <div className="absolute bottom-3 left-7 h-7 w-px rotate-45 bg-white/20" />

          <span className="absolute bottom-0 left-9 text-white/35">X</span>
          <span className="absolute bottom-9 left-5 text-white/35">Z</span>
          <span className="absolute bottom-6 left-0 text-white/35">Y</span>
        </div>
      </div>

      {/* View cube */}
      <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-[#111419]/90 text-[10px] text-white/40 shadow-xl">
          FRONT
        </div>
      </div>

      {/* View controls */}
      <div className="absolute bottom-5 right-5 flex items-center gap-1 rounded-lg border border-white/[0.07] bg-[#111419]/90 p-1 shadow-xl">
        {["−", "+", "⌂"].map((item) => (
          <button
            key={item}
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded text-xs text-white/40 hover:bg-white/[0.07] hover:text-white/80"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Selection info */}
      {selectedObject && (
        <div className="absolute left-5 top-5 rounded-lg border border-white/[0.07] bg-[#111419]/90 px-3 py-2 shadow-xl">
          <div className="text-[10px] uppercase tracking-wider text-white/25">
            Selected
          </div>

          <div className="mt-0.5 text-xs text-white/70">
            {selectedObject.name}
          </div>
        </div>
      )}

      {/* Bottom status */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-white/20">
        Perspective · 1:1
      </div>
    </div>
  );
}