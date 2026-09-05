"use client";

import type { CodeFile } from "../types/code";
import { getLanguageLabel } from "../utils/codeHelpers";

type Props = {
  file: CodeFile | null;
};

export default function CodeHeader({ file }: Props) {
  if (!file) {
    return null;
  }

  return (
    <div className="flex h-12 items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] px-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="truncate text-sm font-medium text-[var(--aevra-text)]">
          {file.name}
        </span>

        {file.modified && (
          <span className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            ● Unsaved
          </span>
        )}
      </div>

      <span className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-2.5 py-1 text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
        {getLanguageLabel(file.language)}
      </span>
    </div>
  );
}