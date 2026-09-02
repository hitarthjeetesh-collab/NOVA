"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ArchitectureNode } from "../architecture/Architecture";

import type {
  ComponentCategory,
  ComponentStatus,
  EngineeringComponent,
} from "./Components";

interface ComponentModalProps {
  open: boolean;
  initialData?: EngineeringComponent;
  architectureNodes: ArchitectureNode[];
  onClose: () => void;
  onSubmit: (
    data: EngineeringComponent
  ) => void;
}

const categories: ComponentCategory[] = [
  "Computing",
  "Sensor",
  "Power",
  "Control",
  "Mechanical",
  "Communication",
  "Other",
];

const statuses: ComponentStatus[] = [
  "Concept",
  "Selected",
  "Ordered",
  "Received",
  "Installed",
];

const controlClassName =
  "w-full rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20";

function numberValue(
  value: string
): number | null {
  if (value.trim() === "") {
    return null;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

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

const emptyComponent: EngineeringComponent =
  {
    id: "",
    name: "",
    manufacturer: "",
    partNumber: "",
    category: "Other",
    description: "",
    quantity: 1,
    status: "Concept",
    subsystemId: null,
    mass: null,
    length: null,
    width: null,
    height: null,
    voltageMin: null,
    voltageMax: null,
    currentMax: null,
    powerMax: null,
    unitCost: null,
    currency: "CAD",
    interfaces: [],
    datasheet: "",
    notes: "",
  };

export default function ComponentModal({
  open,
  initialData,
  architectureNodes,
  onClose,
  onSubmit,
}: ComponentModalProps) {
  const [form, setForm] =
    useState<EngineeringComponent>(
      emptyComponent
    );

  useEffect(() => {
    if (!open) {
      return;
    }

    if (initialData) {
      setForm({
        ...initialData,
        interfaces: [
          ...initialData.interfaces,
        ],
      });
    } else {
      setForm({
        ...emptyComponent,
        id: crypto.randomUUID(),
      });
    }
  }, [open, initialData]);

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

  function updateField<
    K extends keyof EngineeringComponent
  >(
    field: K,
    value: EngineeringComponent[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!form.name.trim()) {
      return;
    }

    onSubmit({
      ...form,
      name: form.name.trim(),
      manufacturer:
        form.manufacturer.trim(),
      partNumber:
        form.partNumber.trim(),
      description:
        form.description.trim(),
      interfaces:
        form.interfaces
          .map((item) => item.trim())
          .filter(Boolean),
      datasheet:
        form.datasheet.trim(),
      notes: form.notes.trim(),
    });
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111419] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 className="text-base font-semibold">
              {initialData
                ? "Edit Component"
                : "Add Component"}
            </h2>

            <p className="mt-1 text-xs text-white/40">
              Define the physical component and
              its engineering properties.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-lg text-white/30 transition hover:text-white"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-h-0 flex-1 overflow-y-auto"
        >
          <div className="space-y-8 p-6">
            <section>
              <SectionTitle>
                General
              </SectionTitle>

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Name"
                  required
                >
                  <input
                    className={controlClassName}
                    value={form.name}
                    onChange={(event) =>
                      updateField(
                        "name",
                        event.target.value
                      )
                    }
                    placeholder="e.g. NVIDIA Jetson Orin NX"
                    required
                  />
                </Field>

                <Field label="Manufacturer">
                  <input
                    className={controlClassName}
                    value={
                      form.manufacturer
                    }
                    onChange={(event) =>
                      updateField(
                        "manufacturer",
                        event.target.value
                      )
                    }
                    placeholder="e.g. NVIDIA"
                  />
                </Field>

                <Field label="Part Number">
                  <input
                    className={controlClassName}
                    value={
                      form.partNumber
                    }
                    onChange={(event) =>
                      updateField(
                        "partNumber",
                        event.target.value
                      )
                    }
                    placeholder="e.g. 699-13767-0000-000"
                  />
                </Field>

                <SelectField
                  label="Category"
                  value={form.category}
                  options={categories.map(
                    (category) => ({
                      value: category,
                      label: category,
                    })
                  )}
                  onChange={(value) =>
                    updateField(
                      "category",
                      value as ComponentCategory
                    )
                  }
                />

                <SelectField
                  label="Status"
                  value={form.status}
                  options={statuses.map(
                    (status) => ({
                      value: status,
                      label: status,
                    })
                  )}
                  onChange={(value) =>
                    updateField(
                      "status",
                      value as ComponentStatus
                    )
                  }
                />

                <NumberField
                  label="Quantity"
                  value={form.quantity}
                  onChange={(value) =>
                    updateField(
                      "quantity",
                      value ?? 1
                    )
                  }
                />

                <div className="md:col-span-2">
                  <TextAreaField
                    label="Description"
                    value={
                      form.description
                    }
                    onChange={(value) =>
                      updateField(
                        "description",
                        value
                      )
                    }
                    placeholder="What is this component used for?"
                  />
                </div>
              </div>
            </section>

            <section>
              <SectionTitle>
                Architecture Assignment
              </SectionTitle>

              <Field label="Subsystem">
                <select
                  value={
                    form.subsystemId ?? ""
                  }
                  onChange={(event) =>
                    updateField(
                      "subsystemId",
                      event.target.value ||
                        null
                    )
                  }
                  className={controlClassName}
                >
                  <option value="">
                    Unassigned
                  </option>

                  {subsystemOptions.map(
                    (option) => (
                      <option
                        key={option.id}
                        value={option.id}
                      >
                        {option.label}
                      </option>
                    )
                  )}
                </select>
              </Field>

              <p className="mt-2 text-xs text-white/30">
                This component is assigned to a
                system from the Architecture workspace.
              </p>
            </section>

            <section>
              <SectionTitle>
                Electrical
              </SectionTitle>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <NumberField
                  label="Min Voltage (V)"
                  value={
                    form.voltageMin
                  }
                  onChange={(value) =>
                    updateField(
                      "voltageMin",
                      value
                    )
                  }
                />

                <NumberField
                  label="Max Voltage (V)"
                  value={
                    form.voltageMax
                  }
                  onChange={(value) =>
                    updateField(
                      "voltageMax",
                      value
                    )
                  }
                />

                <NumberField
                  label="Max Current (A)"
                  value={
                    form.currentMax
                  }
                  onChange={(value) =>
                    updateField(
                      "currentMax",
                      value
                    )
                  }
                />

                <NumberField
                  label="Max Power (W)"
                  value={
                    form.powerMax
                  }
                  onChange={(value) =>
                    updateField(
                      "powerMax",
                      value
                    )
                  }
                />
              </div>
            </section>

            <section>
              <SectionTitle>
                Physical
              </SectionTitle>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <NumberField
                  label="Mass (g)"
                  value={form.mass}
                  onChange={(value) =>
                    updateField(
                      "mass",
                      value
                    )
                  }
                />

                <NumberField
                  label="Length (mm)"
                  value={form.length}
                  onChange={(value) =>
                    updateField(
                      "length",
                      value
                    )
                  }
                />

                <NumberField
                  label="Width (mm)"
                  value={form.width}
                  onChange={(value) =>
                    updateField(
                      "width",
                      value
                    )
                  }
                />

                <NumberField
                  label="Height (mm)"
                  value={form.height}
                  onChange={(value) =>
                    updateField(
                      "height",
                      value
                    )
                  }
                />
              </div>
            </section>

            <section>
              <SectionTitle>
                Cost
              </SectionTitle>

              <div className="grid gap-4 md:grid-cols-2">
                <NumberField
                  label="Unit Cost"
                  value={
                    form.unitCost
                  }
                  onChange={(value) =>
                    updateField(
                      "unitCost",
                      value
                    )
                  }
                />

                <Field label="Currency">
                  <input
                    className={controlClassName}
                    value={form.currency}
                    onChange={(event) =>
                      updateField(
                        "currency",
                        event.target.value
                      )
                    }
                    placeholder="CAD"
                  />
                </Field>
              </div>
            </section>

            <section>
  <SectionTitle>
    Interfaces
  </SectionTitle>

  <Field label="Interfaces">
    <div className="space-y-3">
      {form.interfaces.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {form.interfaces.map(
            (interfaceName, index) => {
              const trimmed =
                interfaceName.trim();

              if (!trimmed) {
                return null;
              }

              return (
                <div
                  key={`${trimmed}-${index}`}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#15191f] px-3 py-1.5 text-xs text-white/70"
                >
                  <span>
                    {trimmed}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setForm((current) => ({
                        ...current,
                        interfaces:
                          current.interfaces.filter(
                            (_, itemIndex) =>
                              itemIndex !==
                              index
                          ),
                      }))
                    }
                    className="text-white/30 transition hover:text-white"
                    aria-label={`Remove ${trimmed}`}
                  >
                    ×
                  </button>
                </div>
              );
            }
          )}
        </div>
      )}

      <input
        className={controlClassName}
        placeholder="Add interface, e.g. USB-C"
        onKeyDown={(event) => {
          if (
            event.key !== "Enter" &&
            event.key !== ","
          ) {
            return;
          }

          event.preventDefault();

          const value =
            event.currentTarget.value.trim();

          if (!value) {
            return;
          }

          const newInterfaces =
            value
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean);

          setForm((current) => ({
            ...current,
            interfaces: [
              ...current.interfaces,
              ...newInterfaces,
            ],
          }));

          event.currentTarget.value = "";
        }}
      />
    </div>
  </Field>

  <p className="mt-2 text-xs text-white/30">
    Press Enter or comma to add an interface.
  </p>
            </section>



            <section>
              <SectionTitle>
                Documentation
              </SectionTitle>

              <div className="space-y-4">
                <Field label="Datasheet URL">
                  <input
                    className={controlClassName}
                    value={
                      form.datasheet
                    }
                    onChange={(event) =>
                      updateField(
                        "datasheet",
                        event.target.value
                      )
                    }
                    placeholder="https://..."
                  />
                </Field>

                <TextAreaField
                  label="Notes"
                  value={form.notes}
                  onChange={(value) =>
                    updateField(
                      "notes",
                      value
                    )
                  }
                  placeholder="Additional engineering notes..."
                />
              </div>
            </section>
          </div>

          <div className="flex justify-end gap-2 border-t border-white/10 bg-[#0f1115] px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              {initialData
                ? "Save Changes"
                : "Add Component"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
      {children}
    </h3>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/50">
        {label}

        {required && (
          <span className="ml-1 text-white">
            *
          </span>
        )}
      </span>

      {children}
    </label>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | null;
  onChange: (
    value: number | null
  ) => void;
}) {
  return (
    <Field label={label}>
      <input
        className={controlClassName}
        type="number"
        step="any"
        value={
          value === null ? "" : value
        }
        onChange={(event) =>
          onChange(
            numberValue(
              event.target.value
            )
          )
        }
      />
    </Field>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  onChange: (
    value: string
  ) => void;
}) {
  return (
    <Field label={label}>
      <select
        className={controlClassName}
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
  placeholder?: string;
}) {
  return (
    <Field label={label}>
      <textarea
        className={controlClassName}
        rows={4}
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        placeholder={placeholder}
      />
    </Field>
  );
}