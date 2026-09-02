interface CalculationContextProps {
  projectName: string;
}

export default function CalculationContext({
  projectName,
}: CalculationContextProps) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Engineering Context
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
        <div className="bg-[#101217] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/30">
            Project
          </p>
          <p className="mt-1 text-sm text-white/80">
            {projectName}
          </p>
        </div>

        <div className="bg-[#101217] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/30">
            Category
          </p>
          <p className="mt-1 text-sm text-white/80">
            Engineering
          </p>
        </div>

        <div className="bg-[#101217] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/30">
            Units
          </p>
          <p className="mt-1 text-sm text-white/80">
            SI / Metric
          </p>
        </div>

        <div className="bg-[#101217] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/30">
            Source
          </p>
          <p className="mt-1 text-sm text-white/80">
            Engineering Library
          </p>
        </div>
      </div>
    </section>
  );
}