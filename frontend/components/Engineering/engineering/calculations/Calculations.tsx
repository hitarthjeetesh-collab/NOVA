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

  const [newCalculationOpen, setNewCalculationOpen] = useState(false);
  const [libraryWidth, setLibraryWidth] = useState(300);
  const [libraryCollapsed, setLibraryCollapsed] = useState(false);

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
          onToggleCollapse={() => setLibraryCollapsed(true)}
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
            onNewCalculation={() => setNewCalculationOpen(true)}
          />
        </ResizablePanel>
      ) : (
        <div className="flex w-9 shrink-0 items-start justify-center border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] pt-3">
          <button
            type="button"
            onClick={() => setLibraryCollapsed(false)}
            title="Show Calculation Library"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] hover:text-[var(--aevra-text)]"
          >
            ›
          </button>
        </div>
      )}

      {/* WORKSPACE */}
      <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
        <CalculationWorkspace
          calculation={selectedCalculation}
          projectName={projectName}
          onDuplicate={duplicateCalculation}
          onInputChange={(inputId, value) =>
            selectedCalculation &&
            updateInput(selectedCalculation.id, inputId, value)
          }
        />
      </main>

      <NewCalculationModal
        open={newCalculationOpen}
        onClose={() => setNewCalculationOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}