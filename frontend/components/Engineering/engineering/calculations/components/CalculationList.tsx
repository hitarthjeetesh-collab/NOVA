"use client";

import { CALCULATION_CATEGORIES } from "../constants";

import type {
  Calculation,
  CalculationCategory,
} from "../types/calculations";

import CalculationCard from "./CalculationCard";

interface CalculationListProps {
  calculations: Calculation[];
  selectedId: string;
  search: string;
  category: "All" | CalculationCategory;
  onSearchChange: (value: string) => void;
  onCategoryChange: (
    value: "All" | CalculationCategory,
  ) => void;
  onSelect: (id: string) => void;
  onNewCalculation: () => void;
}

export default function CalculationList({
  calculations,
  selectedId,
  search,
  category,
  onSearchChange,
  onCategoryChange,
  onSelect,
  onNewCalculation,
}: CalculationListProps) {
  return (
    <aside className="flex h-full w-[300px] shrink-0 flex-col border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--aevra-text)]">
              Calculation Library
            </p>

            <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
              Engineering calculations
            </p>
          </div>

          <button
            type="button"
            onClick={onNewCalculation}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] text-lg text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] hover:text-[var(--aevra-text)]"
            aria-label="New calculation"
          >
            +
          </button>
        </div>

        <div className="mt-4">
          <input
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search calculations..."
            className="h-9 w-full rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-3 text-xs text-[var(--aevra-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)] focus:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]"
          />
        </div>

        <div className="mt-3 flex gap-1 overflow-x-auto pb-1">
          {CALCULATION_CATEGORIES.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() =>
                  onCategoryChange(
                    item as "All" | CalculationCategory,
                  )
                }
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-[11px] transition ${
                  active
                    ? "bg-[var(--aevra-text)] text-[var(--aevra-background)]"
                    : "bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <div className="space-y-2">
          {calculations.map((calculation) => (
            <CalculationCard
              key={calculation.id}
              calculation={calculation}
              selected={calculation.id === selectedId}
              onClick={() => onSelect(calculation.id)}
            />
          ))}
        </div>

        {calculations.length === 0 && (
          <div className="px-3 py-10 text-center">
            <p className="text-sm text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
              No calculations found
            </p>

            <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}