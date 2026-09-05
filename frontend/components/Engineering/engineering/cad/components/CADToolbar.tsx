"use client";

import { useState } from "react";

const tools = [
  { label: "Select", icon: "↖" },
  { label: "Sketch", icon: "⌁" },
  { label: "Extrude", icon: "↥" },
  { label: "Revolve", icon: "◐" },
  { label: "Fillet", icon: "⌒" },
  { label: "Chamfer", icon: "◢" },
  { label: "Measure", icon: "⌗" },
];

export default function CADToolbar() {
  const [activeTool, setActiveTool] = useState("Select");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex h-10 shrink-0 items-center border-b border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] bg-[var(--aevra-surface)] px-2">
      {/* Main tools */}
      <div className="flex items-center gap-0.5">
        {tools.map((tool) => (
          <button
            key={tool.label}
            type="button"
            onClick={() => setActiveTool(tool.label)}
            title={tool.label}
            className={`flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs transition ${
              activeTool === tool.label
                ? "bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-[var(--aevra-text)]"
                : "text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_75%,transparent)]"
            }`}
          >
            <span className="text-sm">{tool.icon}</span>
            <span>{tool.label}</span>
          </button>
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)]" />

      {/* Undo / Redo */}
      <button
        type="button"
        title="Undo"
        className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_75%,transparent)]"
      >
        <span>↻</span>
        Undo
      </button>

      <button
        type="button"
        title="Redo"
        className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_75%,transparent)]"
      >
        <span>↶</span>
        Redo
      </button>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-1">
        <button
          type="button"
          className="rounded-md px-2.5 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
        >
          Grid
        </button>

        <button
          type="button"
          className="rounded-md px-2.5 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
        >
          Snap
        </button>

        <div className="relative ml-1">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            title="More"
            className="flex h-8 items-center justify-center rounded-md px-2 text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
          >
            ⋯
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-9 z-50 w-40 overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] bg-[var(--aevra-surface)] p-1 shadow-2xl">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Export
              </button>

              <div className="my-1 h-px bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)]" />

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Document settings
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Keyboard shortcuts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}