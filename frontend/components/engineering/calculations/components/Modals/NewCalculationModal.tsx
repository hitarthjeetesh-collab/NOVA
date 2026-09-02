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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111318] shadow-2xl">
        <div className="border-b border-white/10 px-5 py-4">
          <h2 className="text-base font-semibold">
            New Calculation
          </h2>
          <p className="mt-1 text-xs text-white/35">
            Choose a calculation template to start with.
          </p>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          <div className="space-y-2">
            {templates.map((template) => {
              const active =
                selected.name === template.name;

              return (
                <button
                  key={template.name}
                  type="button"
                  onClick={() => setSelected(template)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-white/20 bg-white/10"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {template.name}
                    </span>

                    <span className="text-[10px] text-white/30">
                      {template.category}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-xs text-white/35">
                    {template.equation}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-white/10 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs text-white/45 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={createCalculation}
            className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-white/90"
          >
            Create Calculation
          </button>
        </div>
      </div>
    </div>
  );
}