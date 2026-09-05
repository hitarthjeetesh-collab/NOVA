"use client";

import { INITIAL_SUGGESTIONS } from "../constants";

export default function CodeSuggestions() {
  return (
    <aside className="w-64 shrink-0 border-l border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          AI Suggestions
        </div>
      </div>

      <div className="space-y-2 p-3">
        {INITIAL_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion.id}
            type="button"
            className="w-full rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)] p-3 text-left transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]"
          >
            <div className="text-xs font-medium text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]">
              {suggestion.title}
            </div>

            <div className="mt-1 text-[11px] leading-4 text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
              {suggestion.description}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}