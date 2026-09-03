import type { CodeFile } from "../types/code";
import { getLanguageLabel } from "../utils/codeHelpers";

type Props = {
  file: CodeFile | null;
};

export default function CodeStatusBar({ file }: Props) {
  return (
    <div className="flex h-7 shrink-0 items-center justify-between border-t border-white/10 bg-[#111419] px-3 text-[10px] text-white/30">
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