"use client";

import { useState } from "react";

import type {
  Calculation,
  CalculationCategory,
} from "../../types/calculations";

interface NewCalculationModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (calculation: Calculation) => void;
}

const templates: {
  name: string;
  category: CalculationCategory;
  equation: string;
}[] = [
  {
    name: "Custom Mechanical Calculation",
    category: "Mechanical",
    equation: "Define equation",
  },
  {
    name: "Custom Electrical Calculation",
    category: "Electrical",
    equation: "Define equation",
  },
  {
    name: "Custom Thermal Calculation",
    category: "Thermal",
    equation: "Define equation",
  },
  {
    name: "Custom Structural Calculation",
    category: "Structural",
    equation: "Define equation",
  },
  {
    name: "Custom Power Calculation",
    category: "Power",
    equation: "Define equation",
  },
  {
    name: "Custom Geometry Calculation",
    category: "Geometry",
    equation: "Define equation",
  },
];

export default function NewCalculationModal({
  open,
  onClose,
  onCreate,
}: NewCalculationModalProps) {
  const [selected, setSelected] = useState(templates[0]);

  if (!open) {
    return null;
  }

  function createCalculation() {
    const calculation: Calculation = {
      id: `custom-${Date.now()}`,
      name: selected.name,
      category: selected.category,
      description:
        "Custom engineering calculation. Define inputs and equation for this calculation.",
      equation: selected.equation,
      inputs: [
        {
          id: "input-1",
          name: "Input 1",
          symbol: "x",
          value: 0,
          unit: "unit",
        },
        {
          id: "input-2",
          name: "Input 2",
          symbol: "y",
          value: 0,
          unit: "unit",
        },
      ],
      result: {
        value: 0,
        unit: "unit",
        label: "Result",
        status: "warning",
        explanation:
          "This custom calculation has not yet been connected to a deterministic calculation tool.",
      },
      assumptions: [
        "Inputs have not yet been formally defined.",
        "The calculation equation is currently a placeholder.",
      ],
      validation: [
        {
          label: "Definition",
          status: "warning",
          message:
            "This custom calculation requires engineering definition before use.",
        },
      ],
      status: "draft",
    };

    onCreate(calculation);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--aevra-background)_70%,transparent)] p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] shadow-2xl">
        <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-4">
          <h2 className="text-base font-semibold">
            New Calculation
          </h2>

          <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
            Choose a calculation template to start with.
          </p>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          <div className="space-y-2">
            {templates.map((template) => {
              const active = selected.name === template.name;

              return (
                <button
                  key={template.name}
                  type="button"
                  onClick={() => setSelected(template)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]"
                      : "border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {template.name}
                    </span>

                    <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
                      {template.category}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
                    {template.equation}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] hover:text-[var(--aevra-text)]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={createCalculation}
            className="rounded-lg bg-[var(--aevra-text)] px-4 py-2 text-xs font-medium text-[var(--aevra-background)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]"
          >
            Create Calculation
          </button>
        </div>
      </div>
    </div>
  );
}