"use client";

import type {
  ManufacturingMaterial,
  ManufacturingProcess,
  ManufacturingSettings,
} from "../types/manufacturing";

interface ManufacturingSetupProps {
  settings: ManufacturingSettings;
  onChange: (
    updates: Partial<ManufacturingSettings>
  ) => void;
}

const materials: {
  value: ManufacturingMaterial;
  label: string;
}[] = [
  { value: "aluminum-6061", label: "Aluminum 6061" },
  { value: "aluminum-7075", label: "Aluminum 7075" },
  { value: "steel", label: "Steel" },
  { value: "stainless-steel", label: "Stainless Steel" },
  { value: "titanium", label: "Titanium" },
  { value: "pla", label: "PLA" },
  { value: "abs", label: "ABS" },
  { value: "petg", label: "PETG" },
];

const processes: {
  value: ManufacturingProcess;
  label: string;
}[] = [
  { value: "cnc", label: "CNC Machining" },
  { value: "3d-printing", label: "3D Printing" },
  { value: "sheet-metal", label: "Sheet Metal" },
];

export default function ManufacturingSetup({
  settings,
  onChange,
}: ManufacturingSetupProps) {
  return (
    <aside className="w-60 shrink-0 overflow-y-auto border-r border-white/10">
      <div className="border-b border-white/10 p-4">
        <p className="text-xs font-semibold text-white/80">
          Manufacturing Setup
        </p>
      </div>

      <section className="border-b border-white/10 p-4">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wide text-white/30">
          Process
        </p>

        <select
          value={settings.process}
          onChange={(event) =>
            onChange({
              process: event.target
                .value as ManufacturingProcess,
            })
          }
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none"
        >
          {processes.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="bg-[#101318]"
            >
              {item.label}
            </option>
          ))}
        </select>
      </section>

      <section className="border-b border-white/10 p-4">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wide text-white/30">
          Material
        </p>

        <select
          value={settings.material}
          onChange={(event) =>
            onChange({
              material: event.target
                .value as ManufacturingMaterial,
            })
          }
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none"
        >
          {materials.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="bg-[#101318]"
            >
              {item.label}
            </option>
          ))}
        </select>
      </section>

      <section className="p-4">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wide text-white/30">
          Parameters
        </p>

        <div className="space-y-4">
          <NumberField
            label="Tolerance"
            value={settings.tolerance}
            unit="mm"
            step={0.01}
            onChange={(value) =>
              onChange({ tolerance: value })
            }
          />

          <NumberField
            label="Thickness"
            value={settings.thickness}
            unit="mm"
            step={0.1}
            onChange={(value) =>
              onChange({ thickness: value })
            }
          />

          <NumberField
            label="Resolution"
            value={settings.resolution}
            unit="mm"
            step={0.05}
            onChange={(value) =>
              onChange({ resolution: value })
            }
          />
        </div>
      </section>
    </aside>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  unit: string;
  step: number;
  onChange: (value: number) => void;
}

function NumberField({
  label,
  value,
  unit,
  step,
  onChange,
}: NumberFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-white/50">
        {label}
      </span>

      <div className="flex items-center rounded-md border border-white/10 bg-white/5">
        <input
          type="number"
          value={value}
          step={step}
          min={0}
          onChange={(event) =>
            onChange(Number(event.target.value))
          }
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs text-white outline-none"
        />

        <span className="pr-3 text-[11px] text-white/30">
          {unit}
        </span>
      </div>
    </label>
  );
}