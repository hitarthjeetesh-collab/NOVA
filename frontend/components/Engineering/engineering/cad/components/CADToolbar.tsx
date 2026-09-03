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
    <div className="relative flex h-10 shrink-0 items-center border-b border-white/[0.06] bg-[#0d0f13] px-2">
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
                ? "bg-white/[0.08] text-white"
                : "text-white/40 hover:bg-white/[0.05] hover:text-white/75"
            }`}
          >
            <span className="text-sm">{tool.icon}</span>
            <span>{tool.label}</span>
          </button>
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-white/[0.07]" />

      {/* Undo / Redo */}
      <button
        type="button"
        title="Undo"
        className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs text-white/40 transition hover:bg-white/[0.05] hover:text-white/75"
      >
        <span>↻</span>
        Undo
      </button>

      <button
        type="button"
        title="Redo"
        className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs text-white/40 transition hover:bg-white/[0.05] hover:text-white/75"
      >
        <span>↶</span>
        Redo
      </button>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-1">
        <button
          type="button"
          className="rounded-md px-2.5 py-1.5 text-xs text-white/35 transition hover:bg-white/[0.05] hover:text-white/70"
        >
          Grid
        </button>

        <button
          type="button"
          className="rounded-md px-2.5 py-1.5 text-xs text-white/35 transition hover:bg-white/[0.05] hover:text-white/70"
        >
          Snap
        </button>

        <div className="relative ml-1">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            title="More"
            className="flex h-8 items-center justify-center rounded-md px-2 text-white/35 transition hover:bg-white/[0.05] hover:text-white/70"
          >
            ⋯
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-9 z-50 w-40 overflow-hidden rounded-lg border border-white/[0.08] bg-[#111419] p-1 shadow-2xl">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-white/55 hover:bg-white/[0.06] hover:text-white"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-white/55 hover:bg-white/[0.06] hover:text-white"
              >
                Export
              </button>

              <div className="my-1 h-px bg-white/[0.06]" />

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-white/55 hover:bg-white/[0.06] hover:text-white"
              >
                Document settings
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-md px-3 py-2 text-left text-xs text-white/55 hover:bg-white/[0.06] hover:text-white"
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