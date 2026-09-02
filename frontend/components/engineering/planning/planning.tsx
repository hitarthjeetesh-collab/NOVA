"use client";

import { useMemo, useState } from "react";

type PlanningTab = "survey" | "brainstorm";

type Priority = {
  id: string;
  name: string;
  description: string;
  weight: number;
};

type Constraint = {
  id: string;
  name: string;
  value: string;
};

type ApproachStatus =
  | "Idea"
  | "Candidate"
  | "Preferred"
  | "Rejected"
  | "Needs Investigation";

type Approach = {
  id: string;
  name: string;
  reason: string;
  pros: string[];
  cons: string[];
  status: ApproachStatus;
};

const initialPriorities: Priority[] = [
  {
    id: "performance",
    name: "Performance",
    description: "Overall system performance",
    weight: 35,
  },
  {
    id: "reliability",
    name: "Reliability",
    description: "Dependability and failure resistance",
    weight: 30,
  },
  {
    id: "cost",
    name: "Cost",
    description: "Development and production cost",
    weight: 20,
  },
  {
    id: "simplicity",
    name: "Simplicity",
    description: "Design and implementation simplicity",
    weight: 15,
  },
];

const initialApproaches: Approach[] = [
  {
    id: "approach-1",
    name: "Approach 1",
    reason: "Initial concept to investigate.",
    pros: ["Simple starting point"],
    cons: ["Needs further investigation"],
    status: "Idea",
  },
];

const priorityColors = [
  "border-white/20",
  "border-white/30",
  "border-white/40",
  "border-white/50",
  "border-white/60",
  "border-white/70",
];

