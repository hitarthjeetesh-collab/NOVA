"use client";

import type {
  OptimizationConstraint,
  OptimizationConstraintType,
  OptimizationMethod,
  OptimizationObjective,
  OptimizationSettings,
  OptimizationVariable,
} from "../types/optimization";

interface OptimizationSetupProps {
  method: OptimizationMethod;
  settings: OptimizationSettings;
  objectives: OptimizationObjective[];
  constraints: OptimizationConstraint[];
  variables: OptimizationVariable[];
  onMethodChange: (value: OptimizationMethod) => void;
  onSettingsChange: (
    value: Partial<OptimizationSettings>,
  ) => void;
  onAddObjective: () => void;
  onUpdateObjective: (
    id: string,
    updates: Partial<OptimizationObjective>,
  ) => void;
  onRemoveObjective: (id: string) => void;
  onAddConstraint: () => void;
  onUpdateConstraint: (
    id: string,
    updates: Partial<OptimizationConstraint>,
  ) => void;
  onRemoveConstraint: (id: string) => void;
  onAddVariable: () => void;
  onUpdateVariable: (
    id: string,
    updates: Partial<OptimizationVariable>,
  ) => void;
  onRemoveVariable: (id: string) => void;
}

const inputClass =
  "h-8 w-full rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_4%,transparent)] px-2.5 text-xs text-[var(--aevra-text)] outline-none transition focus:border-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]";

const selectClass =
  "h-8 w-full rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] px-2.5 text-xs text-[var(--aevra-text)] outline-none transition focus:border-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]";

