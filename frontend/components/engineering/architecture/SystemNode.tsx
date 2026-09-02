"use client";

import {
  Handle,
  Position,
  type NodeProps,
} from "@xyflow/react";

export type InterfaceDirection =
  | "input"
  | "output"
  | "bidirectional";

export type InterfaceType =
  | "power"
  | "dc_power"
  | "usb_a"
  | "usb_c"
  | "thunderbolt_4"
  | "thunderbolt_5"
  | "ethernet"
  | "can"
  | "uart"
  | "i2c"
  | "spi"
  | "hdmi"
  | "displayport"
  | "pcie"
  | "custom";

export interface SystemInterface {
  id: string;
  name: string;
  direction: InterfaceDirection;
  type: InterfaceType;
  standard: string;
  protocol: string;
  dataRate: string;
  voltage: string;
  maxCurrent: string;
  description: string;
}

export interface SystemParameter {
  id?: string;
  name: string;
  value: string;
  unit?: string;
}

export interface SystemNodeData 
  extends Record<string, unknown> {
  label: string;
  category: string;
  description: string;
  status:
    | "Concept"
    | "Designed"
    | "Validated"
    | "Manufacturing";

  parameters: SystemParameter[];

  /**
   * Interface IDs are permanent identifiers.
   * Connections reference these IDs instead of array indexes.
   */
  interfaces: SystemInterface[];

  parentId?: string | null;

  onEdit?: () => void;
  onDelete?: () => void;
}

function getInterfaceTypeLabel(
  type: InterfaceType
) {
  const labels: Record<
    InterfaceType,
    string
  > = {
    power: "Power",
    dc_power: "DC Power",
    usb_a: "USB-A",
    usb_c: "USB-C",
    thunderbolt_4: "Thunderbolt 4",
    thunderbolt_5: "Thunderbolt 5",
    ethernet: "Ethernet",
    can: "CAN",
    uart: "UART",
    i2c: "I²C",
    spi: "SPI",
    hdmi: "HDMI",
    displayport: "DisplayPort",
    pcie: "PCIe",
    custom: "Custom",
  };

  return labels[type];
}

function getDirectionSymbol(
  direction: InterfaceDirection
) {
  if (direction === "input") {
    return "←";
  }

  if (direction === "output") {
    return "→";
  }

  return "↔";
}

export default function SystemNode({
  data,
}: NodeProps & {
  data: SystemNodeData;
}) {
  const parameters = Array.isArray(
    data.parameters
  )
    ? data.parameters
    : [];

  const interfaces = Array.isArray(
    data.interfaces
  )
    ? data.interfaces
    : [];

  return (
    <div className="min-w-[280px] max-w-[340px] overflow-hidden rounded-xl border border-white/15 bg-[#15191f] shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-white/10 px-4 py-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">
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
          className="ml-3 shrink-0 rounded-md px-2 py-1 text-white/30 transition hover:bg-white/10 hover:text-white"
        >
          ⋯
        </button>
      </div>

      {/* Status */}
      <div className="border-b border-white/10 px-4 py-2">
        <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50">
          {data.status}
        </span>
      </div>

      {/* Description */}
      {data.description && (
        <div className="border-b border-white/10 px-4 py-3 text-xs leading-5 text-white/50">
          {data.description}
        </div>
      )}

      {/* Interfaces */}
      {interfaces.length > 0 && (
        <div className="border-b border-white/10">
          <div className="px-4 pt-3">
            <div className="text-[10px] font-medium uppercase tracking-wider text-white/30">
              Interfaces
            </div>
          </div>

          <div className="mt-2 space-y-1 pb-2">
            {interfaces.map((item) => (
              <div
                key={item.id}
                className="relative mx-2 rounded-md px-2 py-2 transition hover:bg-white/5"
              >
                {/* Input handle */}
                {(item.direction ===
                  "input" ||
                  item.direction ===
                    "bidirectional") && (
                  <Handle
                    id={item.id}
                    type="target"
                    position={
                      Position.Left
                    }
                    className="!h-3 !w-3 !border-2 !border-[#15191f] !bg-white"
                    style={{
                      top: "50%",
                    }}
                  />
                )}

                {/* Output handle */}
                {(item.direction ===
                  "output" ||
                  item.direction ===
                    "bidirectional") && (
                  <Handle
                    id={item.id}
                    type="source"
                    position={
                      Position.Right
                    }
                    className="!h-3 !w-3 !border-2 !border-[#15191f] !bg-white"
                    style={{
                      top: "50%",
                    }}
                  />
                )}

                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 pl-1">
                    <div className="truncate text-xs font-medium text-white/80">
                      {item.name}
                    </div>

                    <div className="mt-0.5 truncate text-[10px] text-white/35">
                      {getInterfaceTypeLabel(
                        item.type
                      )}

                      {item.standard
                        ? ` · ${item.standard}`
                        : ""}
                    </div>
                  </div>

                  <div className="shrink-0 text-[11px] text-white/30">
                    {getDirectionSymbol(
                      item.direction
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Parameters */}
      {parameters.length > 0 && (
        <div className="px-4 py-3">
          <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-white/30">
            Parameters
          </div>

          <div className="space-y-1.5">
            {parameters
              .slice(0, 4)
              .map(
                (
                  parameter,
                  index
                ) => (
                  <div
                    key={
                      parameter.id ??
                      `${parameter.name}-${index}`
                    }
                    className="flex justify-between gap-4 text-xs"
                  >
                    <span className="text-white/40">
                      {
                        parameter.name
                      }
                    </span>

                    <span className="text-right text-white/70">
                      {
                        parameter.value
                      }

                      {parameter.unit
                        ? ` ${parameter.unit}`
                        : ""}
                    </span>
                  </div>
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
}