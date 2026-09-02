"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Direction = "horizontal" | "vertical";

interface ResizablePanelProps {
  children: ReactNode;
  direction: Direction;
  size: number;
  minSize: number;
  maxSize: number;
  onSizeChange: (size: number) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
  collapseButtonPosition?: "start" | "end";
}

export default function ResizablePanel({
  children,
  direction,
  size,
  minSize,
  maxSize,
  onSizeChange,
  collapsed = false,
  onToggleCollapse,
  className = "",
  collapseButtonPosition = "end",
}: ResizablePanelProps) {
  const [dragging, setDragging] = useState(false);
  const startPosition = useRef(0);
  const startSize = useRef(size);

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (event: PointerEvent) => {
      const delta =
        direction === "horizontal"
          ? event.clientX - startPosition.current
          : event.clientY - startPosition.current;

      const nextSize =
        direction === "horizontal"
          ? startSize.current + delta
          : startSize.current + delta;

      onSizeChange(
        Math.min(maxSize, Math.max(minSize, nextSize)),
      );
    };

    const handleUp = () => {
      setDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);

      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [
    direction,
    dragging,
    maxSize,
    minSize,
    onSizeChange,
  ]);

  const beginResize = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    startPosition.current =
      direction === "horizontal"
        ? event.clientX
        : event.clientY;

    startSize.current = size;

    setDragging(true);

    document.body.style.cursor =
      direction === "horizontal"
        ? "col-resize"
        : "row-resize";

    document.body.style.userSelect = "none";
  };

  const style: CSSProperties = {
    [direction === "horizontal" ? "width" : "height"]:
      collapsed ? 0 : size,
  };

  return (
    <div
      className={`relative shrink-0 overflow-hidden ${
        direction === "horizontal"
          ? "h-full"
          : "w-full"
      } ${className}`}
      style={style}
    >
      <div className="h-full w-full">
        {children}
      </div>

      {onToggleCollapse && (
        <button
          type="button"
          onClick={onToggleCollapse}
          title={collapsed ? "Expand panel" : "Collapse panel"}
          className={`absolute z-20 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-[#111419]/95 text-xs text-white/35 opacity-0 backdrop-blur transition hover:bg-white/[0.08] hover:text-white group-hover:opacity-100 ${
            collapseButtonPosition === "start"
              ? "left-2 top-2"
              : "right-2 top-2"
          }`}
        >
          {direction === "horizontal"
            ? collapsed
              ? "›"
              : "‹"
            : collapsed
              ? "⌃"
              : "⌄"}
        </button>
      )}
    </div>
  );
}