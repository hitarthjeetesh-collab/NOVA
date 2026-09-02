import type {
  EngineeringSystem,
  SystemConnection,
} from "./types";

export const initialSystems: EngineeringSystem[] = [
  {
    id: "orion",
    name: "ORION",
    category: "System",
    description:
      "Modular wearable engineering platform.",
    status: "Concept",
    parameters: [],
  },

  {
    id: "power",
    name: "Power System",
    category: "Power",
    description:
      "Provides and distributes electrical power.",
    status: "Designed",
    parentId: "orion",
    parameters: [
      {
        id: "power-voltage",
        name: "Voltage",
        value: "24",
        unit: "V",
      },
      {
        id: "power-max",
        name: "Max Power",
        value: "500",
        unit: "W",
      },
    ],
  },

  {
    id: "battery",
    name: "Battery",
    category: "Power",
    description:
      "Primary energy storage system.",
    status: "Concept",
    parentId: "power",
    parameters: [
      {
        id: "battery-voltage",
        name: "Nominal Voltage",
        value: "24",
        unit: "V",
      },
    ],
  },

  {
    id: "bms",
    name: "Battery Management System",
    category: "Power",
    description:
      "Monitors and protects the battery.",
    status: "Concept",
    parentId: "power",
    parameters: [],
  },

  {
    id: "perception",
    name: "Perception System",
    category: "Sensors",
    description:
      "Collects environmental and motion data.",
    status: "Concept",
    parentId: "orion",
    parameters: [],
  },

  {
    id: "camera",
    name: "Camera",
    category: "Sensors",
    description:
      "Visual perception sensor.",
    status: "Concept",
    parentId: "perception",
    parameters: [
      {
        id: "camera-resolution",
        name: "Resolution",
        value: "12",
        unit: "MP",
      },
    ],
  },

  {
    id: "lidar",
    name: "LiDAR",
    category: "Sensors",
    description:
      "Provides depth and ranging information.",
    status: "Concept",
    parentId: "perception",
    parameters: [],
  },

  {
    id: "imu",
    name: "IMU",
    category: "Sensors",
    description:
      "Measures acceleration and orientation.",
    status: "Concept",
    parentId: "perception",
    parameters: [],
  },

  {
    id: "computing",
    name: "Computing System",
    category: "Computing",
    description:
      "Main onboard computing and AI system.",
    status: "Designed",
    parentId: "orion",
    parameters: [],
  },

  {
    id: "jetson",
    name: "Jetson Orin NX",
    category: "Computing",
    description:
      "Main onboard computing platform.",
    status: "Designed",
    parentId: "computing",
    parameters: [
      {
        id: "jetson-memory",
        name: "Memory",
        value: "16",
        unit: "GB",
      },
      {
        id: "jetson-power",
        name: "Power",
        value: "40",
        unit: "W",
      },
    ],
  },

  {
    id: "ai",
    name: "AI System",
    category: "Software",
    description:
      "AI inference and intelligence subsystem.",
    status: "Concept",
    parentId: "computing",
    parameters: [],
  },

  {
    id: "control",
    name: "Control System",
    category: "Control",
    description:
      "Controls actuators and system behavior.",
    status: "Concept",
    parentId: "orion",
    parameters: [],
  },
];

export const initialConnections: SystemConnection[] = [
  {
    id: "battery-power",
    sourceId: "battery",
    targetId: "power",
    type: "power",
    protocol: "DC",
    description:
      "Battery supplies power to the power system.",
  },

  {
    id: "power-computing",
    sourceId: "power",
    targetId: "computing",
    type: "power",
    protocol: "24V DC",
    description:
      "Power system supplies the computing system.",
  },

  {
    id: "camera-jetson",
    sourceId: "camera",
    targetId: "jetson",
    type: "sensor_data",
    protocol: "USB 3",
    description:
      "Camera feed sent to the Jetson.",
  },

  {
    id: "lidar-jetson",
    sourceId: "lidar",
    targetId: "jetson",
    type: "sensor_data",
    protocol: "Ethernet",
    description:
      "LiDAR data sent to the Jetson.",
  },

  {
    id: "jetson-ai",
    sourceId: "jetson",
    targetId: "ai",
    type: "communication",
    protocol: "Internal",
    description:
      "AI inference runs on the Jetson.",
  },

  {
    id: "computing-control",
    sourceId: "computing",
    targetId: "control",
    type: "control",
    protocol: "CAN",
    description:
      "Computing system sends control commands.",
  },
];