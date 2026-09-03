interface AssumptionsProps {
  assumptions: string[];
}

export default function Assumptions({
  assumptions,
}: AssumptionsProps) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Assumptions
        </p>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {assumptions.map((assumption, index) => (
            <li
              key={`${assumption}-${index}`}
              className="flex gap-3 text-xs leading-5 text-white/45"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
              <span>{assumption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}