"use client";

import { useState } from "react";

export default function CADHeader() {
  const [saved, setSaved] = useState(true);

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] bg-[var(--aevra-surface)] px-4">
      <div className="flex items-center gap-4">
        <div>
          <div className="text-sm font-medium text-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]">
            ORION Frame
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
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
          className="rounded-md px-3 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]"
        >
          Save
        </button>

        <button
          type="button"
          className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-3 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
        >
          Export
        </button>

        <button
          type="button"
          className="ml-1 rounded-md px-2 py-1.5 text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
          title="More"
        >
          ⋯
        </button>
      </div>
    </header>
  );
}