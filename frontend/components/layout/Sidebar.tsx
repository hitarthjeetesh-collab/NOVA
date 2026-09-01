"use client";

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
  if (!open) {
    return null;
  }

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-white/10 bg-[#0f1115]">
      <div className="border-b border-white/10 p-4">
        <button className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
          + New Project
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-white/30">
          Projects
        </p>

        <div className="space-y-1">
          {projects.map((project) => (
            <button
              key={project}
              onClick={() => onProjectChange(project)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeProject === project
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              {project}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 p-3">
        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-white/50 hover:bg-white/5 hover:text-white">
          Settings
        </button>
      </div>
    </aside>
  );
}