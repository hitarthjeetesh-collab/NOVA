"use client";

import { useState } from "react";
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

function CollapsibleSection({
  title,
  children,
  open,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.025] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between border-b border-white/10 px-4 py-3 text-left transition hover:bg-white/[0.025]"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          {title}
        </p>

        <span className="text-xs text-white/30">
          {open ? "⌄" : "›"}
        </span>
      </button>

      {open && children}
    </section>
  );
}

export default function CalculationWorkspace({
  calculation,
  projectName,
  onDuplicate,
  onInputChange,
}: CalculationWorkspaceProps) {
  const [openSections, setOpenSections] = useState({
    context: true,
    inputs: true,
    equation: true,
    result: true,
    assumptions: true,
    validation: true,
  });

  const toggle = (
    section: keyof typeof openSections,
  ) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  if (!calculation) {
    return (
      <div className="flex h-full min-w-0 flex-1 items-center justify-center">
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
    <main className="min-w-0 flex-1 overflow-y-auto bg-[#0b0d10]">
      <div className="mx-auto w-full max-w-5xl p-6 lg:p-8">
        <CalculationHeader
          calculation={calculation}
          onDuplicate={onDuplicate}
        />

        <div className="mt-6 space-y-4">
          <CollapsibleSection
            title="Engineering Context"
            open={openSections.context}
            onToggle={() => toggle("context")}
          >
            <CalculationContext
              projectName={projectName}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Inputs"
            open={openSections.inputs}
            onToggle={() => toggle("inputs")}
          >
            <CalculationInputs
              calculation={calculation}
              onInputChange={onInputChange}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Equation"
            open={openSections.equation}
            onToggle={() => toggle("equation")}
          >
            <EquationDisplay
              equation={calculation.equation}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Result"
            open={openSections.result}
            onToggle={() => toggle("result")}
          >
            <CalculationResult
              calculation={calculation}
            />
          </CollapsibleSection>

          <div className="grid gap-4 lg:grid-cols-2">
            <CollapsibleSection
              title="Assumptions"
              open={openSections.assumptions}
              onToggle={() => toggle("assumptions")}
            >
              <Assumptions
                assumptions={calculation.assumptions}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Validation"
              open={openSections.validation}
              onToggle={() => toggle("validation")}
            >
              <ValidationPanel
                validation={calculation.validation}
              />
            </CollapsibleSection>
          </div>
        </div>
      </div>
    </main>
  );
}