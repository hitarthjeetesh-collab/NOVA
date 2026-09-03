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
    <div className="flex h-20 shrink-0 flex-col border-t border-white/[0.07] bg-[#0d0f13]">
      <div className="flex h-7 shrink-0 items-center border-b border-white/[0.05] px-3">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/25">
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
                  ? "border-white/[0.12] bg-white/[0.07]"
                  : "border-transparent bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/[0.05] text-[10px] text-white/35">
                {index + 1}
              </div>

              <div className="min-w-0">
                <div className="truncate text-[10px] text-white/60">
                  {object.name}
                </div>

                <div className="mt-0.5 truncate text-[9px] text-white/20">
                  {object.type}
                </div>
              </div>
            </button>
          );
        })}

        <button
          type="button"
          className="flex h-10 min-w-[90px] items-center justify-center rounded-md border border-dashed border-white/[0.07] text-[10px] text-white/20 hover:border-white/[0.12] hover:text-white/40"
        >
          + Feature
        </button>
      </div>
    </div>
  );
}