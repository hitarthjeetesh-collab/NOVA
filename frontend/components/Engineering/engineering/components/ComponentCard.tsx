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
      className={`rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] ${
        view === "grid" ? "p-5" : "p-4"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold">
            {component.name}
          </h3>

          <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
            {component.manufacturer}
            {component.partNumber &&
              ` · ${component.partNumber}`}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-2 py-1 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          {component.status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <p className="text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Category
          </p>

          <p className="mt-1 text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]">
            {component.category}
          </p>
        </div>

        <div>
          <p className="text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Quantity
          </p>

          <p className="mt-1 text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]">
            {component.quantity}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
          Architecture
        </p>

        <p className="mt-1 truncate text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
          {subsystemLabel || "Unassigned"}
        </p>
      </div>

      {component.interfaces.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Interfaces
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {component.interfaces.map(
              (interfaceName, index) => {
                const trimmed = interfaceName.trim();

                if (!trimmed) {
                  return null;
                }

                return (
                  <span
                    key={`${trimmed}-${index}`}
                    className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface-light)] px-2 py-1 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]"
                  >
                    {trimmed}
                  </span>
                );
              },
            )}
          </div>
        </div>
      )}

      {component.description && (
        <p className="mt-4 line-clamp-2 text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          {component.description}
        </p>
      )}

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-2.5 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={onDelete}
          className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-2.5 py-1.5 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}