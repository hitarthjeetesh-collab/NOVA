"use client";

import { FormEvent, useEffect, useState } from "react";
import type { SystemNodeData, SystemParameter } from "./SystemNode";

interface SystemModalProps {
  open: boolean;
  initialData?: SystemNodeData;
  onClose: () => void;
  onSubmit: (data: SystemNodeData) => void;
}

const categories = [
  "Subsystem",
  "Mechanical",
  "Electrical",
  "Power",
  "Computing",
  "Sensors",
  "Control",
  "Software",
  "Thermal",
  "Other",
];

const statuses = [
  "Concept",
  "Designed",
  "Validated",
  "Manufacturing",
] as const;

export default function SystemModal({
  open,
  initialData,
  onClose,
  onSubmit,
}: SystemModalProps) {
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("Subsystem");
  const [description, setDescription] = useState("");
  const [status, setStatus] =
    useState<SystemNodeData["status"]>("Concept");

  const [parameters, setParameters] =
    useState<SystemParameter[]>([]);

  useEffect(() => {
    if (!open) return;

    setLabel(initialData?.label ?? "");
    setCategory(initialData?.category ?? "Subsystem");
    setDescription(initialData?.description ?? "");
    setStatus(initialData?.status ?? "Concept");
    setParameters(initialData?.parameters ?? []);
  }, [open, initialData]);

  if (!open) return null;

  function addParameter() {
    setParameters((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        name: "",
        value: "",
        unit: "",
      },
    ]);
  }

  function updateParameter(
    index: number,
    field: keyof SystemParameter,
    value: string
  ) {
    setParameters((current) =>
      current.map((parameter, parameterIndex) =>
        parameterIndex === index
          ? {
              ...parameter,
              [field]: value,
            }
          : parameter
      )
    );
  }

  function removeParameter(index: number) {
    setParameters((current) =>
      current.filter(
        (_, parameterIndex) => parameterIndex !== index
      )
    );
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!label.trim()) return;

    onSubmit({
      ...initialData,
      label: label.trim(),
      category,
      description: description.trim(),
      status,
      parameters,
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
      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111419] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {initialData ? "Edit System" : "Add System"}
            </h2>

            <p className="mt-1 text-xs text-white/40">
              Define the engineering system and its properties.
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

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          <div>
            <label className="mb-2 block text-sm text-white/60">
              System Name
            </label>

            <input
              autoFocus
              value={label}
              onChange={(event) =>
                setLabel(event.target.value)
              }
              placeholder="e.g. Power Distribution System"
              className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                Category
              </label>

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                Status
              </label>

              <select
                value={status}
                onChange={(event) =>
                  setStatus(
                    event.target.value as SystemNodeData["status"]
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
              >
                {statuses.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
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
              placeholder="What does this system do?"
              rows={3}
              className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm text-white/60">
                Parameters
              </label>

              <button
                type="button"
                onClick={addParameter}
                className="rounded-md px-2 py-1 text-xs text-white/50 hover:bg-white/10 hover:text-white"
              >
                + Add Parameter
              </button>
            </div>

            {parameters.length === 0 ? (
              <div className="rounded-lg border border-dashed border-white/10 px-4 py-5 text-center text-xs text-white/30">
                No parameters defined.
              </div>
            ) : (
              <div className="space-y-2">
                {parameters.map((parameter, index) => (
                  <div
                    key={
                      parameter.id ??
                      `parameter-${index}`
                    }
                    className="grid grid-cols-[1fr_1fr_80px_32px] gap-2"
                  >
                    <input
                      value={parameter.name}
                      onChange={(event) =>
                        updateParameter(
                          index,
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="Name"
                      className="rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-xs text-white outline-none placeholder:text-white/25"
                    />

                    <input
                      value={parameter.value}
                      onChange={(event) =>
                        updateParameter(
                          index,
                          "value",
                          event.target.value
                        )
                      }
                      placeholder="Value"
                      className="rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-xs text-white outline-none placeholder:text-white/25"
                    />

                    <input
                      value={parameter.unit ?? ""}
                      onChange={(event) =>
                        updateParameter(
                          index,
                          "unit",
                          event.target.value
                        )
                      }
                      placeholder="Unit"
                      className="rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-xs text-white outline-none placeholder:text-white/25"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeParameter(index)
                      }
                      className="rounded-lg text-white/30 hover:bg-white/10 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
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
              {initialData
                ? "Save Changes"
                : "Create System"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}