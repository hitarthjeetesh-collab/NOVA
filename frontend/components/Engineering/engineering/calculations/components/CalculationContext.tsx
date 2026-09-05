interface CalculationContextProps {
  projectName: string;
}

export default function CalculationContext({
  projectName,
}: CalculationContextProps) {
  return (
    <section className="rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          Engineering Context
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] sm:grid-cols-4">
        <div className="bg-[var(--aevra-surface)] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Project
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
            {projectName}
          </p>
        </div>

        <div className="bg-[var(--aevra-surface)] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Category
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
            Engineering
          </p>
        </div>

        <div className="bg-[var(--aevra-surface)] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Units
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
            SI / Metric
          </p>
        </div>

        <div className="bg-[var(--aevra-surface)] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Source
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
            Engineering Library
          </p>
        </div>
      </div>
    </section>
  );
}