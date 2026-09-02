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

  const [libraryWidth, setLibraryWidth] =
    useState(300);

  const [libraryCollapsed, setLibraryCollapsed] =
    useState(false);

  function handleCreate(calculation: Calculation) {
    addCalculation(calculation);
  }

  return (
    <div className="relative flex h-full min-h-0 overflow-hidden">
      {/* CALCULATION LIBRARY */}
      {!libraryCollapsed ? (
        <ResizablePanel
          direction="horizontal"
          size={libraryWidth}
          minSize={220}
          maxSize={500}
          onSizeChange={setLibraryWidth}
          collapsed={false}
          onToggleCollapse={() =>
            setLibraryCollapsed(true)
          }
          className="h-full"
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
      ) : (
        <div className="flex w-9 shrink-0 items-start justify-center border-r border-white/10 bg-[#0e1115] pt-3">
          <button
            type="button"
            onClick={() =>
              setLibraryCollapsed(false)
            }
            title="Show Calculation Library"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-xs text-white/40 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            ›
          </button>
        </div>
      )}

      {/* WORKSPACE */}
      <main className="min-w-0 flex-1 overflow-hidden">
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
      </main>

      <NewCalculationModal
        open={newCalculationOpen}
        onClose={() =>
          setNewCalculationOpen(false)
        }
        onCreate={handleCreate}
      />
    </div>
  );
}