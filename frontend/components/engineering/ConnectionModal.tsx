"use client";

import { useEffect, useState } from "react";

import Modal from "../ui/Modal";
import Button from "../ui/Button";

export type ConnectionType =
  | "power"
  | "communication"
  | "sensor_data"
  | "control"
  | "mechanical"
  | "thermal";

export interface ConnectionInterfaceOption {
  id: string;
  name: string;
  type: string;
}

export interface ConnectionData
  extends Record<string, unknown> {
  type: ConnectionType;
  protocol: string;
  description: string;

  sourceInterfaceId?: string;
  targetInterfaceId?: string;
}

interface ConnectionModalProps {
  open: boolean;

  sourceName: string;
  targetName: string;

  sourceInterfaces: ConnectionInterfaceOption[];
  targetInterfaces: ConnectionInterfaceOption[];

  initialData?: ConnectionData;

  initialSourceInterfaceId?: string | null;
  initialTargetInterfaceId?: string | null;

  onClose: () => void;

  onSubmit: (
    data: ConnectionData
  ) => void;

  onDelete?: () => void;
}

const connectionTypes: {
  value: ConnectionType;
  label: string;
}[] = [
  {
    value: "power",
    label: "Power",
  },
  {
    value: "communication",
    label: "Communication",
  },
  {
    value: "sensor_data",
    label: "Sensor Data",
  },
  {
    value: "control",
    label: "Control",
  },
  {
    value: "mechanical",
    label: "Mechanical",
  },
  {
    value: "thermal",
    label: "Thermal",
  },
];

export default function ConnectionModal({
  open,
  sourceName,
  targetName,
  sourceInterfaces,
  targetInterfaces,
  initialData,
  initialSourceInterfaceId,
  initialTargetInterfaceId,
  onClose,
  onSubmit,
  onDelete,
}: ConnectionModalProps) {
  const [type, setType] =
    useState<ConnectionType>(
      "communication"
    );

  const [protocol, setProtocol] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [
    sourceInterfaceId,
    setSourceInterfaceId,
  ] = useState("");

  const [
    targetInterfaceId,
    setTargetInterfaceId,
  ] = useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setType(
      initialData?.type ??
        "communication"
    );

    setProtocol(
      initialData?.protocol ?? ""
    );

    setDescription(
      initialData?.description ??
        ""
    );

    setSourceInterfaceId(
      initialSourceInterfaceId ??
        sourceInterfaces[0]?.id ??
        ""
    );

    setTargetInterfaceId(
      initialTargetInterfaceId ??
        targetInterfaces[0]?.id ??
        ""
    );

    setError("");
  }, [
    open,
    initialData,
    initialSourceInterfaceId,
    initialTargetInterfaceId,
    sourceInterfaces,
    targetInterfaces,
  ]);

  function handleSubmit() {
    if (!sourceInterfaceId) {
      setError(
        "Select a source interface."
      );

      return;
    }

    if (!targetInterfaceId) {
      setError(
        "Select a target interface."
      );

      return;
    }

    onSubmit({
      type,
      protocol: protocol.trim(),
      description:
        description.trim(),

      sourceInterfaceId,
      targetInterfaceId,
    });
  }

  function handleDelete() {
  onDelete?.();
}

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="w-[650px] max-w-[95vw]">
        {/* Header */}
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-lg font-semibold text-white">
            Connection
          </h2>

          <div className="mt-2 flex items-center gap-2 text-xs">
            <span className="rounded-md bg-white/5 px-2 py-1 text-white/60">
              {sourceName}
            </span>

            <span className="text-white/20">
              →
            </span>

            <span className="rounded-md bg-white/5 px-2 py-1 text-white/60">
              {targetName}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-5 px-6 py-5">
          {/* Interfaces */}
          <div className="grid grid-cols-2 gap-4">
            {/* Source */}
            <div>
              <label className="mb-2 block text-xs font-medium text-white/50">
                Source Interface
              </label>

              <select
                value={
                  sourceInterfaceId
                }
                onChange={(event) =>
                  setSourceInterfaceId(
                    event.target
                      .value
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
              >
                <option
                  value=""
                  className="bg-[#101419]"
                >
                  Select interface
                </option>

                {sourceInterfaces.map(
                  (item) => (
                    <option
                      key={
                        item.id
                      }
                      value={
                        item.id
                      }
                      className="bg-[#101419]"
                    >
                      {item.name}
                      {" · "}
                      {item.type}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Target */}
            <div>
              <label className="mb-2 block text-xs font-medium text-white/50">
                Target Interface
              </label>

              <select
                value={
                  targetInterfaceId
                }
                onChange={(event) =>
                  setTargetInterfaceId(
                    event.target
                      .value
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
              >
                <option
                  value=""
                  className="bg-[#101419]"
                >
                  Select interface
                </option>

                {targetInterfaces.map(
                  (item) => (
                    <option
                      key={
                        item.id
                      }
                      value={
                        item.id
                      }
                      className="bg-[#101419]"
                    >
                      {item.name}
                      {" · "}
                      {item.type}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="mb-2 block text-xs font-medium text-white/50">
              Connection Type
            </label>

            <select
              value={type}
              onChange={(event) =>
                setType(
                  event.target
                    .value as ConnectionType
                )
              }
              className="w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
            >
              {connectionTypes.map(
                (item) => (
                  <option
                    key={
                      item.value
                    }
                    value={
                      item.value
                    }
                    className="bg-[#101419]"
                  >
                    {item.label}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Protocol */}
          <div>
            <label className="mb-2 block text-xs font-medium text-white/50">
              Protocol / Specification
            </label>

            <input
              value={protocol}
              onChange={(event) =>
                setProtocol(
                  event.target.value
                )
              }
              placeholder="e.g. USB 3.2 Gen 2, CAN FD, 24V DC"
              className="w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-xs font-medium text-white/50">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(
                  event.target.value
                )
              }
              rows={4}
              placeholder="What does this connection carry or provide?"
              className="w-full resize-none rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-2 text-xs text-red-300">
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
          <div>
            {onDelete && (
              <Button
                type="button"
                variant="danger"
                onClick={
                  handleDelete
                }
              >
                Delete Connection
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="button"
              variant="primary"
              onClick={
                handleSubmit
              }
            >
              Save Connection
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}