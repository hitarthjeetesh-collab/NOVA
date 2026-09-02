export type PlanningTab = "survey" | "brainstorm";

export type Priority = {
  id: string;
  name: string;
  description: string;
  weight: number;
};

export type Constraint = {
  id: string;
  name: string;
  value: string;
};

export type ApproachStatus =
  | "Idea"
  | "Candidate"
  | "Preferred"
  | "Rejected"
  | "Needs Investigation";

export type Approach = {
  id: string;
  name: string;
  reason: string;
  pros: string[];
  cons: string[];
  status: ApproachStatus;
};

export interface Point2D {
  x: number;
  y: number;
}

export interface MapPoint extends Point2D {
  priority: Priority;
  angle: number;
}
