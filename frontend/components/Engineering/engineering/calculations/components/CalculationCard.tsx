import type { Calculation } from "../types/calculations";

interface CalculationCardProps {
  calculation: Calculation;
  selected: boolean;
  onClick: () => void;
}

export default function CalculationCard({
  calculation,
  selected,
  onClick,
}: CalculationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border p-3 text-left transition ${
        selected
          ? "border-[color-mix(in_srgb,var(--aevra-text)_15%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]"
          : "border-transparent bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] hover:border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[var(--aevra-text)]">
            {calculation.name}
          </p>

          <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
            {calculation.category}
          </p>
        </div>

        <span
          className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
            calculation.status === "ready"
              ? "bg-emerald-400"
              : calculation.status === "warning"
                ? "bg-amber-400"
                : "bg-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
          }`}
        />
      </div>

      <p className="mt-2 line-clamp-2 text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]">
        {calculation.description}
      </p>
    </button>
  );
}