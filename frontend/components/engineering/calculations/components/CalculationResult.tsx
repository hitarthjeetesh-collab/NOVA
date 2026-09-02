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
    <section className="rounded-xl border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Result
        </p>
      </div>

      <div className="p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-white/35">
              {result.label}
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold tracking-tight text-white">
                {formatNumber(result.value)}
              </span>

              <span className="text-sm text-white/40">
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
          <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-white/40">
            {result.explanation}
          </p>
        )}
      </div>
    </section>
  );
}