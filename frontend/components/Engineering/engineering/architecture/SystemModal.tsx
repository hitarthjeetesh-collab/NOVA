"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

import {
  type InterfaceDirection,
  type InterfaceType,
  type SystemInterface,
  type SystemNodeData,
  type SystemParameter,
} from "./SystemNode";

interface SystemModalProps {
  open: boolean;
  initialData?: SystemNodeData;
  onClose: () => void;
  onSubmit: (
    data: SystemNodeData
  ) => void;

  /**
   * Optional callback used by the parent
   * when an interface is created.
   */
  onInterfaceCreated?: (
    interfaceId: string
  ) => void;

  /**
   * IDs currently used by connections.
   * Used to prevent accidental deletion.
   */
  connectedInterfaceIds?: Set<string>;
}

const interfaceTypes: {
  value: InterfaceType;
  label: string;
}[] = [
  {
    value: "power",
    label: "Power",
  },
  {
    value: "dc_power",
    label: "DC Power",
  },
  {
    value: "usb_a",
    label: "USB-A",
  },
  {
    value: "usb_c",
    label: "USB-C",
  },
  {
    value: "thunderbolt_4",
    label: "Thunderbolt 4",
  },
  {
    value: "thunderbolt_5",
    label: "Thunderbolt 5",
  },
  {
    value: "ethernet",
    label: "Ethernet",
  },
  {
    value: "can",
    label: "CAN",
  },
  {
    value: "uart",
    label: "UART",
  },
  {
    value: "i2c",
    label: "I²C",
  },
  {
    value: "spi",
    label: "SPI",
  },
  {
    value: "hdmi",
    label: "HDMI",
  },
  {
    value: "displayport",
    label: "DisplayPort",
  },
  {
    value: "pcie",
    label: "PCIe",
  },
  {
    value: "custom",
    label: "Custom",
  },
];

const categories = [
  "Mechanical",
  "Electrical",
  "Performance",
  "Software",
  "Thermal",
  "Safety",
  "Environmental",
  "Manufacturing",
  "Other",
];

const statuses: SystemNodeData["status"][] = [
  "Concept",
  "Designed",
  "Validated",
  "Manufacturing",
];

function createInterface(): SystemInterface {
  return {
    id: `if_${crypto.randomUUID()}`,
    name: "New Interface",
    direction: "bidirectional",
    type: "custom",
    standard: "",
    protocol: "",
    dataRate: "",
    voltage: "",
    maxCurrent: "",
    description: "",
  };
}

function createParameter(): SystemParameter {
  return {
    id: `param_${crypto.randomUUID()}`,
    name: "New Parameter",
    value: "",
    unit: "",
  };
}

