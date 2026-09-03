"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type {
  OptimizationConstraint,
  OptimizationConstraintType,
  OptimizationMethod,
  OptimizationObjective,
  OptimizationResults,
  OptimizationSettings,
  OptimizationState,
  OptimizationVariable,
} from "../types/optimization";

import { validateOptimization } from "../utils/validation";

const defaultSettings: OptimizationSettings = {
  method: "topology",
  maxIterations: 100,
  convergenceTolerance: 1,
  preserveMass: false,
};

const defaultObjectives: OptimizationObjective[] = [
  {
    id: "objective-1",
    type: "minimize-mass",
    weight: 1,
  },
];

const defaultConstraints: OptimizationConstraint[] = [
  {
    id: "constraint-1",
    type: "maximum-stress",
    value: 150,
    unit: "MPa",
  },
  {
    id: "constraint-2",
    type: "minimum-safety-factor",
    value: 2,
    unit: "",
  },
];

const defaultVariables: OptimizationVariable[] = [
  {
    id: "variable-1",
    name: "Wall Thickness",
    minimum: 2,
    maximum: 10,
    unit: "mm",
  },
];

const defaultResults: OptimizationResults = {
  initialMass: 4.82,
  finalMass: 3.26,
  massReduction: 32.4,
  maxStress: 91.6,
  maxDisplacement: 0.48,
  safetyFactor: 2.67,
  iterations: 47,
  convergence: 0.8,
};

function createInitialState(): OptimizationState {
  return {
    method: "topology",
    settings: defaultSettings,
    objectives: defaultObjectives,
    constraints: defaultConstraints,
    variables: defaultVariables,
    status: "ready",
    progress: 0,
    results: null,
    error: null,
  };
}

export function useOptimization() {
  const [state, setState] =
    useState<OptimizationState>(createInitialState);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const clearOptimizationTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearOptimizationTimer();
    };
  }, [clearOptimizationTimer]);

  const setMethod = useCallback(
    (method: OptimizationMethod) => {
      setState((current) => ({
        ...current,
        method,
        settings: {
          ...current.settings,
          method,
        },
        results: null,
        error: null,
      }));
    },
    []
  );

  const setSettings = useCallback(
    (settings: Partial<OptimizationSettings>) => {
      setState((current) => ({
        ...current,
        settings: {
          ...current.settings,
          ...settings,
        },
        results: null,
        error: null,
      }));
    },
    []
  );

  const addObjective = useCallback(
    (objective: Omit<OptimizationObjective, "id">) => {
      setState((current) => ({
        ...current,
        objectives: [
          ...current.objectives,
          {
            ...objective,
            id: `objective-${Date.now()}`,
          },
        ],
        results: null,
        error: null,
      }));
    },
    []
  );

  const updateObjective = useCallback(
    (
      id: string,
      updates: Partial<OptimizationObjective>
    ) => {
      setState((current) => ({
        ...current,
        objectives: current.objectives.map((objective) =>
          objective.id === id
            ? {
                ...objective,
                ...updates,
              }
            : objective
        ),
        results: null,
        error: null,
      }));
    },
    []
  );

  const removeObjective = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      objectives: current.objectives.filter(
        (objective) => objective.id !== id
      ),
      results: null,
      error: null,
    }));
  }, []);

  const addConstraint = useCallback(
    (
      constraint: Omit<OptimizationConstraint, "id">
    ) => {
      setState((current) => ({
        ...current,
        constraints: [
          ...current.constraints,
          {
            ...constraint,
            id: `constraint-${Date.now()}`,
          },
        ],
        results: null,
        error: null,
      }));
    },
    []
  );

  const updateConstraint = useCallback(
    (
      id: string,
      updates: Partial<OptimizationConstraint>
    ) => {
      setState((current) => ({
        ...current,
        constraints: current.constraints.map((constraint) =>
          constraint.id === id
            ? {
                ...constraint,
                ...updates,
              }
            : constraint
        ),
        results: null,
        error: null,
      }));
    },
    []
  );

  const removeConstraint = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      constraints: current.constraints.filter(
        (constraint) => constraint.id !== id
      ),
      results: null,
      error: null,
    }));
  }, []);

  const addVariable = useCallback(
    (variable: Omit<OptimizationVariable, "id">) => {
      setState((current) => ({
        ...current,
        variables: [
          ...current.variables,
          {
            ...variable,
            id: `variable-${Date.now()}`,
          },
        ],
        results: null,
        error: null,
      }));
    },
    []
  );

  const updateVariable = useCallback(
    (
      id: string,
      updates: Partial<OptimizationVariable>
    ) => {
      setState((current) => ({
        ...current,
        variables: current.variables.map((variable) =>
          variable.id === id
            ? {
                ...variable,
                ...updates,
              }
            : variable
        ),
        results: null,
        error: null,
      }));
    },
    []
  );

  const removeVariable = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      variables: current.variables.filter(
        (variable) => variable.id !== id
      ),
      results: null,
      error: null,
    }));
  }, []);

  const run = useCallback(() => {
    clearOptimizationTimer();

    setState((current) => ({
      ...current,
      status: "ready",
      progress: 0,
      results: null,
      error: null,
    }));

    setState((current) => {
      const validation = validateOptimization(current);

      if (!validation.valid) {
        return {
          ...current,
          status: "error",
          error: validation.errors.join(" "),
        };
      }

      return {
        ...current,
        status: "running",
        progress: 0,
        results: null,
        error: null,
      };
    });

    let progress = 0;

    timerRef.current = setInterval(() => {
      progress += Math.floor(Math.random() * 9) + 5;

      if (progress >= 100) {
        progress = 100;
      }

      setState((current) => {
        if (current.status !== "running") {
          return current;
        }

        if (progress >= 100) {
          const iterationRatio =
            current.settings.maxIterations / 100;

          const iterations = Math.min(
            current.settings.maxIterations,
            Math.max(
              20,
              Math.round(
                defaultResults.iterations * iterationRatio
              )
            )
          );

          return {
            ...current,
            status: "completed",
            progress: 100,
            results: {
              ...defaultResults,
              iterations,
              massReduction:
                current.method === "topology"
                  ? 32.4
                  : current.method === "shape"
                    ? 24.7
                    : 18.9,
            },
          };
        }

        return {
          ...current,
          progress,
        };
      });

      if (progress >= 100) {
        clearOptimizationTimer();
      }
    }, 350);
  }, [clearOptimizationTimer]);

  const stop = useCallback(() => {
    clearOptimizationTimer();

    setState((current) => ({
      ...current,
      status:
        current.status === "running"
          ? "stopped"
          : current.status,
    }));
  }, [clearOptimizationTimer]);

  const reset = useCallback(() => {
    clearOptimizationTimer();
    setState(createInitialState());
  }, [clearOptimizationTimer]);

  return {
    state,

    setMethod,
    setSettings,

    addObjective,
    updateObjective,
    removeObjective,

    addConstraint,
    updateConstraint,
    removeConstraint,

    addVariable,
    updateVariable,
    removeVariable,

    run,
    stop,
    reset,
  };
}