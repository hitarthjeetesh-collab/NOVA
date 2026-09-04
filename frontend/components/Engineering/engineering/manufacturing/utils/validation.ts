import type { ManufacturingSettings } from "../types/manufacturing";

export function validateManufacturingSettings(
  settings: ManufacturingSettings
): string[] {
  const errors: string[] = [];

  if (settings.tolerance <= 0) {
    errors.push("Tolerance must be greater than zero.");
  }

  if (settings.thickness <= 0) {
    errors.push("Thickness must be greater than zero.");
  }

  if (settings.resolution <= 0) {
    errors.push("Resolution must be greater than zero.");
  }

  if (
    settings.process === "3d-printing" &&
    settings.resolution > 1
  ) {
    errors.push(
      "3D printing resolution should not exceed 1 mm."
    );
  }

  return errors;
}