export default function OptimizationSetup({
  method,
  settings,
  objectives,
  constraints,
  variables,
  onMethodChange,
  onSettingsChange,
  onAddObjective,
  onUpdateObjective,
  onRemoveObjective,
  onAddConstraint,
  onUpdateConstraint,
  onRemoveConstraint,
  onAddVariable,
  onUpdateVariable,
  onRemoveVariable,
}: OptimizationSetupProps) {
  return (
    <aside className="flex w-64 shrink-0 flex-col overflow-hidden border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-3">
        <div className="text-xs font-medium text-[var(--aevra-text)]">
          Optimization Setup
        </div>

        <div className="mt-1 text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_35%,transparent)]">
          Define how the design should be improved.
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <section className="mb-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Method
          </div>

          <label className="mb-1.5 block text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
            Optimization
          </label>

          <select
            value={method}
            onChange={(event) =>
              onMethodChange(
                event.target.value as OptimizationMethod,
              )
            }
            className={selectClass}
          >
            <option value="topology">
              Topology Optimization
            </option>
            <option value="shape">
              Shape Optimization
            </option>
            <option value="parameter">
              Parameter Optimization
            </option>
          </select>
        </section>

        <section className="mb-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Solver
          </div>

          <div className="mb-3">
            <label className="mb-1.5 block text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
              Max Iterations
            </label>

            <input
              type="number"
              min="1"
              step="1"
              value={settings.maxIterations}
              onChange={(event) =>
                onSettingsChange({
                  maxIterations: Number(event.target.value),
                })
              }
              className={inputClass}
            />
          </div>

          <div className="mb-3">
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
                Convergence
              </label>

              <span className="text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
                %
              </span>
            </div>

            <input
              type="number"
              min="0.01"
              step="0.1"
              value={settings.convergenceTolerance}
              onChange={(event) =>
                onSettingsChange({
                  convergenceTolerance: Number(
                    event.target.value,
                  ),
                })
              }
              className={inputClass}
            />
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_55%,transparent)]">
            <input
              type="checkbox"
              checked={settings.preserveMass}
              onChange={(event) =>
                onSettingsChange({
                  preserveMass: event.target.checked,
                })
              }
              className="h-3.5 w-3.5 accent-[var(--aevra-text)]"
            />

            Preserve mass
          </label>
        </section>

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
              Objectives
            </div>

            <button
              type="button"
              onClick={onAddObjective}
              className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] transition hover:text-[var(--aevra-text)]"
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {objectives.map((objective) => (
              <div
                key={objective.id}
                className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] p-2.5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_65%,transparent)]">
                    Objective
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onRemoveObjective(objective.id)
                    }
                    className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
                  >
                    ×
                  </button>
                </div>

                <select
                  value={objective.type}
                  onChange={(event) =>
                    onUpdateObjective(objective.id, {
                      type: event.target
                        .value as OptimizationObjective["type"],
                    })
                  }
                  className={`${selectClass} mb-2`}
                >
                  <option value="minimize-mass">
                    Minimize Mass
                  </option>
                  <option value="minimize-volume">
                    Minimize Volume
                  </option>
                  <option value="minimize-stress">
                    Minimize Stress
                  </option>
                  <option value="minimize-displacement">
                    Minimize Displacement
                  </option>
                  <option value="maximize-safety-factor">
                    Maximize Safety Factor
                  </option>
                </select>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={objective.weight}
                    onChange={(event) =>
                      onUpdateObjective(objective.id, {
                        weight: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className={inputClass}
                  />

                  <span className="shrink-0 text-[10px] text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
                    Weight
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
              Constraints
            </div>

            <button
              type="button"
              onClick={onAddConstraint}
              className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] transition hover:text-[var(--aevra-text)]"
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {constraints.map((constraint) => (
              <div
                key={constraint.id}
                className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] p-2.5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_65%,transparent)]">
                    Constraint
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onRemoveConstraint(constraint.id)
                    }
                    className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
                  >
                    ×
                  </button>
                </div>

                <select
                  value={constraint.type}
                  onChange={(event) =>
                    onUpdateConstraint(constraint.id, {
                      type: event.target
                        .value as OptimizationConstraintType,
                    })
                  }
                  className={`${selectClass} mb-2`}
                >
                  <option value="maximum-stress">
                    Maximum Stress
                  </option>
                  <option value="maximum-displacement">
                    Maximum Displacement
                  </option>
                  <option value="minimum-safety-factor">
                    Minimum Safety Factor
                  </option>
                  <option value="preserve-region">
                    Preserve Region
                  </option>
                </select>

                <div className="grid grid-cols-[1fr_65px] gap-2">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={constraint.value}
                    onChange={(event) =>
                      onUpdateConstraint(constraint.id, {
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className={inputClass}
                  />

                  <select
                    value={constraint.unit}
                    onChange={(event) =>
                      onUpdateConstraint(constraint.id, {
                        unit: event.target.value,
                      })
                    }
                    className={selectClass}
                  >
                    <option value="MPa">MPa</option>
                    <option value="mm">mm</option>
                    <option value="">—</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
              Variables
            </div>

            <button
              type="button"
              onClick={onAddVariable}
              className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_45%,transparent)] transition hover:text-[var(--aevra-text)]"
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {variables.map((variable) => (
              <div
                key={variable.id}
                className="rounded-md border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_2.5%,transparent)] p-2.5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_65%,transparent)]">
                    Variable
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onRemoveVariable(variable.id)
                    }
                    className="text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)] hover:text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)]"
                  >
                    ×
                  </button>
                </div>

                <input
                  value={variable.name}
                  onChange={(event) =>
                    onUpdateVariable(variable.id, {
                      name: event.target.value,
                    })
                  }
                  className={`${inputClass} mb-2`}
                  placeholder="Variable name"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={variable.minimum}
                    onChange={(event) =>
                      onUpdateVariable(variable.id, {
                        minimum: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className={inputClass}
                    placeholder="Min"
                  />

                  <input
                    type="number"
                    value={variable.maximum}
                    onChange={(event) =>
                      onUpdateVariable(variable.id, {
                        maximum: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className={inputClass}
                    placeholder="Max"
                  />
                </div>

                <div className="mt-2">
                  <select
                    value={variable.unit}
                    onChange={(event) =>
                      onUpdateVariable(variable.id, {
                        unit: event.target.value,
                      })
                    }
                    className={selectClass}
                  >
                    <option value="mm">mm</option>
                    <option value="deg">°</option>
                    <option value="N">N</option>
                    <option value="MPa">MPa</option>
                    <option value="">—</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}