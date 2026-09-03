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
    <aside className="flex h-full w-[300px] shrink-0 flex-col border-r border-white/10 bg-[#0d0f13]">
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Calculation Library
            </p>
            <p className="mt-1 text-xs text-white/35">
              Engineering calculations
            </p>
          </div>

          <button
            type="button"
            onClick={onNewCalculation}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg text-white/70 transition hover:bg-white/10 hover:text-white"
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
            className="h-9 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-white/20"
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
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70"
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
            <p className="text-sm text-white/40">
              No calculations found
            </p>
            <p className="mt-1 text-xs text-white/25">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}