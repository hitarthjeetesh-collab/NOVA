"use client";

import type { Calculation } from "../types/calculations";

interface CalculationInputsProps {
  calculation: Calculation;
  onInputChange: (
    inputId: string,
    value: number,
  ) => void;
}

export default function CalculationInputs({
  calculation,
  onInputChange,
}: CalculationInputsProps) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Inputs
        </p>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-2">
        {calculation.inputs.map((input) => (
          <div key={input.id}>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor={`input-${input.id}`}
                className="text-sm text-white/75"
              >
                {input.name}
              </label>

              <span className="font-mono text-xs text-white/30">
                {input.symbol}
              </span>
            </div>

            <div className="flex h-10 overflow-hidden rounded-lg border border-white/10 bg-black/20 focus-within:border-white/20">
              <input
                id={`input-${input.id}`}
                type="number"
                value={input.value}
                onChange={(event) =>
                  onInputChange(
                    input.id,
                    Number(event.target.value),
                  )
                }
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none"
              />

              <div className="flex items-center border-l border-white/10 px-3 text-xs text-white/35">
                {input.unit}
              </div>
            </div>

            {input.description && (
              <p className="mt-1.5 text-[11px] text-white/30">
                {input.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}