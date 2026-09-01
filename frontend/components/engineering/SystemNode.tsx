"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";

export interface SystemParameter {
  id?: string;
  name: string;
  value: string;
  unit?: string;
}

export interface SystemNodeData {
  label: string;
  category: string;
  description: string;
  status:
    | "Concept"
    | "Designed"
    | "Validated"
    | "Manufacturing";
  parameters: SystemParameter[];
  parentId?: string;

  onEdit?: () => void;
  onDelete?: () => void;
}

export default function SystemNode({
  data,
}: NodeProps & { data: SystemNodeData }) {
  const parameters = Array.isArray(data.parameters)
    ? data.parameters
    : [];

  return (
    <div
      className="min-w-[240px] overflow-hidden rounded-xl border border-white/15 bg-[#15191f] shadow-xl"
    >
      <div className="flex items-start justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-white">
            {data.label}
          </div>

          <div className="mt-1 text-xs text-white/40">
            {data.category}
          </div>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            data.onEdit?.();
          }}
          className="rounded-md px-2 py-1 text-white/30 hover:bg-white/10 hover:text-white"
        >
          ⋯
        </button>
      </div>

      <div className="border-b border-white/10 px-4 py-2">
        <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50">
          {data.status}
        </span>
      </div>

      {data.description && (
        <div className="px-4 py-3 text-xs leading-5 text-white/50">
          {data.description}
        </div>
      )}

      {parameters.length > 0 && (
        <div className="border-t border-white/10 px-4 py-3">
          <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-white/30">
            Parameters
          </div>

          <div className="space-y-1.5">
            {parameters.slice(0, 4).map((parameter, index) => (
              <div
                key={
                  parameter.id ??
                  `${parameter.name}-${index}`
                }
                className="flex justify-between gap-4 text-xs"
              >
                <span className="text-white/40">
                  {parameter.name}
                </span>

                <span className="text-white/70">
                  {parameter.value}
                  {parameter.unit
                    ? ` ${parameter.unit}`
                    : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input connection */}
      <Handle
        type="target"
        position={Position.Left}
        className="!h-3 !w-3 !border-2 !border-[#15191f] !bg-white"
      />

      {/* Output connection */}
      <Handle
        type="source"
        position={Position.Right}
        className="!h-3 !w-3 !border-2 !border-[#15191f] !bg-white"
      />
    </div>
  );
}