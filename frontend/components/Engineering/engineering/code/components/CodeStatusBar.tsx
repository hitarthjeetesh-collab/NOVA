import type { CodeFile } from "../types/code";

import { getLanguageLabel } from "../utils/codeHelpers";

type Props = {
  file: CodeFile | null;
};

export default function CodeStatusBar({ file }: Props) {
  return (
    <div className="flex h-7 shrink-0 items-center justify-between border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] px-3 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
      <div className="flex items-center gap-4">
        <span>
          {file ? getLanguageLabel(file.language) : "No file"}
        </span>
        <span>UTF-8</span>
        <span>Spaces: 4</span>
      </div>

      <span>Ready</span>
    </div>
  );
}