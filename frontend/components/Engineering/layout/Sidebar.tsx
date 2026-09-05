"use client";

import { useRouter } from "next/navigation";

interface SidebarProps {
  open: boolean;
  activeProject: string;
  onProjectChange: (project: string) => void;
}

const projects = [
  "ORION",
  "Autonomous Rover",
  "Drone",
];

export default function Sidebar({
  open,
  activeProject,
  onProjectChange,
}: SidebarProps) {
  const router = useRouter();

  if (!open) {
    return null;
  }

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_90%,var(--aevra-surface))]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-4">
        <button
          type="button"
          className="w-full rounded-lg bg-[var(--aevra-text)] px-4 py-2 text-sm font-medium text-[var(--aevra-background)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]"
        >
          + New Project
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
          Projects
        </p>

        <div className="space-y-1">
          {projects.map((project) => (
            <button
              key={project}
              type="button"
              onClick={() => onProjectChange(project)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeProject === project
                  ? "bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] text-[var(--aevra-text)]"
                  : "text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
              }`}
            >
              {project}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] p-3">
        <button
          type="button"
          onClick={() => router.push("/settings")}
          className="w-full rounded-lg px-3 py-2 text-left text-sm text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
        >
          Settings
        </button>
      </div>
    </aside>
  );
}