"use client";

import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

type Props = {
  direction: "horizontal" | "vertical";
  edge: "start" | "end";

  size: number;
  minSize: number;
  maxSize: number;

  collapsed?: boolean;
  onSizeChange: (size: number) => void;
  onToggleCollapse?: () => void;

  collapseButtonPosition?: string;

  children: ReactNode;
  className?: string;
};

export default function ResizablePanel({
  direction,
  edge,
  size,
  minSize,
  maxSize,
  collapsed = false,
  onSizeChange,
  onToggleCollapse,
  collapseButtonPosition,
  children,
  className = "",
}: Props) {
  const dragging = useRef(false);
  const startPosition = useRef(0);
  const startSize = useRef(size);

  const horizontal = direction === "horizontal";

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    dragging.current = true;

    startPosition.current = horizontal
      ? event.clientX
      : event.clientY;

    startSize.current = size;

    document.body.style.userSelect = "none";
    document.body.style.cursor = horizontal
      ? "col-resize"
      : "row-resize";
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!dragging.current) return;

      const currentPosition = horizontal
        ? event.clientX
        : event.clientY;

      const delta =
        currentPosition - startPosition.current;

      const signedDelta =
        edge === "end" ? delta : -delta;

      const nextSize = Math.min(
        maxSize,
        Math.max(
          minSize,
          startSize.current + signedDelta,
        ),
      );

      onSizeChange(nextSize);
    };

    const handlePointerUp = () => {
      if (!dragging.current) return;

      dragging.current = false;

      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp,
      );
    };
  }, [
    edge,
    horizontal,
    maxSize,
    minSize,
    onSizeChange,
  ]);

  const sizeStyle = horizontal
    ? {
        width: collapsed ? 0 : size,
      }
    : {
        height: collapsed ? 0 : size,
      };

  if (collapsed) {
    return (
      <div
        style={sizeStyle}
        className={`relative shrink-0 ${className}`}
      />
    );
  }

  return (
    <div
      style={sizeStyle}
      className={`group relative shrink-0 ${className}`}
    >
      <div className="h-full w-full overflow-hidden">
        {children}
      </div>

      {/* Collapse button */}
      {onToggleCollapse && (
        <button
          type="button"
          onPointerDown={(event) => {
            event.stopPropagation();
          }}
          onClick={onToggleCollapse}
          title="Collapse panel"
          className={`absolute z-50 flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-[#111419]/95 text-xs text-white/35 opacity-0 shadow-lg transition-all hover:border-white/20 hover:bg-[#181c22] hover:text-white group-hover:opacity-100 ${
            collapseButtonPosition ??
            (horizontal
              ? edge === "end"
                ? "right-2 top-2"
                : "left-2 top-2"
              : edge === "end"
                ? "right-2 top-2"
                : "right-2 bottom-2")
          }`}
        >
          {horizontal
            ? edge === "end"
              ? "‹"
              : "›"
            : edge === "end"
              ? "⌃"
              : "⌄"}
        </button>
      )}

      {/* Resize handle */}
      <div
        onPointerDown={handlePointerDown}
        className={`absolute z-40 flex items-center justify-center transition-opacity ${
          horizontal
            ? `
              top-0 h-full w-3
              cursor-col-resize
              ${
                edge === "end"
                  ? "-right-1"
                  : "-left-1"
              }
            `
            : `
              left-0 h-3 w-full
              cursor-row-resize
              ${
                edge === "end"
                  ? "-bottom-1"
                  : "-top-1"
              }
            `
        } opacity-0 group-hover:opacity-100`}
      >
        <div
          className={`rounded-full bg-white/30 transition-colors hover:bg-white/60 ${
            horizontal
              ? "h-10 w-0.5"
              : "h-0.5 w-10"
          }`}
        />
      </div>
    </div>
  );
}