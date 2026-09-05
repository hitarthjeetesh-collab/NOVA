"use client";

import { useState } from "react";

import Sidebar from "@/components/Engineering/layout/Sidebar";
import Header from "@/components/Engineering/layout/Header";
import Workspace from "@/components/Engineering/layout/Workspace";

export type WorkspaceStage =
  | "chat"
  | "requirements"
  | "planning"
  | "architecture"
  | "components"
  | "calculations"
  | "code"
  | "cad"
  | "simulation"
  | "optimization"
  | "manufacturing";

export default function Home() {
  const [activeProject, setActiveProject] =
    useState("ORION");

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [stage, setStage] =
    useState<WorkspaceStage>("chat");

  return (
    <main className="flex h-screen overflow-hidden bg-[var(--aevra-background)] text-[var(--aevra-text)]">
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