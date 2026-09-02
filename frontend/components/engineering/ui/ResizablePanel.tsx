"use client";

import { type ReactNode } from "react";

type Props = {
  direction: "horizontal" | "vertical";

  size: number;
  minSize: number;
  maxSize: number;

  collapsed?: boolean;

  onSizeChange: (size: number) => void;
  onToggleCollapse?: () => void;

  className?: string;
  children: ReactNode;
};

export default function ResizablePanel({
  direction,
  size,
  collapsed = false,
  onToggleCollapse,
  className = "",
  children,
}: Props) {
  if (collapsed) {
    return null;
  }

  return (
    <div
      style={
        direction === "horizontal"
          ? { width: size }
          : { height: size }
      }
      className={`group relative shrink-0 ${
        direction === "horizontal"
          ? "h-full"
          : "w-full"
      } ${className}`}
    >
      <div className="h-full w-full overflow-hidden">
        {children}
      </div>

      {onToggleCollapse && (
        <button
          type="button"
          onClick={onToggleCollapse}
          title="Collapse panel"
          className="absolute right-2 top-2 z-50 flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-[#111419]/95 text-xs text-white/35 opacity-0 shadow-lg transition-all hover:border-white/20 hover:bg-[#181c22] hover:text-white group-hover:opacity-100"
        >
          {direction === "horizontal" ? "‹" : "⌃"}
        </button>
      )}
    </div>
  );
}