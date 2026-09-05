import { formatNumber } from "../utils/calculationHelpers";

import type { Calculation } from "../types/calculations";

interface CalculationResultProps {
  calculation: Calculation;
}

export default function CalculationResult({
  calculation,
}: CalculationResultProps) {
  const { result } = calculation;

  return (
    <section className="rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          Result
        </p>
      </div>

      <div className="p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
              {result.label}
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold tracking-tight text-[var(--aevra-text)]">
                {formatNumber(result.value)}
              </span>

              <span className="text-sm text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
                {result.unit}
              </span>
            </div>
          </div>

          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
              result.status === "valid"
                ? "bg-emerald-400/10 text-emerald-400"
                : result.status === "warning"
                  ? "bg-amber-400/10 text-amber-400"
                  : "bg-red-400/10 text-red-400"
            }`}
          >
            {result.status}
          </span>
        </div>

        {result.explanation && (
          <p className="mt-4 border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] pt-4 text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
            {result.explanation}
          </p>
        )}
      </div>
    </section>
  );
}