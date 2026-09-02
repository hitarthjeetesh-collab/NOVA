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

  const [newFileOpen, setNewFileOpen] =
    useState(false);

  const [explorerWidth, setExplorerWidth] =
    useState(224);

  const [suggestionsWidth, setSuggestionsWidth] =
    useState(256);

  const [explorerCollapsed, setExplorerCollapsed] =
    useState(false);

  const [suggestionsCollapsed, setSuggestionsCollapsed] =
    useState(false);

  const [contextHeight, setContextHeight] =
    useState(120);

  const [consoleHeight, setConsoleHeight] =
    useState(144);

  const [contextCollapsed, setContextCollapsed] =
    useState(false);

  const [consoleCollapsed, setConsoleCollapsed] =
    useState(false);

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0b0d10]">
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {/* FILE EXPLORER */}
        <ResizablePanel
          direction="horizontal"
          size={explorerWidth}
          minSize={180}
          maxSize={420}
          onSizeChange={setExplorerWidth}
          collapsed={explorerCollapsed}
          onToggleCollapse={() =>
            setExplorerCollapsed(
              (value) => !value,
            )
          }
          className="border-r border-white/10"
        >
          <CodeExplorer
            files={files}
            activeFileId={activeFileId}
            onSelect={setActiveFileId}
            onNewFile={() =>
              setNewFileOpen(true)
            }
          />
        </ResizablePanel>

        {/* MAIN EDITOR */}
        <main className="flex min-w-0 flex-1 flex-col">
          <CodeHeader file={activeFile} />

          <CodeToolbar />

          {activeFile ? (
            <CodeEditor
              value={activeFile.content}
              onChange={updateContent}
            />
          ) : (
            <div className="flex min-h-0 flex-1 items-center justify-center text-sm text-white/25">
              Select a file to begin editing.
            </div>
          )}

          {/* ENGINEERING CONTEXT */}
          <ResizablePanel
            direction="vertical"
            size={contextHeight}
            minSize={70}
            maxSize={260}
            onSizeChange={setContextHeight}
            collapsed={contextCollapsed}
            onToggleCollapse={() =>
              setContextCollapsed(
                (value) => !value,
              )
            }
            className="border-t border-white/10"
          >
            <CodeContext />
          </ResizablePanel>

          {/* CONSOLE */}
          <ResizablePanel
            direction="vertical"
            size={consoleHeight}
            minSize={60}
            maxSize={400}
            onSizeChange={setConsoleHeight}
            collapsed={consoleCollapsed}
            onToggleCollapse={() =>
              setConsoleCollapsed(
                (value) => !value,
              )
            }
            className="border-t border-white/10"
          >
            <CodeConsole />
          </ResizablePanel>

          <CodeStatusBar file={activeFile} />
        </main>

        {/* AI SUGGESTIONS */}
        <ResizablePanel
          direction="horizontal"
          size={suggestionsWidth}
          minSize={200}
          maxSize={420}
          onSizeChange={setSuggestionsWidth}
          collapsed={suggestionsCollapsed}
          onToggleCollapse={() =>
            setSuggestionsCollapsed(
              (value) => !value,
            )
          }
          className="border-l border-white/10"
          collapseButtonPosition="start"
        >
          <CodeSuggestions />
        </ResizablePanel>

        {/* Collapsed explorer button */}
        {explorerCollapsed && (
          <button
            type="button"
            onClick={() =>
              setExplorerCollapsed(false)
            }
            title="Show files"
            className="absolute left-2 top-2 z-30 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-[#111419] text-white/40 transition hover:bg-white/[0.08] hover:text-white"
          >
            ›
          </button>
        )}

        {/* Collapsed suggestions button */}
        {suggestionsCollapsed && (
          <button
            type="button"
            onClick={() =>
              setSuggestionsCollapsed(false)
            }
            title="Show AI suggestions"
            className="absolute right-2 top-2 z-30 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-[#111419] text-white/40 transition hover:bg-white/[0.08] hover:text-white"
          >
            ‹
          </button>
        )}
      </div>

      <NewFileModal
        open={newFileOpen}
        onClose={() =>
          setNewFileOpen(false)
        }
        onCreate={addFile}
      />
    </div>
  );
}