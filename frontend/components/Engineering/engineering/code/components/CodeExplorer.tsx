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
    <aside className="flex w-56 shrink-0 flex-col border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)]">
      <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          Files
        </span>

        <button
          type="button"
          onClick={onNewFile}
          className="rounded px-2 py-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_6%,transparent)] hover:text-[var(--aevra-text)]"
        >
          +
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="mb-2 px-2 py-1 text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
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

        <div className="mb-2 mt-5 px-2 py-1 text-[10px] uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
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
        className="m-3 rounded-lg border border-dashed border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-3 py-2 text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)] transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)]"
      >
        + New File
      </button>
    </aside>
  );
}