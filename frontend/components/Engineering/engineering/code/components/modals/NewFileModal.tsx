"use client";

import { useState } from "react";

import type { CodeFile, CodeLanguage } from "../../types/code";

import { getFileExtension } from "../../utils/codeHelpers";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (file: CodeFile) => void;
};

export default function NewFileModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState("");
  const [language, setLanguage] =
    useState<CodeLanguage>("python");

  if (!open) {
    return null;
  }

  const createFile = () => {
    if (!name.trim()) {
      return;
    }

    const extension = getFileExtension(language);
    const fileName = name.includes(".")
      ? name
      : `${name}.${extension}`;

    onCreate({
      id: `${Date.now()}-${fileName}`,
      name: fileName,
      path: `src/${fileName}`,
      language,
      content: "",
      modified: false,
    });

    setName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--aevra-background)_60%,transparent)] p-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] shadow-2xl">
        <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-4">
          <h2 className="text-sm font-semibold text-[var(--aevra-text)]">
            New File
          </h2>

          <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
            Create a new engineering code file.
          </p>
        </div>

        <div className="space-y-4 p-5">
          <div>
            <label className="mb-2 block text-xs text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]">
              File name
            </label>

            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="controller"
              autoFocus
              className="w-full rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] focus:border-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)]">
              Language
            </label>

            <select
              value={language}
              onChange={(event) =>
                setLanguage(
                  event.target.value as CodeLanguage,
                )
              }
              className="w-full rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none"
            >
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="typescript">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="rust">Rust</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] hover:text-[var(--aevra-text)]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={createFile}
            className="rounded-lg bg-[var(--aevra-text)] px-4 py-2 text-xs font-medium text-[var(--aevra-background)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]"
          >
            Create File
          </button>
        </div>
      </div>
    </div>
  );
}