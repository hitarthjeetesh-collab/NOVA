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
    <aside className="flex w-56 shrink-0 flex-col border-r border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] bg-[var(--aevra-surface)]">
      <div className="flex h-10 items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] px-3">
        <span className="text-[11px] font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
          Model
        </span>

        <button
          type="button"
          className="rounded px-1.5 py-1 text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]"
          title="Add"
        >
          +
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <div className="mb-1 flex items-center gap-2 px-2 py-1.5 text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
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
                  ? "bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-[color-mix(in_srgb,var(--aevra-text)_85%,transparent)]"
                  : "text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
              }`}
              style={{
                paddingLeft: `${12 + (index === 0 ? 0 : 16)}px`,
              }}
            >
              <span
                className={`w-3 text-center text-[9px] ${
                  selected
                    ? "text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
                    : "text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]"
                }`}
              >
                {getIcon(object.type)}
              </span>

              <span className="truncate">{object.name}</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] p-2">
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-xs text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]"
        >
          <span>+</span>
          New component
        </button>
      </div>
    </aside>
  );
}