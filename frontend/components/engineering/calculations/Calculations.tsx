"use client";

import { useState } from "react";
import type { Calculation } from "./types/calculations";
import { useCalculations } from "./hooks/useCalculations";
import CalculationList from "./components/CalculationList";
import CalculationWorkspace from "./components/CalculationWorkspace";
import NewCalculationModal from "./components/modals/NewCalculationModal";

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

  function handleCreate(calculation: Calculation) {
    addCalculation(calculation);
  }

  return (
    <>
      <div className="flex h-full min-h-0">
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
      </div>

      <NewCalculationModal
        open={newCalculationOpen}
        onClose={() => setNewCalculationOpen(false)}
        onCreate={handleCreate}
      />
    </>
  );
}