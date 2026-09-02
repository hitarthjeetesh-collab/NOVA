import type { Approach, Priority } from "./types/planning";

export const initialPriorities: Priority[] = [
  {
    id: "performance",
    name: "Performance",
    description: "Overall system performance",
    weight: 35,
  },
  {
    id: "reliability",
    name: "Reliability",
    description: "Dependability and failure resistance",
    weight: 30,
  },
  {
    id: "cost",
    name: "Cost",
    description: "Development and production cost",
    weight: 20,
  },
  {
    id: "simplicity",
    name: "Simplicity",
    description: "Design and implementation simplicity",
    weight: 15,
  },
];

export const initialApproaches: Approach[] = [
  {
    id: "approach-1",
    name: "Approach 1",
    reason: "Initial concept to investigate.",
    pros: ["Simple starting point"],
    cons: ["Needs further investigation"],
    status: "Idea",
  },
];

export const priorityColors = [
  "border-white/20",
  "border-white/30",
  "border-white/40",
  "border-white/50",
  "border-white/60",
  "border-white/70",
];

export const controlClassName =
  "w-full rounded-lg border border-white/10 bg-[#15191f] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/25";

export const primaryButtonClassName =
  "rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90";

export const secondaryButtonClassName =
  "rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50 transition hover:bg-white/5 hover:text-white";

export const removeButtonClassName =
  "text-lg leading-none text-white/25 transition hover:text-white";
