export type SystemStatus =
  | "Concept"
  | "Designed"
  | "Validated"
  | "Manufacturing";

export type ConnectionType =
  | "power"
  | "communication"
  | "sensor_data"
  | "control"
  | "mechanical"
  | "thermal";

export interface SystemParameter {
  id: string;
  name: string;
  value: string;
  unit?: string;
}

export interface EngineeringSystem {
  id: string;
  name: string;
  category: string;
  description: string;
  status: SystemStatus;

  /**
   * undefined means this is a top-level system.
   */
  parentId?: string;

  parameters: SystemParameter[];
}

export interface SystemConnection {
  id: string;
  sourceId: string;
  targetId: string;

  type: ConnectionType;

  protocol?: string;
  description?: string;
}