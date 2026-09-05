export default function CodeContext() {
  return (
    <div className="border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] px-4 py-3">
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
        Engineering Context
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <div className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
            Component
          </div>
          <div className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
            Autonomous Rover
          </div>
        </div>

        <div>
          <div className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
            Subsystem
          </div>
          <div className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
            Drive System
          </div>
        </div>

        <div>
          <div className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
            Language
          </div>
          <div className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]">
            Python
          </div>
        </div>
      </div>
    </div>
  );
}