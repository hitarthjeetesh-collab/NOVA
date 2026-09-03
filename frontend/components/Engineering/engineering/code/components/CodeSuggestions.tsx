"use client";

import { INITIAL_SUGGESTIONS } from "../constants";

export default function CodeSuggestions() {
  return (
    <aside className="w-64 shrink-0 border-l border-white/10 bg-[#0e1115]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
          AI Suggestions
        </div>
      </div>

      <div className="space-y-2 p-3">
        {INITIAL_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion.id}
            type="button"
            className="w-full rounded-lg border border-white/10 bg-white/[0.02] p-3 text-left transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="text-xs font-medium text-white/80">
              {suggestion.title}
            </div>

            <div className="mt-1 text-[11px] leading-4 text-white/35">
              {suggestion.description}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}