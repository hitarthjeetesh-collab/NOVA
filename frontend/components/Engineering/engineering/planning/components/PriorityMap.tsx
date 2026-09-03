import type { Priority } from "../types/planning";
import { priorityColors } from "../constants";
import { usePriorityMap } from "../hooks/usePriorityMap";

export interface PriorityMapProps {
  priorities: Priority[];
  onUpdateWeight: (id: string, weight: number) => void;
  onRemove: (id: string) => void;
}

export function PriorityMap({
  priorities,
  onUpdateWeight,
  onRemove,
}: PriorityMapProps) {
  const {
    size,
    center,
    svgRef,
    dragging,
    points,
    displayCenter,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = usePriorityMap({ priorities, onUpdateWeight });

  const polygonPoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f1115] p-6">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[560px]">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${size} ${size}`}
            className="h-auto w-full overflow-visible touch-none select-none"
            onPointerMove={
              handlePointerMove
            }
            onPointerUp={
              handlePointerUp
            }
            onPointerCancel={
              handlePointerUp
            }
          >
            {/* Polygon */}

            {points.length >= 3 && (
              <polygon
                points={polygonPoints}
                fill="rgba(255,255,255,0.025)"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                pointerEvents="none"
              />
            )}

            {/* True geometric center */}

            <circle
              cx={center}
              cy={center}
              r="3"
              fill="white"
              opacity="0.35"
              pointerEvents="none"
            />

            {/* Priority vertices */}

            {points.map(
              (point) => (
                <g
                  key={
                    point.priority.id
                  }
                >
                  {/* Connection */}

                  <line
                    x1={center}
                    y1={center}
                    x2={point.x}
                    y2={point.y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                    pointerEvents="none"
                  />

                  {/* Vertex */}

                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="7"
                    fill="#0f1115"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="2"
                    pointerEvents="none"
                  />

                  {/* Label */}

                  <foreignObject
                    x={
                      point.x - 80
                    }
                    y={
                      point.y < center
                        ? point.y - 55
                        : point.y + 15
                    }
                    width="160"
                    height="65"
                    pointerEvents="none"
                  >
                    <div className="pointer-events-none text-center">
                      <p className="truncate text-xs font-medium text-white/80">
                        {
                          point
                            .priority
                            .name
                        }
                      </p>

                      <p className="mt-1 text-[10px] text-white/30">
                        {Math.round(
                          point
                            .priority
                            .weight
                        )}
                        %
                      </p>
                    </div>
                  </foreignObject>

                  {/* Delete */}

                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="18"
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() =>
                      onRemove(
                        point
                          .priority
                          .id
                      )
                    }
                  />
                </g>
              )
            )}

            {/* =================================================
                CENTER DRAG HANDLE
                ================================================= */}

            <circle
              cx={displayCenter.x}
              cy={displayCenter.y}
              r="25"
              fill="transparent"
              className={
                dragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
              }
              onPointerDown={
                handlePointerDown
              }
            />

            {/* Visible center */}

            <circle
              cx={displayCenter.x}
              cy={displayCenter.y}
              r="11"
              fill="white"
              className={
                dragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
              }
              onPointerDown={
                handlePointerDown
              }
            />

            {/* Center ring */}

            <circle
              cx={displayCenter.x}
              cy={displayCenter.y}
              r="18"
              fill="none"
              stroke={
                dragging
                  ? "rgba(255,255,255,0.55)"
                  : "rgba(255,255,255,0.18)"
              }
              strokeWidth={
                dragging ? 2 : 1
              }
              pointerEvents="none"
            />
          </svg>
        </div>

        <p className="mt-2 text-center text-xs text-white/30">
          Drag the center point toward
          a priority to increase its
          importance.
        </p>
      </div>
    </div>
  );
}