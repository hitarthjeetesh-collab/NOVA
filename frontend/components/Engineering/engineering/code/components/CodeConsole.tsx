export default function CodeConsole() {
  return (
    <div className="h-36 shrink-0 border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_90%,black)]">
      <div className="flex items-center border-b border-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] px-4 py-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
          Console
        </span>
      </div>

      <div className="px-4 py-3 font-mono text-xs text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
        Output will appear here.
      </div>
    </div>
  );
}