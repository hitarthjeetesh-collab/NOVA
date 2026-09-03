"use client";

import { useMemo, useState } from "react";
import { INITIAL_CODE_FILES } from "../constants";
import type { CodeFile } from "../types/code";

export function useCode() {
  const [files, setFiles] = useState<CodeFile[]>(INITIAL_CODE_FILES);
  const [activeFileId, setActiveFileId] = useState(
    INITIAL_CODE_FILES[0].id
  );

  const activeFile = useMemo(
    () => files.find((file) => file.id === activeFileId) ?? null,
    [files, activeFileId]
  );

  const updateContent = (content: string) => {
    setFiles((current) =>
      current.map((file) =>
        file.id === activeFileId
          ? {
              ...file,
              content,
              modified: true,
            }
          : file
      )
    );
  };

  const addFile = (file: CodeFile) => {
    setFiles((current) => [...current, file]);
    setActiveFileId(file.id);
  };

  const deleteFile = (id: string) => {
    setFiles((current) => {
      const remaining = current.filter((file) => file.id !== id);

      if (id === activeFileId && remaining.length > 0) {
        setActiveFileId(remaining[0].id);
      }

      return remaining;
    });
  };

  return {
    files,
    activeFile,
    activeFileId,
    setActiveFileId,
    updateContent,
    addFile,
    deleteFile,
  };
}