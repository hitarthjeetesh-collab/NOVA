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
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
      <div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/45">
            {calculation.category}
          </span>

          <span className="text-xs text-emerald-400">
            Ready
          </span>
        </div>

        <h1 className="mt-3 text-xl font-semibold tracking-tight">
          {calculation.name}
        </h1>

        <p className="mt-1 max-w-2xl text-sm leading-6 text-white/45">
          {calculation.description}
        </p>
      </div>

      <button
        type="button"
        onClick={onDuplicate}
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/55 transition hover:bg-white/10 hover:text-white"
      >
        Duplicate
      </button>
    </div>
  );
}