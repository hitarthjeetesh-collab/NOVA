import type { OptimizationState } from "../types/optimization";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateOptimization(
  state: OptimizationState
): ValidationResult {
  const errors: string[] = [];

  if (state.objectives.length === 0) {
    errors.push("At least one optimization objective is required.");
  }

  if (state.constraints.length === 0) {
    errors.push("At least one optimization constraint is required.");
  }

  if (state.settings.maxIterations <= 0) {
    errors.push("Maximum iterations must be greater than zero.");
  }

  if (state.settings.convergenceTolerance <= 0) {
    errors.push(
      "Convergence tolerance must be greater than zero."
    );
  }

  for (const objective of state.objectives) {
    if (
      !Number.isFinite(objective.weight) ||
      objective.weight <= 0
    ) {
      errors.push(
        `Objective ${objective.id} must have a weight greater than zero.`
      );
    }
  }

  for (const constraint of state.constraints) {
    if (
      !Number.isFinite(constraint.value) ||
      constraint.value <= 0
    ) {
      errors.push(
        `Constraint ${constraint.id} must have a value greater than zero.`
      );
    }
  }

  for (const variable of state.variables) {
    if (
      !Number.isFinite(variable.minimum) ||
      !Number.isFinite(variable.maximum)
    ) {
      errors.push(
        `Variable ${variable.id} must have valid bounds.`
      );
    }

    if (variable.minimum >= variable.maximum) {
      errors.push(
        `Variable ${variable.id} must have a minimum below its maximum.`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}