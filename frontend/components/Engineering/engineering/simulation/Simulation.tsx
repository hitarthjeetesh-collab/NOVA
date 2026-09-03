"use client";

import SimulationResults from "./components/SimulationResults";
import SimulationSetup from "./components/SimulationSetup";
import SimulationStatusBar from "./components/SimulationStatusBar";
import SimulationToolbar from "./components/SimulationToolbar";
import SimulationViewport from "./components/SimulationViewport";

import { useSimulation } from "./hooks/useSimulation";

export default function Simulation() {
  const simulation = useSimulation();

  const {
    state,
    setAnalysisType,
    setMaterial,
    setMesh,
    addLoad,
    updateLoad,
    removeLoad,
    addConstraint,
    updateConstraint,
    removeConstraint,
    run,
    stop,
    reset,
  } = simulation;

  const handleAddLoad = () => {
    addLoad({
      type: "force",
      value: 500,
      unit: "N",
      direction: "z",
    });
  };

  const handleAddConstraint = () => {
    addConstraint({
      type: "fixed",
      location: "Base",
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#090b0e] text-white">
      {/* Toolbar */}
      <SimulationToolbar
        analysisType={state.analysisType}
        status={state.status}
        onRun={run}
        onStop={stop}
        onReset={reset}
      />

      {/* Main simulation workspace */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Setup */}
        <SimulationSetup
          analysisType={state.analysisType}
          material={state.material}
          mesh={state.mesh}
          loads={state.loads}
          constraints={state.constraints}
          onAnalysisTypeChange={setAnalysisType}
          onMaterialChange={setMaterial}
          onMeshChange={setMesh}
          onAddLoad={handleAddLoad}
          onUpdateLoad={updateLoad}
          onRemoveLoad={removeLoad}
          onAddConstraint={handleAddConstraint}
          onUpdateConstraint={updateConstraint}
          onRemoveConstraint={removeConstraint}
        />

        {/* Viewport */}
        <SimulationViewport
          status={state.status}
          progress={state.progress}
          loads={state.loads}
          constraints={state.constraints}
        />

        {/* Results */}
        <SimulationResults
          status={state.status}
          progress={state.progress}
          results={state.results}
          error={state.error}
        />
      </div>

      {/* Status bar */}
      <SimulationStatusBar
        status={state.status}
        mesh={state.mesh}
        elementCount={state.results?.elementCount}
        progress={state.progress}
      />
    </div>
  );
}