"use client";

import { useMemo, useState } from "react";
import type {
  Approach,
  Constraint,
  PlanningTab,
  Priority,
} from "./types/planning";
import { initialApproaches, initialPriorities } from "./constants";
import { normalizePriorityWeights } from "./utils/priorityWeights";
import { Survey } from "./components/Survey";
import { Brainstorming } from "./components/Brainstorming";
import { ConstraintModal } from "./components/modals/ConstraintModal";
import { PriorityModal } from "./components/modals/PriorityModal";
import { ApproachModal } from "./components/modals/ApproachModal";

export default function Planning() {
  const [tab, setTab] = useState<PlanningTab>("survey");

  const [mainGoal, setMainGoal] = useState(
    "Define the main objective of the engineering project.",
  );

  const [constraints, setConstraints] =
    useState<Constraint[]>([]);

  const [priorities, setPriorities] =
    useState<Priority[]>(initialPriorities);

  const [approaches, setApproaches] =
    useState<Approach[]>(initialApproaches);

  const [constraintModalOpen, setConstraintModalOpen] =
    useState(false);

  const [priorityModalOpen, setPriorityModalOpen] =
    useState(false);

  const [approachModalOpen, setApproachModalOpen] =
    useState(false);

  const [editingApproachId, setEditingApproachId] =
    useState<string | null>(null);

  const selectedApproach = useMemo(
    () =>
      approaches.find(
        (approach) => approach.id === editingApproachId,
      ),
    [approaches, editingApproachId],
  );

  function updatePriorityWeight(
    priorityId: string,
    weight: number,
  ) {
    setPriorities((current) =>
      current.map((priority) =>
        priority.id === priorityId
          ? { ...priority, weight }
          : priority,
      ),
    );
  }

  function removePriority(priorityId: string) {
    if (priorities.length <= 3) return;

    setPriorities((current) =>
      normalizePriorityWeights(
        current.filter(
          (priority) => priority.id !== priorityId,
        ),
      ),
    );
  }

  function removeConstraint(constraintId: string) {
    setConstraints((current) =>
      current.filter(
        (constraint) => constraint.id !== constraintId,
      ),
    );
  }

  function removeApproach(approachId: string) {
    setApproaches((current) =>
      current.filter(
        (approach) => approach.id !== approachId,
      ),
    );
  }

  function openNewApproach() {
    setEditingApproachId(null);
    setApproachModalOpen(true);
  }

  function openEditApproach(approachId: string) {
    setEditingApproachId(approachId);
    setApproachModalOpen(true);
  }

  function saveApproach(approach: Approach) {
    setApproaches((current) => {
      const exists = current.some(
        (item) => item.id === approach.id,
      );

      if (exists) {
        return current.map((item) =>
          item.id === approach.id ? approach : item,
        );
      }

      return [...current, approach];
    });

    setApproachModalOpen(false);
    setEditingApproachId(null);
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Planning
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
            Define what matters, explore possible approaches,
            and establish a design direction before building
            the system architecture.
          </p>
        </div>

        <div className="mb-8 flex gap-1 rounded-lg border border-white/10 bg-[#0f1115] p-1">
          <button
            type="button"
            onClick={() => setTab("survey")}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm transition ${
              tab === "survey"
                ? "bg-[var(--aevra-accent)] text-white"
                : "text-white/50 hover:bg-white/5 hover:text-white"
            }`}
          >
            Survey
          </button>

          <button
            type="button"
            onClick={() => setTab("brainstorm")}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm transition ${
              tab === "brainstorm"
                ? "bg-[var(--aevra-accent)] text-white"
                : "text-white/50 hover:bg-white/5 hover:text-white"
            }`}
          >
            Brainstorming
          </button>
        </div>

        {tab === "survey" && (
          <Survey
            mainGoal={mainGoal}
            setMainGoal={setMainGoal}
            constraints={constraints}
            priorities={priorities}
            onAddConstraint={() =>
              setConstraintModalOpen(true)
            }
            onRemoveConstraint={removeConstraint}
            onAddPriority={() =>
              setPriorityModalOpen(true)
            }
            onRemovePriority={removePriority}
            onUpdatePriorityWeight={updatePriorityWeight}
          />
        )}

        {tab === "brainstorm" && (
          <Brainstorming
            approaches={approaches}
            onAdd={openNewApproach}
            onEdit={openEditApproach}
            onDelete={removeApproach}
          />
        )}
      </div>

      {constraintModalOpen && (
        <ConstraintModal
          onClose={() => setConstraintModalOpen(false)}
          onSave={(constraint) => {
            setConstraints((current) => [
              ...current,
              constraint,
            ]);

            setConstraintModalOpen(false);
          }}
        />
      )}

      {priorityModalOpen && (
        <PriorityModal
          onClose={() => setPriorityModalOpen(false)}
          onSave={(priority) => {
            setPriorities((current) =>
              normalizePriorityWeights([
                ...current,
                priority,
              ]),
            );

            setPriorityModalOpen(false);
          }}
        />
      )}

      {approachModalOpen && (
        <ApproachModal
          approach={selectedApproach}
          onClose={() => {
            setApproachModalOpen(false);
            setEditingApproachId(null);
          }}
          onSave={saveApproach}
        />
      )}
    </div>
  );
}