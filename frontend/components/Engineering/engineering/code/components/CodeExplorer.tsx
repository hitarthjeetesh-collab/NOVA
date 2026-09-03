"use client";

import type { CodeFile as CodeFileType } from "../types/code";
import CodeFile from "./CodeFile";

type Props = {
  files: CodeFileType[];
  activeFileId: string;
  onSelect: (id: string) => void;
  onNewFile: () => void;
};

export default function CodeExplorer({
  files,
  activeFileId,
  onSelect,
  onNewFile,
}: Props) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-white/10 bg-[#0e1115]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
          Files
        </span>

        <button
          type="button"
          onClick={onNewFile}
          className="rounded px-2 py-1 text-xs text-white/40 transition hover:bg-white/[0.06] hover:text-white"
        >
          +
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="mb-2 px-2 py-1 text-[10px] uppercase tracking-wider text-white/25">
          src
        </div>

        {files
          .filter((file) => file.path.startsWith("src/"))
          .map((file) => (
            <CodeFile
              key={file.id}
              file={file}
              active={file.id === activeFileId}
              onClick={() => onSelect(file.id)}
            />
          ))}

        <div className="mb-2 mt-5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/25">
          tests
        </div>

        {files
          .filter((file) => file.path.startsWith("tests/"))
          .map((file) => (
            <CodeFile
              key={file.id}
              file={file}
              active={file.id === activeFileId}
              onClick={() => onSelect(file.id)}
            />
          ))}
      </div>

      <button
        type="button"
        onClick={onNewFile}
        className="m-3 rounded-lg border border-dashed border-white/10 px-3 py-2 text-xs text-white/35 transition hover:border-white/20 hover:text-white/60"
      >
        + New File
      </button>
    </aside>
  );
}