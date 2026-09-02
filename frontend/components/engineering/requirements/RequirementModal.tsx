"use client";

import { FormEvent, useEffect, useState } from "react";

export interface RequirementFormData {
  name: string;
  value: string;
  category: string;
  priority: "Required" | "Preferred";
  description: string;
}

interface RequirementModalProps {
  open: boolean;
  requirement?: RequirementFormData & { id: string };
  onClose: () => void;
  onSubmit: (data: RequirementFormData) => void;
}

export default function RequirementModal({
  open,
  requirement,
  onClose,
  onSubmit,
}: RequirementModalProps) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("Mechanical");
  const [priority, setPriority] =
    useState<"Required" | "Preferred">("Required");
  const [description, setDescription] = useState("");

  const editing = Boolean(requirement);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (requirement) {
      setName(requirement.name);
      setValue(requirement.value);
      setCategory(requirement.category);
      setPriority(requirement.priority);
      setDescription(requirement.description);
    } else {
      setName("");
      setValue("");
      setCategory("Mechanical");
      setPriority("Required");
      setDescription("");
    }
  }, [open, requirement]);

  if (!open) {
    return null;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!name.trim() || !value.trim()) {
      return;
    }

    onSubmit({
      name: name.trim(),
      value: value.trim(),
      category,
      priority,
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
              {editing ? "Edit Requirement" : "Add Requirement"}
            </h2>

            <p className="mt-1 text-xs text-white/40">
              {editing
                ? "Update this system requirement."
                : "Define a constraint or goal for the system."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-white/40 transition hover:bg-white/10 hover:text-white"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm text-white/60">
              Name
            </label>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Maximum payload"
              autoFocus
              className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Value / Constraint
            </label>

            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="≤ 10 kg"
              className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                Category
              </label>

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
              >
                <option>Mechanical</option>
                <option>Electrical</option>
                <option>Performance</option>
                <option>Software</option>
                <option>Thermal</option>
                <option>Safety</option>
                <option>Environmental</option>
                <option>Manufacturing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                Priority
              </label>

              <select
                value={priority}
                onChange={(event) =>
                  setPriority(
                    event.target.value as "Required" | "Preferred"
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
              >
                <option>Required</option>
                <option>Preferred</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Explain why this requirement exists..."
              rows={3}
              className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
            />
          </div>

          <div className="flex justify-end gap-2 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!name.trim() || !value.trim()}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {editing ? "Save Changes" : "Add Requirement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}