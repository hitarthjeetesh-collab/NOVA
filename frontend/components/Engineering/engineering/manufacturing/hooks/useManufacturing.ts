"use client";

import {
  useCallback,
  useRef,
  useState,
} from "react";

import type {
  ManufacturingProcess,
  ManufacturingResults,
  ManufacturingSettings,
  ManufacturingState,
} from "../types/manufacturing";

import { validateManufacturingSettings } from "../utils/validation";

const defaultSettings: ManufacturingSettings = {
  process: "cnc",
  material: "aluminum-6061",
  tolerance: 0.1,
  thickness: 3,
  resolution: 0.2,
};

const defaultResults: ManufacturingResults = {
  estimatedTime: 4.53,
  materialUsage: 1.82,
  estimatedCost: 86.4,
  toolpaths: 14,
  warnings: [
    {
      id: "clearance",
      severity: "warning",
      message:
        "Check tool clearance around internal features.",
    },
    {
      id: "tolerance",
      severity: "warning",
      message:
        "Some features are close to the selected tolerance.",
    },
  ],
};

export function useManufacturing() {
  const [state, setState] =
    useState<ManufacturingState>({
      settings: defaultSettings,
      status: "ready",
      progress: 0,
      results: defaultResults,
      error: null,
    });

  const timerRef = useRef<
    ReturnType<typeof setInterval> | null
  >(null);

  const updateSettings = useCallback(
    (updates: Partial<ManufacturingSettings>) => {
      setState((current) => ({
        ...current,
        settings: {
          ...current.settings,
          ...updates,
        },
        error: null,
      }));
    },
    [],
  );

  const prepare = useCallback(() => {
    const errors = validateManufacturingSettings(
      state.settings,
    );

    if (errors.length > 0) {
      setState((current) => ({
        ...current,
        status: "error",
        error: errors.join(" "),
      }));

      return;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setState((current) => ({
      ...current,
      status: "preparing",
      progress: 0,
      error: null,
    }));

    let progress = 0;

    timerRef.current = setInterval(() => {
      progress += 10;

      if (progress >= 100) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }

        setState((current) => ({
          ...current,
          status: "completed",
          progress: 100,
          results: createMockResults(
            current.settings,
          ),
        }));

        return;
      }

      setState((current) => ({
        ...current,
        progress,
      }));
    }, 120);
  }, [state.settings]);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setState({
      settings: defaultSettings,
      status: "ready",
      progress: 0,
      results: defaultResults,
      error: null,
    });
  }, []);

  return {
    state,
    updateSettings,
    prepare,
    reset,
  };
}

function createMockResults(
  settings: ManufacturingSettings,
): ManufacturingResults {
  const processMultiplier: Record<
    ManufacturingProcess,
    number
  > = {
    cnc: 1,
    "3d-printing": 0.7,
    "sheet-metal": 0.85,
  };

  const multiplier =
    processMultiplier[settings.process];

  return {
    estimatedTime: Number(
      (4.53 * multiplier).toFixed(2),
    ),
    materialUsage: Number(
      (1.82 * multiplier).toFixed(2),
    ),
    estimatedCost: Number(
      (86.4 * multiplier).toFixed(2),
    ),
    toolpaths:
      settings.process === "cnc"
        ? 14
        : settings.process === "3d-printing"
          ? 1
          : 8,
    warnings: defaultResults.warnings,
  };
}