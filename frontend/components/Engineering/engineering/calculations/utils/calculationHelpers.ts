import type {
  Calculation,
  CalculationInput,
  CalculationResult,
  ValidationItem,
} from "../types/calculations";

export function getInput(
  calculation: Calculation,
  id: string,
): CalculationInput | undefined {
  return calculation.inputs.find((input) => input.id === id);
}

export function getInputValue(
  calculation: Calculation,
  id: string,
): number {
  return getInput(calculation, id)?.value ?? 0;
}

export function calculateResult(
  calculation: Calculation,
): CalculationResult {
  const value = calculation.inputs.reduce((result, input) => {
    return result + input.value;
  }, 0);

  return {
    ...calculation.result,
    value,
  };
}

export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "—";
  }

  if (Math.abs(value) >= 1000 || Math.abs(value) < 0.001) {
    return value.toExponential(3);
  }

  return Number(value.toFixed(4)).toLocaleString("en-US");
}

export function validateCalculation(
  calculation: Calculation,
): ValidationItem[] {
  return calculation.inputs.map((input) => {
    if (!Number.isFinite(input.value)) {
      return {
        label: input.name,
        status: "error",
        message: "Input must be a valid number.",
      };
    }

    if (input.min !== undefined && input.value < input.min) {
      return {
        label: input.name,
        status: "error",
        message: `Value must be at least ${input.min} ${input.unit}.`,
      };
    }

    if (input.max !== undefined && input.value > input.max) {
      return {
        label: input.name,
        status: "warning",
        message: `Value exceeds the recommended maximum of ${input.max} ${input.unit}.`,
      };
    }

    if (input.value < 0) {
      return {
        label: input.name,
        status: "warning",
        message: "Negative input should be verified for this calculation.",
      };
    }

    return {
      label: input.name,
      status: "pass",
      message: "Input is valid.",
    };
  });
}

export function cloneCalculation(
  calculation: Calculation,
): Calculation {
  return {
    ...calculation,
    id: `${calculation.id}-${Date.now()}`,
    name: `${calculation.name} Copy`,
    inputs: calculation.inputs.map((input) => ({ ...input })),
    result: { ...calculation.result },
    assumptions: [...calculation.assumptions],
    validation: calculation.validation.map((item) => ({ ...item })),
  };
}