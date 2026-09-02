"use client";

import { useState } from "react";
import type { Calculation } from "./types/calculations";
import { useCalculations } from "./hooks/useCalculations";
import CalculationList from "./components/CalculationList";
import CalculationWorkspace from "./components/CalculationWorkspace";
import NewCalculationModal from "./components/modals/NewCalculationModal";
import ResizablePanel from "../ui/ResizablePanel";

interface CalculationsProps {
  projectName?: string;
}

export default function Calculations({
  projectName = "ORION",
}: CalculationsProps) {
  const {
    filteredCalculations,
    selectedCalculation,
    selectedId,
    search,
    category,
    setSearch,
    setCategory,
    setSelectedId,
    updateInput,
    duplicateCalculation,
    addCalculation,
  } = useCalculations();

  const [newCalculationOpen, setNewCalculationOpen] =
    useState(false);

  const [libraryWidth, setLibraryWidth] = useState(300);
  const [libraryCollapsed, setLibraryCollapsed] =
    useState(false);

  function handleCreate(calculation: Calculation) {
    addCalculation(calculation);
  }

  return (
    <>
      <div className="flex h-full min-h-0 bg-[#0b0d10]">
        <ResizablePanel
          direction="horizontal"
          size={libraryWidth}
          minSize={240}
          maxSize={500}
          onSizeChange={setLibraryWidth}
          collapsed={libraryCollapsed}
          onToggleCollapse={() =>
            setLibraryCollapsed((value) => !value)
          }
          className="border-r border-white/10"
        >
          <CalculationList
            calculations={filteredCalculations}
            selectedId={selectedId}
            search={search}
            category={category}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            onSelect={setSelectedId}
            onNewCalculation={() =>
              setNewCalculationOpen(true)
            }
          />
        </ResizablePanel>

        <CalculationWorkspace
          calculation={selectedCalculation}
          projectName={projectName}
          onDuplicate={duplicateCalculation}
          onInputChange={(inputId, value) =>
            selectedCalculation &&
            updateInput(
              selectedCalculation.id,
              inputId,
              value,
            )
          }
        />

        {libraryCollapsed && (
          <button
            type="button"
            onClick={() => setLibraryCollapsed(false)}
            title="Show calculation library"
            className="absolute left-2 top-2 z-30 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-[#111419] text-white/40 transition hover:bg-white/[0.08] hover:text-white"
          >
            ›
          </button>
        )}
      </div>

      <NewCalculationModal
        open={newCalculationOpen}
        onClose={() => setNewCalculationOpen(false)}
        onCreate={handleCreate}
      />
    </>
  );
}