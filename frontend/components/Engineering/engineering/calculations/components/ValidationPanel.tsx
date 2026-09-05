import type { ValidationItem } from "../types/calculations";

interface ValidationPanelProps {
  validation: ValidationItem[];
}

export default function ValidationPanel({
  validation,
}: ValidationPanelProps) {
  const errors = validation.filter(
    (item) => item.status === "error",
  ).length;

  const warnings = validation.filter(
    (item) => item.status === "warning",
  ).length;

  return (
    <section className="rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)]">
      <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          Validation
        </p>

        <div className="flex gap-2 text-[10px]">
          {errors > 0 && (
            <span className="text-red-400">
              {errors} error{errors !== 1 ? "s" : ""}
            </span>
          )}

          {warnings > 0 && (
            <span className="text-amber-400">
              {warnings} warning{warnings !== 1 ? "s" : ""}
            </span>
          )}

          {errors === 0 && warnings === 0 && (
            <span className="text-emerald-400">
              All checks passed
            </span>
          )}
        </div>
      </div>

      <div className="divide-y divide-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]">
        {validation.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-start gap-3 px-4 py-3"
          >
            <span
              className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] ${
                item.status === "pass"
                  ? "bg-emerald-400/10 text-emerald-400"
                  : item.status === "warning"
                    ? "bg-amber-400/10 text-amber-400"
                    : "bg-red-400/10 text-red-400"
              }`}
            >
              {item.status === "pass"
                ? "✓"
                : item.status === "warning"
                  ? "!"
                  : "×"}
            </span>

            <div>
              <p className="text-xs font-medium text-[color-mix(in_srgb,var(--aevra-text)_65%,transparent)]">
                {item.label}
              </p>

              <p className="mt-0.5 text-[11px] leading-5 text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}