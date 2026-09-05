"use client";

export default function CodeToolbar() {
  const buttons = [
    "Run",
    "Format",
    "Explain",
    "Fix",
    "Generate",
  ];

  return (
    <div className="flex items-center gap-2 border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] px-4 py-2">
      {buttons.map((button, index) => (
        <button
          key={button}
          type="button"
          className={`rounded-md border px-3 py-1.5 text-xs transition ${
            index === 0
              ? "border-[color-mix(in_srgb,var(--aevra-text)_15%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] text-[var(--aevra-text)]"
              : "border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-transparent text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
}