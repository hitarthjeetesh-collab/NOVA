import type { Constraint, Priority } from "../types/planning";
import { controlClassName, secondaryButtonClassName, removeButtonClassName } from "../constants";
import { SectionHeading } from "./ui/SectionHeading";
import { EmptyState } from "./ui/EmptyState";
import { PriorityMap } from "./PriorityMap";

export interface SurveyProps {
  mainGoal: string;
  setMainGoal: (value: string) => void;
  constraints: Constraint[];
  priorities: Priority[];
  onAddConstraint: () => void;
  onRemoveConstraint: (id: string) => void;
  onAddPriority: () => void;
  onRemovePriority: (id: string) => void;
  onUpdatePriorityWeight: (id: string, weight: number) => void;
}

export function Survey({
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
            setMainGoal(
              event.target.value
            )
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
            className={
              secondaryButtonClassName
            }
          >
            + Add Constraint
          </button>
        </div>

        {constraints.length === 0 ? (
          <EmptyState text="No hard constraints added yet." />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {constraints.map(
              (constraint) => (
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
                    className={
                      removeButtonClassName
                    }
                  >
                    ×
                  </button>
                </div>
              )
            )}
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
            className={
              secondaryButtonClassName
            }
          >
            + Add Priority
          </button>
        </div>

        <PriorityMap
          priorities={priorities}
          onUpdateWeight={
            onUpdatePriorityWeight
          }
          onRemove={onRemovePriority}
        />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map(
            (priority) => (
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
                      {
                        priority.description
                      }
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onRemovePriority(
                        priority.id
                      )
                    }
                    disabled={
                      priorities.length <=
                      3
                    }
                    className={`text-xs ${
                      priorities.length <=
                      3
                        ? "cursor-not-allowed text-white/10"
                        : "text-white/30 hover:text-white"
                    }`}
                  >
                    ×
                  </button>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-[11px] text-white/30">
                    <span>
                      Importance
                    </span>

                    <span>
                      {Math.round(
                        priority.weight
                      )}
                      %
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={Math.round(
                      priority.weight
                    )}
                    onChange={(event) =>
                      onUpdatePriorityWeight(
                        priority.id,
                        Number(
                          event.target
                            .value
                        )
                      )
                    }
                    className="w-full accent-white"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
