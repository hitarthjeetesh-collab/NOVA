import type { Calculation } from "../types/calculations";

interface CalculationHeaderProps {
  calculation: Calculation;
  onDuplicate: () => void;
}

export default function CalculationHeader({
  calculation,
  onDuplicate,
}: CalculationHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] pb-5">
      <div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]">
            {calculation.category}
          </span>

          <span className="text-xs text-emerald-400">
            Ready
          </span>
        </div>

        <h1 className="mt-3 text-xl font-semibold tracking-tight">
          {calculation.name}
        </h1>

        <p className="mt-1 max-w-2xl text-sm leading-6 text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]">
          {calculation.description}
        </p>
      </div>

      <button
        type="button"
        onClick={onDuplicate}
        className="rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] px-3 py-2 text-xs text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] hover:text-[var(--aevra-text)]"
      >
        Duplicate
      </button>
    </div>
  );
}