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
          ? "border-white/15 bg-white/10"
          : "border-transparent bg-white/[0.025] hover:border-white/10 hover:bg-white/[0.05]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">
            {calculation.name}
          </p>

          <p className="mt-1 text-xs text-white/40">
            {calculation.category}
          </p>
        </div>

        <span
          className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
            calculation.status === "ready"
              ? "bg-emerald-400"
              : calculation.status === "warning"
                ? "bg-amber-400"
                : "bg-white/30"
          }`}
        />
      </div>

      <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/45">
        {calculation.description}
      </p>
    </button>
  );
}