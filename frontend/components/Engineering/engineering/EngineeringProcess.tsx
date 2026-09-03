"use client";

import { useState } from "react";
import type { WorkspaceStage } from "@/app/engineering/page";

type Props = {
  stage: WorkspaceStage;
  onStageChange: (stage: WorkspaceStage) => void;
};

const stages: {
  id: WorkspaceStage;
  label: string;
}[] = [
  { id: "requirements", label: "Requirements" },
  { id: "planning", label: "Planning" },
  { id: "architecture", label: "Architecture" },
  { id: "components", label: "Components" },
  { id: "calculations", label: "Calculations" },
  { id: "code", label: "Code" },
  { id: "cad", label: "CAD" },
  { id: "simulation", label: "Simulation" },
  { id: "optimization", label: "Optimization" },
  { id: "manufacturing", label: "Manufacturing" },
];

export default function EngineeringProcess({
  stage,
  onStageChange,
}: Props) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`hidden shrink-0 border-l border-white/10 bg-[#0e1115] transition-all duration-200 xl:flex ${
        open ? "w-60" : "w-12"
      }`}
    >
      {open ? (
        <div className="flex min-h-0 w-full flex-col">
          {/* Header */}
          <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
              Engineering Process
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              title="Hide engineering process"
              className="flex h-7 w-7 items-center justify-center rounded-md text-white/35 transition hover:bg-white/[0.06] hover:text-white"
            >
              ‹
            </button>
          </div>

          {/* Stages */}
          <div className="flex-1 overflow-y-auto p-2">
            {stages.map((item, index) => {
              const active = stage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onStageChange(item.id)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                    active
                      ? "bg-white/[0.08] text-white"
                      : "text-white/45 hover:bg-white/[0.04] hover:text-white/80"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[10px] font-medium ${
                      active
                        ? "border-white/20 bg-white/[0.08] text-white"
                        : "border-white/10 text-white/30"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span className="truncate text-xs">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* AI Assistant */}
          <div className="border-t border-white/10 p-3">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left transition hover:bg-white/[0.06]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.08] text-[10px] text-white/60">
                AI
              </span>

              <span className="text-xs text-white/55">
                AI Assistant
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* Collapsed */
        <div className="flex w-full flex-col items-center py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            title="Show engineering process"
            className="flex h-8 w-8 items-center justify-center rounded-md text-white/35 transition hover:bg-white/[0.06] hover:text-white"
          >
            ›
          </button>
        </div>
      )}
    </aside>
  );
}