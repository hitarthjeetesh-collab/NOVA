"use client";

import type { CADObject } from "../CAD";

type Props = {
  objects: CADObject[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function getIcon(type: CADObject["type"]) {
  switch (type) {
    case "body":
      return "●";
    case "part":
      return "◆";
    case "sketch":
      return "⌁";
    case "feature":
      return "◇";
    case "assembly":
      return "▣";
  }
}

export default function ModelTree({
  objects,
  selectedId,
  onSelect,
}: Props) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-white/[0.07] bg-[#0d0f13]">
      <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-3">
        <span className="text-[11px] font-medium uppercase tracking-wider text-white/35">
          Model
        </span>

        <button
          type="button"
          className="rounded px-1.5 py-1 text-white/25 hover:bg-white/[0.05] hover:text-white/60"
          title="Add"
        >
          +
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <div className="mb-1 flex items-center gap-2 px-2 py-1.5 text-[11px] text-white/25">
          <span>⌄</span>
          <span>ORION Frame</span>
        </div>

        {objects.map((object, index) => {
          const selected = object.id === selectedId;

          return (
            <button
              key={object.id}
              type="button"
              onClick={() => onSelect(object.id)}
              className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs transition ${
                selected
                  ? "bg-white/[0.08] text-white/85"
                  : "text-white/45 hover:bg-white/[0.04] hover:text-white/70"
              }`}
              style={{ paddingLeft: `${12 + (index === 0 ? 0 : 16)}px` }}
            >
              <span
                className={`w-3 text-center text-[9px] ${
                  selected ? "text-white/70" : "text-white/25"
                }`}
              >
                {getIcon(object.type)}
              </span>

              <span className="truncate">{object.name}</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-white/[0.06] p-2">
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-xs text-white/30 hover:bg-white/[0.04] hover:text-white/60"
        >
          <span>+</span>
          New component
        </button>
      </div>
    </aside>
  );
}