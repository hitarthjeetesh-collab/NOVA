"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Workspace from "@/components/layout/Workspace";

export type WorkspaceStage =
  | "chat"
  | "requirements"
  | "architecture"
  | "components"
  | "calculations"
  | "code"
  | "cad"
  | "simulation"
  | "optimization"
  | "manufacturing";

export default function Home() {
  const [activeProject, setActiveProject] = useState("ORION");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [stage, setStage] =
    useState<WorkspaceStage>("chat");

  return (
    <main className="flex h-screen overflow-hidden bg-[#0b0d10] text-white">
      <Sidebar
        open={sidebarOpen}
        activeProject={activeProject}
        onProjectChange={setActiveProject}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          projectName={activeProject}
          onMenuClick={() =>
            setSidebarOpen((open) => !open)
          }
        />

        <Workspace
          projectName={activeProject}
          stage={stage}
          onStageChange={setStage}
        />
      </div>
    </main>
  );
}