export default function SystemModal({
  open,
  initialData,
  onClose,
  onSubmit,
  onInterfaceCreated,
  connectedInterfaceIds = new Set<string>(),
}: SystemModalProps) {
  const [label, setLabel] =
    useState("");

  const [category, setCategory] =
    useState("Other");

  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState<SystemNodeData["status"]>(
      "Concept"
    );

  const [interfaces, setInterfaces] =
    useState<SystemInterface[]>([]);

  const [parameters, setParameters] =
    useState<SystemParameter[]>([]);

  const [
    selectedInterfaceId,
    setSelectedInterfaceId,
  ] = useState<string | null>(null);

  const [error, setError] =
    useState("");

  const editing = Boolean(
    initialData
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    setLabel(
      initialData?.label ?? ""
    );

    setCategory(
      initialData?.category ??
        "Other"
    );

    setDescription(
      initialData?.description ?? ""
    );

    setStatus(
      initialData?.status ??
        "Concept"
    );

    setInterfaces(
      Array.isArray(
        initialData?.interfaces
      )
        ? initialData.interfaces.map(
            (item) => ({
              ...item,
            })
          )
        : []
    );

    setParameters(
      Array.isArray(
        initialData?.parameters
      )
        ? initialData.parameters.map(
            (item) => ({
              ...item,
            })
          )
        : []
    );

    setSelectedInterfaceId(
      initialData?.interfaces?.[0]
        ?.id ?? null
    );

    setError("");
  }, [open, initialData]);

  const selectedInterface =
    useMemo(
      () =>
        interfaces.find(
          (item) =>
            item.id ===
            selectedInterfaceId
        ),
      [
        interfaces,
        selectedInterfaceId,
      ]
    );

  function updateInterface(
    id: string,
    updates: Partial<SystemInterface>
  ) {
    setInterfaces((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updates,
            }
          : item
      )
    );
  }

  function handleAddInterface() {
    const newInterface =
      createInterface();

    /**
     * IMPORTANT:
     *
     * New interfaces are inserted at index 0.
     * Existing interface objects are not recreated
     * with new IDs.
     */
    setInterfaces((current) => [
      newInterface,
      ...current,
    ]);

    /**
     * Automatically switch the editor
     * to the newly created interface.
     */
    setSelectedInterfaceId(
      newInterface.id
    );

    onInterfaceCreated?.(
      newInterface.id
    );
  }

  function handleDeleteInterface(
    id: string
  ) {
    if (
      connectedInterfaceIds.has(id)
    ) {
      setError(
        "This interface is currently used by one or more connections. Remove those connections before deleting the interface."
      );
      return;
    }

    setInterfaces((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );

    if (
      selectedInterfaceId === id
    ) {
      setInterfaces((current) => {
        const next =
          current.filter(
            (item) =>
              item.id !== id
          );

        setSelectedInterfaceId(
          next[0]?.id ?? null
        );

        return next;
      });
    }

    setError("");
  }

  function handleAddParameter() {
    setParameters((current) => [
      ...current,
      createParameter(),
    ]);
  }

  function updateParameter(
    id: string,
    updates: Partial<SystemParameter>
  ) {
    setParameters((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updates,
            }
          : item
      )
    );
  }

  function deleteParameter(
    id: string
  ) {
    setParameters((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  }

  function handleSubmit() {
    const trimmedLabel =
      label.trim();

    if (!trimmedLabel) {
      setError(
        "System name is required."
      );
      return;
    }

    onSubmit({
      label: trimmedLabel,
      category,
      description:
        description.trim(),
      status,
      interfaces,
      parameters,
      parentId:
        initialData?.parentId,
    });
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="flex max-h-[85vh] w-[900px] max-w-[95vw] flex-col">
        {/* Header */}
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-lg font-semibold text-[var(--aevra-text)]">
            {editing
              ? "Edit System"
              : "Add System"}
          </h2>

          <p className="mt-1 text-sm text-[var(--aevra-text-muted)]">
            Define the system, its interfaces,
            and engineering parameters.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          {/* Basic information */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="System Name"
              value={label}
              onChange={(event) =>
                setLabel(
                  event.target.value
                )
              }
              placeholder="e.g. Jetson Orin NX"
            />

            <div>
              <label className="mb-2 block text-xs font-medium text-[var(--aevra-text-muted)]">
                Category
              </label>

              <select
                value={category}
                onChange={(event) =>
                  setCategory(
                    event.target.value
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-[var(--aevra-surface)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none focus:border-white/30"
              >
                {categories.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                      className="bg-[var(--aevra-surface)]"
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-xs font-medium text-[var(--aevra-text-muted)]">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target
                    .value as SystemNodeData["status"]
                )
              }
              className="w-full rounded-lg border border-white/10 bg-[var(--aevra-surface)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none focus:border-white/30"
            >
              {statuses.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                    className="bg-[var(--aevra-surface)]"
                  >
                    {item}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-xs font-medium text-[var(--aevra-text-muted)]">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(
                  event.target.value
                )
              }
              rows={3}
              placeholder="What does this system do?"
              className="w-full resize-none rounded-lg border border-white/10 bg-[var(--aevra-surface)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-white/20 focus:border-white/30"
            />
          </div>

          {/* Interfaces */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--aevra-text)]">
                  Interfaces
                </h3>

                <p className="mt-1 text-xs text-[var(--aevra-text-muted)]">
                  Connections reference interface
                  IDs, so changing the order does not
                  break existing architecture.
                </p>
              </div>

              <Button
                type="button"
                onClick={
                  handleAddInterface
                }
              >
                + Add Interface
              </Button>
            </div>

            <div className="grid min-h-[300px] grid-cols-[220px_1fr] overflow-hidden rounded-xl border border-white/10">
              {/* Interface list */}
              <div className="border-r border-white/10 bg-[var(--aevra-surface)]">
                <div className="max-h-[420px] overflow-y-auto p-2">
                  {interfaces.length ===
                  0 ? (
                    <div className="px-3 py-8 text-center text-xs text-[var(--aevra-text-muted)]">
                      No interfaces yet.
                    </div>
                  ) : (
                    interfaces.map(
                      (item) => (
                        <button
                          key={
                            item.id
                          }
                          type="button"
                          onClick={() =>
                            setSelectedInterfaceId(
                              item.id
                            )
                          }
                          className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left transition ${
                            selectedInterfaceId ===
                            item.id
                              ? "bg-[var(--aevra-surface-light)] text-[var(--aevra-text)]"
                              : "text-[var(--aevra-text-muted)] hover:bg-[var(--aevra-surface-light)] hover:text-[var(--aevra-text)]"
                          }`}
                        >
                          <div className="truncate text-xs font-medium">
                            {
                              item.name
                            }
                          </div>

                          <div className="mt-1 truncate text-[10px] text-[var(--aevra-text-muted)]">
                            {
                              interfaceTypes.find(
                                (
                                  type
                                ) =>
                                  type.value ===
                                  item.type
                              )?.label
                            }
                          </div>
                        </button>
                      )
                    )
                  )}
                </div>
              </div>

              {/* Interface editor */}
              <div className="p-5">
                {!selectedInterface ? (
                  <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-[var(--aevra-text-muted)]">
                    Select an interface to edit it.
                  </div>
                ) : (
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[var(--aevra-text)]">
                          Interface
                        </div>

                        <div className="mt-1 font-mono text-[10px] text-white/20">
                          {
                            selectedInterface.id
                          }
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteInterface(
                            selectedInterface.id
                          )
                        }
                        className="rounded-md border border-red-400/20 px-3 py-1.5 text-xs text-red-300/70 hover:bg-red-400/10 hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Name"
                        value={
                          selectedInterface.name
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              name: event
                                .target
                                .value,
                            }
                          )
                        }
                      />

                      <div>
                        <label className="mb-2 block text-xs font-medium text-[var(--aevra-text-muted)]">
                          Type
                        </label>

                        <select
                          value={
                            selectedInterface.type
                          }
                          onChange={(
                            event
                          ) =>
                            updateInterface(
                              selectedInterface.id,
                              {
                                type: event
                                  .target
                                  .value as InterfaceType,
                              }
                            )
                          }
                          className="w-full rounded-lg border border-white/10 bg-[var(--aevra-surface)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none"
                        >
                          {interfaceTypes.map(
                            (item) => (
                              <option
                                key={
                                  item.value
                                }
                                value={
                                  item.value
                                }
                                className="bg-[var(--aevra-surface)]"
                              >
                                {
                                  item.label
                                }
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-[var(--aevra-text-muted)]">
                          Direction
                        </label>

                        <select
                          value={
                            selectedInterface.direction
                          }
                          onChange={(
                            event
                          ) =>
                            updateInterface(
                              selectedInterface.id,
                              {
                                direction:
                                  event
                                    .target
                                    .value as InterfaceDirection,
                              }
                            )
                          }
                          className="w-full rounded-lg border border-white/10 bg-[var(--aevra-surface)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none"
                        >
                          <option
                            value="input"
                            className="bg-[var(--aevra-surface)]"
                          >
                            Input
                          </option>

                          <option
                            value="output"
                            className="bg-[var(--aevra-surface)]"
                          >
                            Output
                          </option>

                          <option
                            value="bidirectional"
                            className="bg-[var(--aevra-surface)]"
                          >
                            Bidirectional
                          </option>
                        </select>
                      </div>

                      <Input
                        label="Standard"
                        value={
                          selectedInterface.standard
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              standard:
                                event
                                  .target
                                  .value,
                            }
                          )
                        }
                        placeholder="e.g. USB 3.2 Gen 2"
                      />

                      <Input
                        label="Protocol"
                        value={
                          selectedInterface.protocol
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              protocol:
                                event
                                  .target
                                  .value,
                            }
                          )
                        }
                        placeholder="e.g. USB"
                      />

                      <Input
                        label="Data Rate"
                        value={
                          selectedInterface.dataRate
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              dataRate:
                                event
                                  .target
                                  .value,
                            }
                          )
                        }
                        placeholder="e.g. 10 Gb/s"
                      />

                      <Input
                        label="Voltage"
                        value={
                          selectedInterface.voltage
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              voltage:
                                event
                                  .target
                                  .value,
                            }
                          )
                        }
                        placeholder="e.g. 5 V"
                      />

                      <Input
                        label="Maximum Current"
                        value={
                          selectedInterface.maxCurrent
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              maxCurrent:
                                event
                                  .target
                                  .value,
                            }
                          )
                        }
                        placeholder="e.g. 3 A"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="mb-2 block text-xs font-medium text-[var(--aevra-text-muted)]">
                        Description
                      </label>

                      <textarea
                        value={
                          selectedInterface.description
                        }
                        onChange={(
                          event
                        ) =>
                          updateInterface(
                            selectedInterface.id,
                            {
                              description:
                                event
                                  .target
                                  .value,
                            }
                          )
                        }
                        rows={3}
                        className="w-full resize-none rounded-lg border border-white/10 bg-[var(--aevra-surface)] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-white/20"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="mt-3 rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-2 text-xs text-red-300">
                {error}
              </div>
            )}
          </div>

          {/* Parameters */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--aevra-text)]">
                  Parameters
                </h3>

                <p className="mt-1 text-xs text-[var(--aevra-text-muted)]">
                  Engineering properties for this system.
                </p>
              </div>

              <Button
                type="button"
                onClick={
                  handleAddParameter
                }
              >
                + Add Parameter
              </Button>
            </div>

            <div className="space-y-2">
              {parameters.map(
                (parameter) => (
                  <div
                    key={
                      parameter.id
                    }
                    className="grid grid-cols-[1fr_1fr_120px_auto] gap-2"
                  >
                    <Input
                      value={
                        parameter.name
                      }
                      onChange={(
                        event
                      ) =>
                        updateParameter(
                          parameter.id!,
                          {
                            name: event
                              .target
                              .value,
                          }
                        )
                      }
                      placeholder="Name"
                    />

                    <Input
                      value={
                        parameter.value
                      }
                      onChange={(
                        event
                      ) =>
                        updateParameter(
                          parameter.id!,
                          {
                            value:
                              event
                                .target
                                .value,
                          }
                        )
                      }
                      placeholder="Value"
                    />

                    <Input
                      value={
                        parameter.unit ??
                        ""
                      }
                      onChange={(
                        event
                      ) =>
                        updateParameter(
                          parameter.id!,
                          {
                            unit: event
                              .target
                              .value,
                          }
                        )
                      }
                      placeholder="Unit"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        deleteParameter(
                          parameter.id!
                        )
                      }
                      className="rounded-lg border border-white/10 px-3 text-xs text-[var(--aevra-text-muted)] hover:bg-[var(--aevra-surface-light)] hover:text-[var(--aevra-text)]"
                    >
                      Delete
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-white/10 px-6 py-4">
          <Button
            type="button"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={
              handleSubmit
            }
          >
            {editing
              ? "Save Changes"
              : "Create System"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}