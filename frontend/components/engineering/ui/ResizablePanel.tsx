"use client";

import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

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
  minSize,
  maxSize,
  collapsed = false,
  onSizeChange,
  onToggleCollapse,
  className = "",
  children,
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

      const nextSize = Math.min(
        maxSize,
        Math.max(
          minSize,
          startSize.current + delta,
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
    horizontal,
    minSize,
    maxSize,
    onSizeChange,
  ]);

  if (collapsed) {
    return null;
  }

  return (
    <div
      style={
        horizontal
          ? { width: size }
          : { height: size }
      }
      className={`group relative shrink-0 ${
        horizontal ? "h-full" : "w-full"
      } ${className}`}
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
            horizontal
              ? "right-2 top-2"
              : "right-2 top-2"
          }`}
        >
          {horizontal ? "‹" : "⌃"}
        </button>
      )}

      {/* Resize handle */}
      <div
        onPointerDown={handlePointerDown}
        className={`absolute z-40 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 ${
          horizontal
            ? "right-[-5px] top-0 h-full w-[10px] cursor-col-resize"
            : "bottom-[-5px] left-0 h-[10px] w-full cursor-row-resize"
        }`}
      >
        <div
          className={`rounded-full bg-white/25 transition-colors hover:bg-white/60 ${
            horizontal
              ? "h-10 w-0.5"
              : "h-0.5 w-10"
          }`}
        />
      </div>
    </div>
  );
}