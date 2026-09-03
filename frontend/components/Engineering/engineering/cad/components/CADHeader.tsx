"use client";

import { useState } from "react";

export default function CADHeader() {
  const [saved, setSaved] = useState(true);

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.07] bg-[#0d0f13] px-4">
      <div className="flex items-center gap-4">
        <div>
          <div className="text-sm font-medium text-white/90">
            ORION Frame
          </div>

          <div className="flex items-center gap-2 text-[11px] text-white/30">
            <span>CAD</span>
            <span>•</span>
            <span>{saved ? "Saved" : "Unsaved changes"}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="rounded-md px-3 py-1.5 text-xs text-white/45 transition hover:bg-white/[0.05] hover:text-white/80"
        >
          Save
        </button>

        <button
          type="button"
          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition hover:bg-white/[0.06] hover:text-white"
        >
          Export
        </button>

        <button
          type="button"
          className="ml-1 rounded-md px-2 py-1.5 text-white/30 hover:bg-white/[0.05] hover:text-white/70"
          title="More"
        >
          ⋯
        </button>
      </div>
    </header>
  );
}