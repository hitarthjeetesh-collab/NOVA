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

  if (!open) return null;

  const createFile = () => {
    if (!name.trim()) return;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#15191e] shadow-2xl">
        <div className="border-b border-white/10 px-5 py-4">
          <h2 className="text-sm font-semibold text-white">
            New File
          </h2>
          <p className="mt-1 text-xs text-white/35">
            Create a new engineering code file.
          </p>
        </div>

        <div className="space-y-4 p-5">
          <div>
            <label className="mb-2 block text-xs text-white/45">
              File name
            </label>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="controller"
              autoFocus
              className="w-full rounded-lg border border-white/10 bg-[#0c0f13] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-white/45">
              Language
            </label>

            <select
              value={language}
              onChange={(event) =>
                setLanguage(
                  event.target.value as CodeLanguage
                )
              }
              className="w-full rounded-lg border border-white/10 bg-[#0c0f13] px-3 py-2.5 text-sm text-white outline-none"
            >
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="typescript">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="rust">Rust</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-white/10 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs text-white/45 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={createFile}
            className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-white/90"
          >
            Create File
          </button>
        </div>
      </div>
    </div>
  );
}