export default function Planning() {
  const [tab, setTab] = useState<PlanningTab>("survey");

  const [mainGoal, setMainGoal] = useState(
    "Define the main objective of the engineering project."
  );

  const [constraints, setConstraints] = useState<Constraint[]>([]);

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
        (approach) => approach.id === editingApproachId
      ),
    [approaches, editingApproachId]
  );

  function updatePriorityWeight(
    priorityId: string,
    weight: number
  ) {
    setPriorities((current) =>
      current.map((priority) =>
        priority.id === priorityId
          ? { ...priority, weight }
          : priority
      )
    );
  }

  function normalizePriorityWeights(
    values: Priority[]
  ) {
    const total = values.reduce(
      (sum, priority) => sum + priority.weight,
      0
    );

    if (total <= 0) {
      return values.map((priority) => ({
        ...priority,
        weight: Math.round(100 / values.length),
      }));
    }

    return values.map((priority) => ({
      ...priority,
      weight: Math.round(
        (priority.weight / total) * 100
      ),
    }));
  }

  function removePriority(priorityId: string) {
    if (priorities.length <= 3) {
      return;
    }

    setPriorities((current) =>
      normalizePriorityWeights(
        current.filter(
          (priority) => priority.id !== priorityId
        )
      )
    );
  }

  function removeConstraint(constraintId: string) {
    setConstraints((current) =>
      current.filter(
        (constraint) => constraint.id !== constraintId
      )
    );
  }

  function removeApproach(approachId: string) {
    setApproaches((current) =>
      current.filter(
        (approach) => approach.id !== approachId
      )
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
        (item) => item.id === approach.id
      );

      if (exists) {
        return current.map((item) =>
          item.id === approach.id
            ? approach
            : item
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
                ? "bg-white text-black"
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
                ? "bg-white text-black"
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
            onUpdatePriorityWeight={
              updatePriorityWeight
            }
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
          onClose={() =>
            setConstraintModalOpen(false)
          }
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
          onClose={() =>
            setPriorityModalOpen(false)
          }
          onSave={(priority) => {
            setPriorities((current) =>
              normalizePriorityWeights([
                ...current,
                priority,
              ])
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

interface SurveyProps {
  mainGoal: string;
  setMainGoal: (value: string) => void;
  constraints: Constraint[];
  priorities: Priority[];
  onAddConstraint: () => void;
  onRemoveConstraint: (id: string) => void;
  onAddPriority: () => void;
  onRemovePriority: (id: string) => void;
  onUpdatePriorityWeight: (
    id: string,
    weight: number
  ) => void;
}

function Survey({
  mainGoal,
  setMainGoal,
  constraints,
  priorities,
  onAddConstraint,
  onRemoveConstraint,
  onAddPriority,
  onRemovePriority,
  onUpdatePriorityWeight,
}: SurveyProps) {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeading
          title="Main Goal"
          description="What is the primary objective of this project?"
        />

        <textarea
          value={mainGoal}
          onChange={(event) =>
            setMainGoal(event.target.value)
          }
          rows={4}
          className={controlClassName}
          placeholder="Describe the main goal..."
        />
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <SectionHeading
            title="Hard Constraints"
            description="Requirements the final design should not violate."
          />

          <button
            type="button"
            onClick={onAddConstraint}
            className={secondaryButtonClassName}
          >
            + Add Constraint
          </button>
        </div>

        {constraints.length === 0 ? (
          <EmptyState text="No hard constraints added yet." />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {constraints.map((constraint) => (
              <div
                key={constraint.id}
                className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-[#111419] p-4"
              >
                <div>
                  <p className="text-sm font-medium">
                    {constraint.name}
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    {constraint.value}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onRemoveConstraint(
                      constraint.id
                    )
                  }
                  className={removeButtonClassName}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionHeading
            title="Design Priorities"
            description="Move the center point toward the factors that matter most."
          />

          <button
            type="button"
            onClick={onAddPriority}
            className={secondaryButtonClassName}
          >
            + Add Priority
          </button>
        </div>

        <PriorityMap
          priorities={priorities}
          onUpdateWeight={onUpdatePriorityWeight}
          onRemove={onRemovePriority}
        />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map((priority) => (
            <div
              key={priority.id}
              className="rounded-xl border border-white/10 bg-[#111419] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">
                    {priority.name}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/35">
                    {priority.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onRemovePriority(priority.id)
                  }
                  disabled={priorities.length <= 3}
                  className={`text-xs ${
                    priorities.length <= 3
                      ? "cursor-not-allowed text-white/10"
                      : "text-white/30 hover:text-white"
                  }`}
                >
                  ×
                </button>
              </div>

              <div className="mt-4">
                <div className="mb-2 flex justify-between text-[11px] text-white/30">
                  <span>Importance</span>
                  <span>{priority.weight}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priority.weight}
                  onChange={(event) =>
                    onUpdatePriorityWeight(
                      priority.id,
                      Number(event.target.value)
                    )
                  }
                  className="w-full accent-white"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

interface PriorityMapProps {
  priorities: Priority[];
  onUpdateWeight: (
    id: string,
    weight: number
  ) => void;
  onRemove: (id: string) => void;
}

function PriorityMap({
  priorities,
  onUpdateWeight,
  onRemove,
}: PriorityMapProps) {
  const size = 520;
  const center = size / 2;
  const radius = 190;

  const points = priorities.map(
    (priority, index) => {
      const angle =
        -Math.PI / 2 +
        (index / priorities.length) *
          Math.PI *
          2;

      return {
        priority,
        angle,
        x: center + Math.cos(angle) * radius,
        y: center + Math.sin(angle) * radius,
      };
    }
  );

  const totalWeight =
    priorities.reduce(
      (sum, priority) => sum + priority.weight,
      0
    ) || 1;

  const weightedCenter = priorities.reduce(
    (point, item, index) => {
      const current = points[index];
      const normalized =
        item.weight / totalWeight;

      return {
        x: point.x + current.x * normalized,
        y: point.y + current.y * normalized,
      };
    },
    { x: 0, y: 0 }
  );

  const polygonPoints = points
    .map(
      (point) =>
        `${point.x},${point.y}`
    )
    .join(" ");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f1115] p-6">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[560px]">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="h-auto w-full overflow-visible"
          >
            <polygon
              points={polygonPoints}
              fill="rgba(255,255,255,0.025)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
            />

            <circle
              cx={center}
              cy={center}
              r="3"
              fill="white"
            />

            {points.map((point) => (
              <g key={point.priority.id}>
                <line
                  x1={center}
                  y1={center}
                  x2={point.x}
                  y2={point.y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />

                <circle
                  cx={point.x}
                  cy={point.y}
                  r="7"
                  fill="#0f1115"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="2"
                />

                <foreignObject
                  x={point.x - 80}
                  y={
                    point.y < center
                      ? point.y - 55
                      : point.y + 15
                  }
                  width="160"
                  height="65"
                >
                  <div className="text-center">
                    <p className="truncate text-xs font-medium text-white/80">
                      {point.priority.name}
                    </p>

                    <p className="mt-1 text-[10px] text-white/30">
                      {point.priority.weight}%
                    </p>
                  </div>
                </foreignObject>

                <circle
                  cx={point.x}
                  cy={point.y}
                  r="18"
                  fill="transparent"
                  className="cursor-pointer"
                  onClick={() =>
                    onRemove(point.priority.id)
                  }
                />
              </g>
            ))}

            <circle
              cx={weightedCenter.x}
              cy={weightedCenter.y}
              r="11"
              fill="white"
              className="cursor-default"
            />

            <circle
              cx={weightedCenter.x}
              cy={weightedCenter.y}
              r="18"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
            />
          </svg>
        </div>

        <p className="mt-2 text-center text-xs text-white/30">
          The center point represents the current balance of
          your design priorities.
        </p>

        <div className="mt-5 w-full max-w-xl">
          <p className="mb-3 text-xs font-medium text-white/50">
            Adjust priorities
          </p>

          <div className="space-y-3">
            {priorities.map((priority, index) => (
              <div
                key={priority.id}
                className="grid grid-cols-[10px_1fr_auto] items-center gap-3"
              >
                <span
                  className={`h-2 w-2 rounded-full border ${
                    priorityColors[
                      index % priorityColors.length
                    ]
                  }`}
                />

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priority.weight}
                  onChange={(event) =>
                    onUpdateWeight(
                      priority.id,
                      Number(event.target.value)
                    )
                  }
                  className="w-full accent-white"
                />

                <span className="w-10 text-right text-xs text-white/40">
                  {priority.weight}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface BrainstormingProps {
  approaches: Approach[];
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function Brainstorming({
  approaches,
  onAdd,
  onEdit,
  onDelete,
}: BrainstormingProps) {
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4">
        <SectionHeading
          title="Approaches"
          description="Explore different ways the system could achieve its goal."
        />

        <button
          type="button"
          onClick={onAdd}
          className={primaryButtonClassName}
        >
          + Add Approach
        </button>
      </div>

      {approaches.length === 0 ? (
        <EmptyState text="No approaches yet. Start brainstorming by adding one." />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {approaches.map((approach) => (
            <ApproachCard
              key={approach.id}
              approach={approach}
              onEdit={() => onEdit(approach.id)}
              onDelete={() =>
                onDelete(approach.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ApproachCardProps {
  approach: Approach;
  onEdit: () => void;
  onDelete: () => void;
}

function ApproachCard({
  approach,
  onEdit,
  onDelete,
}: ApproachCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111419] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold">
            {approach.name}
          </h3>

          <p className="mt-1 text-xs text-white/35">
            Approach concept
          </p>
        </div>

        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/50">
          {approach.status}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-white/25">
          Reason
        </p>

        <p className="mt-2 text-sm leading-6 text-white/55">
          {approach.reason ||
            "No reason provided."}
        </p>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/25">
            Pros
          </p>

          <ul className="mt-2 space-y-2">
            {approach.pros.length > 0 ? (
              approach.pros.map(
                (pro, index) => (
                  <li
                    key={`${pro}-${index}`}
                    className="text-xs leading-5 text-white/50"
                  >
                    + {pro}
                  </li>
                )
              )
            ) : (
              <li className="text-xs text-white/25">
                None added
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/25">
            Cons
          </p>

          <ul className="mt-2 space-y-2">
            {approach.cons.length > 0 ? (
              approach.cons.map(
                (con, index) => (
                  <li
                    key={`${con}-${index}`}
                    className="text-xs leading-5 text-white/50"
                  >
                    − {con}
                  </li>
                )
              )
            ) : (
              <li className="text-xs text-white/25">
                None added
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex gap-2 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={onEdit}
          className={secondaryButtonClassName}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={onDelete}
          className={secondaryButtonClassName}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

interface ConstraintModalProps {
  onClose: () => void;
  onSave: (constraint: Constraint) => void;
}

function ConstraintModal({
  onClose,
  onSave,
}: ConstraintModalProps) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function submit() {
    if (!name.trim()) {
      return;
    }

    onSave({
      id: crypto.randomUUID(),
      name: name.trim(),
      value: value.trim(),
    });
  }

  return (
    <Modal
      title="Add Constraint"
      onClose={onClose}
    >
      <Field label="Constraint">
        <input
          autoFocus
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          className={controlClassName}
          placeholder="Maximum mass"
        />
      </Field>

      <Field label="Value">
        <input
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          className={controlClassName}
          placeholder="20 kg"
        />
      </Field>

      <ModalActions
        onClose={onClose}
        onSave={submit}
        saveLabel="Add Constraint"
      />
    </Modal>
  );
}

interface PriorityModalProps {
  onClose: () => void;
  onSave: (priority: Priority) => void;
}

function PriorityModal({
  onClose,
  onSave,
}: PriorityModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  function submit() {
    if (!name.trim()) {
      return;
    }

    onSave({
      id: crypto.randomUUID(),
      name: name.trim(),
      description:
        description.trim() ||
        "Custom design priority",
      weight: 10,
    });
  }

  return (
    <Modal
      title="Add Priority"
      onClose={onClose}
    >
      <Field label="Priority">
        <input
          autoFocus
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          className={controlClassName}
          placeholder="Payload capacity"
        />
      </Field>

      <Field label="Description">
        <textarea
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          rows={3}
          className={controlClassName}
          placeholder="How important is this factor?"
        />
      </Field>

      <ModalActions
        onClose={onClose}
        onSave={submit}
        saveLabel="Add Priority"
      />
    </Modal>
  );
}

interface ApproachModalProps {
  approach?: Approach;
  onClose: () => void;
  onSave: (approach: Approach) => void;
}

function ApproachModal({
  approach,
  onClose,
  onSave,
}: ApproachModalProps) {
  const [name, setName] = useState(
    approach?.name ?? ""
  );

  const [reason, setReason] = useState(
    approach?.reason ?? ""
  );

  const [pros, setPros] = useState(
    approach?.pros.join("\n") ?? ""
  );

  const [cons, setCons] = useState(
    approach?.cons.join("\n") ?? ""
  );

  const [status, setStatus] =
    useState<ApproachStatus>(
      approach?.status ?? "Idea"
    );

  function submit() {
    if (!name.trim()) {
      return;
    }

    onSave({
      id:
        approach?.id ??
        crypto.randomUUID(),
      name: name.trim(),
      reason: reason.trim(),
      pros: pros
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      cons: cons
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      status,
    });
  }

  return (
    <Modal
      title={
        approach
          ? "Edit Approach"
          : "Add Approach"
      }
      onClose={onClose}
      wide
    >
      <Field label="Name">
        <input
          autoFocus
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          className={controlClassName}
          placeholder="Differential Drive"
        />
      </Field>

      <Field label="Status">
        <select
          value={status}
          onChange={(event) =>
            setStatus(
              event.target
                .value as ApproachStatus
            )
          }
          className={controlClassName}
        >
          <option>Idea</option>
          <option>Candidate</option>
          <option>Preferred</option>
          <option>Rejected</option>
          <option>Needs Investigation</option>
        </select>
      </Field>

      <Field label="Reason">
        <textarea
          value={reason}
          onChange={(event) =>
            setReason(event.target.value)
          }
          rows={4}
          className={controlClassName}
          placeholder="Why is this approach worth considering?"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Pros">
          <textarea
            value={pros}
            onChange={(event) =>
              setPros(event.target.value)
            }
            rows={6}
            className={controlClassName}
            placeholder={"Simple\nLow cost\nReliable"}
          />

          <p className="mt-2 text-[11px] text-white/25">
            One item per line.
          </p>
        </Field>

        <Field label="Cons">
          <textarea
            value={cons}
            onChange={(event) =>
              setCons(event.target.value)
            }
            rows={6}
            className={controlClassName}
            placeholder={"Limited mobility\nHigher mass"}
          />

          <p className="mt-2 text-[11px] text-white/25">
            One item per line.
          </p>
        </Field>
      </div>

      <ModalActions
        onClose={onClose}
        onSave={submit}
        saveLabel={
          approach
            ? "Save Changes"
            : "Add Approach"
        }
      />
    </Modal>
  );
}

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  wide?: boolean;
}

function Modal({
  title,
  onClose,
  children,
  wide = false,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div
        className={`w-full ${
          wide ? "max-w-3xl" : "max-w-lg"
        } max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f1115] shadow-2xl`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-sm font-semibold">
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="text-lg text-white/30 transition hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ModalActionsProps {
  onClose: () => void;
  onSave: () => void;
  saveLabel: string;
}

function ModalActions({
  onClose,
  onSave,
  saveLabel,
}: ModalActionsProps) {
  return (
    <div className="flex justify-end gap-2 border-t border-white/10 pt-5">
      <button
        type="button"
        onClick={onClose}
        className={secondaryButtonClassName}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={onSave}
        className={primaryButtonClassName}
      >
        {saveLabel}
      </button>
    </div>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({
  label,
  children,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-white/50">
        {label}
      </span>

      {children}
    </label>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-white/35">
        {description}
      </p>
    </div>
  );
}

function EmptyState({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-white/10 bg-[#0f1115] px-6 py-10 text-center">
      <p className="text-sm text-white/30">
        {text}
      </p>
    </div>
  );
}

const controlClassName =
  "w-full rounded-lg border border-white/10 bg-[#15191f] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/25";

const primaryButtonClassName =
  "rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90";

const secondaryButtonClassName =
  "rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50 transition hover:bg-white/5 hover:text-white";

const removeButtonClassName =
  "text-lg leading-none text-white/25 transition hover:text-white";