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
      className={`hidden shrink-0 border-l border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_80%,var(--aevra-surface))] transition-all duration-200 xl:flex ${
        open ? "w-60" : "w-12"
      }`}
    >
      {open ? (
        <div className="flex min-h-0 w-full flex-col">
          {/* Header */}
          <div className="flex h-12 items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
              Engineering Process
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              title="Hide engineering process"
              className="flex h-7 w-7 items-center justify-center rounded-md text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
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
                      ? "bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-[var(--aevra-text)]"
                      : "text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[10px] font-medium ${
                      active
                        ? "border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-[var(--aevra-text)]"
                        : "border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
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
          <div className="border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-3">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-3 py-2.5 text-left transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
                AI
              </span>

              <span className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)]">
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
            className="flex h-8 w-8 items-center justify-center rounded-md text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
          >
            ›
          </button>
        </div>
      )}
    </aside>
  );
}