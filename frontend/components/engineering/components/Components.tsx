"use client";

import {
  useMemo,
  useState,
} from "react";

import type { ArchitectureNode } from "../architecture/Architecture";

import ComponentModal from "./ComponentModal";

export type ComponentStatus =
  | "Concept"
  | "Selected"
  | "Ordered"
  | "Received"
  | "Installed";

export type ComponentCategory =
  | "Computing"
  | "Sensor"
  | "Power"
  | "Control"
  | "Mechanical"
  | "Communication"
  | "Other";

export interface EngineeringComponent {
  id: string;
  name: string;
  manufacturer: string;
  partNumber: string;
  category: ComponentCategory;
  description: string;
  quantity: number;
  status: ComponentStatus;
  subsystemId: string | null;
  mass: number | null;
  length: number | null;
  width: number | null;
  height: number | null;
  voltageMin: number | null;
  voltageMax: number | null;
  currentMax: number | null;
  powerMax: number | null;
  unitCost: number | null;
  currency: string;
  interfaces: string[];
  datasheet: string;
  notes: string;
}

interface ComponentsProps {
  architectureNodes: ArchitectureNode[];
}

const initialComponents: EngineeringComponent[] = [
  {
    id: "jetson-orin-nx",
    name: "NVIDIA Jetson Orin NX 16GB",
    manufacturer: "NVIDIA",
    partNumber: "699-13767-0000-000",
    category: "Computing",
    description:
      "Primary onboard compute platform.",
    quantity: 1,
    status: "Selected",
    subsystemId: "computing",
    mass: null,
    length: null,
    width: null,
    height: null,
    voltageMin: 12,
    voltageMax: 20,
    currentMax: 10,
    powerMax: 40,
    unitCost: null,
    currency: "CAD",
    interfaces: [
      "USB-C",
      "Ethernet",
      "HDMI",
      "CAN",
    ],
    datasheet: "",
    notes: "",
  },

  {
    id: "bno085",
    name: "BNO085",
    manufacturer: "CEVA",
    partNumber: "BNO085",
    category: "Sensor",
    description:
      "9-axis orientation and motion sensor.",
    quantity: 1,
    status: "Concept",
    subsystemId: "sensors",
    mass: null,
    length: null,
    width: null,
    height: null,
    voltageMin: 1.7,
    voltageMax: 3.6,
    currentMax: null,
    powerMax: null,
    unitCost: null,
    currency: "CAD",
    interfaces: [
      "I2C",
      "SPI",
      "UART",
    ],
    datasheet: "",
    notes: "",
  },

  {
    id: "oak-d-lite",
    name: "OAK-D Lite",
    manufacturer: "Luxonis",
    partNumber: "OAK-D-LITE",
    category: "Sensor",
    description:
      "Stereo depth and RGB camera.",
    quantity: 1,
    status: "Concept",
    subsystemId: "sensors",
    mass: null,
    length: null,
    width: null,
    height: null,
    voltageMin: 5,
    voltageMax: 5,
    currentMax: null,
    powerMax: null,
    unitCost: null,
    currency: "CAD",
    interfaces: [
      "USB-C",
    ],
    datasheet: "",
    notes: "",
  },
];

const categories: Array<
  "All" | ComponentCategory
> = [
  "All",
  "Computing",
  "Sensor",
  "Power",
  "Control",
  "Mechanical",
  "Communication",
  "Other",
];

const statuses: Array<
  "All" | ComponentStatus
> = [
  "All",
  "Concept",
  "Selected",
  "Ordered",
  "Received",
  "Installed",
];

function getSubsystemPath(
  node: ArchitectureNode,
  nodes: ArchitectureNode[]
): string {
  const parts: string[] = [
    node.data.label,
  ];

  let parentId =
    node.data.parentId ?? null;

  while (parentId) {
    const parent = nodes.find(
      (item) => item.id === parentId
    );

    if (!parent) {
      break;
    }

    parts.unshift(
      parent.data.label
    );

    parentId =
      parent.data.parentId ?? null;
  }

  return `ORION / ${parts.join(" / ")}`;
}

