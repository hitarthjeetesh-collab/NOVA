"use client";

import { FormEvent, useEffect, useState } from "react";

export interface SubsystemFormData {
  name: string;
  category: string;
  description: string;
  elements: string[];
  status: "Defined" | "Needs Work";
}

interface Subsystem {
  id: string;
  name: string;
  category: string;
  description: string;
  elements: string[];
  status: "Defined" | "Needs Work";
}

interface SubsystemModalProps {
  open: boolean;
  subsystem?: Subsystem;
  onClose: () => void;
  onSubmit: (data: SubsystemFormData) => void;
}

export default function SubsystemModal({
  open,
  subsystem,
  onClose,
  onSubmit,
}: SubsystemModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Mechanical");
  const [description, setDescription] = useState("");
  const [elements, setElements] = useState("");
  const [status, setStatus] =
    useState<"Defined" | "Needs Work">("Defined");

  const editing = Boolean(subsystem);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (subsystem) {
      setName(subsystem.name);
      setCategory(subsystem.category);
      setDescription(subsystem.description);
      setElements(subsystem.elements.join(", "));
      setStatus(subsystem.status);
    } else {
      setName("");
      setCategory("Mechanical");
      setDescription("");
      setElements("");
      setStatus("Defined");
    }
  }, [open, subsystem]);

  if (!open) {
    return null;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    const parsedElements = elements
      .split(",")
      .map((element) => element.trim())
      .filter(Boolean);

    onSubmit({
      name: name.trim(),
      category,
      description: description.trim(),
      elements: parsedElements,
      status,
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
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[var(--aevra-surface)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-[var(--aevra-text)]">
              {editing ? "Edit Subsystem" : "Add Subsystem"}
            </h2>

            <p className="mt-1 text-xs text-[var(--aevra-text-muted)]">
              Define a major system within the architecture.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-[var(--aevra-text-muted)] transition hover:bg-white/10 hover:text-[var(--aevra-text)]"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm text-[var(--aevra-text-muted)]">
              Name
            </label>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Power System"
              autoFocus
              className="w-full rounded-lg border border-white/10 bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-white/25 focus:border-[var(--aevra-accent)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-[var(--aevra-text-muted)]">
              Category
            </label>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none focus:border-[var(--aevra-accent)]"
            >
              <option>Mechanical</option>
              <option>Electrical</option>
              <option>Computing</option>
              <option>Sensors</option>
              <option>Communications</option>
              <option>Software</option>
              <option>Thermal</option>
              <option>Control</option>
              <option>Safety</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-[var(--aevra-text-muted)]">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What does this subsystem do?"
              rows={3}
              className="w-full resize-none rounded-lg border border-white/10 bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-white/25 focus:border-[var(--aevra-accent)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-[var(--aevra-text-muted)]">
              Elements
            </label>

            <input
              value={elements}
              onChange={(event) => setElements(event.target.value)}
              placeholder="Battery, BMS, Power Distribution"
              className="w-full rounded-lg border border-white/10 bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-white/25 focus:border-[var(--aevra-accent)]"
            />

            <p className="mt-1 text-xs text-white/25">
              Separate elements with commas.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm text-[var(--aevra-text-muted)]">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as "Defined" | "Needs Work"
                )
              }
              className="w-full rounded-lg border border-white/10 bg-[var(--aevra-background)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none focus:border-[var(--aevra-accent)]"
            >
              <option>Defined</option>
              <option>Needs Work</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm text-[var(--aevra-text-muted)] transition hover:bg-white/5 hover:text-[var(--aevra-text)]"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!name.trim()}
              className="rounded-lg bg-[var(--aevra-accent)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--aevra-accent-hover)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {editing ? "Save Changes" : "Add Subsystem"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}