import type {
  Calculation,
  CalculationCategory,
} from "./types/calculations";

export const CALCULATION_CATEGORIES: (
  | "All"
  | CalculationCategory
)[] = [
  "All",
  "Mechanical",
  "Electrical",
  "Thermal",
  "Structural",
  "Power",
  "Geometry",
];

export const INITIAL_CALCULATIONS: Calculation[] = [
  {
    id: "battery-energy",
    name: "Battery Energy",
    category: "Power",
    description:
      "Calculate the nominal energy stored in a battery from voltage and capacity.",
    equation: "E = V × Ah",
    inputs: [
      {
        id: "voltage",
        name: "Voltage",
        symbol: "V",
        value: 22.2,
        unit: "V",
        description: "Nominal battery voltage",
      },
      {
        id: "capacity",
        name: "Capacity",
        symbol: "Ah",
        value: 9.5,
        unit: "Ah",
        description: "Battery capacity",
      },
    ],
    result: {
      value: 210.9,
      unit: "Wh",
      label: "Stored Energy",
      status: "valid",
      explanation:
        "Nominal energy is calculated from battery voltage multiplied by capacity.",
    },
    assumptions: [
      "Battery voltage represents nominal voltage.",
      "Capacity is specified in amp-hours.",
      "Actual usable energy may be lower due to discharge limits and efficiency.",
    ],
    validation: [
      {
        label: "Voltage",
        status: "pass",
        message: "Voltage is greater than zero.",
      },
      {
        label: "Capacity",
        status: "pass",
        message: "Capacity is greater than zero.",
      },
      {
        label: "Units",
        status: "pass",
        message: "Inputs use compatible battery-energy units.",
      },
    ],
    status: "ready",
  },

  {
    id: "ohms-law",
    name: "Ohm's Law",
    category: "Electrical",
    description:
      "Calculate electrical current from voltage and resistance.",
    equation: "I = V / R",
    inputs: [
      {
        id: "voltage",
        name: "Voltage",
        symbol: "V",
        value: 12,
        unit: "V",
        description: "Applied voltage",
      },
      {
        id: "resistance",
        name: "Resistance",
        symbol: "R",
        value: 10,
        unit: "Ω",
        description: "Electrical resistance",
      },
    ],
    result: {
      value: 1.2,
      unit: "A",
      label: "Current",
      status: "valid",
      explanation:
        "Current is calculated by dividing voltage by resistance.",
    },
    assumptions: [
      "Resistance is constant.",
      "The circuit behaves according to Ohm's law.",
      "Transient behavior is ignored.",
    ],
    validation: [
      {
        label: "Voltage",
        status: "pass",
        message: "Voltage is within a valid positive range.",
      },
      {
        label: "Resistance",
        status: "pass",
        message: "Resistance must be greater than zero.",
      },
    ],
    status: "ready",
  },

  {
    id: "electrical-power",
    name: "Electrical Power",
    category: "Electrical",
    description:
      "Calculate electrical power from voltage and current.",
    equation: "P = V × I",
    inputs: [
      {
        id: "voltage",
        name: "Voltage",
        symbol: "V",
        value: 12,
        unit: "V",
        description: "Electrical voltage",
      },
      {
        id: "current",
        name: "Current",
        symbol: "I",
        value: 5,
        unit: "A",
        description: "Electrical current",
      },
    ],
    result: {
      value: 60,
      unit: "W",
      label: "Power",
      status: "valid",
      explanation:
        "Electrical power is the product of voltage and current.",
    },
    assumptions: [
      "DC electrical system.",
      "Voltage and current are steady-state values.",
      "Power factor is not applicable.",
    ],
    validation: [
      {
        label: "Voltage",
        status: "pass",
        message: "Voltage is valid.",
      },
      {
        label: "Current",
        status: "pass",
        message: "Current is valid.",
      },
    ],
    status: "ready",
  },

  {
    id: "force",
    name: "Force",
    category: "Mechanical",
    description:
      "Calculate force from mass and acceleration using Newton's second law.",
    equation: "F = m × a",
    inputs: [
      {
        id: "mass",
        name: "Mass",
        symbol: "m",
        value: 10,
        unit: "kg",
        description: "Object mass",
      },
      {
        id: "acceleration",
        name: "Acceleration",
        symbol: "a",
        value: 9.81,
        unit: "m/s²",
        description: "Acceleration",
      },
    ],
    result: {
      value: 98.1,
      unit: "N",
      label: "Force",
      status: "valid",
      explanation:
        "Force is calculated by multiplying mass by acceleration.",
    },
    assumptions: [
      "Mass is constant.",
      "Acceleration is expressed in SI units.",
      "Relativistic effects are negligible.",
    ],
    validation: [
      {
        label: "Mass",
        status: "pass",
        message: "Mass is non-negative.",
      },
      {
        label: "Acceleration",
        status: "pass",
        message: "Acceleration is valid.",
      },
    ],
    status: "ready",
  },

  {
    id: "normal-stress",
    name: "Normal Stress",
    category: "Structural",
    description:
      "Calculate normal stress from an applied axial force and cross-sectional area.",
    equation: "σ = F / A",
    inputs: [
      {
        id: "force",
        name: "Force",
        symbol: "F",
        value: 1000,
        unit: "N",
        description: "Applied axial force",
      },
      {
        id: "area",
        name: "Area",
        symbol: "A",
        value: 100,
        unit: "mm²",
        description: "Cross-sectional area",
      },
    ],
    result: {
      value: 10,
      unit: "MPa",
      label: "Normal Stress",
      status: "valid",
      explanation:
        "Stress is calculated as axial force divided by cross-sectional area.",
    },
    assumptions: [
      "Load is uniformly distributed.",
      "Cross-section is perpendicular to the applied load.",
      "Stress concentration effects are ignored.",
    ],
    validation: [
      {
        label: "Force",
        status: "pass",
        message: "Force is valid.",
      },
      {
        label: "Area",
        status: "pass",
        message: "Cross-sectional area must be greater than zero.",
      },
    ],
    status: "ready",
  },

  {
    id: "mass-from-volume",
    name: "Mass from Volume",
    category: "Geometry",
    description:
      "Calculate mass from material density and object volume.",
    equation: "m = ρ × V",
    inputs: [
      {
        id: "density",
        name: "Density",
        symbol: "ρ",
        value: 2700,
        unit: "kg/m³",
        description: "Material density",
      },
      {
        id: "volume",
        name: "Volume",
        symbol: "V",
        value: 0.001,
        unit: "m³",
        description: "Object volume",
      },
    ],
    result: {
      value: 2.7,
      unit: "kg",
      label: "Mass",
      status: "valid",
      explanation:
        "Mass is calculated from material density multiplied by volume.",
    },
    assumptions: [
      "Material density is uniform.",
      "The volume is accurately known.",
      "Voids and internal structures are included in the supplied volume.",
    ],
    validation: [
      {
        label: "Density",
        status: "pass",
        message: "Density is greater than zero.",
      },
      {
        label: "Volume",
        status: "pass",
        message: "Volume is non-negative.",
      },
    ],
    status: "ready",
  },
];