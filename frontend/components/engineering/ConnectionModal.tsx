"use client";

import { FormEvent, useEffect, useState } from "react";

export type ConnectionType =
  | "power"
  | "communication"
  | "sensor_data"
  | "control"
  | "mechanical"
  | "thermal";

export interface ConnectionData {
  type: ConnectionType;
  protocol: string;
  description: string;
}

interface ConnectionModalProps {
  open: boolean;
  sourceName: string;
  targetName: string;
  onClose: () => void;
  onSubmit: (data: ConnectionData) => void;
}

export default function ConnectionModal({
  open,
  sourceName,
  targetName,
  onClose,
  onSubmit,
}: ConnectionModalProps) {
  const [type, setType] =
    useState<ConnectionType>("communication");

  const [protocol, setProtocol] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setType("communication");
    setProtocol("");
    setDescription("");
  }, [open]);

  if (!open) {
    return null;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onSubmit({
      type,
      protocol: protocol.trim(),
      description: description.trim(),
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111419] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold">
              Define Connection
            </h2>

            <p className="mt-1 text-xs text-white/40">
              {sourceName} → {targetName}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-white/40 hover:bg-white/10 hover:text-white"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm text-white/60">
              Connection Type
            </label>

            <select
              value={type}
              onChange={(event) =>
                setType(
                  event.target.value as ConnectionType
                )
              }
              className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
            >
              <option value="power">Power</option>
              <option value="communication">
                Communication
              </option>
              <option value="sensor_data">
                Sensor Data
              </option>
              <option value="control">Control</option>
              <option value="mechanical">Mechanical</option>
              <option value="thermal">Thermal</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Protocol / Interface
            </label>

            <input
              value={protocol}
              onChange={(event) =>
                setProtocol(event.target.value)
              }
              placeholder="CAN, USB 3.0, Ethernet, 12V..."
              className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="What information, energy, or force flows through this connection?"
              rows={3}
              className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25"
            />
          </div>

          <div className="flex justify-end gap-2 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm text-white/50 hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Create Connection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}