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
          ? "bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-[var(--aevra-text)]"
          : "text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_80%,transparent)]"
      }`}
    >
      <span className="font-mono text-[10px] uppercase text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
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