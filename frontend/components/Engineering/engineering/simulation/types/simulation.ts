export type AnalysisType =
  | "static-structural"
  | "thermal"
  | "modal"
  | "transient"
  | "fluid";

export type SimulationStatus =
  | "ready"
  | "running"
  | "completed"
  | "stopped"
  | "error";

export type MaterialType =
  | "aluminum"
  | "steel"
  | "stainless-steel"
  | "titanium"
  | "carbon-fiber";

export type LoadType =
  | "force"
  | "pressure"
  | "gravity"
  | "torque";

export type ConstraintType =
  | "fixed"
  | "pinned"
  | "roller";

export interface SimulationLoad {
  id: string;
  type: LoadType;
  value: number;
  unit: string;
  direction: "x" | "y" | "z";
}

export interface SimulationConstraint {
  id: string;
  type: ConstraintType;
  location: string;
}

export interface MeshSettings {
  elementSize: number;
  quality: "coarse" | "medium" | "fine";
  adaptive: boolean;
}

export interface SimulationResults {
  maxStress: number;
  maxDisplacement: number;
  safetyFactor: number;
  maxTemperature: number;
  elementCount: number;
  nodeCount: number;
  iterations: number;
}

export interface SimulationState {
  analysisType: AnalysisType;
  material: MaterialType;
  mesh: MeshSettings;
  loads: SimulationLoad[];
  constraints: SimulationConstraint[];
  status: SimulationStatus;
  progress: number;
  results: SimulationResults | null;
  error: string | null;
}