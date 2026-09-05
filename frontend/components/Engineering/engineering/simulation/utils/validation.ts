import type { SimulationState } from "../types/simulation";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateSimulation(
  state: SimulationState,
): ValidationResult {
  const errors: string[] = [];

  if (!state.material) {
    errors.push("A material must be selected.");
  }

  if (state.mesh.elementSize <= 0) {
    errors.push("Mesh element size must be greater than zero.");
  }

  if (state.loads.length === 0) {
    errors.push("At least one load is required.");
  }

  if (state.constraints.length === 0) {
    errors.push("At least one constraint is required.");
  }

  for (const load of state.loads) {
    if (!Number.isFinite(load.value) || load.value <= 0) {
      errors.push(
        `Load ${load.id} must have a value greater than zero.`,
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}