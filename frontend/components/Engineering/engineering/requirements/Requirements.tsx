"use client";

import { useState } from "react";
import RequirementCard from "../requirements/RequirementCard";
import RequirementModal, {
  RequirementFormData,
} from "../requirements/RequirementModal";

interface Requirement {
  id: string;
  name: string;
  value: string;
  category: string;
  priority: "Required" | "Preferred";
  description: string;
}

const initialRequirements: Requirement[] = [
  {
    id: "1",
    name: "Maximum mass",
    value: "≤ 25 kg",
    category: "Mechanical",
    priority: "Required",
    description: "The complete system must not exceed 25 kg.",
  },
  {
    id: "2",
    name: "Maximum speed",
    value: "≥ 5 m/s",
    category: "Performance",
    priority: "Required",
    description:
      "The system must be capable of reaching at least 5 m/s.",
  },
  {
    id: "3",
    name: "Operating time",
    value: "≥ 2 hours",
    category: "Electrical",
    priority: "Required",
    description: "The system must operate for at least 2 hours.",
  },
];

export default function Requirements() {
  const [requirements, setRequirements] =
    useState<Requirement[]>(initialRequirements);

  const [modalOpen, setModalOpen] = useState(false);

  const [editingRequirement, setEditingRequirement] =
    useState<Requirement | undefined>();

  function openAddModal() {
    setEditingRequirement(undefined);
    setModalOpen(true);
  }

  function openEditModal(requirement: Requirement) {
    setEditingRequirement(requirement);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingRequirement(undefined);
  }

  function handleSubmit(data: RequirementFormData) {
    if (editingRequirement) {
      setRequirements((current) =>
        current.map((requirement) =>
          requirement.id === editingRequirement.id
            ? {
                ...requirement,
                ...data,
              }
            : requirement,
        ),
      );
    } else {
      setRequirements((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          ...data,
        },
      ]);
    }

    closeModal();
  }

  function deleteRequirement(id: string) {
    setRequirements((current) =>
      current.filter((requirement) => requirement.id !== id),
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-4xl p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Requirements
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Define the constraints and goals for your system.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddModal}
            className="shrink-0 rounded-lg bg-[var(--aevra-accent)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--aevra-accent-hover)]"
          >
            + Add Requirement
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {requirements.map((requirement) => (
            <RequirementCard
              key={requirement.id}
              requirement={requirement}
              onEdit={openEditModal}
              onDelete={deleteRequirement}
            />
          ))}
        </div>

        {requirements.length === 0 && (
          <div className="mt-8 rounded-xl border border-dashed border-white/10 p-12 text-center">
            <p className="text-sm text-white/40">
              No requirements yet.
            </p>

            <button
              type="button"
              onClick={openAddModal}
              className="mt-4 rounded-lg bg-[var(--aevra-accent)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--aevra-accent-hover)]"
            >
              Add Requirement
            </button>
          </div>
        )}
      </div>

      <RequirementModal
        open={modalOpen}
        requirement={editingRequirement}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}