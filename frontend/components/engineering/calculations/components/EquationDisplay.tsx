"use client";

import { useState } from "react";

type EquationDisplayProps = {
  equation?: string;
};

const operators = ["+", "−", "×", "÷", "^", "(", ")"];

export default function EquationDisplay({
  equation = "E = V × I × t",
}: EquationDisplayProps) {
  const [value, setValue] = useState(equation);
  const [focused, setFocused] = useState(false);

  const insertAtCursor = (text: string) => {
    const textarea = document.getElementById(
      "equation-editor"
    ) as HTMLTextAreaElement | null;

    if (!textarea) {
      setValue((current) => current + text);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const nextValue =
      value.slice(0, start) + text + value.slice(end);

    setValue(nextValue);

    requestAnimationFrame(() => {
      textarea.focus();

      const cursorPosition = start + text.length;
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    });
  };

  return (
    <section className="rounded-xl border border-white/10 bg-[#111419]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Equation
          </h3>
          <p className="mt-1 text-xs text-white/40">
            Define the equation for this calculation.
          </p>
        </div>

        <div
          className={`rounded-md border px-2.5 py-1 text-[11px] transition ${
            focused
              ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
              : "border-white/10 bg-white/[0.03] text-white/40"
          }`}
        >
          {focused ? "Editing" : "Click to edit"}
        </div>
      </div>

      {/* Editor */}
      <div className="p-5">
        <div
          className={`rounded-lg border bg-[#0c0f13] transition ${
            focused
              ? "border-blue-400/40 shadow-[0_0_0_1px_rgba(96,165,250,0.08)]"
              : "border-white/10"
          }`}
        >
          <textarea
            id="equation-editor"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter equation..."
            spellCheck={false}
            rows={2}
            className="w-full resize-none bg-transparent px-4 py-4 font-mono text-lg text-white outline-none placeholder:text-white/20"
          />
        </div>

        {/* Operator toolbar */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[11px] font-medium uppercase tracking-wider text-white/30">
            Insert
          </span>

          {operators.map((operator) => (
            <button
              key={operator}
              type="button"
              onClick={() => insertAtCursor(` ${operator} `)}
              className="flex h-8 min-w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-2 font-mono text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white active:bg-white/10"
            >
              {operator}
            </button>
          ))}

          <button
            type="button"
            onClick={() => insertAtCursor("√")}
            className="flex h-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-3 font-mono text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white active:bg-white/10"
          >
            √
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor("  ")}
            className="ml-auto flex h-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-3 text-xs text-white/50 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Space
          </button>
        </div>
      </div>

      {/* Visual preview */}
      <div className="border-t border-white/10 px-5 py-4">
        <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-white/30">
          Preview
        </div>

        <div className="flex min-h-16 items-center justify-center overflow-x-auto rounded-lg border border-white/5 bg-[#0c0f13] px-5 py-4">
          <span className="whitespace-pre font-mono text-xl text-white">
            {value || "Your equation will appear here"}
          </span>
        </div>
      </div>
    </section>
  );
}