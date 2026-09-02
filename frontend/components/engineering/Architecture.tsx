"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import SystemNode, {
  type SystemNodeData,
} from "./SystemNode";

import ConnectionModal, {
  type ConnectionData,
} from "./ConnectionModal";

import SystemModal from "./SystemModal";

type ArchitectureNode = Node<SystemNodeData>;

type ArchitectureEdge = Edge<ConnectionData>;

/* -------------------------------------------------------------------------- */
/* Initial Architecture                                                       */
/* -------------------------------------------------------------------------- */

const initialNodes: ArchitectureNode[] = [
  {
    id: "power",
    type: "system",
    position: {
      x: 50,
      y: 150,
    },
    data: {
      label: "Power System",
      category: "Power",
      description:
        "Provides and distributes electrical power.",
      status: "Designed",

      interfaces: [
        {
          id: "power-output",
          name: "24V Output",
          direction: "output",
          type: "power",
          standard: "24V DC",
          protocol: "DC",
          dataRate: "",
          voltage: "24 V",
          maxCurrent: "20 A",
          description:
            "Main 24V DC power output.",
        },
      ],

      parameters: [
        {
          id: "power-voltage",
          name: "Voltage",
          value: "24",
          unit: "V",
        },
        {
          id: "power-max-power",
          name: "Max Power",
          value: "500",
          unit: "W",
        },
      ],
    },
  },

  {
    id: "sensors",
    type: "system",
    position: {
      x: 400,
      y: 50,
    },
    data: {
      label: "Sensor System",
      category: "Sensors",
      description:
        "Perception hardware for the vehicle.",
      status: "Concept",

      interfaces: [
        {
          id: "sensor-usb",
          name: "USB-C",
          direction: "output",
          type: "usb_c",
          standard:
            "USB 3.2 Gen 2",
          protocol: "USB",
          dataRate: "10 Gb/s",
          voltage: "5 V",
          maxCurrent: "3 A",
          description:
            "Sensor data connection.",
        },

        {
          id: "sensor-ethernet",
          name: "Ethernet",
          direction: "output",
          type: "ethernet",
          standard: "1 GbE",
          protocol: "Ethernet",
          dataRate: "1 Gb/s",
          voltage: "",
          maxCurrent: "",
          description:
            "High-speed sensor networking.",
        },
      ],

      parameters: [
        {
          id: "sensor-cameras",
          name: "Cameras",
          value: "2",
        },
        {
          id: "sensor-lidar",
          name: "LiDAR",
          value: "1",
        },
      ],
    },
  },

  {
    id: "computing",
    type: "system",
    position: {
      x: 400,
      y: 300,
    },
    data: {
      label: "Computing System",
      category: "Computing",
      description:
        "Main onboard computing and AI system.",
      status: "Designed",

      interfaces: [
        {
          id: "computing-power",
          name: "Power IN",
          direction: "input",
          type: "power",
          standard: "24V DC",
          protocol: "DC",
          dataRate: "",
          voltage: "24 V",
          maxCurrent: "20 A",
          description:
            "Main system power input.",
        },

        {
          id: "computing-can",
          name: "CAN",
          direction:
            "bidirectional",
          type: "can",
          standard: "CAN FD",
          protocol: "CAN",
          dataRate: "8 Mb/s",
          voltage: "5 V",
          maxCurrent: "",
          description:
            "Vehicle CAN interface.",
        },

        {
          id: "computing-ethernet",
          name: "Ethernet",
          direction:
            "bidirectional",
          type: "ethernet",
          standard: "1 GbE",
          protocol: "Ethernet",
          dataRate: "1 Gb/s",
          voltage: "",
          maxCurrent: "",
          description:
            "Network interface.",
        },
      ],

      parameters: [
        {
          id: "computing-platform",
          name: "Platform",
          value:
            "Jetson Orin NX",
        },
        {
          id: "computing-memory",
          name: "Memory",
          value: "16",
          unit: "GB",
        },
      ],
    },
  },

  {
    id: "control",
    type: "system",
    position: {
      x: 800,
      y: 200,
    },
    data: {
      label: "Control System",
      category: "Control",
      description:
        "Controls actuators and system behavior.",
      status: "Concept",

      interfaces: [
        {
          id: "control-can",
          name: "CAN",
          direction:
            "bidirectional",
          type: "can",
          standard: "CAN FD",
          protocol: "CAN",
          dataRate: "8 Mb/s",
          voltage: "5 V",
          maxCurrent: "",
          description:
            "Control communication interface.",
        },
      ],

      parameters: [],
    },
  },

  {
    id: "jetson",
    type: "system",
    position: {
      x: 50,
      y: 100,
    },
    data: {
      label: "Jetson Orin NX",
      category: "Computing",
      description:
        "Primary onboard compute platform.",
      status: "Designed",

      parentId: "computing",

      interfaces: [
        {
          id: "jetson-power",
          name: "Power IN",
          direction: "input",
          type: "dc_power",
          standard: "DC",
          protocol: "DC",
          dataRate: "",
          voltage: "12–20 V",
          maxCurrent: "10 A",
          description:
            "Power input for the compute module.",
        },

        {
          id: "jetson-usbc-1",
          name: "USB-C 1",
          direction:
            "bidirectional",
          type: "usb_c",
          standard:
            "USB 3.2 Gen 2",
          protocol: "USB",
          dataRate: "10 Gb/s",
          voltage: "5 V",
          maxCurrent: "3 A",
          description:
            "High-speed USB-C interface.",
        },

        {
          id: "jetson-usbc-2",
          name: "USB-C 2",
          direction:
            "bidirectional",
          type: "usb_c",
          standard:
            "USB 3.2 Gen 2",
          protocol: "USB",
          dataRate: "10 Gb/s",
          voltage: "5 V",
          maxCurrent: "3 A",
          description:
            "High-speed USB-C interface.",
        },

        {
          id: "jetson-ethernet",
          name: "Ethernet",
          direction:
            "bidirectional",
          type: "ethernet",
          standard: "1 GbE",
          protocol: "Ethernet",
          dataRate: "1 Gb/s",
          voltage: "",
          maxCurrent: "",
          description:
            "Gigabit Ethernet interface.",
        },

        {
          id: "jetson-hdmi",
          name: "HDMI",
          direction: "output",
          type: "hdmi",
          standard: "HDMI 2.1",
          protocol: "HDMI",
          dataRate: "48 Gb/s",
          voltage: "",
          maxCurrent: "",
          description:
            "Display output.",
        },

        {
          id: "jetson-can",
          name: "CAN",
          direction:
            "bidirectional",
          type: "can",
          standard: "CAN FD",
          protocol: "CAN",
          dataRate: "8 Mb/s",
          voltage: "5 V",
          maxCurrent: "",
          description:
            "CAN bus interface.",
        },
      ],

      parameters: [
        {
          id: "jetson-memory",
          name: "Memory",
          value: "16",
          unit: "GB",
        },
        {
          id: "jetson-architecture",
          name: "Architecture",
          value: "Ampere",
        },
      ],
    },
  },

  {
    id: "ai",
    type: "system",
    position: {
      x: 400,
      y: 100,
    },
    data: {
      label: "AI System",
      category: "Software",
      description:
        "Perception, reasoning, and AI workloads.",
      status: "Concept",

      parentId: "computing",

      interfaces: [
        {
          id: "ai-data",
          name: "Data",
          direction:
            "bidirectional",
          type: "custom",
          standard: "",
          protocol: "Internal",
          dataRate: "",
          voltage: "",
          maxCurrent: "",
          description:
            "Internal data interface.",
        },
      ],

      parameters: [],
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Initial Connections                                                        */
/* -------------------------------------------------------------------------- */

const initialEdges: ArchitectureEdge[] = [
  {
    id: "power-computing",
    source: "power",
    target: "computing",

    sourceHandle:
      "power-output",

    targetHandle:
      "computing-power",

    label: "Power · 24V DC",

    data: {
      type: "power",
      protocol: "24V DC",
      description:
        "Electrical power from the power system.",

      sourceInterfaceId:
        "power-output",

      targetInterfaceId:
        "computing-power",
    },
  },

  {
    id: "sensors-computing",
    source: "sensors",
    target: "computing",

    sourceHandle:
      "sensor-usb",

    targetHandle:
      "computing-ethernet",

    label:
      "Sensor Data · USB / Ethernet",

    data: {
      type: "sensor_data",
      protocol:
        "USB / Ethernet",
      description:
        "Sensor measurements and camera feeds.",

      sourceInterfaceId:
        "sensor-usb",

      targetInterfaceId:
        "computing-ethernet",
    },
  },

  {
    id: "computing-control",
    source: "computing",
    target: "control",

    sourceHandle:
      "computing-can",

    targetHandle:
      "control-can",

    label: "Control · CAN",

    data: {
      type: "control",
      protocol: "CAN",
      description:
        "Control commands sent to the control system.",

      sourceInterfaceId:
        "computing-can",

      targetInterfaceId:
        "control-can",
    },
  },

  {
    id: "jetson-ai",
    source: "jetson",
    target: "ai",

    sourceHandle:
      "jetson-ethernet",

    targetHandle: "ai-data",

    label:
      "Communication · Internal",

    data: {
      type: "communication",
      protocol: "Internal",
      description:
        "Communication between compute platform and AI system.",

      sourceInterfaceId:
        "jetson-ethernet",

      targetInterfaceId:
        "ai-data",
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function getInterfaceOptions(
  node:
    | ArchitectureNode
    | undefined
) {
  if (!node) {
    return [];
  }

  return (
    node.data.interfaces ?? []
  ).map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
  }));
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Architecture() {
  /* ------------------------------------------------------------------------ */
  /* State                                                                    */
  /* ------------------------------------------------------------------------ */

  const [nodes, setNodes] =
    useState<ArchitectureNode[]>(
      initialNodes
    );

  const [edges, setEdges] =
    useState<ArchitectureEdge[]>(
      initialEdges
    );

  const [
    currentParentId,
    setCurrentParentId,
  ] =
    useState<string | null>(
      null
    );

  const [
    systemModalOpen,
    setSystemModalOpen,
  ] = useState(false);

  const [
    editingNodeId,
    setEditingNodeId,
  ] =
    useState<string | null>(
      null
    );

  const [
    connectionModalOpen,
    setConnectionModalOpen,
  ] = useState(false);

  const [
    pendingConnection,
    setPendingConnection,
  ] =
    useState<Connection | null>(
      null
    );

  const [
    editingEdgeId,
    setEditingEdgeId,
  ] =
    useState<string | null>(
      null
    );

  /* ------------------------------------------------------------------------ */
  /* Connected interface IDs                                                  */
  /* ------------------------------------------------------------------------ */

  const connectedInterfaceIds =
    useMemo(() => {
      const ids = new Set<string>();

      for (const edge of edges) {
        if (
          edge.data?.sourceInterfaceId
        ) {
          ids.add(
            edge.data
              .sourceInterfaceId
          );
        }

        if (
          edge.data?.targetInterfaceId
        ) {
          ids.add(
            edge.data
              .targetInterfaceId
          );
        }
      }

      return ids;
    }, [edges]);

  /* ------------------------------------------------------------------------ */
  /* Node types                                                               */
  /* ------------------------------------------------------------------------ */

  const nodeTypes = useMemo(
    () => ({
      system: SystemNode,
    }),
    []
  );

  /* ------------------------------------------------------------------------ */
  /* React Flow node changes                                                  */
  /* ------------------------------------------------------------------------ */

  const onNodesChange =
    useCallback(
      (
        changes: NodeChange[]
      ) => {
        setNodes((current) =>
          applyNodeChanges(
            changes,
            current
          ) as ArchitectureNode[]
        );
      },
      []
    );

  /* ------------------------------------------------------------------------ */
  /* React Flow edge changes                                                  */
  /* ------------------------------------------------------------------------ */

  const onEdgesChange =
    useCallback(
      (
        changes: EdgeChange[]
      ) => {
        setEdges((current) =>
          applyEdgeChanges(
            changes,
            current
          ) as ArchitectureEdge[]
        );
      },
      []
    );

  /* ------------------------------------------------------------------------ */
  /* Enter subsystem                                                          */
  /* ------------------------------------------------------------------------ */

  const enterSystem =
    useCallback(
      (nodeId: string) => {
        setCurrentParentId(
          nodeId
        );
      },
      []
    );

  /* ------------------------------------------------------------------------ */
  /* Go back                                                                  */
  /* ------------------------------------------------------------------------ */

  const goBack =
    useCallback(() => {
      if (!currentParentId) {
        return;
      }

      const currentNode =
        nodes.find(
          (node) =>
            node.id ===
            currentParentId
        );

      if (!currentNode) {
        setCurrentParentId(
          null
        );

        return;
      }

      setCurrentParentId(
        currentNode.data.parentId ??
          null
      );
    }, [
      currentParentId,
      nodes,
    ]);

  /* ------------------------------------------------------------------------ */
  /* Breadcrumbs                                                              */
  /* ------------------------------------------------------------------------ */

  const breadcrumbs =
    useMemo(() => {
      const result: ArchitectureNode[] =
        [];

      let id =
        currentParentId;

      while (id) {
        const node =
          nodes.find(
            (item) =>
              item.id === id
          );

        if (!node) {
          break;
        }

        result.unshift(node);

        id =
          node.data.parentId ??
          null;
      }

      return result;
    }, [
      currentParentId,
      nodes,
    ]);

  /* ------------------------------------------------------------------------ */
  /* Current system                                                           */
  /* ------------------------------------------------------------------------ */

  const currentSystem =
    currentParentId
      ? nodes.find(
          (node) =>
            node.id ===
            currentParentId
        )
      : undefined;

  /* ------------------------------------------------------------------------ */
  /* System editor                                                            */
  /* ------------------------------------------------------------------------ */

  const openSystemEditor =
    useCallback(
      (nodeId: string) => {
        setEditingNodeId(
          nodeId
        );

        setSystemModalOpen(
          true
        );
      },
      []
    );

  /* ------------------------------------------------------------------------ */
  /* Delete system                                                            */
  /* ------------------------------------------------------------------------ */

  const deleteSystem =
    useCallback(
      (nodeId: string) => {
        const node =
          nodes.find(
            (item) =>
              item.id === nodeId
          );

        if (!node) {
          return;
        }

        const confirmed =
          window.confirm(
            `Delete "${node.data.label}"? This will also delete all of its subsystems and their connections.`
          );

        if (!confirmed) {
          return;
        }

        const idsToDelete =
          new Set<string>([
            nodeId,
          ]);

        let foundChild = true;

        while (foundChild) {
          foundChild = false;

          for (const item of nodes) {
            if (
              item.data.parentId &&
              idsToDelete.has(
                item.data.parentId
              ) &&
              !idsToDelete.has(
                item.id
              )
            ) {
              idsToDelete.add(
                item.id
              );

              foundChild = true;
            }
          }
        }

        setNodes((current) =>
          current.filter(
            (item) =>
              !idsToDelete.has(
                item.id
              )
          )
        );

        setEdges((current) =>
          current.filter(
            (edge) =>
              !idsToDelete.has(
                edge.source
              ) &&
              !idsToDelete.has(
                edge.target
              )
          )
        );

        if (
          idsToDelete.has(
            currentParentId ?? ""
          )
        ) {
          setCurrentParentId(
            null
          );
        }

        if (
          editingNodeId ===
          nodeId
        ) {
          setEditingNodeId(
            null
          );

          setSystemModalOpen(
            false
          );
        }
      },
      [
        currentParentId,
        editingNodeId,
        nodes,
      ]
    );

  /* ------------------------------------------------------------------------ */
  /* Visible nodes                                                            */
  /* ------------------------------------------------------------------------ */

  const visibleNodes =
    useMemo(() => {
      return nodes
        .filter(
          (node) =>
            (node.data.parentId ??
              null) ===
            currentParentId
        )
        .map((node) => ({
          ...node,

          data: {
            ...node.data,

            onEdit: () =>
              openSystemEditor(
                node.id
              ),

            onDelete: () =>
              deleteSystem(
                node.id
              ),
          },
        }));
    }, [
      nodes,
      currentParentId,
      openSystemEditor,
      deleteSystem,
    ]);

  /* ------------------------------------------------------------------------ */
  /* Visible node IDs                                                         */
  /* ------------------------------------------------------------------------ */

  const visibleNodeIds =
    useMemo(
      () =>
        new Set(
          visibleNodes.map(
            (node) =>
              node.id
          )
        ),
      [visibleNodes]
    );

  /* ------------------------------------------------------------------------ */
  /* Visible edges                                                            */
  /* ------------------------------------------------------------------------ */

  const visibleEdges =
    useMemo(() => {
      return edges.filter(
        (edge) =>
          visibleNodeIds.has(
            edge.source
          ) &&
          visibleNodeIds.has(
            edge.target
          )
      );
    }, [
      edges,
      visibleNodeIds,
    ]);

  /* ------------------------------------------------------------------------ */
  /* Add system                                                               */
  /* ------------------------------------------------------------------------ */

  function handleAddSystem() {
    setEditingNodeId(null);

    setSystemModalOpen(
      true
    );
  }

  /* ------------------------------------------------------------------------ */
  /* System submit                                                             */
  /* ------------------------------------------------------------------------ */

  function handleSystemSubmit(
    data: SystemNodeData
  ) {
    if (editingNodeId) {
      setNodes((current) =>
        current.map((node) => {
          if (
            node.id !==
            editingNodeId
          ) {
            return node;
          }

          /**
           * Preserve the existing parent.
           */
          return {
            ...node,

            data: {
              ...data,

              parentId:
                node.data.parentId ??
                null,
            },
          };
        })
      );
    } else {
      const id =
        crypto.randomUUID();

      const newNode: ArchitectureNode =
        {
          id,
          type: "system",

          position: {
            x:
              100 +
              Math.random() * 500,

            y:
              100 +
              Math.random() * 300,
          },

          data: {
            ...data,

            parentId:
              currentParentId ??
              null,
          },
        };

      setNodes((current) => [
        ...current,
        newNode,
      ]);
    }

    setSystemModalOpen(
      false
    );

    setEditingNodeId(null);
  }

  /* ------------------------------------------------------------------------ */
  /* New connection                                                           */
  /* ------------------------------------------------------------------------ */

  const onConnect: OnConnect =
    useCallback(
      (connection) => {
        if (
          !connection.source ||
          !connection.target
        ) {
          return;
        }

        setPendingConnection(
          connection
        );

        setEditingEdgeId(null);

        setConnectionModalOpen(
          true
        );
      },
      []
    );

  /* ------------------------------------------------------------------------ */
  /* Connection label                                                         */
  /* ------------------------------------------------------------------------ */

  function getConnectionLabel(
    data: ConnectionData
  ) {
    const typeLabels: Record<
      ConnectionData["type"],
      string
    > = {
      power: "Power",

      communication:
        "Communication",

      sensor_data:
        "Sensor Data",

      control: "Control",

      mechanical:
        "Mechanical",

      thermal: "Thermal",
    };

    const typeLabel =
      typeLabels[data.type];

    return data.protocol
      ? `${typeLabel} · ${data.protocol}`
      : typeLabel;
  }

  /* ------------------------------------------------------------------------ */
  /* Open connection editor                                                   */
  /* ------------------------------------------------------------------------ */

  const openConnectionEditor =
    useCallback(
      (edgeId: string) => {
        setEditingEdgeId(
          edgeId
        );

        setPendingConnection(
          null
        );

        setConnectionModalOpen(
          true
        );
      },
      []
    );

  /* ------------------------------------------------------------------------ */
  /* Delete connection                                                        */
  /* ------------------------------------------------------------------------ */

  const deleteConnection =
    useCallback(
      (edgeId: string) => {
        const edge =
          edges.find(
            (item) =>
              item.id === edgeId
          );

        if (!edge) {
          return;
        }

        const source =
          nodes.find(
            (node) =>
              node.id ===
              edge.source
          );

        const target =
          nodes.find(
            (node) =>
              node.id ===
              edge.target
          );

        const confirmed =
          window.confirm(
            `Delete connection "${source?.data.label ?? edge.source} → ${target?.data.label ?? edge.target}"?`
          );

        if (!confirmed) {
          return;
        }

        setEdges((current) =>
          current.filter(
            (item) =>
              item.id !== edgeId
          )
        );

        if (
          editingEdgeId ===
          edgeId
        ) {
          setEditingEdgeId(
            null
          );

          setConnectionModalOpen(
            false
          );
        }
      },
      [
        edges,
        nodes,
        editingEdgeId,
      ]
    );

  /* ------------------------------------------------------------------------ */
  /* Connection submit                                                        */
  /* ------------------------------------------------------------------------ */

  function handleConnectionSubmit(
    data: ConnectionData
  ) {
    /* ---------------------------------------------------------------------- */
    /* Editing existing connection                                            */
    /* ---------------------------------------------------------------------- */

    if (editingEdgeId) {
      setEdges((current) =>
        current.map((edge) => {
          if (
            edge.id !==
            editingEdgeId
          ) {
            return edge;
          }

          return {
            ...edge,

            sourceHandle:
              data.sourceInterfaceId ??
              edge.sourceHandle,

            targetHandle:
              data.targetInterfaceId ??
              edge.targetHandle,

            label:
              getConnectionLabel(
                data
              ),

            data,
          };
        })
      );

      setEditingEdgeId(
        null
      );

      setConnectionModalOpen(
        false
      );

      return;
    }

    /* ---------------------------------------------------------------------- */
    /* Creating new connection                                                */
    /* ---------------------------------------------------------------------- */

    if (
      !pendingConnection ||
      !pendingConnection.source ||
      !pendingConnection.target
    ) {
      return;
    }

    const newEdge: ArchitectureEdge =
      {
        id: crypto.randomUUID(),

        source:
          pendingConnection.source,

        target:
          pendingConnection.target,

        sourceHandle:
          data.sourceInterfaceId ??
          pendingConnection.sourceHandle,

        targetHandle:
          data.targetInterfaceId ??
          pendingConnection.targetHandle,

        label:
          getConnectionLabel(
            data
          ),

        data,
      };

    setEdges((current) =>
      addEdge(
        newEdge,
        current
      ) as ArchitectureEdge[]
    );

    setPendingConnection(
      null
    );

    setConnectionModalOpen(
      false
    );
  }

  /* ------------------------------------------------------------------------ */
  /* Editing node                                                             */
  /* ------------------------------------------------------------------------ */

  const editingNode =
    editingNodeId
      ? nodes.find(
          (node) =>
            node.id ===
            editingNodeId
        )
      : undefined;

  /* ------------------------------------------------------------------------ */
  /* Editing edge                                                             */
  /* ------------------------------------------------------------------------ */

  const editingEdge =
    editingEdgeId
      ? edges.find(
          (edge) =>
            edge.id ===
            editingEdgeId
        )
      : undefined;

  /* ------------------------------------------------------------------------ */
  /* Connection source node                                                   */
  /* ------------------------------------------------------------------------ */

  const sourceNode =
    pendingConnection?.source
      ? nodes.find(
          (node) =>
            node.id ===
            pendingConnection.source
        )
      : editingEdge
        ? nodes.find(
            (node) =>
              node.id ===
              editingEdge.source
          )
        : undefined;

  /* ------------------------------------------------------------------------ */
  /* Connection target node                                                   */
  /* ------------------------------------------------------------------------ */

  const targetNode =
    pendingConnection?.target
      ? nodes.find(
          (node) =>
            node.id ===
            pendingConnection.target
        )
      : editingEdge
        ? nodes.find(
            (node) =>
              node.id ===
              editingEdge.target
          )
        : undefined;

  /* ------------------------------------------------------------------------ */
  /* Initial connection data                                                  */
  /* ------------------------------------------------------------------------ */

  const connectionInitialData =
    editingEdge?.data;

  /* ------------------------------------------------------------------------ */
  /* Initial source interface                                                 */
  /* ------------------------------------------------------------------------ */

  const initialSourceInterfaceId =
    pendingConnection
      ?.sourceHandle ??
    editingEdge?.sourceHandle ??
    null;

  /* ------------------------------------------------------------------------ */
  /* Initial target interface                                                 */
  /* ------------------------------------------------------------------------ */

  const initialTargetInterfaceId =
    pendingConnection
      ?.targetHandle ??
    editingEdge?.targetHandle ??
    null;

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0d10]">
      {/* ------------------------------------------------------------------ */}
      {/* Top toolbar                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
        {/* Back */}
        {currentParentId && (
          <button
            type="button"
            onClick={goBack}
            className="rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white/70 shadow-lg transition hover:bg-[#1c2128] hover:text-white"
          >
            ← Back
          </button>
        )}

        {/* Breadcrumb */}
        <div className="flex items-center rounded-lg border border-white/10 bg-[#15191f]/95 px-3 py-2 text-sm shadow-lg backdrop-blur">
          <button
            type="button"
            onClick={() =>
              setCurrentParentId(
                null
              )
            }
            className={
              currentParentId
                ? "text-white/40 hover:text-white"
                : "text-white"
            }
          >
            ORION
          </button>

          {breadcrumbs.map(
            (node) => (
              <div
                key={node.id}
                className="flex items-center"
              >
                <span className="mx-2 text-white/20">
                  /
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentParentId(
                      node.id
                    )
                  }
                  className={
                    node.id ===
                    currentParentId
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }
                >
                  {
                    node.data
                      .label
                  }
                </button>
              </div>
            )
          )}
        </div>

        {/* Add system */}
        <button
          type="button"
          onClick={
            handleAddSystem
          }
          className="rounded-lg border border-white/10 bg-[#15191f] px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-[#1c2128]"
        >
          + Add System
        </button>

        {/* Help */}
        <div className="rounded-lg border border-white/10 bg-[#15191f]/90 px-3 py-2 text-xs text-white/40 backdrop-blur">
          Double-click a system
          to enter
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Bottom status                                                       */}
      {/* ------------------------------------------------------------------ */}

      {currentSystem && (
        <div className="absolute bottom-4 left-4 z-10 rounded-lg border border-white/10 bg-[#15191f]/90 px-3 py-2 text-xs text-white/40 backdrop-blur">
          {currentSystem.data.label}

          <span className="mx-2 text-white/20">
            ·
          </span>

          {
            visibleNodes.length
          }{" "}
          {visibleNodes.length ===
          1
            ? "subsystem"
            : "subsystems"}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* React Flow                                                          */}
      {/* ------------------------------------------------------------------ */}

      <ReactFlow
        nodes={visibleNodes}
        edges={visibleEdges}
        nodeTypes={nodeTypes}
        onNodesChange={
          onNodesChange
        }
        onEdgesChange={
          onEdgesChange
        }
        onConnect={onConnect}
        onNodeDoubleClick={(
          _event,
          node
        ) => {
          enterSystem(
            node.id
          );
        }}
        onEdgeClick={(
          event,
          edge
        ) => {
          event.stopPropagation();

          openConnectionEditor(
            edge.id
          );
        }}
        onEdgeContextMenu={(
          event,
          edge
        ) => {
          event.preventDefault();
          event.stopPropagation();

          deleteConnection(
            edge.id
          );
        }}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        minZoom={0.2}
        maxZoom={2}
        defaultEdgeOptions={{
          animated: false,
        }}
        colorMode="dark"
        proOptions={{
          hideAttribution:
            true,
        }}
      >
        <Background />

        <Controls />

        <MiniMap
          pannable
          zoomable
          nodeColor="#3a424d"
        />
      </ReactFlow>

      {/* ------------------------------------------------------------------ */}
      {/* System Modal                                                        */}
      {/* ------------------------------------------------------------------ */}

      <SystemModal
        open={systemModalOpen}
        initialData={
          editingNode
            ? editingNode.data
            : undefined
        }
        connectedInterfaceIds={
          connectedInterfaceIds
        }
        onClose={() => {
          setSystemModalOpen(
            false
          );

          setEditingNodeId(
            null
          );
        }}
        onSubmit={
          handleSystemSubmit
        }
      />

      {/* ------------------------------------------------------------------ */}
      {/* Connection Modal                                                    */}
      {/* ------------------------------------------------------------------ */}

      <ConnectionModal
        open={connectionModalOpen}
        sourceName={
          sourceNode?.data.label ??
          "Unknown System"
        }
        targetName={
          targetNode?.data.label ??
          "Unknown System"
        }
        sourceInterfaces={
          getInterfaceOptions(
            sourceNode
          )
        }
        targetInterfaces={
          getInterfaceOptions(
            targetNode
          )
        }
        initialData={
          connectionInitialData
        }
        initialSourceInterfaceId={
          initialSourceInterfaceId
        }
        initialTargetInterfaceId={
          initialTargetInterfaceId
        }
        onDelete={
          editingEdgeId
            ? () =>
                deleteConnection(
                  editingEdgeId
                )
            : undefined
        }
        onClose={() => {
          setPendingConnection(
            null
          );
          setEditingEdgeId(
            null
          );
          setConnectionModalOpen(
            false
          );
        }}
        onSubmit={
          handleConnectionSubmit
        }
      />
    </div>
  );
}