"use client";

import { useState } from "react";

import { useCode } from "./hooks/useCode";

import CodeConsole from "./components/CodeConsole";
import CodeContext from "./components/CodeContext";
import CodeEditor from "./components/CodeEditor";
import CodeExplorer from "./components/CodeExplorer";
import CodeHeader from "./components/CodeHeader";
import CodeStatusBar from "./components/CodeStatusBar";
import CodeSuggestions from "./components/CodeSuggestions";
import CodeToolbar from "./components/CodeToolbar";

import NewFileModal from "./components/modals/NewFileModal";

import ResizablePanel from "../ui/ResizablePanel";

type Props = {
  projectName?: string;
};

export default function Code({
  projectName = "ORION",
}: Props) {
  const {
    files,
    activeFile,
    activeFileId,
    setActiveFileId,
    updateContent,
    addFile,
  } = useCode();

  const [newFileOpen, setNewFileOpen] = useState(false);

  /*
   * Horizontal panels
   */
  const [explorerWidth, setExplorerWidth] = useState(224);
  const [suggestionsWidth, setSuggestionsWidth] = useState(256);

  const [explorerCollapsed, setExplorerCollapsed] =
    useState(false);

  const [
    suggestionsCollapsed,
    setSuggestionsCollapsed,
  ] = useState(false);

  /*
   * Vertical panels
   */
  const [contextHeight, setContextHeight] = useState(150);
  const [consoleHeight, setConsoleHeight] = useState(144);

  const [contextCollapsed, setContextCollapsed] =
    useState(false);

  const [consoleCollapsed, setConsoleCollapsed] =
    useState(false);

  return (
    <div className="flex h-full min-h-0 flex-col bg-[var(--aevra-background)]">
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* =========================================
            FILE EXPLORER
        ========================================= */}

        {!explorerCollapsed ? (
          <ResizablePanel
            direction="horizontal"
            size={explorerWidth}
            minSize={180}
            maxSize={420}
            onSizeChange={setExplorerWidth}
            collapsed={false}
            onToggleCollapse={() =>
              setExplorerCollapsed(true)
            }
            className="h-full"
          >
            <CodeExplorer
              files={files}
              activeFileId={activeFileId}
              onSelect={setActiveFileId}
              onNewFile={() => setNewFileOpen(true)}
            />
          </ResizablePanel>
        ) : (
          <div className="flex w-9 shrink-0 items-start justify-center border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)] pt-3">
            <button
              type="button"
              onClick={() => setExplorerCollapsed(false)}
              title="Show File Explorer"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] hover:text-[var(--aevra-text)]"
            >
              ›
            </button>
          </div>
        )}

        {/* =========================================
            MAIN EDITOR
        ========================================= */}

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <CodeHeader file={activeFile} />

          <CodeToolbar />

          {/* EDITOR */}

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {activeFile ? (
              <CodeEditor
                value={activeFile.content}
                onChange={updateContent}
              />
            ) : (
              <div className="flex flex-1 items-center justify-center text-sm text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
                Select a file to begin editing.
              </div>
            )}
          </div>

          {/* =========================================
              ENGINEERING CONTEXT
          ========================================= */}

          {!contextCollapsed ? (
            <ResizablePanel
              direction="vertical"
              size={contextHeight}
              minSize={90}
              maxSize={320}
              onSizeChange={setContextHeight}
              collapsed={false}
              onToggleCollapse={() =>
                setContextCollapsed(true)
              }
              className="w-full"
            >
              <CodeContext />
            </ResizablePanel>
          ) : (
            <div className="flex h-8 shrink-0 items-center justify-center border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)]">
              <button
                type="button"
                onClick={() => setContextCollapsed(false)}
                title="Show Engineering Context"
                className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-3 py-1 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Show Engineering Context
              </button>
            </div>
          )}

          {/* =========================================
              CONSOLE
          ========================================= */}

          {!consoleCollapsed ? (
            <ResizablePanel
              direction="vertical"
              size={consoleHeight}
              minSize={80}
              maxSize={320}
              onSizeChange={setConsoleHeight}
              collapsed={false}
              onToggleCollapse={() =>
                setConsoleCollapsed(true)
              }
              className="w-full"
            >
              <CodeConsole />
            </ResizablePanel>
          ) : (
            <div className="flex h-8 shrink-0 items-center justify-center border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_1.5%,transparent)]">
              <button
                type="button"
                onClick={() => setConsoleCollapsed(false)}
                title="Show Console"
                className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] px-3 py-1 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Show Console
              </button>
            </div>
          )}

          {/* STATUS BAR */}

          <CodeStatusBar file={activeFile} />
        </main>

        {/* =========================================
            AI SUGGESTIONS
        ========================================= */}

        {!suggestionsCollapsed ? (
          <ResizablePanel
            direction="horizontal"
            size={suggestionsWidth}
            minSize={200}
            maxSize={420}
            onSizeChange={setSuggestionsWidth}
            collapsed={false}
            onToggleCollapse={() =>
              setSuggestionsCollapsed(true)
            }
            className="h-full"
          >
            <CodeSuggestions />
          </ResizablePanel>
        ) : (
          <div className="flex w-9 shrink-0 items-start justify-center border-l border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2%,transparent)] pt-3">
            <button
              type="button"
              onClick={() => setSuggestionsCollapsed(false)}
              title="Show AI Suggestions"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_3%,transparent)] text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)] transition hover:border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_7%,transparent)] hover:text-[var(--aevra-text)]"
            >
              ‹
            </button>
          </div>
        )}
      </div>

      {/* NEW FILE MODAL */}

      <NewFileModal
        open={newFileOpen}
        onClose={() => setNewFileOpen(false)}
        onCreate={addFile}
      />
    </div>
  );
}