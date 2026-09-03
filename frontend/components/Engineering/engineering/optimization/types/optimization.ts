export type OptimizationMethod =
  | "topology"
  | "shape"
  | "parameter";

export type OptimizationStatus =
  | "ready"
  | "running"
  | "completed"
  | "stopped"
  | "error";

export type ObjectiveType =
  | "minimize-mass"
  | "minimize-volume"
  | "minimize-stress"
  | "minimize-displacement"
  | "maximize-safety-factor";

export type OptimizationConstraintType =
  | "maximum-stress"
  | "maximum-displacement"
  | "minimum-safety-factor"
  | "preserve-region";

export interface OptimizationObjective {
  id: string;
  type: ObjectiveType;
  weight: number;
}

export interface OptimizationConstraint {
  id: string;
  type: OptimizationConstraintType;
  value: number;
  unit: string;
}

export interface OptimizationVariable {
  id: string;
  name: string;
  minimum: number;
  maximum: number;
  unit: string;
}

export interface OptimizationSettings {
  method: OptimizationMethod;
  maxIterations: number;
  convergenceTolerance: number;
  preserveMass: boolean;
}

export interface OptimizationResults {
  initialMass: number;
  finalMass: number;
  massReduction: number;
  maxStress: number;
  maxDisplacement: number;
  safetyFactor: number;
  iterations: number;
  convergence: number;
}

export interface OptimizationState {
  method: OptimizationMethod;
  settings: OptimizationSettings;
  objectives: OptimizationObjective[];
  constraints: OptimizationConstraint[];
  variables: OptimizationVariable[];
  status: OptimizationStatus;
  progress: number;
  results: OptimizationResults | null;
  error: string | null;
}