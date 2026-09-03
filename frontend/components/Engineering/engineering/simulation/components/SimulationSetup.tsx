"use client";

import type {
  AnalysisType,
  ConstraintType,
  MaterialType,
  MeshSettings,
  SimulationConstraint,
  SimulationLoad,
} from "../types/simulation";

interface SimulationSetupProps {
  analysisType: AnalysisType;
  material: MaterialType;
  mesh: MeshSettings;
  loads: SimulationLoad[];
  constraints: SimulationConstraint[];

  onAnalysisTypeChange: (value: AnalysisType) => void;
  onMaterialChange: (value: MaterialType) => void;
  onMeshChange: (value: Partial<MeshSettings>) => void;

  onAddLoad: () => void;
  onUpdateLoad: (
    id: string,
    updates: Partial<SimulationLoad>
  ) => void;
  onRemoveLoad: (id: string) => void;

  onAddConstraint: () => void;
  onUpdateConstraint: (
    id: string,
    updates: Partial<SimulationConstraint>
  ) => void;
  onRemoveConstraint: (id: string) => void;
}

const inputClass =
  "h-8 w-full rounded-md border border-white/10 bg-white/[0.04] px-2.5 text-xs text-white outline-none transition focus:border-white/25";

const selectClass =
  "h-8 w-full rounded-md border border-white/10 bg-[#11151a] px-2.5 text-xs text-white outline-none transition focus:border-white/25";

export default function SimulationSetup({
  analysisType,
  material,
  mesh,
  loads,
  constraints,
  onAnalysisTypeChange,
  onMaterialChange,
  onMeshChange,
  onAddLoad,
  onUpdateLoad,
  onRemoveLoad,
  onAddConstraint,
  onUpdateConstraint,
  onRemoveConstraint,
}: SimulationSetupProps) {
  return (
    <aside className="flex w-64 shrink-0 flex-col overflow-hidden border-r border-white/10 bg-[#0d1014]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="text-xs font-medium text-white">
          Simulation Setup
        </div>
        <div className="mt-1 text-[11px] text-white/35">
          Define the analysis and boundary conditions.
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <section className="mb-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
            Analysis
          </div>

          <label className="mb-1.5 block text-[11px] text-white/50">
            Type
          </label>

          <select
            value={analysisType}
            onChange={(event) =>
              onAnalysisTypeChange(
                event.target.value as AnalysisType
              )
            }
            className={selectClass}
          >
            <option value="static-structural">
              Static Structural
            </option>
            <option value="thermal">Thermal</option>
            <option value="modal">Modal</option>
            <option value="transient">Transient</option>
            <option value="fluid">Fluid Flow</option>
          </select>
        </section>

        <section className="mb-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
            Material
          </div>

          <label className="mb-1.5 block text-[11px] text-white/50">
            Material
          </label>

          <select
            value={material}
            onChange={(event) =>
              onMaterialChange(
                event.target.value as MaterialType
              )
            }
            className={selectClass}
          >
            <option value="aluminum">Aluminum 6061-T6</option>
            <option value="steel">Carbon Steel</option>
            <option value="stainless-steel">
              Stainless Steel 304
            </option>
            <option value="titanium">Titanium Ti-6Al-4V</option>
            <option value="carbon-fiber">Carbon Fiber</option>
          </select>
        </section>

        <section className="mb-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
            Mesh
          </div>

          <div className="mb-3">
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-[11px] text-white/50">
                Element Size
              </label>

              <span className="text-[10px] text-white/30">
                mm
              </span>
            </div>

            <input
              type="number"
              min="0.1"
              step="0.5"
              value={mesh.elementSize}
              onChange={(event) =>
                onMeshChange({
                  elementSize: Number(event.target.value),
                })
              }
              className={inputClass}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1.5 block text-[11px] text-white/50">
              Quality
            </label>

            <select
              value={mesh.quality}
              onChange={(event) =>
                onMeshChange({
                  quality: event.target.value as MeshSettings["quality"],
                })
              }
              className={selectClass}
            >
              <option value="coarse">Coarse</option>
              <option value="medium">Medium</option>
              <option value="fine">Fine</option>
            </select>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-[11px] text-white/55">
            <input
              type="checkbox"
              checked={mesh.adaptive}
              onChange={(event) =>
                onMeshChange({
                  adaptive: event.target.checked,
                })
              }
              className="h-3.5 w-3.5 accent-white"
            />
            Adaptive refinement
          </label>
        </section>

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
              Loads
            </div>

            <button
              type="button"
              onClick={onAddLoad}
              className="text-[11px] text-white/45 transition hover:text-white"
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {loads.map((load) => (
              <div
                key={load.id}
                className="rounded-md border border-white/10 bg-white/[0.025] p-2.5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] text-white/65">
                    {load.type === "force"
                      ? "Force"
                      : load.type === "pressure"
                        ? "Pressure"
                        : load.type === "gravity"
                          ? "Gravity"
                          : "Torque"}
                  </span>

                  <button
                    type="button"
                    onClick={() => onRemoveLoad(load.id)}
                    className="text-[11px] text-white/25 hover:text-white/70"
                  >
                    ×
                  </button>
                </div>

                <div className="mb-2 grid grid-cols-[1fr_70px] gap-2">
                  <input
                    type="number"
                    value={load.value}
                    onChange={(event) =>
                      onUpdateLoad(load.id, {
                        value: Number(event.target.value),
                      })
                    }
                    className={inputClass}
                  />

                  <select
                    value={load.unit}
                    onChange={(event) =>
                      onUpdateLoad(load.id, {
                        unit: event.target.value,
                      })
                    }
                    className={selectClass}
                  >
                    <option value="N">N</option>
                    <option value="kN">kN</option>
                    <option value="Pa">Pa</option>
                    <option value="kPa">kPa</option>
                    <option value="Nm">N·m</option>
                  </select>
                </div>

                <select
                  value={load.direction}
                  onChange={(event) =>
                    onUpdateLoad(load.id, {
                      direction:
                        event.target.value as SimulationLoad["direction"],
                    })
                  }
                  className={selectClass}
                >
                  <option value="x">X Direction</option>
                  <option value="y">Y Direction</option>
                  <option value="z">Z Direction</option>
                </select>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
              Constraints
            </div>

            <button
              type="button"
              onClick={onAddConstraint}
              className="text-[11px] text-white/45 transition hover:text-white"
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {constraints.map((constraint) => (
              <div
                key={constraint.id}
                className="rounded-md border border-white/10 bg-white/[0.025] p-2.5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] text-white/65">
                    Constraint
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onRemoveConstraint(constraint.id)
                    }
                    className="text-[11px] text-white/25 hover:text-white/70"
                  >
                    ×
                  </button>
                </div>

                <select
                  value={constraint.type}
                  onChange={(event) =>
                    onUpdateConstraint(constraint.id, {
                      type:
                        event.target.value as ConstraintType,
                    })
                  }
                  className={`${selectClass} mb-2`}
                >
                  <option value="fixed">Fixed</option>
                  <option value="pinned">Pinned</option>
                  <option value="roller">Roller</option>
                </select>

                <input
                  value={constraint.location}
                  onChange={(event) =>
                    onUpdateConstraint(constraint.id, {
                      location: event.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="Location"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}