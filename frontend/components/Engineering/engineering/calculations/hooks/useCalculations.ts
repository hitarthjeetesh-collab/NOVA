"use client";

import { useMemo, useState } from "react";

import { INITIAL_CALCULATIONS } from "../constants";

import type {
  Calculation,
  CalculationCategory,
} from "../types/calculations";

import {
  cloneCalculation,
  validateCalculation,
} from "../utils/calculationHelpers";

export function useCalculations() {
  const [calculations, setCalculations] =
    useState<Calculation[]>(INITIAL_CALCULATIONS);

  const [selectedId, setSelectedId] = useState(
    INITIAL_CALCULATIONS[0]?.id ?? "",
  );

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<
    "All" | CalculationCategory
  >("All");

  const selectedCalculation = calculations.find(
    (calculation) => calculation.id === selectedId,
  );

  const filteredCalculations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return calculations.filter((calculation) => {
      const matchesCategory =
        category === "All" || calculation.category === category;

      const matchesSearch =
        !query ||
        calculation.name.toLowerCase().includes(query) ||
        calculation.description.toLowerCase().includes(query) ||
        calculation.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [calculations, search, category]);

  function updateInput(
    calculationId: string,
    inputId: string,
    value: number,
  ) {
    setCalculations((current) =>
      current.map((calculation) => {
        if (calculation.id !== calculationId) {
          return calculation;
        }

        const inputs = calculation.inputs.map((input) =>
          input.id === inputId
            ? { ...input, value }
            : input,
        );

        return {
          ...calculation,
          inputs,
          validation: validateCalculation({
            ...calculation,
            inputs,
          }),
        };
      }),
    );
  }

  function duplicateCalculation() {
    if (!selectedCalculation) {
      return;
    }

    const duplicate = cloneCalculation(selectedCalculation);

    setCalculations((current) => [...current, duplicate]);
    setSelectedId(duplicate.id);
  }

  function addCalculation(calculation: Calculation) {
    setCalculations((current) => [...current, calculation]);
    setSelectedId(calculation.id);
  }

  function removeCalculation(id: string) {
    setCalculations((current) => {
      const remaining = current.filter(
        (calculation) => calculation.id !== id,
      );

      if (id === selectedId) {
        setSelectedId(remaining[0]?.id ?? "");
      }

      return remaining;
    });
  }

  return {
    calculations,
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
    removeCalculation,
  };
}