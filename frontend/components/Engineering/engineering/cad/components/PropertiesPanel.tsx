"use client";

import type { CADObject } from "../CAD";

type Props = {
  selectedObject: CADObject | null;
};

export default function PropertiesPanel({ selectedObject }: Props) {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-l border-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] bg-[var(--aevra-surface)]">
      <div className="flex h-10 items-center border-b border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] px-3">
        <span className="text-[11px] font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
          Properties
        </span>
      </div>

      {!selectedObject ? (
        <div className="flex flex-1 items-center justify-center px-6 text-center">
          <p className="text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
            Select an object to view its properties.
          </p>
        </div>
      ) : (
        <div className="min-h-0 flex-1 overflow-y-auto">
          <section className="border-b border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] p-3">
            <div className="mb-3 text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
              General
            </div>

            <Property label="Name" value={selectedObject.name} />
            <Property label="Type" value={selectedObject.type} />
            <Property label="ID" value={selectedObject.id} />
          </section>

          <section className="border-b border-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] p-3">
            <div className="mb-3 text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
              Transform
            </div>

            <Property label="Position" value="0, 0, 0 mm" />
            <Property label="Rotation" value="0°, 0°, 0°" />
            <Property label="Scale" value="1.00, 1.00, 1.00" />
          </section>

          <section className="p-3">
            <div className="mb-3 text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
              Appearance
            </div>

            <Property label="Material" value="Aluminum 6061-T6" />
            <Property label="Density" value="2700 kg/m³" />
          </section>
        </div>
      )}
    </aside>
  );
}

function Property({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3 last:mb-0">
      <span className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
        {label}
      </span>

      <span className="max-w-[140px] truncate text-right text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
        {value}
      </span>
    </div>
  );
}