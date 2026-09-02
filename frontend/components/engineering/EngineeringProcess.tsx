import type { WorkspaceStage } from "@/app/page";

interface EngineeringProcessProps {
  activeStage: WorkspaceStage;
  onStageChange: (stage: WorkspaceStage) => void;
}

const stages: {
  id: WorkspaceStage;
  name: string;
}[] = [
  { id: "requirements", name: "Requirements" },
  { id: "architecture", name: "Architecture" },
  { id: "components", name: "Components" },
  { id: "calculations", name: "Calculations" },
  { id: "code", name: "Code" },
  { id: "cad", name: "CAD" },
  { id: "simulation", name: "Simulation" },
  { id: "optimization", name: "Optimization" },
  { id: "manufacturing", name: "Manufacturing" },
];

export default function EngineeringProcess({
  activeStage,
  onStageChange,
}: EngineeringProcessProps) {
  return (
    <aside className="hidden w-72 shrink-0 border-l border-white/10 bg-[#0f1115] xl:block">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-sm font-semibold">
          Engineering Process
        </p>

        <p className="mt-1 text-xs text-white/40">
          Project development
        </p>
      </div>

      <div className="p-4">
        <button
          onClick={() => onStageChange("chat")}
          className={`mb-2 w-full rounded-lg px-3 py-3 text-left text-sm transition ${
            activeStage === "chat"
              ? "bg-white/10 text-white"
              : "text-white/50 hover:bg-white/5 hover:text-white"
          }`}
        >
          AI Assistant
        </button>

        <div className="space-y-1">
          {stages.map((stage, index) => {
            const active = activeStage === stage.id;

            return (
              <button
                key={stage.id}
                onClick={() => onStageChange(stage.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/20"
                  }`}
                >
                  {index + 1}
                </span>

                {stage.name}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}