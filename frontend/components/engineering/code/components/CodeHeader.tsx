"use client";

import type { CodeFile } from "../types/code";
import { getLanguageLabel } from "../utils/codeHelpers";

type Props = {
  file: CodeFile | null;
};

export default function CodeHeader({ file }: Props) {
  if (!file) return null;

  return (
    <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111419] px-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="truncate text-sm font-medium text-white">
          {file.name}
        </span>

        {file.modified && (
          <span className="text-xs text-white/30">
            ● Unsaved
          </span>
        )}
      </div>

      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/40">
        {getLanguageLabel(file.language)}
      </span>
    </div>
  );
}