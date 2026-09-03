"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type {
  AnalysisType,
  ConstraintType,
  MaterialType,
  MeshSettings,
  SimulationConstraint,
  SimulationLoad,
  SimulationResults,
  SimulationState,
} from "../types/simulation";

import { validateSimulation } from "../utils/validation";

const defaultMesh: MeshSettings = {
  elementSize: 10,
  quality: "medium",
  adaptive: true,
};

const defaultLoads: SimulationLoad[] = [
  {
    id: "load-1",
    type: "force",
    value: 1000,
    unit: "N",
    direction: "z",
  },
];

const defaultConstraints: SimulationConstraint[] = [
  {
    id: "constraint-1",
    type: "fixed",
    location: "Base",
  },
];

const defaultResults: SimulationResults = {
  maxStress: 84.2,
  maxDisplacement: 0.42,
  safetyFactor: 2.91,
  maxTemperature: 24.5,
  elementCount: 12481,
  nodeCount: 21973,
  iterations: 38,
};

function createInitialState(): SimulationState {
  return {
    analysisType: "static-structural",
    material: "aluminum",
    mesh: defaultMesh,
    loads: defaultLoads,
    constraints: defaultConstraints,
    status: "ready",
    progress: 0,
    results: null,
    error: null,
  };
}

export function useSimulation() {
  const [state, setState] =
    useState<SimulationState>(createInitialState);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const clearSimulationTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearSimulationTimer();
    };
  }, [clearSimulationTimer]);

  const setAnalysisType = useCallback(
    (analysisType: AnalysisType) => {
      setState((current) => ({
        ...current,
        analysisType,
        results: null,
        error: null,
      }));
    },
    []
  );

  const setMaterial = useCallback(
    (material: MaterialType) => {
      setState((current) => ({
        ...current,
        material,
        results: null,
        error: null,
      }));
    },
    []
  );

  const setMesh = useCallback(
    (mesh: Partial<MeshSettings>) => {
      setState((current) => ({
        ...current,
        mesh: {
          ...current.mesh,
          ...mesh,
        },
        results: null,
        error: null,
      }));
    },
    []
  );

  const addLoad = useCallback(
    (load: Omit<SimulationLoad, "id">) => {
      setState((current) => ({
        ...current,
        loads: [
          ...current.loads,
          {
            ...load,
            id: `load-${Date.now()}`,
          },
          ],
        results: null,
        error: null,
      }));
    },
    []
  );

  const updateLoad = useCallback(
    (id: string, updates: Partial<SimulationLoad>) => {
      setState((current) => ({
        ...current,
        loads: current.loads.map((load) =>
          load.id === id
            ? {
                ...load,
                ...updates,
              }
            : load
        ),
        results: null,
        error: null,
      }));
    },
    []
  );

  const removeLoad = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      loads: current.loads.filter((load) => load.id !== id),
      results: null,
      error: null,
    }));
  }, []);

  const addConstraint = useCallback(
    (
      constraint: Omit<SimulationConstraint, "id">
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
      updates: Partial<SimulationConstraint>
    ) => {
      setState((current) => ({
        ...current,
        constraints: current.constraints.map(
          (constraint) =>
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

  const removeConstraint = useCallback(
    (id: string) => {
      setState((current) => ({
        ...current,
        constraints: current.constraints.filter(
          (constraint) => constraint.id !== id
        ),
        results: null,
        error: null,
      }));
    },
    []
  );

  const run = useCallback(() => {
    clearSimulationTimer();

    setState((current) => ({
      ...current,
      status: "ready",
      progress: 0,
      results: null,
      error: null,
    }));

    setState((current) => {
      const validation = validateSimulation(current);

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
      progress += Math.floor(Math.random() * 12) + 8;

      if (progress >= 100) {
        progress = 100;
      }

      setState((current) => {
        if (current.status !== "running") {
          return current;
        }

        if (progress >= 100) {
          return {
            ...current,
            status: "completed",
            progress: 100,
            results: {
              ...defaultResults,
              elementCount:
                current.mesh.quality === "fine"
                  ? 28421
                  : current.mesh.quality === "coarse"
                    ? 7214
                    : 12481,
            },
          };
        }

        return {
          ...current,
          progress,
        };
      });

      if (progress >= 100) {
        clearSimulationTimer();
      }
    }, 350);
  }, [clearSimulationTimer]);

  const stop = useCallback(() => {
    clearSimulationTimer();

    setState((current) => ({
      ...current,
      status:
        current.status === "running"
          ? "stopped"
          : current.status,
    }));
  }, [clearSimulationTimer]);

  const reset = useCallback(() => {
    clearSimulationTimer();
    setState(createInitialState());
  }, [clearSimulationTimer]);

  return {
    state,

    setAnalysisType,
    setMaterial,
    setMesh,

    addLoad,
    updateLoad,
    removeLoad,

    addConstraint,
    updateConstraint,
    removeConstraint,

    run,
    stop,
    reset,
  };
}