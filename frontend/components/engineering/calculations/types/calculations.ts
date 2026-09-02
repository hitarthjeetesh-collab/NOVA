export type CalculationCategory =
  | "Mechanical"
  | "Electrical"
  | "Thermal"
  | "Structural"
  | "Power"
  | "Geometry";

export type CalculationStatus = "ready" | "draft" | "warning";

export type CalculationInput = {
  id: string;
  name: string;
  symbol: string;
  value: number;
  unit: string;
  description?: string;
  min?: number;
  max?: number;
};

export type CalculationResult = {
  value: number;
  unit: string;
  label: string;
  status: "valid" | "warning" | "error";
  explanation?: string;
};

export type ValidationItem = {
  label: string;
  status: "pass" | "warning" | "error";
  message: string;
};

export type Calculation = {
  id: string;
  name: string;
  category: CalculationCategory;
  description: string;
  equation: string;
  inputs: CalculationInput[];
  result: CalculationResult;
  assumptions: string[];
  validation: ValidationItem[];
  status: CalculationStatus;
};