"use client";

import { useCallback, useMemo, useState } from "react";

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
type ArchitectureEdge = Edge;

const initialNodes: ArchitectureNode[] = [
  {
    id: "power",
    type: "system",
    position: { x: 50, y: 150 },
    data: {
      label: "Power System",
      category: "Power",
      description:
        "Provides and distributes electrical power.",
      status: "Designed",
      parameters: [
        {
          name: "Voltage",
          value: "24",
          unit: "V",
        },
        {
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
    position: { x: 400, y: 50 },
    data: {
      label: "Sensor System",
      category: "Sensors",
      description:
        "Perception hardware for the vehicle.",
      status: "Concept",
      parameters: [
        {
          name: "Cameras",
          value: "2",
        },
        {
          name: "LiDAR",
          value: "1",
        },
      ],
    },
  },

  {
    id: "computing",
    type: "system",
    position: { x: 400, y: 300 },
    data: {
      label: "Computing System",
      category: "Computing",
      description:
        "Main onboard computing and AI system.",
      status: "Designed",
      parameters: [
        {
          name: "Platform",
          value: "Jetson Orin NX",
        },
        {
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
    position: { x: 800, y: 200 },
    data: {
      label: "Control System",
      category: "Control",
      description:
        "Controls actuators and system behavior.",
      status: "Concept",
      parameters: [],
    },
  },

  /*
   * Example nested systems
   */
  {
    id: "jetson",
    type: "system",
    position: { x: 50, y: 100 },
    data: {
      label: "Jetson Orin NX",
      category: "Computing",
      description:
        "Primary onboard compute platform.",
      status: "Designed",
      parentId: "computing",
      parameters: [
        {
          name: "Memory",
          value: "16",
          unit: "GB",
        },
        {
          name: "Architecture",
          value: "Ampere",
        },
      ],
    },
  },

  {
    id: "ai",
    type: "system",
    position: { x: 400, y: 100 },
    data: {
      label: "AI System",
      category: "Software",
      description:
        "Perception, reasoning, and AI workloads.",
      status: "Concept",
      parentId: "computing",
      parameters: [],
    },
  },
];

const initialEdges: ArchitectureEdge[] = [
  {
    id: "power-computing",
    source: "power",
    target: "computing",
    label: "Power · 24V DC",
    data: {
      type: "power",
      protocol: "24V DC",
      description:
        "Electrical power from the power system.",
    },
  },

  {
    id: "sensors-computing",
    source: "sensors",
    target: "computing",
    label: "Sensor Data · USB / Ethernet",
    data: {
      type: "sensor_data",
      protocol: "USB / Ethernet",
      description:
        "Sensor measurements and camera feeds.",
    },
  },

  {
    id: "computing-control",
    source: "computing",
    target: "control",
    label: "Control · CAN",
    data: {
      type: "control",
      protocol: "CAN",
      description:
        "Control commands sent to the control system.",
    },
  },

  {
    id: "jetson-ai",
    source: "jetson",
    target: "ai",
    label: "Data · Internal",
    data: {
      type: "communication",
      protocol: "Internal",
      description:
        "Communication between compute platform and AI system.",
    },
  },
];

export default function Architecture() {
  const [nodes, setNodes] =
    useState<ArchitectureNode[]>(initialNodes);

  const [edges, setEdges] =
    useState<ArchitectureEdge[]>(initialEdges);

  /*
   * null = ORION root
   * otherwise = system currently being viewed
   */
  const [currentParentId, setCurrentParentId] =
    useState<string | null>(null);

  const [systemModalOpen, setSystemModalOpen] =
    useState(false);

  const [editingNodeId, setEditingNodeId] =
    useState<string | null>(null);

  const [connectionModalOpen, setConnectionModalOpen] =
    useState(false);

  const [pendingConnection, setPendingConnection] =
    useState<Connection | null>(null);

  /*
   * ---------------------------------------------------------
   * NODE TYPES
   * ---------------------------------------------------------
   */

  const nodeTypes = useMemo(
    () => ({
      system: SystemNode,
    }),
    []
  );

  /*
   * ---------------------------------------------------------
   * NODE CHANGES
   * ---------------------------------------------------------
   */

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((current) =>
        applyNodeChanges(
          changes,
          current
        ) as ArchitectureNode[]
      );
    },
    []
  );

  /*
   * ---------------------------------------------------------
   * EDGE CHANGES
   * ---------------------------------------------------------
   */

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((current) =>
        applyEdgeChanges(changes, current)
      );
    },
    []
  );

  /*
   * ---------------------------------------------------------
   * ENTER SYSTEM
   * ---------------------------------------------------------
   */

  const enterSystem = useCallback(
    (nodeId: string) => {
      setCurrentParentId(nodeId);
    },
    []
  );

  /*
   * ---------------------------------------------------------
   * GO BACK
   * ---------------------------------------------------------
   */

  const goBack = useCallback(() => {
    if (!currentParentId) {
      return;
    }

    const currentNode = nodes.find(
      (node) => node.id === currentParentId
    );

    if (!currentNode) {
      setCurrentParentId(null);
      return;
    }

    setCurrentParentId(
      currentNode.data.parentId ?? null
    );
  }, [currentParentId, nodes]);

  /*
   * ---------------------------------------------------------
   * BUILD BREADCRUMB
   * ---------------------------------------------------------
   */

  const breadcrumbs = useMemo(() => {
    const result: ArchitectureNode[] = [];

    let id = currentParentId;

    while (id) {
      const node = nodes.find(
        (item) => item.id === id
      );

      if (!node) {
        break;
      }

      result.unshift(node);

      id = node.data.parentId;
    }

    return result;
  }, [currentParentId, nodes]);

  /*
   * ---------------------------------------------------------
   * CURRENT SYSTEM
   * ---------------------------------------------------------
   */

  const currentSystem = currentParentId
    ? nodes.find(
        (node) => node.id === currentParentId
      )
    : undefined;

  /*
   * ---------------------------------------------------------
   * OPEN SYSTEM EDITOR
   * ---------------------------------------------------------
   */

  const openSystemEditor = useCallback(
    (nodeId: string) => {
      setEditingNodeId(nodeId);
      setSystemModalOpen(true);
    },
    []
  );

  /*
   * ---------------------------------------------------------
   * DELETE SYSTEM
   * ---------------------------------------------------------
   */

  const deleteSystem = useCallback(
    (nodeId: string) => {
      const node = nodes.find(
        (item) => item.id === nodeId
      );

      if (!node) {
        return;
      }

      const confirmed = window.confirm(
        `Delete "${node.data.label}"?`
      );

      if (!confirmed) {
        return;
      }

      /*
       * Delete the system and all descendants.
       */

      const idsToDelete = new Set<string>([
        nodeId,
      ]);

      let foundChild = true;

      while (foundChild) {
        foundChild = false;

        for (const item of nodes) {
          if (
            item.data.parentId &&
            idsToDelete.has(item.data.parentId) &&
            !idsToDelete.has(item.id)
          ) {
            idsToDelete.add(item.id);
            foundChild = true;
          }
        }
      }

      setNodes((current) =>
        current.filter(
          (item) => !idsToDelete.has(item.id)
        )
      );

      setEdges((current) =>
        current.filter(
          (edge) =>
            !idsToDelete.has(edge.source) &&
            !idsToDelete.has(edge.target)
        )
      );

      if (
        idsToDelete.has(
          currentParentId ?? ""
        )
      ) {
        setCurrentParentId(null);
      }

      if (editingNodeId === nodeId) {
        setEditingNodeId(null);
        setSystemModalOpen(false);
      }
    },
    [
      currentParentId,
      editingNodeId,
      nodes,
    ]
  );

  /*
   * ---------------------------------------------------------
   * VISIBLE NODES
   * ---------------------------------------------------------
   *
   * Only show children of the system we're inside.
   *
   * IMPORTANT:
   * Attach edit/delete callbacks here so existing systems
   * also have working edit buttons.
   */

  const visibleNodes = useMemo(() => {
    return nodes
      .filter(
        (node) =>
          (node.data.parentId ?? null) ===
          currentParentId
      )
      .map((node) => ({
        ...node,
        data: {
          ...node.data,

          onEdit: () =>
            openSystemEditor(node.id),

          onDelete: () =>
            deleteSystem(node.id),
        },
      }));
  }, [
    nodes,
    currentParentId,
    openSystemEditor,
    deleteSystem,
  ]);

  /*
   * ---------------------------------------------------------
   * VISIBLE EDGES
   * ---------------------------------------------------------
   */

  const visibleNodeIds = useMemo(
    () =>
      new Set(
        visibleNodes.map(
          (node) => node.id
        )
      ),
    [visibleNodes]
  );

  const visibleEdges = useMemo(() => {
    return edges.filter(
      (edge) =>
        visibleNodeIds.has(edge.source) &&
        visibleNodeIds.has(edge.target)
    );
  }, [edges, visibleNodeIds]);

  /*
   * ---------------------------------------------------------
   * ADD SYSTEM
   * ---------------------------------------------------------
   */

  function handleAddSystem() {
    setEditingNodeId(null);
    setSystemModalOpen(true);
  }

  /*
   * ---------------------------------------------------------
   * SAVE SYSTEM
   * ---------------------------------------------------------
   */

  function handleSystemSubmit(
    data: SystemNodeData
  ) {
    if (editingNodeId) {
      setNodes((current) =>
        current.map((node) => {
          if (node.id !== editingNodeId) {
            return node;
          }

          return {
            ...node,
            data: {
              ...data,

              /*
               * Preserve hierarchy.
               */
              parentId: node.data.parentId,
            },
          };
        })
      );
    } else {
      const id = crypto.randomUUID();

      const newNode: ArchitectureNode = {
        id,
        type: "system",

        position: {
          x: 100 + Math.random() * 500,
          y: 100 + Math.random() * 300,
        },

        data: {
          ...data,

          /*
           * New systems belong to the system
           * currently being viewed.
           */
          parentId:
            currentParentId ?? undefined,
        },
      };

      setNodes((current) => [
        ...current,
        newNode,
      ]);
    }

    setSystemModalOpen(false);
    setEditingNodeId(null);
  }

  /*
   * ---------------------------------------------------------
   * CONNECTION START
   * ---------------------------------------------------------
   */

  const onConnect: OnConnect = useCallback(
    (connection) => {
      if (
        !connection.source ||
        !connection.target
      ) {
        return;
      }

      setPendingConnection(connection);
      setConnectionModalOpen(true);
    },
    []
  );

  /*
   * ---------------------------------------------------------
   * CONNECTION LABEL
   * ---------------------------------------------------------
   */

  function getConnectionLabel(
    data: ConnectionData
  ) {
    const typeLabels: Record<
      ConnectionData["type"],
      string
    > = {
      power: "Power",
      communication: "Communication",
      sensor_data: "Sensor Data",
      control: "Control",
      mechanical: "Mechanical",
      thermal: "Thermal",
    };

    const typeLabel =
      typeLabels[data.type];

    return data.protocol
      ? `${typeLabel} · ${data.protocol}`
      : typeLabel;
  }

  /*
   * ---------------------------------------------------------
   * SAVE CONNECTION
   * ---------------------------------------------------------
   */

  function handleConnectionSubmit(
    data: ConnectionData
  ) {
    if (
      !pendingConnection ||
      !pendingConnection.source ||
      !pendingConnection.target
    ) {
      return;
    }

    const newEdge: ArchitectureEdge = {
      id: crypto.randomUUID(),

      source: pendingConnection.source,

      target: pendingConnection.target,

      sourceHandle:
        pendingConnection.sourceHandle,

      targetHandle:
        pendingConnection.targetHandle,

      label: getConnectionLabel(data),

      data,
    };

    setEdges((current) =>
      addEdge(newEdge, current)
    );

    setPendingConnection(null);
    setConnectionModalOpen(false);
  }

  /*
   * ---------------------------------------------------------
   * CURRENT EDITING NODE
   * ---------------------------------------------------------
   */

  const editingNode = editingNodeId
    ? nodes.find(
        (node) =>
          node.id === editingNodeId
      )
    : undefined;

  /*
   * ---------------------------------------------------------
   * CONNECTION NODES
   * ---------------------------------------------------------
   */

  const sourceNode =
    pendingConnection?.source
      ? nodes.find(
          (node) =>
            node.id ===
            pendingConnection.source
        )
      : undefined;

  const targetNode =
    pendingConnection?.target
      ? nodes.find(
          (node) =>
            node.id ===
            pendingConnection.target
        )
      : undefined;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0d10]">

      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}

      <div className="absolute left-4 top-4 z-20 flex items-center gap-2">

        {currentParentId && (
          <button
            type="button"
            onClick={goBack}
            className="rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white/70 shadow-lg transition hover:bg-[#1c2128] hover:text-white"
          >
            ← Back
          </button>
        )}

        <div className="flex items-center rounded-lg border border-white/10 bg-[#15191f]/95 px-3 py-2 text-sm shadow-lg backdrop-blur">

          <button
            type="button"
            onClick={() =>
              setCurrentParentId(null)
            }
            className={
              currentParentId
                ? "text-white/40 hover:text-white"
                : "text-white"
            }
          >
            ORION
          </button>

          {breadcrumbs.map((node) => (
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
                {node.data.label}
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddSystem}
          className="rounded-lg border border-white/10 bg-[#15191f] px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-[#1c2128]"
        >
          + Add System
        </button>

        <div className="rounded-lg border border-white/10 bg-[#15191f]/90 px-3 py-2 text-xs text-white/40 backdrop-blur">
          Double-click a system to enter
        </div>
      </div>

      {/* =====================================================
          CURRENT SYSTEM INFO
      ====================================================== */}

      {currentSystem && (
        <div className="absolute bottom-4 left-4 z-10 rounded-lg border border-white/10 bg-[#15191f]/90 px-3 py-2 text-xs text-white/40 backdrop-blur">
          {currentSystem.data.label}

          <span className="mx-2 text-white/20">
            ·
          </span>

          {visibleNodes.length}{" "}
          {visibleNodes.length === 1
            ? "subsystem"
            : "subsystems"}
        </div>
      )}

      {/* =====================================================
          REACT FLOW
      ====================================================== */}

      <ReactFlow
        nodes={visibleNodes}
        edges={visibleEdges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDoubleClick={(_, node) => {
          enterSystem(node.id);
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
          hideAttribution: true,
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

      {/* =====================================================
          SYSTEM EDITOR
      ====================================================== */}

      <SystemModal
        open={systemModalOpen}
        initialData={
          editingNode
            ? editingNode.data
            : undefined
        }
        onClose={() => {
          setSystemModalOpen(false);
          setEditingNodeId(null);
        }}
        onSubmit={handleSystemSubmit}
      />

      {/* =====================================================
          CONNECTION EDITOR
      ====================================================== */}

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
        onClose={() => {
          setPendingConnection(null);
          setConnectionModalOpen(false);
        }}
        onSubmit={handleConnectionSubmit}
      />
    </div>
  );
}