export default function Components({
  architectureNodes,
}: ComponentsProps) {
  const [
    components,
    setComponents,
  ] = useState<EngineeringComponent[]>(
    initialComponents
  );

  const [search, setSearch] =
    useState("");

  const [
    categoryFilter,
    setCategoryFilter,
  ] = useState<
    "All" | ComponentCategory
  >("All");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState<
    "All" | ComponentStatus
  >("All");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [modalOpen, setModalOpen] =
    useState(false);

  const [
    editingComponent,
    setEditingComponent,
  ] = useState<
    EngineeringComponent | undefined
  >();

  const subsystemOptions =
    useMemo(() => {
      return architectureNodes
        .map((node) => ({
          id: node.id,
          label: getSubsystemPath(
            node,
            architectureNodes
          ),
        }))
        .sort((a, b) =>
          a.label.localeCompare(
            b.label
          )
        );
    }, [architectureNodes]);

  const filteredComponents =
    useMemo(() => {
      const normalizedSearch =
        search.trim().toLowerCase();

      return components.filter(
        (component) => {
          const matchesSearch =
            normalizedSearch === "" ||
            [
              component.name,
              component.manufacturer,
              component.partNumber,
              component.category,
            ].some((value) =>
              value
                .toLowerCase()
                .includes(
                  normalizedSearch
                )
            );

          const matchesCategory =
            categoryFilter === "All" ||
            component.category ===
              categoryFilter;

          const matchesStatus =
            statusFilter === "All" ||
            component.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );
        }
      );
    }, [
      components,
      search,
      categoryFilter,
      statusFilter,
    ]);

  function handleAddComponent() {
    setEditingComponent(undefined);
    setModalOpen(true);
  }

  function handleEditComponent(
    component: EngineeringComponent
  ) {
    setEditingComponent(component);
    setModalOpen(true);
  }

  function handleDeleteComponent(
    id: string
  ) {
    const component =
      components.find(
        (item) => item.id === id
      );

    if (!component) {
      return;
    }

    const confirmed =
      window.confirm(
        `Delete "${component.name}"?`
      );

    if (!confirmed) {
      return;
    }

    setComponents((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  }

  function handleModalClose() {
    setModalOpen(false);
    setEditingComponent(undefined);
  }

  function handleComponentSubmit(
    data: EngineeringComponent
  ) {
    setComponents((current) => {
      const exists = current.some(
        (item) => item.id === data.id
      );

      if (exists) {
        return current.map((item) =>
          item.id === data.id
            ? data
            : item
        );
      }

      return [...current, data];
    });

    handleModalClose();
  }

  function clearFilters() {
    setSearch("");
    setCategoryFilter("All");
    setStatusFilter("All");
  }

  return (
    <div className="h-full overflow-auto bg-[#0b0d10]">
      <div className="mx-auto max-w-[1600px] p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Components
            </h2>

            <p className="mt-1 text-sm text-white/40">
              Manage physical components and
              parts used by the engineering system.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddComponent}
            className="rounded-lg border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            + Add Component
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3 xl:flex-row">
          <input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search components..."
            className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
          />

          <select
            value={categoryFilter}
            onChange={(event) =>
              setCategoryFilter(
                event.target
                  .value as
                  | "All"
                  | ComponentCategory
              )
            }
            className="rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white outline-none"
          >
            {categories.map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category === "All"
                    ? "All Categories"
                    : category}
                </option>
              )
            )}
          </select>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(
                event.target
                  .value as
                  | "All"
                  | ComponentStatus
              )
            }
            className="rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white outline-none"
          >
            {statuses.map(
              (status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status === "All"
                    ? "All Statuses"
                    : status}
                </option>
              )
            )}
          </select>

          <div className="flex rounded-lg border border-white/10 bg-[#15191f] p-1">
            <button
              type="button"
              onClick={() =>
                setView("grid")
              }
              className={`rounded-md px-3 py-1.5 text-xs ${
                view === "grid"
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Grid
            </button>

            <button
              type="button"
              onClick={() =>
                setView("list")
              }
              className={`rounded-md px-3 py-1.5 text-xs ${
                view === "list"
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              List
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-white/40">
            Showing{" "}
            {filteredComponents.length}{" "}
            of {components.length} components
          </p>

          {(search ||
            categoryFilter !== "All" ||
            statusFilter !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs text-white/40 hover:text-white"
            >
              Clear filters
            </button>
          )}
        </div>

        {filteredComponents.length ===
        0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-white/10 px-6 py-16 text-center">
            <p className="text-sm text-white/50">
              No components found.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-3 text-sm text-white underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            className={
              view === "grid"
                ? "mt-6 grid gap-4 md:grid-cols-2 2xl:grid-cols-3"
                : "mt-6 space-y-3"
            }
          >
            {filteredComponents.map(
              (component) => {
                const subsystem =
                  subsystemOptions.find(
                    (item) =>
                      item.id ===
                      component.subsystemId
                  );

                return (
                  <div
                    key={component.id}
                    className={`rounded-xl border border-white/10 bg-[#111419] ${
                      view === "grid"
                        ? "p-5"
                        : "p-4"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold">
                          {component.name}
                        </h3>

                        <p className="mt-1 text-xs text-white/40">
                          {component.manufacturer}

                          {component.partNumber &&
                            ` · ${component.partNumber}`}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full border border-white/10 px-2 py-1 text-[10px] text-white/50">
                        {component.status}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-white/30">
                          Category
                        </p>

                        <p className="mt-1 text-white/70">
                          {component.category}
                        </p>
                      </div>

                      <div>
                        <p className="text-white/30">
                          Quantity
                        </p>

                        <p className="mt-1 text-white/70">
                          {component.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-[11px] text-white/30">
                        Architecture
                      </p>

                      <p className="mt-1 truncate text-xs text-white/60">
                        {subsystem
                          ? subsystem.label
                          : "Unassigned"}
                      </p>
                    </div>

                    {component.description && (
                      <p className="mt-4 line-clamp-2 text-xs leading-5 text-white/40">
                        {component.description}
                      </p>
                    )}

                    <div className="mt-5 flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleEditComponent(
                            component
                          )
                        }
                        className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteComponent(
                            component.id
                          )
                        }
                        className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/40 transition hover:bg-white/5 hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>

      <ComponentModal
        open={modalOpen}
        initialData={editingComponent}
        architectureNodes={
          architectureNodes
        }
        onClose={handleModalClose}
        onSubmit={
          handleComponentSubmit
        }
      />
    </div>
  );
}