"use client";

import type { EngineeringComponent } from "./Components";

interface ComponentCardProps {
  component: EngineeringComponent;
  subsystemLabel?: string;
  view: "grid" | "list";
  onEdit: () => void;
  onDelete: () => void;
}

export default function ComponentCard({
  component,
  subsystemLabel,
  view,
  onEdit,
  onDelete,
}: ComponentCardProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#111419] ${
        view === "grid" ? "p-5" : "p-4"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold">
            {component.name}
          </h3>

          <p className="mt-1 text-xs text-white/40">
            {component.manufacturer}

            {component.partNumber &&
              ` · ${component.partNumber}`}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 px-2 py-1 text-[10px] text-white/50">
          {component.status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <p className="text-white/30">
            Category
          </p>

          <p className="mt-1 text-white/70">
            {component.category}
          </p>
        </div>

        <div>
          <p className="text-white/30">
            Quantity
          </p>

          <p className="mt-1 text-white/70">
            {component.quantity}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[11px] text-white/30">
          Architecture
        </p>

        <p className="mt-1 truncate text-xs text-white/60">
          {subsystemLabel || "Unassigned"}
        </p>
      </div>

      {component.interfaces.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] text-white/30">
            Interfaces
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {component.interfaces.map(
              (interfaceName, index) => {
                const trimmed =
                  interfaceName.trim();

                if (!trimmed) {
                  return null;
                }

                return (
                  <span
                    key={`${trimmed}-${index}`}
                    className="rounded-md border border-white/10 bg-[#15191f] px-2 py-1 text-[10px] text-white/60"
                  >
                    {trimmed}
                  </span>
                );
              }
            )}
          </div>
        </div>
      )}

      {component.description && (
        <p className="mt-4 line-clamp-2 text-xs leading-5 text-white/40">
          {component.description}
        </p>
      )}

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={onDelete}
          className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/40 transition hover:bg-white/5 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}