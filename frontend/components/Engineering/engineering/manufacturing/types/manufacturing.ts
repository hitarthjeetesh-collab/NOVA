export type ManufacturingProcess =
  | "cnc"
  | "3d-printing"
  | "sheet-metal";

export type ManufacturingStatus =
  | "ready"
  | "preparing"
  | "completed"
  | "error";

export type ManufacturingMaterial =
  | "aluminum-6061"
  | "aluminum-7075"
  | "steel"
  | "stainless-steel"
  | "titanium"
  | "pla"
  | "abs"
  | "petg";

export interface ManufacturingSettings {
  process: ManufacturingProcess;
  material: ManufacturingMaterial;
  tolerance: number;
  thickness: number;
  resolution: number;
}

export interface ManufacturingWarning {
  id: string;
  severity: "warning" | "error";
  message: string;
}

export interface ManufacturingResults {
  estimatedTime: number;
  materialUsage: number;
  estimatedCost: number;
  toolpaths: number;
  warnings: ManufacturingWarning[];
}

export interface ManufacturingState {
  settings: ManufacturingSettings;
  status: ManufacturingStatus;
  progress: number;
  results: ManufacturingResults | null;
  error: string | null;
}