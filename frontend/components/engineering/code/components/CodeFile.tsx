"use client";

import type { CodeFile as CodeFileType } from "../types/code";
import { getLanguageLabel } from "../utils/codeHelpers";

type Props = {
  file: CodeFileType;
  active: boolean;
  onClick: () => void;
};

export default function CodeFile({
  file,
  active,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition ${
        active
          ? "bg-white/[0.08] text-white"
          : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
      }`}
    >
      <span className="font-mono text-[10px] uppercase text-white/30">
        {getLanguageLabel(file.language).slice(0, 2)}
      </span>

      <span className="min-w-0 flex-1 truncate">
        {file.name}
      </span>

      {file.modified && (
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
      )}
    </button>
  );
}