"use client";

import OptimizationResults from "./components/OptimizationResults";
import OptimizationSetup from "./components/OptimizationSetup";
import OptimizationToolbar from "./components/OptimizationToolbar";
import OptimizationViewport from "./components/OptimizationViewport";

import { useOptimization } from "./hooks/useOptimization";

export default function Optimization() {
  const optimization = useOptimization();

  const {
    state,
    setMethod,
    setSettings,
    addObjective,
    updateObjective,
    removeObjective,
    addConstraint,
    updateConstraint,
    removeConstraint,
    addVariable,
    updateVariable,
    removeVariable,
    run,
    stop,
    reset,
  } = optimization;

  const handleAddObjective = () => {
    addObjective({
      type: "minimize-mass",
      weight: 1,
    });
  };

  const handleAddConstraint = () => {
    addConstraint({
      type: "maximum-stress",
      value: 150,
      unit: "MPa",
    });
  };

  const handleAddVariable = () => {
    addVariable({
      name: "New Variable",
      minimum: 1,
      maximum: 10,
      unit: "mm",
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      <OptimizationToolbar
        method={state.method}
        status={state.status}
        onRun={run}
        onStop={stop}
        onReset={reset}
      />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <OptimizationSetup
          method={state.method}
          settings={state.settings}
          objectives={state.objectives}
          constraints={state.constraints}
          variables={state.variables}
          onMethodChange={setMethod}
          onSettingsChange={setSettings}
          onAddObjective={handleAddObjective}
          onUpdateObjective={updateObjective}
          onRemoveObjective={removeObjective}
          onAddConstraint={handleAddConstraint}
          onUpdateConstraint={updateConstraint}
          onRemoveConstraint={removeConstraint}
          onAddVariable={handleAddVariable}
          onUpdateVariable={updateVariable}
          onRemoveVariable={removeVariable}
        />

        <OptimizationViewport
          status={state.status}
          progress={state.progress}
          method={
            state.method === "topology"
              ? "Topology"
              : state.method === "shape"
                ? "Shape"
                : "Parameter"
          }
          variables={state.variables}
        />

        <OptimizationResults
          status={state.status}
          progress={state.progress}
          results={state.results}
          error={state.error}
        />
      </div>

      <div className="flex h-8 shrink-0 items-center border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-3 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
        <div className="flex items-center gap-4">
          <span>
            Variables: {state.variables.length}
          </span>

          <span>
            Objectives: {state.objectives.length}
          </span>

          <span>
            Constraints: {state.constraints.length}
          </span>

          <span className="hidden sm:inline">
            Max iterations: {state.settings.maxIterations}
          </span>
        </div>

        <div className="ml-auto">
          <span>
            {state.status === "running"
              ? `Optimizing ${state.progress}%`
              : state.status === "completed"
                ? "Optimizer: Complete"
                : state.status === "stopped"
                  ? "Optimizer: Stopped"
                  : state.status === "error"
                    ? "Optimizer: Error"
                    : "Optimizer: Ready"}
          </span>
        </div>
      </div>
    </div>
  );
}