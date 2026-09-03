"use client";

import type { Calculation } from "../types/calculations";
import CalculationHeader from "./CalculationHeader";
import CalculationContext from "./CalculationContext";
import CalculationInputs from "./CalculationInputs";
import EquationDisplay from "./EquationDisplay";
import CalculationResult from "./CalculationResult";
import Assumptions from "./Assumptions";
import ValidationPanel from "./ValidationPanel";

interface CalculationWorkspaceProps {
  calculation?: Calculation;
  projectName: string;
  onDuplicate: () => void;
  onInputChange: (
    inputId: string,
    value: number,
  ) => void;
}

export default function CalculationWorkspace({
  calculation,
  projectName,
  onDuplicate,
  onInputChange,
}: CalculationWorkspaceProps) {
  if (!calculation) {
    return (
      <div className="flex h-full min-h-0 flex-1 items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-white/40">
            No calculation selected
          </p>

          <p className="mt-1 text-xs text-white/25">
            Select a calculation from the library.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="h-full min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-[#0b0d10]">
      <div className="mx-auto w-full max-w-5xl p-6 lg:p-8">
        <CalculationHeader
          calculation={calculation}
          onDuplicate={onDuplicate}
        />

        <div className="mt-6 space-y-5">
          <CalculationContext
            projectName={projectName}
          />

          <CalculationInputs
            calculation={calculation}
            onInputChange={onInputChange}
          />

          <EquationDisplay
            equation={calculation.equation}
          />

          <CalculationResult
            calculation={calculation}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <Assumptions
              assumptions={calculation.assumptions}
            />

            <ValidationPanel
              validation={calculation.validation}
            />
          </div>
        </div>
      </div>
    </main>
  );
}