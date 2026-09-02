"use client";

import { useState } from "react";

import Architecture, {
  initialArchitectureNodes,
  type ArchitectureNode,
} from "@/components/engineering/architecture/Architecture";

import Requirements from "@/components/engineering/requirements/Requirements";
import Chat from "@/components/chat/Chat";
import EngineeringProcess from "@/components/engineering/EngineeringProcess";
import Components from "@/components/engineering/components/Components";

import type { WorkspaceStage } from "@/app/page";

interface WorkspaceProps {
  projectName: string;
  stage: WorkspaceStage;
  onStageChange: (stage: WorkspaceStage) => void;
}

export default function Workspace({
  projectName,
  stage,
  onStageChange,
}: WorkspaceProps) {
  const [
    architectureNodes,
    setArchitectureNodes,
  ] = useState<ArchitectureNode[]>(
    initialArchitectureNodes
  );

  return (
    <div className="flex min-h-0 flex-1">
      <section className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-white/10 px-6 py-4">
          <h1 className="text-lg font-semibold">
            {projectName}
          </h1>

          <p className="mt-1 text-sm text-white/40">
            {getStageDescription(stage)}
          </p>
        </div>

        <div className="min-h-0 flex-1">
          {stage === "chat" && (
            <Chat />
          )}

          {stage === "requirements" && (
            <Requirements />
          )}

          {stage === "architecture" && (
            <Architecture
              nodes={architectureNodes}
              setNodes={setArchitectureNodes}
            />
          )}

          {stage === "components" && (
            <Components
              architectureNodes={
                architectureNodes
              }
            />
          )}

          {stage === "calculations" && (
            <Placeholder
              title="Calculations"
              description="Run and review engineering calculations."
            />
          )}

          {stage === "code" && (
            <Placeholder
              title="Code"
              description="Develop, manage, and validate the software for the system."
            />
          )}

          {stage === "cad" && (
            <Placeholder
              title="CAD"
              description="Create and manage mechanical designs."
            />
          )}

          {stage === "simulation" && (
            <Placeholder
              title="Simulation"
              description="Simulate system behavior and performance."
            />
          )}

          {stage === "optimization" && (
            <Placeholder
              title="Optimization"
              description="Optimize the design against project constraints."
            />
          )}

          {stage === "manufacturing" && (
            <Placeholder
              title="Manufacturing"
              description="Prepare the design for manufacturing."
            />
          )}
        </div>
      </section>

      <EngineeringProcess
        activeStage={stage}
        onStageChange={onStageChange}
      />
    </div>
  );
}

function getStageDescription(
  stage: WorkspaceStage
) {
  switch (stage) {
    case "chat":
      return "AI engineering assistant";

    case "requirements":
      return "System requirements";

    case "architecture":
      return "System architecture";

    case "components":
      return "Components and parts";

    case "calculations":
      return "Engineering calculations";

    case "code":
      return "Software and code";

    case "cad":
      return "Computer-aided design";

    case "simulation":
      return "Engineering simulation";

    case "optimization":
      return "Design optimization";

    case "manufacturing":
      return "Manufacturing preparation";
  }
}

interface PlaceholderProps {
  title: string;
  description: string;
}

function Placeholder({
  title,
  description,
}: PlaceholderProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/40">
          {description}
        </p>

        <button className="mt-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
          Get Started
        </button>
      </div>
    </div>
  );
}