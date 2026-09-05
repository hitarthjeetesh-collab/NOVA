interface AssumptionsProps {
  assumptions: string[];
}

export default function Assumptions({
  assumptions,
}: AssumptionsProps) {
  return (
    <section className="rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          Assumptions
        </p>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {assumptions.map((assumption, index) => (
            <li
              key={`${assumption}-${index}`}
              className="flex gap-3 text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]" />
              <span>{assumption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}