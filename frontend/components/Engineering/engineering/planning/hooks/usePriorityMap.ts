import { useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { MapPoint, Point2D, Priority } from "../types/planning";
import {
  calculateWeights,
  clampToPolygon,
  getWeightedCenter,
} from "../utils/priorityMapGeometry";

const SIZE = 520;
const CENTER = SIZE / 2;
const RADIUS = 190;

interface UsePriorityMapProps {
  priorities: Priority[];
  onUpdateWeight: (id: string, weight: number) => void;
}

export function usePriorityMap({
  priorities,
  onUpdateWeight,
}: UsePriorityMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const capturedPointerId = useRef<number | null>(null);

  const [dragging, setDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState<Point2D | null>(null);

  const points = useMemo<MapPoint[]>(() => {
    if (priorities.length === 0) return [];

    return priorities.map((priority, index) => {
      const angle =
        -Math.PI / 2 + (index * 2 * Math.PI) / priorities.length;

      return {
        priority,
        angle,
        x: CENTER + Math.cos(angle) * RADIUS,
        y: CENTER + Math.sin(angle) * RADIUS,
      };
    });
  }, [priorities]);

  const weightedCenter = useMemo(
    () => getWeightedCenter(priorities, points, CENTER),
    [priorities, points],
  );

  const displayCenter = dragPosition ?? weightedCenter;

  function getSvgPoint(event: ReactPointerEvent): Point2D {
    const svg = svgRef.current;

    if (!svg) return { x: CENTER, y: CENTER };

    const rect = svg.getBoundingClientRect();

    if (rect.width <= 0 || rect.height <= 0) {
      return { x: CENTER, y: CENTER };
    }

    return {
      x: ((event.clientX - rect.left) / rect.width) * SIZE,
      y: ((event.clientY - rect.top) / rect.height) * SIZE,
    };
  }

  function updateFromPosition(position: Point2D) {
    const weights = calculateWeights(position, points);

    priorities.forEach((priority, index) => {
      const weight = weights[index];

      if (Number.isFinite(weight)) {
        onUpdateWeight(priority.id, weight);
      }
    });
  }

  function handlePointerDown(
    event: ReactPointerEvent<SVGCircleElement>,
  ) {
    event.preventDefault();
    event.stopPropagation();

    const rawPosition = getSvgPoint(event);
    const position = clampToPolygon(rawPosition, points, CENTER);

    capturedPointerId.current = event.pointerId;
    setDragging(true);
    setDragPosition(position);

    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPosition(position);
  }

  function handlePointerMove(
    event: ReactPointerEvent<SVGSVGElement>,
  ) {
    if (!dragging) return;
    if (capturedPointerId.current !== event.pointerId) return;

    const rawPosition = getSvgPoint(event);
    const position = clampToPolygon(rawPosition, points, CENTER);

    setDragPosition(position);
    updateFromPosition(position);
  }

  function handlePointerUp(event: ReactPointerEvent) {
    if (
      capturedPointerId.current !== null &&
      event.pointerId !== capturedPointerId.current
    ) {
      return;
    }

    capturedPointerId.current = null;
    setDragging(false);
    setDragPosition(null);
  }

  return {
    size: SIZE,
    center: CENTER,
    svgRef,
    dragging,
    points,
    displayCenter,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}
