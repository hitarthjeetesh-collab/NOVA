"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type SettingsSection =
  | "general"
  | "engineering"
  | "ai"
  | "interface";

export default function SettingsPage() {
  const router = useRouter();

  const [section, setSection] =
    useState<SettingsSection>("general");

  const [projectName, setProjectName] =
    useState("ORION");

  const [units, setUnits] =
    useState<"metric" | "imperial">("metric");

  const [currency, setCurrency] =
    useState("CAD");

  const [autoSave, setAutoSave] =
    useState(true);

  const [confirmDestructive, setConfirmDestructive] =
    useState(true);

  const [aiModel, setAiModel] =
    useState("Default");

  const [reasoningEffort, setReasoningEffort] =
    useState("High");

  const [theme, setTheme] =
    useState("Dark");

  const sections = [
    {
      id: "general" as const,
      name: "General",
      description: "Project and platform settings",
    },
    {
      id: "engineering" as const,
      name: "Engineering",
      description: "Units and engineering preferences",
    },
    {
      id: "ai" as const,
      name: "AI",
      description: "Assistant and reasoning settings",
    },
    {
      id: "interface" as const,
      name: "Interface",
      description: "Appearance and behavior",
    },
  ];

  const currentSection = sections.find(
    (item) => item.id === section,
  );

  return (
    <main className="min-h-screen bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      <div className="mx-auto flex min-h-screen max-w-6xl">
        {/* Settings navigation */}
        <aside className="w-64 shrink-0 border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)]">
          <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-6">
            <h1 className="text-lg font-semibold">
              Settings
            </h1>

            <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
              AI Engineering Platform
            </p>
          </div>

          <nav className="space-y-1 p-3">
            {sections.map((item) => {
              const active = section === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSection(item.id)}
                  className={`w-full rounded-lg px-3 py-3 text-left transition ${
                    active
                      ? "bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] text-[var(--aevra-text)]"
                      : "text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
                  }`}
                >
                  <p className="text-sm font-medium">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Settings content */}
        <section className="min-w-0 flex-1">
          <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-8 py-5">
            <div>
              <h2 className="text-xl font-semibold">
                {currentSection?.name}
              </h2>

              <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
                {currentSection?.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-2 text-sm text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
            >
              ← Back to Workspace
            </button>
          </div>

          <div className="max-w-3xl px-8 py-8">
            {section === "general" && (
              <SettingsGroup
                title="General"
                description="Basic project configuration."
              >
                <SettingRow
                  title="Project name"
                  description="The default project displayed in the engineering workspace."
                >
                  <input
                    value={projectName}
                    onChange={(event) =>
                      setProjectName(event.target.value)
                    }
                    className="w-64 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] px-3 py-2 text-sm text-[var(--aevra-text)] outline-none transition focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
                  />
                </SettingRow>

                <SettingRow
                  title="Auto-save"
                  description="Automatically save changes as you work."
                >
                  <Toggle
                    enabled={autoSave}
                    onChange={setAutoSave}
                  />
                </SettingRow>

                <SettingRow
                  title="Confirm destructive actions"
                  description="Ask for confirmation before deleting project data."
                >
                  <Toggle
                    enabled={confirmDestructive}
                    onChange={setConfirmDestructive}
                  />
                </SettingRow>
              </SettingsGroup>
            )}

            {section === "engineering" && (
              <SettingsGroup
                title="Engineering"
                description="Configure engineering units and calculation preferences."
              >
                <SettingRow
                  title="Unit system"
                  description="Choose the default unit system used throughout the platform."
                >
                  <Select
                    value={units}
                    onChange={(value) =>
                      setUnits(
                        value as "metric" | "imperial",
                      )
                    }
                    options={[
                      {
                        value: "metric",
                        label: "Metric",
                      },
                      {
                        value: "imperial",
                        label: "Imperial",
                      },
                    ]}
                  />
                </SettingRow>

                <SettingRow
                  title="Currency"
                  description="Default currency used for component and manufacturing costs."
                >
                  <Select
                    value={currency}
                    onChange={setCurrency}
                    options={[
                      {
                        value: "CAD",
                        label: "CAD — Canadian Dollar",
                      },
                      {
                        value: "USD",
                        label: "USD — US Dollar",
                      },
                      {
                        value: "EUR",
                        label: "EUR — Euro",
                      },
                      {
                        value: "GBP",
                        label: "GBP — British Pound",
                      },
                    ]}
                  />
                </SettingRow>
              </SettingsGroup>
            )}

            {section === "ai" && (
              <SettingsGroup
                title="AI Assistant"
                description="Configure how the engineering AI behaves."
              >
                <SettingRow
                  title="AI model"
                  description="Model used by the engineering assistant."
                >
                  <Select
                    value={aiModel}
                    onChange={setAiModel}
                    options={[
                      {
                        value: "Default",
                        label: "Default",
                      },
                      {
                        value: "Fast",
                        label: "Fast",
                      },
                      {
                        value: "Advanced",
                        label: "Advanced",
                      },
                    ]}
                  />
                </SettingRow>

                <SettingRow
                  title="Reasoning effort"
                  description="Controls how much reasoning the AI uses for engineering problems."
                >
                  <Select
                    value={reasoningEffort}
                    onChange={setReasoningEffort}
                    options={[
                      {
                        value: "Low",
                        label: "Low",
                      },
                      {
                        value: "Medium",
                        label: "Medium",
                      },
                      {
                        value: "High",
                        label: "High",
                      },
                    ]}
                  />
                </SettingRow>
              </SettingsGroup>
            )}

            {section === "interface" && (
              <SettingsGroup
                title="Interface"
                description="Customize the appearance and behavior of the platform."
              >
                <SettingRow
                  title="Theme"
                  description="Choose the appearance of the engineering platform."
                >
                  <Select
                    value={theme}
                    onChange={setTheme}
                    options={[
                      {
                        value: "Dark",
                        label: "Dark",
                      },
                      {
                        value: "Light",
                        label: "Light",
                      },
                      {
                        value: "System",
                        label: "System",
                      },
                    ]}
                  />
                </SettingRow>
              </SettingsGroup>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

interface SettingsGroupProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SettingsGroup({
  title,
  description,
  children,
}: SettingsGroupProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-4">
        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          {description}
        </p>
      </div>

      <div>{children}</div>
    </div>
  );
}

interface SettingRowProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SettingRow({
  title,
  description,
  children,
}: SettingRowProps) {
  return (
    <div className="flex items-center justify-between gap-8 border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-5 last:border-b-0">
      <div className="min-w-0">
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-1 max-w-xl text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          {description}
        </p>
      </div>

      <div className="shrink-0">
        {children}
      </div>
    </div>
  );
}

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function Toggle({
  enabled,
  onChange,
}: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 rounded-full border transition ${
        enabled
          ? "border-[var(--aevra-text)] bg-[var(--aevra-text)]"
          : "border-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)]"
      }`}
      aria-pressed={enabled}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full transition ${
          enabled
            ? "left-6 bg-[var(--aevra-background)]"
            : "left-1 bg-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]"
        }`}
      />
    </button>
  );
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
}

function Select({
  value,
  onChange,
  options,
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      className="min-w-48 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2 text-sm text-[var(--aevra-text)] outline-none focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-[var(--aevra-background)]"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}