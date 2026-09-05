"use client";

import type { CADObject } from "../CAD";

type Props = {
  objects: CADObject[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function FeatureTimeline({
  objects,
  selectedId,
  onSelect,
}: Props) {
  return (
    <div className="flex h-20 shrink-0 flex-col border-t border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] bg-[var(--aevra-surface)]">
      <div className="flex h-7 shrink-0 items-center border-b border-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] px-3">
        <span className="text-[10px] font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
          Feature History
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto px-3">
        {objects.map((object, index) => {
          const selected = object.id === selectedId;

          return (
            <button
              key={object.id}
              type="button"
              onClick={() => onSelect(object.id)}
              className={`flex h-10 min-w-[90px] items-center gap-2 rounded-md border px-2.5 text-left transition ${
                selected
                  ? "border-[color-mix(in_srgb,var(--aevra-text)_12%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)]"
                  : "border-transparent bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]"
              }`}
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
                {index + 1}
              </div>

              <div className="min-w-0">
                <div className="truncate text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
                  {object.name}
                </div>

                <div className="mt-0.5 truncate text-[9px] text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]">
                  {object.type}
                </div>
              </div>
            </button>
          );
        })}

        <button
          type="button"
          className="flex h-10 min-w-[90px] items-center justify-center rounded-md border border-dashed border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:border-[color-mix(in_srgb,var(--aevra-text)_12%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]"
        >
          + Feature
        </button>
      </div>
    </div>
  );
}